  import React, { useState } from 'react';
  export default function TextFrom(props) {
    const ClearAll=() =>{
      setText("");
      props.showalert("Our text is clear","success");
    }
    const RemoveExtraSpace=() =>{
      let newtext= Text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showalert("Extra Space are removed","success");
    }
    
    const handleCopy=() =>{
      var text= document.getElementById('mybox');
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showalert("Text is copied","success");
    }
      
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = Text;
      window.speechSynthesis.speak(msg);
    }

    const handleUpClick=() =>{
    // console.log("button click"+ Text);
      let newText=Text.toUpperCase();
      setText (newText);
      props.showalert("Text is convert into upper case","success");
    }
    const handlelowClick=() =>{
      // console.log("button click"+ Text);
        let newText=Text.toLowerCase();
        setText (newText);
        props.showalert("Text is convert into Lower case","success");
      }
    const handleonchange=(event) =>{
      //console.log("on change");
      setText (event.target.value);
    }
    const [Text, setText]= useState("");
    //setText ("new text");
    return (
      <>
    <div  className="container" style={{color: props.mode === 'dark' ?'white':'#042743'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control"  value={Text} onChange={handleonchange} id="mybox" rows="8" style={{color: props.mode === 'dark' ?'white':'#13466e', background: props.mode === 'dark' ?'grey':'white'}}></textarea>
  </div>
  <button disabled={Text.length === 0} className="btn btn-primary  mx-1 my-2" onClick={handleUpClick}>Convert into UpperCase</button>
  <button disabled={Text.length === 0} className="btn btn-primary  mx-1 my-2" onClick={handlelowClick}>Convert into lowerCase</button>
  <button disabled={Text.length === 0} type="submit" onClick={speak} className="btn btn-primary mx-1 my-2">Speak</button>
  <button  disabled={Text.length === 0}type="submit" onClick={handleCopy} className="btn btn-primary mx-1 my-2">Copy Text</button>
  <button disabled={Text.length === 0} type="submit" onClick={RemoveExtraSpace} className="btn btn-primary mx-1 my-2">Remove Extra Space</button>
    <button disabled={Text.length === 0} type="submit" onClick={ClearAll} className="btn btn-primary mx-1 my-2">Clear All</button>
    </div> 
    <div className="container my-3" style={{color: props.mode === 'dark' ?'white':'#042743'}}>
      <h2>your text Summary</h2>
      {/* <p>word:{(Text.trim().split(/\s+/)).length} Character:{Text.length}</p> */}
      <p>word:{Text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Character:{Text.length}</p>
      <p>time require for read {0.008 * Text.split(' ').filter((element)=>{return element.length !== 0}).length} minute</p>
      <h2>Preview</h2>
      <p>{Text.length>0 ? Text : "Enter something in the textbox above"}</p>
    </div>
    </>
    )
  }
