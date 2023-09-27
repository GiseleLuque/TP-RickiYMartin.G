import { useEffect } from "react";
import { useCharacter } from "../hooks/useCharacter";

export function Character() {

const {getAllCharacters, AllCharacters} = useCharacter()
const name = ""
  
//useEffect y useState Hooks
useEffect (() => {
   getAllCharacters()
},[]);
    

//userEffect recibe una funcion claback, es decir el codigo al ejecutar 
//recibe cuando va  a ejecutar.
return(
     <ul>
        {
            AllCharacters.map((item, index) => (
             <li key = {index}>
                <h3>{item.name}</h3>
                <p>{item.status}</p>
                <img src = {item.image} alt = ""/>
                <p>{item.species}</p>
                <h3>Last known location:</h3>
                <p>{item.location["name"]}</p>
                <h3>First seen in:</h3>

             </li>
            ))}

     </ul>
    )
}