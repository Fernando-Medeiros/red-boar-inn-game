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
        comp: path.resolve(__dirname, "src/components/"),
        view: path.resolve(__dirname, "src/views/"),
      },
    },
  },
});
