// import React, {useState} from "react";
import React from "react";

export default function About(props) {

    // const[myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // });

    let myStyle = {
      color : props.mode === 'dark' ? 'white' : 'black',
      backgroundColor : props.mode === 'dark' ? 'black' : 'white'
    }

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () =>{
    //     if(myStyle.color === 'black')
    //     {
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border : '2px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }

    // }

  return (
    <>
    <div className="container" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
      <h1 className="mx-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
               It is
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              It is
              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
               It is
              
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="container my-2">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
    </div> */}
    </>
  );
}
