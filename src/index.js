import { definePlugin } from "emdash";

const PLUGIN_ID = "bluesky-comments";
const VERSION = "0.2.0";

const settingsSchema = {
  PUBLIC_GISCUS_REPO: {
    type: "string",
    label: "Giscus Repository",
    description: "GitHub repository for Giscus, e.g. owner/repo.",
  },
  PUBLIC_GISCUS_REPO_ID: {
    type: "string",
    label: "Giscus Repository ID",
    description: "Repository ID from the Giscus setup page.",
  },
  PUBLIC_GISCUS_CATEGORY: {
    type: "string",
    label: "Giscus Category",
    description: "GitHub Discussions category name, e.g. General.",
  },
  PUBLIC_GISCUS_CATEGORY_ID: {
    type: "string",
    label: "Giscus Category ID",
    description: "Discussion category ID from the Giscus setup page.",
  },
};

export function blueskyCommentsPlugin(options = {}) {
  return {
    id: PLUGIN_ID,
    version: VERSION,
    entrypoint: "emdash-plugin-bluesky-comments",
    componentsEntry: "emdash-plugin-bluesky-comments/astro",
    options,
  };
}

export function commentsPlugin(options = {}) {
  return blueskyCommentsPlugin(options);
}

export function createPlugin() {
  return definePlugin({
    id: PLUGIN_ID,
    version: VERSION,
    admin: {
      settingsSchema,
    },
  });
}

export default createPlugin;
