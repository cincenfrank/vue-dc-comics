module.exports = {
  // publicPath: "/dist/",

  publicPath: process.env.NODE_ENV === "production" ? "/dc-comics/" : "/dist/",
};
