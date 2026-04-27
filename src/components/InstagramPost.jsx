import React, { useState } from 'react'
import image from "../assets/hero.png"

const InstagramPost = () => {

    const[liked, setLiked] = useState(false)

    function toggleLike(){
       setLiked(!liked)
       console.log(liked)
    }

  return (
    <>
        <h1>Instagram Post</h1>
        <p>This is an Instagram post component.</p>
        <div className="card" style={{width: "18rem"}}>
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
    <button className='border-0 bg-transparent' onClick={toggleLike}>
        <i className={
            liked ? "bi bi-suit-heart-fill text-danger" : "bi bi-suit-heart"
        }></i></button>
  </div>
</div>
    </>
  )
}

export default InstagramPost