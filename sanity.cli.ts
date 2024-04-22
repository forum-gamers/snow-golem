import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_SANITY_PROJECTID as string,
    dataset: process.env.SANITY_STUDIO_SANITY_DATASET as string,
  },
});
