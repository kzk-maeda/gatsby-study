"use strict"

require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "esnext",
  },
})

// 型情報を読み込む
require("./src/__generated__/gatsby-types")

const {
    onCreateNode,
    createPages,
  } = require("./src/gatsby-node/index")

exports.onCreateNode = onCreateNode
exports.createPages = createPages