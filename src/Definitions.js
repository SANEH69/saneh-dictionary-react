import React from "react";
import './Definitions.css';

export default function Definitions(props) {

    if (props.meaning) {
        return (
            <div  className="definitions">
                <p><strong>{props.meaning.partOfSpeech}</strong></p>
                <p>{props.meaning.definition}.</p>
                <p><em>{props.meaning.example}</em></p>
            </div>
        );
    } else {
        return <p>No definitions available...</p>
    }
}