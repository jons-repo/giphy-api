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
            {/* Render the SearchField component and pass the updateGifs callback */}
            <SearchField updateGifs={updateGifs} />
            <h2>Results:</h2>
            {/* Iterate over the gifs array and render a GifCard component for each gif */}
            {gifs.map(gif => <GifCard key={gif.id} /* Assign a unique key to each GIF card component */
                images={gif.images}  /* Pass the 'images' property of the GIF object as a prop*/ />)}
        </div>
    );
};

export default AppComponent;