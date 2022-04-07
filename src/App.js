// import { useEffect, useState } from 'react';
import Countries from "./components/Countries/Countries";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Countries></Countries> */}
      <Countries></Countries>
      
    </div>
  );
}


// function Countries(){
//   const [countries,setCountries] = useState([]);
//   useEffect(()=>{
//     fetch("https://restcountries.com/v2/all")
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])

//   return (
//     <div>
//       <h2>Traveling around the world!!</h2>

//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   )

// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Name:{props.name} </h2>
//       <p>Capital: {props.capital}</p>
//     </div>
//   )
// }
export default App;
