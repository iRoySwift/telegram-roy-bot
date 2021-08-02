module.exports = {
  apps: [
    {
      name: "Bot",
      script: "./dist/index.js",
      watch: ".",
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "localhost",
      ref: "origin/master",
      repo: "git@github.com:realRoyHsu/telegram-roy-bot.git",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
