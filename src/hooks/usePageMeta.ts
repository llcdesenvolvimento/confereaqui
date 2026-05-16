import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  robots?: string;
  canonical?: string;
}

const usePageMeta = ({ title, description, robots, canonical }: PageMeta) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", robots || "index, follow");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("twitter:title", title, "name");

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    return () => {
      // Reset to defaults on unmount
      document.title = "Confere Aqui - Consulta Rápida e Segura";
    };
  }, [title, description, robots, canonical]);
};

export default usePageMeta;
