import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">Cricket Team Management</Link>
                <div>
                    <Link className="btn btn-outline-light me-2" to="/">Home</Link>
                    <Link className="btn btn-primary" to="/add-player">Add Player</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;