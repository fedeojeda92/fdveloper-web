import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FDveloper | Desarrollo Web con IA en Argentina",
  description:
    "Webs profesionales con IA integrada, en 7 días. Landing pages, sitios web y chatbots para negocios argentinos. Desde $250.000.",
  keywords:
    "desarrollo web argentina, páginas web con ia, landing page argentina, diseño web buenos aires, agencia web argentina, next.js argentina",
  verification: {
    google: "jW5DmN0OEhPllxSLmBzgmbS0-BYGIo7ZszxUYO4vukU",
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
    "@type": "ProfessionalService",
    name: "FDveloper",
    description: "Agencia de desarrollo web con IA integrada",
    url: "https://fdveloper.com",
    telephone: "+5491159568286",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
    },
    sameAs: ["https://www.instagram.com/fdveloper/"],
    priceRange: "$$",
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
      <body className="font-space antialiased bg-[#0A0A0A] text-[#F5F5F5]">
        <SchemaOrg />
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

