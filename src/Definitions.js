import React from "react";

export default function Definitions(props) {
    console.log(props.meaning);

    if (props.meaning) {
        const { partOfSpeech, definitions } = props.meaning;
    
        return (
            <div>
                <p><srong>{partOfSpeech}</srong></p>
                <p>{props.meaning.definition}</p>
                <p>{props.meaning.example}</p>
                {Array.isArray(definitions) && definitions.length > 0 ? (
                    definitions.map((definition) => (
                        <div key={definition.id}>
                            <p>
                                {definition.definition}
                                <br />
                                <em>{definition.example}</em>
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No definitions available.</p>
                )}
            </div>
        );
    }
}