import React from "react";

export default function Definitions(props) {

    if (props.meaning) {
        return (
            <div>
                <p><strong>{props.meaning.partOfSpeech}</strong></p>
                <p>{props.meaning.definition}.</p>
                <p><em>{props.meaning.example}</em></p>
            </div>
        );
    } else {
        return <p>No definitions available...</p>
    }
}