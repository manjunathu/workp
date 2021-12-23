import React from 'react'
import "./home.css";
import AddIcon from "@material-ui/icons/Add";

const Homes = (props) => {
    const selectedimageurl = props.image && props.image.length > 0 && props.image.filter((image) => image.isSelected)
    console.log("selectedimageurl", selectedimageurl);
    return (
        <div>
            <div className="home">
      <div className="home-container">
        <div className="home-content-left">
          <div className="title-wrapper">
            <p className="title">Set Up Your WorkPerk</p>
            <p className="sub-title">
              WorkPerks Set Up will only take a minute
            </p>
          </div>
          <p className="img">Image</p>
          
          <div className="icon">
            <AddIcon onClick={()=>props.onPlusButtonClick()} style={{ fontSize: 50 }} />
            <div className='icon-img' style={{display:"flex"}}>
          {selectedimageurl.map((image) => {
               return <img className='return-img' src={image.src} style={{height:"100px",width:"150px",display:"flex",flexDirection:"row",objectFit:"contain",marginLeft:"30px"}} alt={image.id} width="150" height="50" />
            })}
            </div>
          </div>
          <div className="bottom">
            <button className="button">Next</button>
          </div>
        </div>
        <div className="home-content-right"></div>
      </div>
    </div>
        </div>
    )
}

export default Homes
