import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, setText] = useState("Enter the text here");

    let handleUpCase = () => {
        console.log("Clicked");
        let newText = text.toUpperCase();
        setText(newText);

    }

    let handleLowCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    let handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }

    return (
        <>
            <div className="container my-3 ">
                <h1>{props.heading}</h1>
                <label htmlFor="myText" className="form-label my-3">Example textarea</label>
                <textarea className="form-control" id="myText" onChange={handleOnChange} value={text} rows="10"></textarea>

                <input className="btn btn-primary mx-5 my-5" type="submit" onClick={handleUpCase} value="Convert to Upper Case" />

                <input className="btn btn-primary mx-5 my-5" type="submit" onClick={handleLowCase} value="Convert to Lower Case" />
            </div>


        </>
    );
}