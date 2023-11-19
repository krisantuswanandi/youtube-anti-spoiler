const build = await Bun.build({
  entrypoints: ["src/index.ts"],
});

const code = await build.outputs[0].text();

export default code;
