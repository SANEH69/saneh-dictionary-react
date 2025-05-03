import React from "react";

export default function Definitions(props) {
    console.log(props.meaning);

    if (props.meaning) {
    return (
        <div>
            <p>{props.meaning.partOfSpeech}</p>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>
                        {definition.definition}
                        <br />
                        <em>{definition.example}</em>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
}