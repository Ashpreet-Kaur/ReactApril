import { useState } from "react";

function Count(){


    // const [fruit , setFruit] = useState("apple")



    // function changeFruit(){
    //     if(fruit === "apple"){
    //         setFruit("banana")
    //     }
    //     else{
    //         setFruit("apple")
    //     }
    // }

    // console.log('Count component rendered')

    let [count, setCount] = useState(0);


    // function increment(){
    //     setCount(count + 1)
    // }


    // function decrement(){
    //     setCount(count - 1)
    // }
   


    // console.log('Count component rendered')
    // let count = 0;

    // function increment(){
    //     count++;
    //     console.log(count)
    // }

    // function decrement(){
    //     count--;
    //     console.log(count)
    // }

    return(
        <>

        <h1 className="m-3">Counter App</h1>
        <h2 className="bg-info m-2 w-25 p-3">Count: {count}</h2>
        <button className="btn btn-success m-3" onClick={
            ()=>{
                setCount(count+1)
            }
        }>Increment</button>
        <button className="btn btn-warning m-3" onClick={()=>{
            setCount(count-1)
        }}>Decrement</button>
        
        
        
        </>
    )
}

export default Count;