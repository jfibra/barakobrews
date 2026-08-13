import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://barakobrews.vercel.app";
  const lastModified = new Date();

  const routes = [
    "",
    "/services",
    "/packages",
    "/menu",
    "/gallery",
    "/about",
    "/faq",
    "/get-a-quote",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/get-a-quote" || route === "/packages" ? 0.9 : 0.8,
  }));
}
