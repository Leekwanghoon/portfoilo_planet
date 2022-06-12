import express from "express";
import path, { PlatformPath } from "path";

const viewsRouter = express.Router();

viewsRouter.use("/", serveStatic("index"));
viewsRouter.use("/Template_example", serveStatic("Template_example"));

function serveStatic(resource: string) {
  const resourcePath: string = path.join(
    __dirname,
    `../../front/html/Template/${resource}`
  );
  const option = { index: `${resource}.html` };

  return express.static(resourcePath, option);
}

export { viewsRouter };
