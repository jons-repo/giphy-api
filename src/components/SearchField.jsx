// Handles user input
// Update search term state and triggers API request when searching
// We pass the search term to parent AppComponent using a callback function
import React, { useState } from "react";
import axios from 'axios';

const SearchField = ({ updateGifs }) => {
    const [searchName, setSearchName] = useState("");
    const [searchFilter, setSearchFilter] = useState("regular");
    const [gifs, setGifs] = useState([]);

    // Updates the search name with event from input tag
    const handleInputChange = (event) => {
        setSearchName(event.target.value);
    }

    const selectFilter = (event) => {
        setSearchFilter(event.target.value);
    }

    async function fetchGifs() {
        try {
            // Getting different API links based on filter user selcted
            if (searchFilter == "regular") {
                let fetchedGifs = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchName}&api_key=GWNHM0RflUo45K45RKCCfjSTh8WxWzMT`);
                setGifs(fetchedGifs.data.data);
                updateGifs(fetchedGifs.data.data);
            }
            else {
                let fetchedGifs = await axios.get(`http://api.giphy.com/v1/gifs/${searchFilter}?api_key=GWNHM0RflUo45K45RKCCfjSTh8WxWzMT`);
                setGifs(fetchedGifs.data.data);
                updateGifs(fetchedGifs.data.data);
            }
        } catch(error) {console.log(error)};
        console.log(gifs);
    }

    return (
        <div>
            <input value={searchName} onChange={handleInputChange} />
            <select value={searchFilter} onChange={selectFilter}>
                <option value="regular">Regular</option>
                <option value="trending">Trending</option>
                <option value="random">Random</option>
            </select>
            <button onClick={fetchGifs}>Search Gifs</button>
        </div>
    );

};

export default SearchField;