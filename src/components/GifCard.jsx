// Presentational component responible for rendering one GIF
// Receives GIF information as props
import React from "react";

const GifCard = (props) => {
    // Access the gif prop and get the
    const gif = props.images.original.url

    return (
        <div>
            <img src={gif} />
        </div>
    )
};

export default GifCard;