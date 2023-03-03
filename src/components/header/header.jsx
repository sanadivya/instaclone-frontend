
import { Link } from "react-router-dom";
import "./header.css"
const Header=()=>{
    return(
        <>
        <nav className="header">
            <section className="logo">
                <img src={require("../../images/icon.png")} alt='logo' height='40px'/><span>Instaclone</span>
            </section>
           
            <section className="camera">
                <Link to='/form'>
                <img src={require("../../images/camera.png")} alt='camera' height='38px'/>
                </Link>
            </section>
          
        </nav>
        </>
    )
}
export default Header;