import antfu from "@antfu/eslint-config";

export default antfu({
  react: true,
  typescript: true,
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
    trailingComma: "all",
    endOfLine: "auto",
    printWidth: 100,
  },
  rules: {
    "react-hooks/exhaustive-deps": "off",
  },
  ignores: ["node_modules", "dist", "build"],
},
);
