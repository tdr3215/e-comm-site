# Introduction

---

This project entails creating an e-commerce site from scratch using React. The goal is to implement full CRUD by allowing the user to create,read,update and delete products on the site. The database/api is currently connected to json-server.

## Dependencies

---

- [react](https://reactjs.org)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [json-server](https://www.npmjs.com/package/json-server)
- [axios](https://axios-http.com/)
- [uuid](https://www.npmjs.com/package/uuid)

## Goals

---

- full CRUD ✅
- search filter capabilities
- at least 5 different products ✅
- view product details individually ✅
- testing
- deploy to gh-pages
- deploy api to github pages

## Troubleshooting

---

### API

I am currently working towards seperating the database from localhost:8000. It would ideally be called from a json server deployed to github pages. I am also working towards making a useFetch custom hook for fetching the data fromt he api across multiple compenents when necessary.

### Components

Most of the components I have are working. Currently, I don't have anything on the patterns page so I'll make a separate compenent for that in future versions of the app. I still need to work on creating search functionality to the products page.

### Tests

I am currently stil having trouble creating a test suite. I think the issue lies in testing the Link react component properly. I keep getting an error saying that I can only use "useHref()" in a Router compenent

## Screenshots

---

### Create

![create page](/src/images/new.png)

### Read & Delete

![read page](/src/images/read.png)

### Update

![update page](/src/images/edit.png)

## Wireframe

[wire-frame](https://github.com/tdr3215/e-comm-site/blob/main/Wireframe%20-TTS-ecomm.pdf)
