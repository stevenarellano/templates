import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div>
                Home Page
            </ div>
            <Link to='/Misc' >Click here to go to the Misc Page</Link>
        </div>
    );
}

export default Home;
