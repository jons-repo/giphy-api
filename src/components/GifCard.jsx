// Presentational component responible for rendering one GIF
// Receives GIF information as props
import React from "react";
import SearchField from "./SearchField";

const GifCard = (props) => {
    const gif = props.gif

    return (
        <div>
            <img src={gif.url} />
        </div>
    )
};

export default GifCard;