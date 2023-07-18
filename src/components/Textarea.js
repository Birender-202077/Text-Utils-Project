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
                <textarea className="form-control" id="myText" onChange={handleOnChange} value={text} rows="8"></textarea>

                <input className="btn btn-primary mx-1 my-3" type="submit" onClick={handleUpCase} value="Convert to Upper Case" />

                <input className="btn btn-primary mx-1 my-3" type="submit" onClick={handleLowCase} value="Convert to Lower Case" />
            </div>

            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Word Count</p>
                <h3>{text.split(" ").length * 0.01} Minutes Reading</h3>
            </div>

            <div className="container">
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    );
}