import React, { useState } from "react";
import Meaning from './Meaning';
import axios from "axios";
import './Dictionary.css';

export default function Dictionary(props) {
    const [word, setWord] = useState(props.word);
    const [results, setResults]= useState(" ");

    function showMeaning(response) {
        setResults(response.data);
    }

    function displayWord(event) {
        event.preventDefault();
    }

    function updateWord(event) {
        event.preventDefault();
        setWord(event.target.value);
    }

    
    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`
    axios.get(apiUrl).then(showMeaning);
    
    let form = (
        <form onSubmit={displayWord}>
            <input type="search" placeholder="Type a word..." onChange={updateWord} />
        </form>
    )

    
    return (
        <div>
            {form}
            <div className="results">
            <p>{word}</p>
            <Meaning results={results} />
            </div>
        </div>
    );
}