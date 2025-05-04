import React from "react";
import Definitions from "./Definitions";

export default function Meaning(props) {
    console.log(props.results)

    if (props.results && Array.isArray(props.results.meanings)) {
        return (
            <div>
                {props.results.meanings.map((meaning) => {
                    return (
                        <div key={meaning.id}> 
                            <Definitions meaning={meaning} />
                        </div>
                    );
                })}
                
            </div>
            
        );
    } else {
        return <p>Not found...</p>;
    }
}