const express = require("express");
const createServer = require("slack-github-issue-creator");

const app = express();
const port = Number(process.env.PORT) || 3000;

const config = {
  githubToken: process.env.GITHUB_API_TOKEN,
  githubBaseUrl: "https://api.github.com",
  slackApiToken: process.env.SLACK_API_TOKEN,
  slackSigningSecret: process.env.SLACK_SIGNING_SECRET,
  channelMap: {},
};

app.use(createServer(config));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
