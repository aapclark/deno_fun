import { gql } from "deps";

const types = gql`
type User {
    email: String!
    password: String!
}
`;

const input = gql`
input registerUserInput{
    email: String!
    password: String
}
`;

const mutation = gql`
type Mutation {
    register(input: registerUserInput!): User!
}
`;

export const User = { types, input, mutation };
