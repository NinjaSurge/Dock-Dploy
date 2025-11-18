export interface MetaTagsConfig {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const DEFAULT_META = {
  title: "Dock-Dploy - Build Docker Compose Files Without the Hassle",
  description:
    "A powerful web-based tool for building and managing Docker Compose files, configurations, and schedulers. All in one place, completely free.",
  image: "/og-image.png",
  type: "website",
  siteName: "Dock-Dploy",
};

export function updateMetaTags(config: MetaTagsConfig) {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const title = config.title || DEFAULT_META.title;
  const description = config.description || DEFAULT_META.description;
  const image = config.image
    ? config.image.startsWith("http")
      ? config.image
      : `${baseUrl}${config.image}`
    : `${baseUrl}${DEFAULT_META.image}`;
  const url = config.url || currentUrl;
  const type = config.type || DEFAULT_META.type;

  // Update document title
  document.title = title;

  // Helper function to set or update meta tag
  const setMetaTag = (
    attribute: string,
    content: string,
    isProperty = false
  ) => {
    const selector = isProperty
      ? `meta[property="${attribute}"]`
      : `meta[name="${attribute}"]`;
    let element = document.querySelector(selector) as HTMLMetaElement;

    if (!element) {
      element = document.createElement("meta");
      if (isProperty) {
        element.setAttribute("property", attribute);
      } else {
        element.setAttribute("name", attribute);
      }
      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  };

  // Open Graph tags
  setMetaTag("og:title", title, true);
  setMetaTag("og:description", description, true);
  setMetaTag("og:image", image, true);
  setMetaTag("og:url", url, true);
  setMetaTag("og:type", type, true);
  setMetaTag("og:site_name", DEFAULT_META.siteName, true);

  // Twitter Card tags
  setMetaTag("twitter:card", "summary_large_image", false);
  setMetaTag("twitter:title", title, false);
  setMetaTag("twitter:description", description, false);
  setMetaTag("twitter:image", image, false);

  // Standard meta tags
  setMetaTag("description", description, false);
}
