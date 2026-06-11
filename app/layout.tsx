import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FDveloper | Webs profesionales con IA, en 7 días",
  description:
    "Webs profesionales con IA integrada, en 7 días. Landing pages, sitios web y chatbots para negocios argentinos. Desde $250.000.",
  keywords:
    "desarrollo web argentina, páginas web con ia, landing page argentina, diseño web buenos aires, agencia web argentina, next.js argentina",
  verification: {
    google: "jW5DmN0OEhPllxSLmBzgmbS0-BYGIo7ZszxUYO4vukU",
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "FDveloper | Webs profesionales con IA, en 7 días",
    description:
      "Desarrollo web moderno con IA integrada para negocios argentinos. Entrega en 7 días desde $250.000.",
    type: "website",
    locale: "es_AR",
  },
};

function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FDveloper",
    description:
      "Agencia de desarrollo web con IA integrada para negocios argentinos. Webs profesionales en 7 días.",
    url: "https://www.fdveloper.com",
    telephone: "+54-9-11-5956-8286",
    email: "contacto@fdveloper.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -34.6037,
        longitude: -58.3816,
      },
      geoRadius: "50000",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [
      "https://www.instagram.com/fdveloper",
      "https://wa.me/5491159568286",
    ],
    serviceType: [
      "Desarrollo web",
      "Landing pages",
      "Sitios web con IA",
      "Chatbots",
      "Mantenimiento web",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <SchemaOrg />
      </head>
      <body className="font-space antialiased bg-[#0A0A0A] text-[#F5F5F5]">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="M_DtlMfDatVsDmNMYEzFT";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`,
          }}
        />
      </body>
    </html>
  );
}

