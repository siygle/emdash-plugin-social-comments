import { definePlugin } from "emdash";

const PLUGIN_ID = "bluesky-comments";
const VERSION = "0.1.0";

export function blueskyCommentsPlugin(options = {}) {
  return {
    id: PLUGIN_ID,
    version: VERSION,
    entrypoint: "emdash-plugin-bluesky-comments",
    componentsEntry: "emdash-plugin-bluesky-comments/astro",
    options,
  };
}

export function createPlugin() {
  return definePlugin({
    id: PLUGIN_ID,
    version: VERSION,
  });
}

export default createPlugin;
