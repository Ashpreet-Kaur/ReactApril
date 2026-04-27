import { useState } from "react";

function Counter (){


    const [fruit, setFruit] = useState('Apple')

    function changeFruit(){
        if(fruit === 'Apple'){
            setFruit('Mango')
        }
        else{
            setFruit('Apple')
        }
    }


    
    // const [count, setCount] = useState(0)

    // function increment(){
    //     setCount(count+1)
    // }

    // function decrement(){
    //     setCount(count-1)
    // }

    // console.log('Component Rendered')



    
    // let count = 0;

    // console.log('Component Rendered')
    // console.log(useState(0))

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


        <h1>Fruit: {fruit}</h1>
        <button onClick={changeFruit}>Change Fruit</button>

        {/* <h1>Counter App</h1>
        <h2>Count:{count}</h2>
        <button onClick={increment} >Increment</button>
        <button onClick={decrement} >Decrement</button> */}
        </>
    )
}


export default Counter;


    // The change in the variable count will not cause the component to re-render and the UI will not update. This is because React does not track changes to regular variables. It only tracks changes to state variables using the useState hook. When we use useState, React knows that it needs to re-render the component whenever the state variable changes.