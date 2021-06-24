import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

// const graphql = require("graphql");
// const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql;

// schema: with one field (hello) and one type (string):
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world"; // can be a promise or array of promises
        },
      },
    },
  }),
});

var query = "{ hello }";

graphql(schema, query).then((result) => {
  /* Prints
   * {
   *   data: { hello: "world" }
   * }
   */
  console.log(result);
});
