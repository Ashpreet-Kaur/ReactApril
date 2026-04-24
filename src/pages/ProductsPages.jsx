import Products from "../components/Products"
import image from "../assets/hero.png"
import "../styles/Products.css"

function ProductsPage(){


    const product1 ={
            name: "Product1",
            description: "This is description of product 1",
            src : image
    }


    const product2 ={
        name: "Product2",
        description: "This is description of product 2",
        src : image
    }
    
    const product3 ={
        name: "Product3",
        description: "This is description of product 3",
        src : image 
    }
  


    return(
        <>

        <div className="products-container">
            <Products name={product1.name} description={product1.description} src={product1.src}/>
            <Products name={product2.name} description={product2.description} src={product2.src}/>
            <Products name={product3.name} description={product3.description} src={product3.src}/>
        </div>

            

        </>
    )
}

export default ProductsPage




    // Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a more concise and readable syntax for extracting data from complex structures.

//    const marks = [10,20,30,40]

// //    const marks1 = marks[0]
// //    const marks2 = marks[1]
// //    const marks3 = marks[2]
// //    const marks4 = marks[3]


// const [marks1, marks2, marks3, marks4] = marks

// console.log(marks1, marks2, marks3, marks4)


// const student = {
//     name: "John",
//     age: 20,
//     city: "New York"
// }



// console.log(student.name)
// console.log(student.age)
// console.log(student.city)



// const { name, age, city } = student