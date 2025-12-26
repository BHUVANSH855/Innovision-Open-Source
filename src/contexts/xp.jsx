"use client";

import { createContext, useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/auth";

const xpContext = createContext();

export const XpProvider = ({ children }) => {
  const { user } = useAuth();
  const [xp, setXp] = useState(0);
  const [show, setShow] = useState(false);
  const [changed, setChanged] = useState(0);

  async function change() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setChanged(0);
    }, 2000);
  }

  const getXp = useCallback(async () => {
    if (!user?.email) return;

    try {
      const res = await fetch(`/api/gamification/stats?userId=${user.email}`);
      const data = await res.json();

      if (data && typeof data.xp === "number") {
        const xpDiff = data.xp - xp;
        if (xpDiff > 0 && xp > 0) {
          // Only show animation if xp was already set
          setChanged(xpDiff);
          change();
        }
        console.log("XP Context - Setting XP to:", data.xp);
        setXp(data.xp);
      }
    } catch (error) {
      console.error("Error fetching XP:", error);
    }
  }, [user, xp]);

  const awardXP = useCallback(
    async (action, value = null) => {
      if (!user?.email) return;

      try {
        const res = await fetch("/api/gamification/stats", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user.email,
            action,
            value,
          }),
        });

        const result = await res.json();

        if (result.success) {
          // Refresh XP to show the update
          await getXp();
          return result;
        }
      } catch (error) {
        console.error("Error awarding XP:", error);
      }
    },
    [user, getXp]
  );

  useEffect(() => {
    if (user?.email) {
      getXp();

      // Poll for XP updates every 10 seconds for real-time feel
      const interval = setInterval(getXp, 10000);
      return () => clearInterval(interval);
    }
  }, [user, getXp]);

  return <xpContext.Provider value={{ getXp, awardXP, xp, show, changed }}>{children}</xpContext.Provider>;
};

export default xpContext;
