# Most of the code in this repo is related to the coursework in Colt's React course.

## Section1 Notes
Components are reusable pieces of code that can be used to build larger components.

REACT FrameWork / Library ?

FrameWork -> Larger than a Library

On itself, React is not a framework, when making a scalable application other React tools are used  for example - react router / redux and so on.. these make it almost like Angular or so called FrameWork.


Components are building blocks of React. These let split UI into independent pieces and each component works in isolation.

Class component is the traditonal way to write component. Previously functional components were considered *"dumb"* components.

## Section2 Notes
JSX - JavaScript + XML / JavaScript Syntax Extension - in general more *strict* than HTML

Combine UI with logic in JS file

It is possible to write React without JSX but that is a lot tedious and ugly.

## Section3 Notes

Props help make a component re-usable with different values.
Props are immutable.

arrays.map(whatever => {expression})

### Default Props
syntax => 
        static defaultProps = {
            from: "whatever"
        }

So, whenever the from field is used but not passed as a prop, the default prop value gets interpolated.

## Section4 Notes

### Create React App
`npx create-react-app your-name` remember to be in the directory to do `npm start`, basically to start the local host.

#### Conventions to follow for CRA
* Kepp the separate components in separate files.
* Name of file should match Class name. Capitalized is the convention.
* Each component should be exported as the default object from the file.
* Keep the top level or entry point as App component.

#### CSS and Assets
* Call css as the same as component name.
* CRA will automatically load the CSS
* Conventional to give the div className of the Component.
* Another convention is naming `componentName-property` eg-> className = 'House-address' where House is the component and address is the property.

## Section6 Notes

#### State
Make website interactive, anything that changes on a website is associated to state.
Initial state always set in the constructor.

* super() VS super(props)

If you have to access the props inside the constructor, use super(props) else just super(). Ideally super(props) is used as it does no harm.

Never manipulate the state directly as in `this.state.whatever = newVal;` else use this.setState() built-in react method. Call this elsewhere but the constructor.
setState() is more like requesting that giving a command for a change,  React may re-render one / multiple components which have changed depending on when it is suitable.