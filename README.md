#React - ITP Unconference 2017#

## Instructions ##
---
Clone or download the repo
```
$ git clone https://github.com/jcharry/React_Unconference_2017.git
```

Install dependencies with
```
$ npm install
```

### Running the Development Server ###
Start a server wit the following
```
$ npm run dev
```

### API Key ###
You'll also need an OpenWeatherMap API key, which you can get here:
https://openweathermap.org/api

And you'll have to create a file to hold your api key:
Inside app/ create a folder called creds/ and a file called api.js. 
Inside api.js add the following
```
export default {
    APIKEY: "YOUR API KEY HERE"
};
```

### Troubleshooting ###
If the dev server isn't running,
try installing webpack and webpack-dev-server globally with
```
$ npm install -g webpack webpack-dev-server
```
Then run ```$ npm run dev``` again.

### Resources for Further Learning ###
Udemy is great and there are [tons of React courses](https://www.udemy.com/react-redux/) on there, sometimes on sale
for $15, a pretty good deal, but time consuming

[Redux example app](http://redux.js.org/docs/basics/)

