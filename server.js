const next = require("next");
const http = require("http");
const url = require("url");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      /*Parse the req url to get pathname */

      const parsedUrl = url.parse(req.url, true);

      const { pathname } = parsedUrl;

      //if a service worker is requested , serve it as a static file

      if (pathname === "/offline.js") {
        const filePath = path.join(__dirname, ".next", pathname);
        console.log(path.resolve("./.next/offline.js"));
        app.serveStatic(req, res, filePath);
      }
      //Otherwise let next take care of it
      else {
        handle(req, res, parsedUrl);
      }
    })
    .listen(port, () => {
      console.log("listening on PORT ", port);
    });
});
