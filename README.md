# node-js-meme-scraper

Create a cli (Command Line Interface) application that scrapes 10 images of a defined website.

## TODOs

- [ ] Create a Node.js CLI application
  - [ ] Add `.gitignore` file with the content from cheatsheet
  - [ ] Add "memes" folder to `.gitignore`
- [ ] Create a directory named "memes"
- [ ] Research for libraries
  - [ ] Avoid libraries that do multiple steps
- [ ] Connect to the current version of the website https://memegen-link-examples-upleveled.netlify.app/
  - [ ] Avoid any caching?
- [ ] Download HTML string from the website and save in a variable
- [ ] Search inside HTML string for `<img src="..." />` and extract to array of URLs (strings)
  - [ ] Maybe inside of the `<section id="images">`?
- [ ] Extract first 10 URLs from array
- [ ] Loop over array of first 10 URLs and:
  - [ ] Download the image data (string)
  - [ ] Generate path in the "memes" folder (eg. `./memes/03.jpg`)
    - [ ] 1-10
    - [ ] double digits
    - [ ] `.jpg`
  - [ ] Create an empty file with the path
  - [ ] Put the image data into the file
- [ ] Test it multiple times
- [ ] Set up the test

> Scraping a web page involves fetching it and extracting from it. Fetching is the downloading of a page (which a browser does when a user views a page).

https://en.wikipedia.org/wiki/Web_scraping#:~:text=Scraping%20a%20web%20page%20involves,fetched%2C%20extraction%20can%20take%20place.
