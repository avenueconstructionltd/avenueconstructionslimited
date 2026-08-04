import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_SHORT_NAME, SITE_DESCRIPTION } from "@/constants/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF9",
    theme_color: "#18181B",
    icons: [
      {
        src: "/images/site_logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/site_logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
