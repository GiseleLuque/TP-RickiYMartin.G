import { useState } from "react"; 

export function useCharacter(){
    const [AllCharacters, setAllCharacters,] = useState ([]);
    const getAllCharacters = () => {
        return fetch ("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => setAllCharacters(data.results));
    };

return {
    getAllCharacters,
    AllCharacters,
}
}