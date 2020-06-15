1. Tools used:
- Redux Dev Tools: 
+, link: https://github.com/zalmoxisus/redux-devtools-extension
+, installed in google chrome

- Redux thunk: 
+, $ npm install --save redux-thunk
+, https://github.com/reduxjs/redux-thunk


- In case not able to run npm start: 
$ rm -r node_modules
$ npm install

2. Core knowledge: 
- Middleware: is used to support debugging. Middleware
will be applied whenever any action is dispatched 

- Action creators: is the tool used to work with asynchronous
code with redux

- Redux thunk: a third party library that let action creators not
return an action itself but return a function that will
dispatch the action

3. Guide of how to use: 

VER 1: Middleware and redux dev tool setting up
-------------------------------------------------------------
Code in 3rd commit 
- See index.js to see how to setup Middleware and redux dev tool 
> see exactly how to set it up in index.js

VER 2: Setup and use Action creators
-------------------------------------------------------------
Code in 4th commit 

Step 1: Go to store/actions/actions.js to see how all the 
functions are exported

Step 2: Go to containers/Counter/Counter.js to see 
how actionCreators is imported and used

VER 3: Handling Async code with redux
comparison Action Creators vs Reducer
-------------------------------------------------------------
Code in 6th commit 

Step 1: install redux thunk, see reference above
Step 2: See how to handle async code in actions.js
see storeResult()

- Where to put the logic: Action Creators or Reducer
see "Action Reducer vs Reducer.png"