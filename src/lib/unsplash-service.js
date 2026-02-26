/**
 * Unsplash Service
 * Handles fetching topic-relevant images from Unsplash API.
 * Falls back to Lorem Picsum (seed-based) when no API key is configured.
 */

/**
 * Simple string hash to get a numeric seed from a query string.
 * This ensures the same query always produces the same image.
 */
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

export async function fetchUnsplashImage(query) {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;

    // --- Fallback: Use Lorem Picsum with a seed derived from the query ---
    // This guarantees each unique chapter title gets a different, working image.
    if (!accessKey) {
        console.warn("[Unsplash] Missing UNSPLASH_ACCESS_KEY. Using Lorem Picsum fallback.");
        const seed = hashString(query || "default");
        return {
            url: `https://picsum.photos/seed/${seed}/1000/600`,
            alt: query || "Educational content",
            photographer: "Lorem Picsum",
            photographerUrl: "https://picsum.photos",
        };
    }

    // --- Primary: Use Unsplash API for topic-relevant images ---
    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
                query
            )}&per_page=1&orientation=landscape`,
            {
                headers: {
                    Authorization: `Client-ID ${accessKey}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const photo = data.results[0];
            return {
                url: photo.urls.regular,
                alt: photo.alt_description || query,
                photographer: photo.user.name,
                photographerUrl: photo.user.links.html,
            };
        }

        // No results found for this query — fall back to picsum
        const seed = hashString(query || "default");
        return {
            url: `https://picsum.photos/seed/${seed}/1000/600`,
            alt: query || "Educational content",
            photographer: "Lorem Picsum",
            photographerUrl: "https://picsum.photos",
        };
    } catch (error) {
        console.error("[Unsplash] Fetch error:", error.message);
        // On error, still return a working image
        const seed = hashString(query || "fallback");
        return {
            url: `https://picsum.photos/seed/${seed}/1000/600`,
            alt: query || "Educational content",
            photographer: "Lorem Picsum",
            photographerUrl: "https://picsum.photos",
        };
    }
}
