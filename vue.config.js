module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/_main.scss"'
      },
      scss: {
        additionalData: '@import "@/assets/_main.scss";'
      }
    }
  },
};
