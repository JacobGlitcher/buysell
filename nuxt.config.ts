export default defineNuxtConfig({
  css: ["@/assets/styles/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @import "@/assets/styles/scss/abstracts/mixins.scss";
              @import "@/assets/styles/scss/abstracts/variables.scss";
            `,
        },
      },
    },
  },
});
