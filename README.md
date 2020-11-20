# React State and Events - Async


## Instructions

- To get started you must have `JSON Server` installed

  - `npm install json-server`

- To mount the server run the following command in this project's root directory:

   - `json-server -w db.json`
   
- After mounting the server, you will have an api available at `http://localhost:8000/dogs`


## Deliverables

You are given an api that exposes an array of multiple `dog` objects that look like this:

  > `{ "id": 1, "name": "Happy Slay", "img": "https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg", "breed": "Beagle"}`

- You are given a component called `DogCard`, a container component called `DogsList`, an `App` component
- Your application render a list of dog images along with a button for each image that has an `innerText` of "Bark"
- When a User clicks on the "Bark" button it should render an `<h2>` to the screen with an innerText of "Bark"
- When a User clicks on the button a second time the `<h2>` should be removed from the DOM

- Add a `BarkCounter` that is a child of `App` and is displayed at the top of the DOM. This should be a counter that increments every time a dog barks



![dog gif](state-pairing-gif.gif)
