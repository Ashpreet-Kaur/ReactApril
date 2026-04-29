import { useState } from "react"
import image from "../assets/hero.png"


function InstagramPost(){

  const [liked, setLiked] = useState(false)

  function handleLike(){
    setLiked(!liked)
  }

  console.log(liked)

  return(
    <>
    

    <div className="card">
      <img src={image} style={{width: "18rem"}} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
       
        <button className="border-0 bg-transparent" onDoubleClick={handleLike}>
          <i className={
            liked ? "bi bi-suit-heart-fill fs-3 text-danger" : "bi bi-suit-heart fs-3"
          }></i></button>
      </div>
    </div>
    
    </>
  )
}

export default InstagramPost