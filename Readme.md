
# Create info

* npm (Node Package Manager -> install library) 

* npx (Node Package Execute -> not install library drictly install sum Package)

## Create-react-app

this is utility means software, create a new project

```npx create-react-app "project-name"```

or

```npm create vite@latest``` and ```npm i``` and ```npm run dev```

## react virtual DOM, fibre

[react fiber doc](https://github.com/acdlite/react-fiber-architecture)

## useCallback

* is react hook thet lets you cache a function defintion between re-renders.
store the `cacha data`
* ``` const cachedFn = useCallback(fn, dependencies) ```

## useRef

* some item reference call this hook