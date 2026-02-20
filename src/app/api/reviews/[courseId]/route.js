import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

// GET - Get all reviews for a course
export async function GET(request, { params }) {
  try {
    const { courseId } = params;
    const { searchParams } = new URL(request.url);
    const sortBy = searchParams.get("sortBy") || "newest"; // newest, highest, lowest, helpful

    if (!courseId) {
      return NextResponse.json(
        { error: "Course ID is required" },
        { status: 400 }
      );
    }

    // Fetch reviews
    let query = adminDb
      .collection("reviews")
      .where("courseId", "==", courseId)
      .where("reported", "==", false);

    // Apply sorting
    if (sortBy === "newest") {
      query = query.orderBy("createdAt", "desc");
    } else if (sortBy === "oldest") {
      query = query.orderBy("createdAt", "asc");
    } else if (sortBy === "highest") {
      query = query.orderBy("rating", "desc");
    } else if (sortBy === "lowest") {
      query = query.orderBy("rating", "asc");
    } else if (sortBy === "helpful") {
      query = query.orderBy("helpfulCount", "desc");
    }

    const reviewsSnapshot = await query.get();

    const reviews = [];
    reviewsSnapshot.forEach((doc) => {
      reviews.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    // Get course rating stats
    const ratingDoc = await adminDb
      .collection("courseRatings")
      .doc(courseId)
      .get();

    const ratingStats = ratingDoc.exists
      ? ratingDoc.data()
      : { averageRating: 0, totalReviews: 0 };

    // Calculate rating distribution
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((review) => {
      distribution[review.rating]++;
    });

    return NextResponse.json({
      success: true,
      reviews,
      stats: {
        ...ratingStats,
        distribution,
      },
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
