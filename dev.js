const { build } = require("esbuild");

build({
  minify: true,
  bundle: true,
  platform: 'browser',
  outfile: "dist/widget.js",
  entryPoints: ["src/app.ts"],
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else { 
        console.log('watch build succeeded:', result)
        // HERE: somehow restart the server from here, e.g., by sending a signal that you trap and react to inside the server.
      }
    }
  }
});
