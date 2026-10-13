import { cars } from "./practice.js";


const [ tesla, honda ] = cars;

const {speedStats: {topSpeed: teslaTopSpeed}, coloursByPopularity: [ teslaTopColour ]} = tesla;
const {speedStats: {topSpeed: hondaTopSpeed}, coloursByPopularity: [ hondaTopColour ]} = honda;
/* Minha SOLUÇÃO, mas o foco era a desestruturação  e preferi esta por estar com objetos aninhados
const [ teslaTopSpeed, hondaTopSpeed ] = cars.map(car => car.speedStats.topSpeed);
const [ teslaTopColour, hondaTopColour ] = cars.map(car => car.coloursByPopularity[0]); */


export function App() {
  return (
      <table>
        <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        </tr>
        <tr>
        <td>{tesla.model}</td>
        {<td>{teslaTopSpeed}</td>}
        <td>{teslaTopColour}</td>
        </tr>
        <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
        </tr>
      </table>
  )
}

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
