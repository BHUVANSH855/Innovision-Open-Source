"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { Separator } from "@/components/ui/separator";

const CourseReviews = ({ courseId }) => {
  const [userReview, setUserReview] = useState(null);
  const [editingReview, setEditingReview] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchUserReview();
    }
  }, [user, courseId]);

  const fetchUserReview = async () => {
    try {
      const response = await fetch(`/api/reviews/${courseId}`);
      const data = await response.json();

      if (response.ok && data.reviews) {
        const myReview = data.reviews.find((r) => r.userId === user.email);
        setUserReview(myReview || null);
      }
    } catch (error) {
      console.error("Error fetching user review:", error);
    }
  };

  const handleReviewSubmitted = (review) => {
    setUserReview(review);
    setEditingReview(null);
    // Trigger refresh of review list
    window.location.reload();
  };

  const handleEditReview = (review) => {
    setEditingReview(review);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      {/* Review Form */}
      {user && (!userReview || editingReview) && (
        <>
          <ReviewForm
            courseId={courseId}
            existingReview={editingReview}
            onReviewSubmitted={handleReviewSubmitted}
          />
          <Separator />
        </>
      )}

      {/* Reviews List */}
      <ReviewList courseId={courseId} onEditReview={handleEditReview} />
    </div>
  );
};

export default CourseReviews;
