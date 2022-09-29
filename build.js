const { build } = require("esbuild");

build({
  minify: true,
  bundle: true,
  platform: 'browser',
  outfile: "dist/widget.js",
  entryPoints: ["src/app.ts"],
});
