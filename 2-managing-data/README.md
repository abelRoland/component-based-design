# Managing data

## Objectives

1. Manage data inside states: [here](https://react.dev/learn/state-a-components-memory)
2. Understand lifecycle: [here](https://react.dev/learn/lifecycle-of-reactive-effects)
3. Handling events: [here](https://react.dev/learn/responding-to-events)
4. Conditional rendering: [here](https://react.dev/learn/conditional-rendering)
5. Handling inputs: [here](https://react.dev/reference/react-dom/components/input)
6. Use images from static and from source folder
7. Use an external library

## Some resources

- React Bootstrap library: [here](https://react-bootstrap.netlify.app/)

### Lifecycle diagram

![Lifecycle diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Code example

You can find in this folder the most minimal example for a React App to start it:

1. Open your terminal in the `2-managing-data` folder
2. Install dependencies by running `npm install`
3. Launch the local dev server by running `npm run dev`
4. Access you app in your favorite browser at `https://localhost:5173`

## Exercise

Based on the exercise from first week:

- [ ] Display all pokemons name in the Menu (List) and all the cards (PokemonCard)
- [ ] Display just the PokemonCard that isActive (Conditional Rendering)
- [ ] Change the class of the menu for Active Items (useState / conditinal rendering)
- [ ] Toogle classes, letting just one class active.
- [ ] Refactor the PokemonForm, to recreate an array with the names of the Pokemons based on the given object (useState, useEffect)
- [ ] Centralise the data handeling of the object (useContext)
- [ ] Extra: useMemo and useRef
