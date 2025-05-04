import React from "react";

export default function Photos({ image }) {
    if (image) {
        return (
            <div>
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