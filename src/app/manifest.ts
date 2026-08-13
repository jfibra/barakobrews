import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BarakoBrews | Mobile Coffee Catering",
    short_name: "BarakoBrews",
    description: "Premium mobile coffee catering for weddings, corporate events, and private celebrations.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFCFA",
    theme_color: "#2C160A",
    icons: [
      {
        src: "/images/logo/logo_icon_dark_square.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo/logo_icon_cream_square.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
