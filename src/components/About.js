import React, { useState } from 'react'

export default function About(props) {
  const myStyle = {
    color:props.mode==='dark'?'black':'black',
    backgroundColor:props.mode==='dark'?'grey':'white',
    
  }

  {/*}
    const [myStyle , setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'

    })

 const[btntext,setBtnText]=useState('Enable Light Mode')
   const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border:'2px solid white'
            })
            setBtnText('Enable Dark Mode')
        }
            else{
                setMyStyle({
                    color: 'white',
                    backgroundColor: 'black',
                    border:'2px solid black'
                })
                setBtnText('Enable Light Mode');
            }
        }
      */}
    
    return (
        
        <div className="conatainer" >
            <h1 className="my-2" style={{color:props.mode==='dark'?'black':'black'}}>About Us</h1>
        <div>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        BRIEF ABOUT THE WEBSITE
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This website converts the given text to lowercase or uppercase accordingly . You can also enable LIGHT or DARK mode XD.....
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        FUNCTIONS THAT ARE PERFORMED BY THE WEBSITE
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       The website also shows the preview of the user entered text, time taken to read the text and also counts the number of words and characters entered by the user 
      </div>
    </div>
  </div>
  </div>
{/*<div className="container my-3">
<button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
</div>*/}
</div>
</div>

    
    )    
}