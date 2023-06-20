// Manages fetched GIFs
import React, { useState } from "react";
import GifCard from "./GifCard";
import SearchField from "./SearchField";

const AppComponent = () => {
    const [gifs, setGifs] = useState([]);

    // Update gifs to fetched data
    const updateGifs = (fetchedGifs) => {
        console.log(fetchedGifs);
        setGifs(fetchedGifs)
    };

    return (
        <div>
            <SearchField updateGifs={updateGifs} />
            {gifs.map(gif => <GifCard key={gif.id} /* Assign a unique key to each GIF card component */
                images={gif.images}  /* Pass the 'images' property of the GIF object as a prop*/ />)}
        </div>
    );
};

export default AppComponent;