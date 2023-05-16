module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "pouchdb-collate": "@craftzdog/pouchdb-collate-react-native",
          },
        },
      ],
    ],
  };
};
