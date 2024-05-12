import React, { useState } from 'react'

export default function (props) {
    let mystyle ={
        color:props.mode ==='dark'?'white':'black',
        background:props.mode ==='dark'?'rgb(119 169 209)':'white'
     };
    // const [mystyle,setmystyle] =useState ({
    //     color: 'black',
    //     background: 'white'
    // })

    // const [btntext, setbtntext] =useState("Enable dark colour")
    
    // const toggle =() =>{
    //     if(mystyle.color === "black"){
    //         setmystyle({
    //         color: 'white',
    //         background: 'black',
    //         border:'1px solid white'
    //         })
    //         setbtntext("Enable Light colour");
    //     }
    //         else{
    //             setmystyle({
    //             color: 'black',
    //            background: 'white'
    //                    })
    //          setbtntext("Enable Dark colour");
    //         }

        
    // }
  return (
//   <div className={`"container" style=&{color:props.mode ==='dark'?'white':'black'}`}>
<div className="container" style={mystyle}>
    <h2 className='my-2'>About Us</h2>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
        <strong>Analyze Your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
         </div>
        </div>
    </div>
    <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit. 
        </div>
        </div>
    </div>
    <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong> Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
         </div>
        </div>
    </div>
    </div>
    {/* <div className="container my-2">
        <button type='button' onClick={toggle} className="btn btn-primary">
          {btntext}  
        </button>
    </div> */}
</div>
  )
}
