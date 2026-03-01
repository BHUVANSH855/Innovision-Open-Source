"use client";

export default function LoadingSkeleton({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-muted rounded-md ${className}`}
    >
      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}