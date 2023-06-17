// Handles user input
// Update search term state and triggers API request when searching
// We pass the search term to parent App component using a callback function
import React, { useState } from "react";

const SearchField = () => {
    const [searchName, setSearchName] = useState("");

    // Updates the search name with event from input tag
    const handleInputChange = (event) => {
        setSearchName(event.target.value);
    }

    return (
        <div>
            <input value={searchName} onChange={handleInputChange} />
        </div>
    );

};

export default SearchField;