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
  app: {
    head: {
      title: "Buysell",
      meta: [
        {
          name: "description",
          content: "Take an overview to the worldwide products",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  runtimeConfig: {},
});
