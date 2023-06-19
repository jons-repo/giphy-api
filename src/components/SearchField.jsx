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

    // Updates filter state with event from select dropdown
    const selectFilter = (event) => {
        setSearchFilter(event.target.value);
    }

    // Puts fetched gif objects into state
    async function fetchGifs() {
        try {
            let fetchedGifs;
            // Getting different API links based on filter user selcted
            if (searchFilter == "regular") {
                const apiResult = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchName}&api_key=GWNHM0RflUo45K45RKCCfjSTh8WxWzMT`);
                fetchedGifs = apiResult.data.data;
            }
            else if (searchFilter === "trending") {
                let apiResult = await axios.get(`http://api.giphy.com/v1/gifs/${searchFilter}?api_key=GWNHM0RflUo45K45RKCCfjSTh8WxWzMT`);
                fetchedGifs = apiResult.data.data;
            }
            else {
                let apiResult = await axios.get(`http://api.giphy.com/v1/gifs/${searchFilter}?api_key=GWNHM0RflUo45K45RKCCfjSTh8WxWzMT`);
                // Since random returns a single GIF, its not an array, so we make it one with brackets for gif.map to work later
                fetchedGifs = [apiResult.data.data];
            }
            setGifs(fetchedGifs);
            // Triggers state update in AppComponent
            updateGifs(fetchedGifs);
        } catch(error) {console.log(error)};
    };


    return (
        <div>
            <select value={searchFilter} onChange={selectFilter}>
                <option value="regular">Regular</option>
                <option value="trending">Trending</option>
                <option value="random">Random</option>
            </select>
            {searchFilter == "regular" && (<input id="searchBox" value={searchName} onChange={handleInputChange} />)}
            <button onClick={fetchGifs}>Search Gifs</button>
        </div>
    );

};

export default SearchField;