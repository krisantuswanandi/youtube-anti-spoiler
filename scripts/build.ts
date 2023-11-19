import metadata from "./metadata";
import code from "./code";

const result = `${metadata}
(function () {

"use strict";

${code}
})();
`;

Bun.write("index.js", result);
