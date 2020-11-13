import React, { useEffect, useState } from 'react';
import FormattedTable from '../FormattedTable/FormattedTable.js'

const Planets = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [planets, setPlanets] = useState([]);
    const filteredPlanetData = [];

    useEffect(() => {
     fetch('https://swapi.dev/api/planets/')   
        .then(response => response.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPlanets(result.results);
        },

        (error) => {
            setIsLoaded(true);
            setError(error);
        }
    )
        }, [])

    planets.forEach(filterPlanetData);
    
    function filterPlanetData(planet, index, arr) {

        filteredPlanetData.push(arr[index].name, arr[index].terrain, arr[index].population);

    };

   

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
            <h2>Planets in the Starwars Galaxy:</h2>
            {<FormattedTable planets = {filteredPlanetData}/>}
        </div>     
        );
    }

}



export default Planets;