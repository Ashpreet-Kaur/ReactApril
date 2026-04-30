import { useState } from "react"

function ConditionalRendering(){


  const [loggedIn, setIsLoggedIn] = useState(false)

  function handleLogin(){
    setIsLoggedIn(!loggedIn)
  }

  return(
    <>

     <header>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
     <a className="navbar-brand" href="#">Navbar</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="#">Home</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">Link</a>
         </li>

{/* && is used when we want to render something only if a condition is true.  */}

         {
          loggedIn && 
           <li className="nav-item">
           <a className="nav-link" href="#">Cart</a>
         </li>
         }
         
         <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Dropdown
           </a>
           <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="#">Action</a></li>
             <li><a className="dropdown-item" href="#">Another action</a></li>
             <li><hr className="dropdown-divider"/></li>
             <li><a className="dropdown-item" href="#">Something else here</a></li>
           </ul>
         </li>
         <li className="nav-item">
           <a className="nav-link disabled" aria-disabled="true">Disabled</a>
         </li>
       </ul>
       {
        loggedIn ?
        <button className='btn btn-outline-danger' onClick={handleLogin}>Logout</button>
        :
        <button className='btn btn-outline-success' onClick={handleLogin}>Login</button>
       }
     </div>
   </div>
 </nav>
     </header>


     <section className='container-fluid bg-info-subtle d-flex align-items-center justify-content-center' style={{height: "70vh"}}>
         <h2 className='display-1 fw-bold'>Welcome, User</h2>
     </section>


    
    
    </>
  )
}

export default ConditionalRendering


//  import React, { useState } from 'react'

//  const ConditionalRendering = () => {


//      const [isLoggedIn, setIsLoggedIn] = useState(false)

//      let [username, setUsername] = useState("")

//     function login(){
//       username = prompt("Enter username")
//      setIsLoggedIn(true)
//      setUsername(username)
//     }


//      if(isLoggedIn){
//           return (
//      <>
    
//      <header>
//          <nav className="navbar navbar-expand-lg bg-body-tertiary">
//    <div className="container-fluid">
//      <a className="navbar-brand" href="#">Navbar</a>
//      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//        <span className="navbar-toggler-icon"></span>
//      </button>
//      <div className="collapse navbar-collapse" id="navbarSupportedContent">
//        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//          <li className="nav-item">
//            <a className="nav-link active" aria-current="page" href="#">Home</a>
//          </li>
//          <li className="nav-item">
//            <a className="nav-link" href="#">Link</a>
//          </li>
//          <li className="nav-item dropdown">
//            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//              Dropdown
//            </a>
//            <ul className="dropdown-menu">
//              <li><a className="dropdown-item" href="#">Action</a></li>
//              <li><a className="dropdown-item" href="#">Another action</a></li>
//              <li><hr className="dropdown-divider"/></li>
//              <li><a className="dropdown-item" href="#">Something else here</a></li>
//            </ul>
//          </li>
//          <li className="nav-item">
//            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//          </li>
//        </ul>
//        <button className='btn btn-outline-danger' onClick={()=>{setIsLoggedIn(false)}}>Logout</button>
//      </div>
//    </div>
//  </nav>
//      </header>


//      <section className='container-fluid bg-info-subtle d-flex align-items-center justify-content-center' style={{height: "70vh"}}>
//          <h2 className='display-1 fw-bold'>Welcome, {username}</h2>
//      </section>

    


//      </>
//    )
//      }
   

//      else{
//          return(
//              <>
//      <section className='container-fluid bg-info-subtle d-flex align-items-center justify-content-center' style={{height: "100vh"}}>
//          <div className='card p-5'>
//              <h2 className='display-3 fw-bold'>Please Login</h2>
//              <button className='btn btn-primary' onClick={login}>Login</button>
//          </div>
//      </section>
//              </>
//          )
//      }
 
//  }

//  export default ConditionalRendering

//  conditional rendering is a technique in react where we can render different components or elements based on certain conditions. It is a way to control what gets displayed on the screen based on the state of the application or user interactions.

