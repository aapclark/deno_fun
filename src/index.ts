import {
    App,
    Request,
    Response,
    logger,
    parser,
} from "attain";

import { applyGraphQL, gql } from 'attain-graphql';

const app = new App()
app.use(logger)

await app.listen({ port: 5505 })
