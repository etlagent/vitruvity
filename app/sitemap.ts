import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://vitruvity.com";
    return [
        { url: `${base}/`, changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/privacy/food-log`, changeFrequency: "monthly", priority: 0.6 },
        { url: `${base}/docs/food-log`, changeFrequency: "monthly", priority: 0.6 }
    ];
}
