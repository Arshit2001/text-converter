import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
       // console.log('Uppercase Was Clicked' + text);
        
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase :)","success");
    }
    const handleLowClick = () =>{
        // console.log('Uppercase Was Clicked' + text);
         
         let newText= text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to LowerCase :)","success");
     }
     const handleClearClick = () =>{
        // console.log('Uppercase Was Clicked' + text);
         
         let newText=' ';
         setText(newText)
         props.showAlert("Text Cleared :)","success");
     }
    const handleOnChange = (event) =>{
        //console.log('On Change');
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        
        navigator.clipboard.writeText(text);
      
        props.showAlert("Copied to Clipboard :)","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed :)","success");
    }
    const [text, setText ] = useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
 
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
<button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleLowClick}>Convert To Lowercase</button>
<button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


        </div>
        <div className="container my-2">
            <h3>Your Text Summary</h3>
            <p><b>{ text.split(/\s/).filter((element)=>{return element.length!==0}).length } words and {text.length} characters</b></p>
            <p><b>{0.008 * text.split(" ").length} Minutes Read </b></p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text:'Nothing To Preview'}</p>
        </div>
        </>
    )
}

