import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav className="header">
            <div>
                <div>
                    <img className="logo" alt="logo"></img>
                </div>
                <p className="cafeName">Kim's Cafè Köln</p>
            </div>
            <ul className="navFlex">
                {/* <li className="hellButton"><Link to="/"></Link></li> */}
                <li className="hellButton"><Link to="/speisekarte">Speisekarte</Link></li>
                <li className="hellButton"><Link to="/kontakt">Kontakt</Link></li>
                <li className="hellButton"><Link to="/öffnungszeiten">Öffnungszeiten</Link></li>
                <li className="hellButton"><Link to="/galerie">Galerie</Link></li>
            </ul>
        </nav>
    );
};


export default Navigation;