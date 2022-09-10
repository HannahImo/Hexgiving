import {Link} from "react-router-dom";
function Header (){
    return (
        <>
        <div className="header"> 
        <li> <Link to="/"> Home </Link></li>
         <li> <Link to="About"> About </Link></li>
        </div>
        </>
    )
}
export default Header;