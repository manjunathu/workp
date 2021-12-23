 import React,{useState} from 'react'

import Homes from '../../pages/home/Homes'
 import Selectimage from '../../pages/selectimage/Selectimage'
 
 function Imagerender() {
     const [state, setstate] = useState(0)
     const [image,setimage] = useState([
         {id:0,
            
            
            src:'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/hero/burj-al-arab-profile-exterior_6-4_landscape/burj-al-arab-profile-exterior_6-4_landscape__portrait.jpg?w=600',isSelected:false},
         {id:1,src:'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',isSelected:false},
         {id:2,src:'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/hero/burj-al-arab-profile-exterior_6-4_landscape/burj-al-arab-profile-exterior_6-4_landscape__portrait.jpg?w=600',isSelected:false}
    ])
    const [selectedimageurl,setselectedimageurl] = useState()

    const onPlusButtonClick = () =>{
         setstate(1)
     }

     const onSelectbuttonclicked = () => {
        setstate(0)
    }
    
    const onClosebuttonclicked = () =>{
        setstate(0)
    }

    const imageclick=(e,index)=>{
            const imageList = [...image];
            imageList[index] = {
              ...image[index],
              isSelected: !image[index].isSelected
            };  
        setimage(imageList)        
    }

    
    return (

         <div>
             {/* <Home onPlusButtonClick={()=>onPlusButtonClick()} /> */}
             {/* <Selectimage /> */}
           { state == 0 &&    <Homes onPlusButtonClick={()=>onPlusButtonClick()}  image={image} /> }
           { state == 1 && <Selectimage onSelectbuttonclicked={()=>onSelectbuttonclicked()} imageclick={imageclick} image={image} onClosebuttonclicked={()=>onClosebuttonclicked()} /> }
         </div>
     )
 }
 
 export default Imagerender
 