import React from "react";
import './Photos.css'

export default function Photos({ image }) {
    if (image && Array.isArray(image.photos)) {
        return (
            <div className="images">
                {image.photos.map((photo) => (
                    <div key={photo.id}>
                        <img src={photo.src.landscape} alt={image.alt} />
                    </div>
                ))}
            </div>
        );
    } else {
        return <p>Generating image...</p>;
    }
}