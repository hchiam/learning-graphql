# Learning GraphQL

Just one of the things I'm learning. <https://github.com/hchiam/learning>

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

## More links

<https://simonwillison.net/2020/Jul/10/self-updating-profile-readme/>

<https://docs.github.com/en/graphql>
