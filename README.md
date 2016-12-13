This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project is a rebuild of a two-day coding challenge I made in Angular.
I wanted to redesign and redeploy the app in react and redux for fun practice.
I do not recomend using redux on a project this small unless you are practicing. It's just not necessary

## Folder Structure
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    - index.html file and any static image assets
  src/
    actions/
      - container for redux actions and their types
    components/
      - App.js = the main root component
      - All react components reside here
    css/
      - All css files
    reducers/
      - All redux reducers
    App.test.js
    index.js = contains the Redux provider and routing
    Main.js = top-level wrapper for all redux components
    ReduxConnect.js = connects redux props, state and dispatch to Main.js
    store.js = Redux store creation
```
