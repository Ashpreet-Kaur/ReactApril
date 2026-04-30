function ListRendering(){

    const students = ["Navroop", "Simran", "Gurpreet", "Gurleen", "Gurjot", "Test"]

    return(
        <>


        <h1>Student Name List</h1>


{
    students.map((student)=>{
        return(
            <>
                <h3>{student}</h3>
            </>
        )
    })
}

      
            {/* <h3>Navroop</h3>
            <h3>Simran</h3>
            <h3>Gurpreet</h3>
            <h3>Gurleen</h3>
            <h3>Gurjot</h3> */}
        
        </>
    )
}
export default ListRendering;