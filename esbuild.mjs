import esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/bundle.css"],
  outfile: "docs/bundle.min.css",
  bundle: true,
  minify: true,
  sourcemap: 'inline',
  plugins: []
})

await esbuild.build({
  stdin: { contents: '' },
  allowOverwrite: true,
  inject: [
    'src/app1.js',
    'src/app2.js',
  ],
  outfile: "docs/bundle.min.js",
  bundle: true,
  minify: true,
  sourcemap: 'inline',
  plugins: []
})