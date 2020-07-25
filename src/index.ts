import { App, logger } from "@deps";
import { applyGraphQL, gql } from '@deps';
import { typeDefs } from './typeDefs'


const app = new App();

app.use(logger);



await app.listen({ port: 6507 });
