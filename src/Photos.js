import React from "react";

export default function Photos(props) {
    if (props.image) {
    return (
        <div>
            <img src={props.image.src.original} alt={props.image.alt} />
        </div>
    );
} else {
    return <p>Generating image...</p>
}
}