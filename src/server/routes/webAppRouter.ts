import { Router } from 'express';

const staticsServer = 'http://localhost:8080';
const version = require('../../../package.json').version;

const page = `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>React App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="container">
        <div id="app">Loading...</div>
    </div>
    <script type="text/javascript" src="${staticsServer}/public/vendor-${version}-bundle.js"></script>
    <script type="text/javascript" src="${staticsServer}/public/main-${version}-bundle.js"></script>
</body>
</html>`;

export function webAppRouter() {
  const router = Router();

  router.get('**', (req, res) => {
    // render the ejs
    res.send(page);
  });

  return router;
}