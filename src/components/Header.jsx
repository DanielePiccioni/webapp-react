import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container d-flex">
                    <Link className="navbar-brand me-4" to="/">
                        MeowFilmPuciu
                    </Link>
                    <div className="collapse navbar-collapse show" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/movies">Recensioni</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
