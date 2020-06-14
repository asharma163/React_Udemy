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

arrays.map(whatever => {expression}

### Default Props
syntax => 
        static defaultProps = {
            from: "whatever"
        }

So, whenever the from field is used but not passed as a prop, the default prop value gets interpolated.
