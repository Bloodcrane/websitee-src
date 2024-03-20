import { Link, Outlet } from "react-router-dom";

const LinkLayout = () =>{
    return(
        <div className='layoutDiv'>
            <Link className="layoutButton" to={'/'}>Home</Link>
            <Link className="layoutButton" to={'/about'}>About</Link>
            <Link className="layoutButton" to={'/discography'}>Discography</Link>

            <Outlet/>
        </div>
    )
}

export default LinkLayout