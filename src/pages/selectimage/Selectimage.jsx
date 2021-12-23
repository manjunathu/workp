import React from "react";
import "./selectimage.css";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import  AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";


function Selectimage(props) {
    const [toggleState, setToggleState] = useState(1);

    

    const toggleTab = (index) => {
      setToggleState(index);
    };
 
  return (
    <div>
      <div className="select-container">
        <div className="select-content">
          <div className="select-title-wrapper">
            <p className="select-title">Select Image</p>
            <div className="close">
              <CloseIcon />
            </div>
          </div>
          <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Gallery
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Upload
        </button>
        
      </div>
      <div className="line"></div>
      

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         <div className='row' style={{display:"flex"}}>
           {props.image.map((item,imageIndex)=>{return(
          <div style={{display:"flex",flexDirection:"column"}}>
              <img  onClick={(e)=>props.imageclick(e,imageIndex)} style={item.isSelected?{border:'2px solid blue',height:"100px",display:"flex",flexDirection:"row",objectFit:"contain",marginLeft:"30px"}:{height:"100px",display:"flex",flexDirection:"row",objectFit:"contain",marginLeft:"30px"}} src={item.src}></img>
          </div>
          )})}
         </div>
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         
         <div className="dot">
           
           <span className="drop-title">Drag  files from your  Computer</span>
           <br/>
           <AddPhotoAlternateIcon style={{fontSize:150,marginBottom:70,marginLeft:350,cursor:"pointer"}}/>
           <button type="file" className="choose-btn">Select Files from your computer</button>
         </div>
         <br/>
         <div className="line"></div>
        </div>   
      </div>
    </div>
    <div className="select-bottom">
        <div className="butt-left"></div>
        <div className="butt-right">
        <button className="can-butt" onClick={()=>props.onClosebuttonclicked()}>Close</button>
        <button  className="butt" onClick={()=>props.onSelectbuttonclicked()}>Select</button>
        </div>    
        </div>
        </div>   
      </div>
    </div>
  );
}

export default Selectimage;
