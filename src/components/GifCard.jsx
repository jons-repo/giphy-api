// Presentational component responible for rendering one GIF
// Receives GIF information as props
import React from "react";
import SearchField from "./SearchField";

const GifCard = (props) => {
    
    const gif = props.images.original.url

    return (
        <div>
            <img src={gif} />
        </div>
    )
};

export default GifCard;