# Introduction

---

This project entails creating an e-commerce site from scratch using React. The goal is to implement full CRUD by allowing the user to create,read,update and delete products on the site. The database/api is currently connected to json-server but is being migrated to firebase.

## Dependencies

---

- [react](https://reactjs.org)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [json-server](https://www.npmjs.com/package/json-server)
- [axios](https://axios-http.com/)
- [uuid](https://www.npmjs.com/package/uuid)
- [firebase](https://firebase.google.com/)
- [react-firebase-hooks](https://www.npmjs.com/package/react-firebase-hooks)

## Goals

---

- full CRUD ✅
- search filter capabilities ✅
- at least 5 different products ✅
- view product details individually ✅
- testing
- deploy to gh-pages ✅
- create Google auth ✅
- create user's cart sub-collection

## Troubleshooting

---

### Firebase

I'm working on implementing a registration page for signing up with email. So far, the user is able to successfuly login with Google.
I still have the internal api holding the product list so I'm working towards making a new collection in firebase to hold the them.

### Components

I changed some of the layout in my home page and added a Checkout component. The search functionality is partially implemented but I'd like to refine it a bit(i.e. query for products containing specific letters). I plan on adding a sub-collection to persist the contents of the user's cart. I'd also like to add an Error page component.

### Tests

I am currently stil having trouble creating a test suite. I'll start working on this a bit throughout the upcoming version.

## Screenshots

---

### Home Page

![home page](/src/images/home.jpg)

### Login

![login page](/src/images/login.jpg)

## Wireframe

[wire-frame](https://github.com/tdr3215/e-comm-site/blob/main/Wireframe%20-TTS-ecomm.pdf)
