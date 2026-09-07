import { Roboto } from "next/font/google";
import "@/styles/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://fransolux.com"),

  title: {
    default: "Fransolux | Diseño y Desarrollo",
    template: "%s | Fransolux",
  },

  description:
    "Fransolux es el espacio profesional de Franco Espinosa. Acá encontrarás sitios web, identidades visuales, branding y piezas gráficas pensadas para comunicar lo que hace única a cada marca.",

  keywords: [
    "Fransolux",
    "Franco Espinosa",
    "diseño gráfico",
    "diseño web",
    "desarrollo web",
    "identidad visual",
    "diseño UI",
    "UX/UI",
    "sitios web",
    "portfolio diseño gráfico",
    "portfolio diseño web",
    "Argentina",
  ],

  authors: [
    {
      name: "Franco Espinosa",
      url: "https://fransolux.com",
    },
  ],

  creator: "Franco Espinosa",
  publisher: "Fransolux",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://fransolux.com",
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://fransolux.com",
    siteName: "Fransolux",
    title: "Fransolux | Diseño y Desarrollo",
    description:
      "Fransolux es el espacio profesional de Franco Espinosa. Acá encontrarás sitios web, identidades visuales, branding y piezas gráficas pensadas para comunicar lo que hace única a cada marca.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fransolux | Diseño y Desarrollo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fransolux | Diseño y Desarrollo",
    description:
      "Fransolux es el espacio profesional de Franco Espinosa. Acá encontrarás sitios web, identidades visuales, branding y piezas gráficas pensadas para comunicar lo que hace única a cada marca.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon-96x96.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
