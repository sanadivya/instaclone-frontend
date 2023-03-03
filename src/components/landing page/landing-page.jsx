import { Link } from "react-router-dom";
import "./landing-page.css";
const LandingPage=()=>{
    return(
        <>
        <section className="landing">
            <section className="landing-image">
                <img src={require("../../images/lens.png")} alt="lens"/>
            </section>
            <section className="landing-text">
                <div className="text">10x Team 04</div>
                <Link to="./post-view">
                <div >
                    <button className="button">Enter</button>
                </div>
                </Link>
            </section>
        </section>
        </>
    )
}
export default LandingPage;