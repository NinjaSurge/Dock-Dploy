import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { updateMetaTags } from "../lib/meta-tags";
import type { MetaTagsConfig } from "../lib/meta-tags";

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export function MetaTags({
  title,
  description,
  image,
  type,
}: MetaTagsProps) {
  const router = useRouterState();
  const pathname = router.location.pathname;

  useEffect(() => {
    // Get route-specific meta tags or use provided props
    const routeMeta = routeMetaTags[pathname];
    const config: MetaTagsConfig = {
      title: title || routeMeta?.title,
      description: description || routeMeta?.description,
      image: image || routeMeta?.image,
      type: type || routeMeta?.type,
      url: typeof window !== "undefined" ? window.location.href : undefined,
    };

    updateMetaTags(config);
  }, [pathname, title, description, image, type]);

  return null;
}

// Route-specific meta tag configurations
export const routeMetaTags: Record<string, MetaTagsConfig> = {
  "/": {
    title: "Dock-Dploy - Build Docker Compose Files Without the Hassle",
    description:
      "A powerful web-based tool for building and managing Docker Compose files, configurations, and schedulers. All in one place, completely free.",
    image: "/og-image.png",
  },
  "/docker/compose-builder": {
    title: "Docker Compose Builder - Dock-Dploy",
    description:
      "Build and manage Docker Compose files with an intuitive interface. Validate, reformat, and convert to various formats.",
    image: "/og-image.png",
  },
  "/config-builder": {
    title: "Config Builder - Dock-Dploy",
    description:
      "Create configuration files for popular self-hosted tools like Homepage.dev and more.",
    image: "/og-image.png",
  },
  "/scheduler-builder": {
    title: "Scheduler Builder - Dock-Dploy",
    description:
      "Generate schedulers for Cron, GitHub Actions, Systemd timers, and more with a simple form.",
    image: "/og-image.png",
  },
};

