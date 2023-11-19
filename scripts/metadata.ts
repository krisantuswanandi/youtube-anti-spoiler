import rawManifest from "../manifest.json";

const manifest: Record<string, string | Array<string>> = rawManifest;

const rawMetadata = Object.keys(manifest)
  .map((key) => {
    const value = manifest[key];

    if (Array.isArray(value)) {
      return value.map((v) => `// @${key} ${v}`);
    }
    return `// @${key} ${value}`;
  })
  .flat()
  .join("\n");

const metadata = `// ==UserScript==
${rawMetadata}
// ==/UserScript==
`;

export default metadata;
