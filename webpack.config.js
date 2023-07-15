const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    people_members: "./src/people_members.js",
    research: "./src/research.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      // Pug
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
      // Styles
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // Images
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    // index.html 템플릿을 기반으로 생성된 HTML 파일
    new HtmlWebpackPlugin({
      template: "./src/pages/index.pug",
      filename: "index.html",
      chunks: ["index"],
    }),
    // 다른 페이지들의 템플릿을 기반으로 생성된 HTML 파일들
    new HtmlWebpackPlugin({
      template: "./src/pages/people_professor.pug",
      filename: "people_professor.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/people_members.pug",
      filename: "people_members.html",
      chunks: ["index", "people_members"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/research.pug",
      filename: "research.html",
      chunks: ["index", "research"],
    }),
    // CSS 파일
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    // 이미지 압축
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV !== "production", // 개발 모드에서 플러그인 비활성화
      pngquant: {
        quality: [0.65, 0.9],
      },
    }),
    new LiveReloadPlugin({
      appendScriptTag: true,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    }, // 정적 파일 제공
    compress: true, // gzip 압축 사용 여부
    port: 3000, // 개발 서버 포트
    hot: true, // 변경된 내용이 있을 경우, 자동으로 새로고침
    devMiddleware: {
      writeToDisk: true,
    },
    /*
    SPA의 경우, 브라우저에서 직접 주소를 입력했을 때 404 에러가 발생하므로 이를 방지하기 위한 설정
    페이지 추가 시, 해당 페이지에 대한 설정을 추가해야 함
    */
    historyApiFallback: {
      rewrites: [
        { from: /^\/people_professor/, to: "./people_professor.html" },
        { from: /^\/people_members/, to: "./people_members.html" },
        { from: /^\/research/, to: "./research.html" },
      ],
    },
  },
  watchOptions: {
    ignored: "./node_modules/",
  },
};
