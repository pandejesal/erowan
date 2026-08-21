import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://erowan.com";
  const routes = ["", "/salons", "/restaurants", "/clinics", "/real-estate", "/other", "/pay", "/crm",
    "/demos/salon-1","/demos/salon-2","/demos/restaurant-1","/demos/restaurant-2","/demos/clinic-1","/demos/clinic-2","/demos/realestate-1","/demos/realestate-2","/demos/other-1","/demos/other-2"];
  return routes.map(r => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r.startsWith("/demos") ? 0.5 : 0.8,
  }));
}
