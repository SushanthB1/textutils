import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length===0)  props.showAlert("Please enter text to convert","warning");
        props.showAlert("Converted to Uppercase","success");
     
        
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(text.length===0)  props.showAlert("Please enter text to convert","warning");
        props.showAlert("Converted to Lowercase","success");
     
    }
    const handleClearText = () => {
        setText("");
        props.showAlert("Text cleared!","success");
       
    }
    const countWord = () => {
        return (text.length === 0 ? 0 : text.split(" ").length);
    }
    const preview = () => {
        if (text.length === 0) return "Enter any text to preview";
        return text;
    }
    const copyText = () => {
        if(text.length===0)  props.showAlert("Please enter text to copy","warning");
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard","success");
       
    }

    return (

        <>
            <div className="container my-2 mb-3" style={{ color: (props.mode === 'light') ? 'black' : 'white' }}>
                <h2 className="my-3">Enter any Text below</h2>
                <textarea className="form-control" style={{ backgroundColor: (props.mode === 'light') ? 'white' : 'grey', color: (props.mode === 'light') ? 'black' : 'white' }} id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
                <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button type="button" className="btn btn-warning my-3 mx-1" onClick={handleClearText} >Clear Text</button>
                <button type="button" className="btn btn-primary my-3 mx-1" onClick={copyText} >Copy To Clipboard</button>
            </div>
            <div className="container my-2" style={{ color: (props.mode === 'light') ? 'black' : 'white' }}>
                <h2>Analyze the text below</h2>
                <p>{countWord()} words and {text.length} characters</p>
                <p>{0.008 * countWord()} Minutes to read</p>
                <h3>Preview</h3>
                <p>{preview()}</p>
            </div>

        </>

    )
}
