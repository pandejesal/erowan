import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Erowan — Gulf Websites $250",
    short_name: "Erowan",
    description: "Ahmedabad → Gulf. Websites for salons, restaurants, clinics & real estate. 48h.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#18181b",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
