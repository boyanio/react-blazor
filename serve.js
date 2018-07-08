const connect = require('connect');
const serveStatic = require('serve-static');
const modRewrite = require('connect-modrewrite');

const buildDir = `${__dirname}/build`;
const port = 8080;
const setHeaders = (res, path) => {
  const ext = path.split('.').pop().toLowerCase();
  let contentType;
  switch (ext) {
    case 'wasm':
      contentType = 'application/wasm';
      break;

    case 'js':
      contentType = 'text/javascript';
      break;

    case 'dll':
      contentType = 'application/octet-stream';
      break;

    case 'html':
    case 'css':
      contentType = `text/${ext}`;
      break;
  }

  if (contentType) {
    res.setHeader('Content-Type', contentType);
  }
};

console.log(`Serving HTTP on http://localhost:${port} ...`);
connect()
  .use(modRewrite([
    '^/react-blazor/_framework/(.+) /apps/blazor/_framework/$1 [L]',
    '^/react-blazor/?(.+) /$1 [L]'
  ]))
  .use(serveStatic(buildDir, { 'setHeaders': setHeaders }))
  .use((req, res, next) => {
    const url = req.url;
    console.log(url);
    next();
  })
  .listen(port);