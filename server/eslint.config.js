const { standard } = require("eslint-config-standard-ext");

module.exports = standard({
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
    trailingComma: "all",
    endOfLine: "auto",
    printWidth: 100,
  },
  ignores: ["node_modules", "dist", "build"],
});
