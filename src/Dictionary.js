import React, { useState } from "react";
import Meaning from './Meaning';
import axios from "axios";
import './Dictionary.css';

export default function Dictionary(props) {
    const [word, setWord] = useState(props.word);
    const [results, setResults] = useState(" ");
    const [image, setImage] = useState(" ")

    function showMeaning(response) {
        setResults(response.data);
    }

    function showImage(response) {
        setImage(response.data.photos)
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

    let imageApiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imageApiKey}`
    axios.get(imageApiUrl).then(showImage);
    

    let form = (
        <form onSubmit={displayWord}>
            <input type="search" placeholder="Type a word..." onChange={updateWord} />
        </form>
    )

    
    return (
        <div>
            {form}
            <div className="results">
            <h3>{word} | <em>{results.phonetic}</em></h3>
            <Meaning results={results} />
            </div>
        </div>
    )
}