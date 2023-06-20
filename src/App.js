import React, { useState } from "react";
import SearchField from "./components/SearchField";
import GifCard from "./components/GifCard";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [gifs, setGifs] = useState([]);

  const updateGifs = (fetchedGifs) => {
    setGifs(fetchedGifs);
  };

  return (
    <div className="dark-bg d-flex flex-column align-items-center justify-content-center">
      <div className="search-container p-4 rounded">
        <SearchField updateGifs={updateGifs} />
      </div>
      <div className="gif-container">
        {gifs.length > 0 && (
          <div className="gif-card-container">
            {gifs.map((gif) => (
              <GifCard key={gif.id} images={gif.images} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
