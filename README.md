# Learning GraphQL

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Get just the data you want, possibly with just 1 API call. Also describe your data API with types and fields, instead of organizing the API around endpoints. This also lets you easily add new fields to an API without affecting breaking queries.

- REST = URLs with fixed payloads.
- GraphQL = 1 URL with "variable" payloads:
  - **read** with the `type Query` (which references your other pre-defined types/schemas).
  - **write** with the `type Mutation` (which references your other pre-defined types/schemas).
  - this setup enables autocomplete and exploration of all possible queries and data "shapes"

Go here: <https://developer.github.com/v4/explorer/>

Paste this query:

```graphql
query {
  viewer {
    login
  }
}
```

You should get a response with your username:

```json
{
  "data": {
    "viewer": {
      "login": "hchiam"
    }
  }
}
```

## JS demo

GraphQL.js: <https://graphql.org/code/#javascript> and <https://www.npmjs.com/package/graphql>

Run this: (triple-click to select the whole thing)

```bash
cd js-demo && yarn && yarn go
```

Should print out:

```bash
{ data: { hello: 'world' } }
```

## More links

Fireship.io explainer in 100 seconds: <https://www.youtube.com/watch?v=eIQh02xuVw4>

Example usage with React and Apollo: <https://github.com/hchiam/learning-react-apollo>

<https://simonwillison.net/2020/Jul/10/self-updating-profile-readme/>

<https://docs.github.com/en/graphql>

<https://github.com/simonw/simonw/blob/main/build_readme.py>

More in-depth: <https://www.howtographql.com/>
