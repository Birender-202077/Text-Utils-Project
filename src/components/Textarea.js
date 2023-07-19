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

    let handleClearText = () => {
        let newtext = " ";
        setText(newtext);
    }

    let handleReverseText = () => {
        let splitStr = text.split(" ");
        splitStr = splitStr.reverse();
        let newStr = splitStr.join(" ");
        setText(newStr)
    }



    return (
        <>
            <div className="container my-3 ">
                <h1>{props.heading}</h1>
                <label htmlFor="myText" className="form-label my-3">Example textarea</label>
                <textarea className="form-control" id="myText" onChange={handleOnChange} value={text} rows="6"></textarea>

                <input className="btn btn-primary mx-1 my-3" type="submit" onClick={handleUpCase} value="Convert to Upper Case" />

                <input className="btn btn-primary mx-1 my-3" type="submit" onClick={handleLowCase} value="Convert to Lower Case" />

                <input className="btn btn-primary mx-1 my-3" type="submit" onClick={handleClearText} value="Convert to Clear text" />

                <input className="btn btn-primary mx-1 my-3" type="submit" onClick={handleReverseText} value="Convert to Inverse Case" />
            </div>

            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Word Count</p>
                <h6>{text.split(" ").length * 0.01} Minutes Reading</h6>
            </div>

            <div className="container">
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    );
}