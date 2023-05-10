const path = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: [".js", ".ts", ".vue", ".jsx"],
      alias: {
        setup: path.resolve(__dirname, "setup/"),
        assets: path.resolve(__dirname, "assets/"),
        core: path.resolve(__dirname, "src/core/"),
        router: path.resolve(__dirname, "src/router/"),
        comp: path.resolve(__dirname, "src/components/"),
        composable: path.resolve(__dirname, "src/composables/"),
        view: path.resolve(__dirname, "src/views/"),
      },
    },
  },
});
