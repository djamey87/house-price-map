// server.js
import { create, router, defaults } from "json-server";

// TODO: resolve issue referencing central type
interface Point {
  x: number;
  y: number;
  p: number;
}

const server = create();
const apiRouter = router("db.json");
const middlewares = defaults();

const getPriceBoundaries = (pointData: Point[]): { min: number; max: number } => {
  const sortedData = pointData.sort((a, b) => a.p - b.p);
  return { min: sortedData[0].p, max: sortedData[sortedData.length - 1].p };
};

(async () => {
  server.use(middlewares);

  server.use((req, res, next) => {
    if (req.method !== "GET") {
      return res.sendStatus(500);
    }

    // Continue to JSON Server router
    next();
  });

  server.use(apiRouter);
  (apiRouter as any).render = (_req: any, res: any) => {
    const priceBoundaries = getPriceBoundaries(res.locals.data);
    return res.jsonp({
      data: {
        minValue: priceBoundaries.min,
        maxValue: priceBoundaries.max,
        points: res.locals.data,
      },
    });
  };
  server.listen(9000, () => {
    console.log("JSON Server is running");
  });
})();
