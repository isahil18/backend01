require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
    "login": "isahil18",
    "id": 111517894,
    "node_id": "U_kgDOBqWgxg",
    "avatar_url": "https://avatars.githubusercontent.com/u/111517894?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/isahil18",
    "html_url": "https://github.com/isahil18",
    "followers_url": "https://api.github.com/users/isahil18/followers",
    "following_url": "https://api.github.com/users/isahil18/following{/other_user}",
    "gists_url": "https://api.github.com/users/isahil18/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/isahil18/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/isahil18/subscriptions",
    "organizations_url": "https://api.github.com/users/isahil18/orgs",
    "repos_url": "https://api.github.com/users/isahil18/repos",
    "events_url": "https://api.github.com/users/isahil18/events{/privacy}",
    "received_events_url": "https://api.github.com/users/isahil18/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sahil Ranjan",
    "company": null,
    "blog": "",
    "location": "Deoghar, Jharkhand, India",
    "email": null,
    "hireable": true,
    "bio": null,
    "twitter_username": "isahil_18",
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-08-18T14:23:54Z",
    "updated_at": "2024-03-31T17:51:44Z"
  } 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('harry_xat')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at twitter.com</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>silly mates</h2>')
})

app.get("/github", (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})