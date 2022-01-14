import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }

    const handleCopy=()=>{
        let newtext=document.getElementById("myBox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Copied !","success");
    }

    const handleClear=()=>{
        setText("");
        props.showAlert("TextArea Cleared","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }

    const handleOnChange=(event)=>{
        // console.log("Onchange");
        setText(event.target.value)
    }



    // const [text,setText] = useState('Enter text here');
    const [text,setText] = useState('');
    /* here above text is our state variable and setText is the name ofthe function which will be used 
        to change the value of state variable i.e. text 
        useState('Enter text here') this thing initially assings the value 'Enter text here' 
        to the text variable 
    */
    // text='newtext'; //wrong way to change state
    // setText('newText'); //correct way to change state

    return (
        <>
            <div className="container" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>    
                <div className="mb-3">

                    <textarea value={text} className="form-control" style={{backgroundColor: props.mode==='light' ? 'white' : 'grey' , color: props.mode==='dark' ? 'white' : '#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                
            </div>

            <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words, {text.length} charaters </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in text box above to preview here"}</p>
            </div>
        </>
    )
}
