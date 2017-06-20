# Source for blog [How to call GoodReads API using YQL](https://www.slightedgecoder.com/?p=470&preview=true)

After cloning the source, you need to create a file named `apikeys.js` in the root folder.

The file should look like the following.

```javascript
module.exports = {
    "goodreadsKey": "GOOD READS KEY",
    "goodreadsSecret": "SECRET",
    "goodreadsUserID": "GOODREADS_USERID"
}
```
Sign up on GoodReads [developer website](https://www.goodreads.com/api/keys) to get developer keys.df

Now install NPM packages either using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/).

```bash
npm install
```
### or

```bash
yarn install
```

Now start web-dev-server.

```bash
npm start
```
### or
```bash
yarn start
```


License: [MIT](https://opensource.org/licenses/MIT)



