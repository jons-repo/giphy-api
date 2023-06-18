// Manages fetched GIFs
import React, { useState } from "react";
import axios from 'axios';
import GifCard from "./GifCard";
import SearchField from "./SearchField";

const AppComponent = () => {
    const [gifs, setGifs] = useState([]);

    // Update gifs to fetched data
    const updateGifs = (fetchedGifs) => {
        setGifs(fetchedGifs)
    };

    return (
        <div>
            <SearchField updateGifs={updateGifs} />
            <h2>Results:</h2>
            {gifs.map(gif => <GifCard key={gif.id} images={gif.images} />)}
        </div>
    );
};

export default AppComponent;