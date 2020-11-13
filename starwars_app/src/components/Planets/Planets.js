import React, { useEffect, useState } from 'react';
import FormattedTable from '../FormattedTable/FormattedTable.js'

//Fetch API inside "main" Planets component
// Pass relevant API response info in Array to <FormattedTable /> component 

const Planets = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [planets, setPlanets] = useState([]);
    const filteredPlanetData = [];

    //Filters API response for 'name', 'terrain' and 'population'
    function filterPlanetData(planet, index, arr) {
        filteredPlanetData.push(arr[index].name, arr[index].terrain, arr[index].population);
    };

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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        //Pass filteredPlanetData as prop to the Formatted Table Component
        // FormattTable will return JSX for formatted material UI table
        return (
            <div>
            <h2>Planets in the Starwars Galaxy:</h2>
            {<FormattedTable planets = {filteredPlanetData}/>} 
        </div>     
        );
    }

}



export default Planets;