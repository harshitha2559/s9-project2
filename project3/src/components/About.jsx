import { Link } from "react-router-dom"
function About(){
    return(
        <>
        <div className="head">
        <Link to="/">Main</Link> 
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        
        <h1>This is About page</h1>
        </div>
        </>
    )
}

export default About