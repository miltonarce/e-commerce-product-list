import { standard } from "eslint-config-standard-ext";

export default standard({
  typescript: true,
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
