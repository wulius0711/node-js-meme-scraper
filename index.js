import fs from 'node:fs';
import https from 'node:https';
// import { readFileSync } from 'node:fs';
import axios from 'axios';
import extractUrls from 'extract-urls';
import split from 'split-string';

// import htmlLinkExtractor from 'html-link-extractor';

// const axios = require('axios'); // legacy way

// Make a request for a website
// axios
//   .get('https://memegen-link-examples-upleveled.netlify.app/')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const website = await axios(
  'https://memegen-link-examples-upleveled.netlify.app/',
);

const websiteCode = website.data;

// console.log(websiteCode);

// const html = readFileSync('file:///Users/wulius/Desktop/wulius.html', {
//   encoding: 'utf8',
// });

// const links = htmlLinkExtractor(html);
// links.forEach((link) => console.log(link));

const text = websiteCode;
const urls = extractUrls(text);

for (let i = 1; i <= 10; i++) {
  urls.push(i);
}

const jpgs = urls.filter((name) => name.includes('images'));

const originalJpgs = jpgs.filter((name) =>
  name.startsWith('https://api.memegen.link/images'),
);

const tenOriginalJpgs = originalJpgs.slice(0, 10);

console.log(tenOriginalJpgs);

for (let i = 1; i <= 10; i++) {}

const stream = fs.createWriteStream('01.jpg');

const request = https.get(
  'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300',
  function (response) {
    response.pipe(stream);
  },
);

// const blob = new Blob([tenOriginalJpgs], { type: 'image / jpeg' });
// const href = URL.createObjectURL(blob);

// const a = Object.assign(document.createElement('a'), {
//   href,
//   style: 'display:none',
//   download: 'myData.csv',
// });

// document.body.appendChild(a);

// a.click();
// URL.revokeObjectURL(href);
// a.remove();
