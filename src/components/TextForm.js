import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleNormalClick = () =>{
        let newText = text;
        document.getElementById('textid').style.fontStyle = "normal";
        document.getElementById('textid').style.fontWeight = "normal";
        document.getElementById('textid').style.textDecoration = "none";
        setText(newText);
        props.showAlert("Text Converted to Normal Form!", "success");
    }

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        document.getElementById('textid').style.fontStyle = "normal";
        setText(newText);
        props.showAlert("Text converted to UpperCase!", "success");
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        document.getElementById('textid').style.fontStyle = "normal";
        setText(newText);
        props.showAlert("Text Converted to LowerCase!", "success");
    }

    const handleItClick = () =>{
        let newText =  text;
        document.getElementById('textid').style.fontStyle = "italic";
        setText(newText);
        props.showAlert("Text Converted to Italic!", "success");
    }

    const handleBoClick = () =>{
        let newText = text;
        document.getElementById('textid').style.fontWeight = "bold";
        setText(newText);
        props.showAlert("Text Converted to Bold!", "success");
    }

    const handleUnClick = () =>{
        let newText = text;
        document.getElementById('textid').style.textDecoration = "underline";
        setText(newText);
        props.showAlert("Text Underlined!", "success");
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "success");
    }

    // const handlePaste = () =>{
    //     let textId = document.getElementById('textid');
    //     textId.onpaste();
    //     textId.writeText(textId.value); 
    // }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")); 
        props.showAlert("Extra Spaces Removed!", "success");
    }
    
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const onChange = (event) =>{
        setText(event.target.value);
    }

    return (
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor : props.mode === 'dark' ? 'black' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={onChange} id="textid" rows="7"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary my-1" onClick={handleNormalClick}>Normal</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" id='italic' onClick={handleItClick}>Convert to Italic</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleBoClick}>Bold</button>
        <button disabled={text.length === 0} className="btn btn-success my-1" onClick={handleUnClick}>Underline</button>
        <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        {/* <button disabled={text.length === 0} className="btn btn-warning mx-1" onClick={handlePaste}>Paste Text</button> */}
        <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length === 0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear</button>

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} Minutes Words Reads</p>
            <h2>Preview</h2>
            <p id="preid">{text.length>0 ? text : "Nothing to Preview!"}</p>
            {/* <p onClick={pre} id="preid">{text}</p> */}
        </div>
        </div>
    )
}
