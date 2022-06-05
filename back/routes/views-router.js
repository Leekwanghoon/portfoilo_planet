import express from "express";
import path from "path";

const viewsRouter = express.Router();

viewsRouter.use("/", serveStatic("index"));
viewsRouter.use("/Template_example", serveStatic("Template_example"));

function serveStatic(resource) {
  const resourcePath = path.join(
    __dirname,
    `../../front/html/Template/${resource}`
  );
  const option = { index: `${resource}.html` };

  return express.static(resourcePath, option);
}

export { viewsRouter };
