import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");
export default {
  input: "./src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    external(),
    terser(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({
      extensions: [".css"],
    }),
  ],
};
