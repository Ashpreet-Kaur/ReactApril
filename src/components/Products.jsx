function Products({name, description, src}){



 

    return(
        <>
        <div className="card" style={{width: "18rem"}} >
        <img src={src} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Buy {name}</a>
        </div>
</div>
        
        </>
    )
}

export default Products


//  Props are used to pass data from the parent component to the child component. They are read-only and cannot be modified by the child component. 



// The Products component here is the child component and the ProductPage is parent component as it is using the Product component inside it. The ProductPage is passing th data to the Product component through props. The Product component is receiving the data through props and using it to render the UI.