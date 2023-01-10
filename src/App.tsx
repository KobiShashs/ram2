import React, { useEffect, useState } from 'react';
import './App.css';
import { Result, RootObject } from './Models/RickAndMorty';
import axios from 'axios';
import MyTable from './Components/MyTable/MyTable';

function App() {
    const [locations, setLocations] = useState<Result[]>([]);
    useEffect(() => {
        axios.get<RootObject>("https://rickandmortyapi.com/api/location")
            .then(res => setLocations(res.data.results))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="App">
            <h1>Rick and Morty</h1>
            {/* {
                locations.map(loc => <p key={loc.id}>{loc.id},{loc.name},{loc.type}</p>)
            } */}
            <MyTable locations={locations} />
        </div>
    );
}

export default App;
