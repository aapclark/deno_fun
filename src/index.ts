import { App, logger } from "../deps.ts";

const app = new App();

app.use(logger);

await app.listen({ port: 6507 });
