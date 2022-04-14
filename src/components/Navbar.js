// Boostrap Navbar

import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link to='/' >
                    <a className="navbar-brand" href="#">Opti-shop</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to ='/category/1'>
                                <a className="nav-link" href="#">Lentes de contacto</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/3'>
                                <a className="nav-link" href="#">Soluciones</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/2'>
                                <a className="nav-link" href="#">Anteojos</a>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <CartWidget/>
                    </form>
                </div>
            </div>
        </nav>

        // <Navbar bg="primary" variant="dark" expand="lg">
        //     <Container>
        //         <Link to="/"><Navbar.Brand>Opti-shop</Navbar.Brand></Link>
        //         <Nav className="me-auto">
        //             {/* link a categorias */}
        //             <Nav.Link to="/categoryId/lentes">Lentes</Nav.Link>
        //             <Nav.Link to="/categoryId/soluciones">Soluciones</Nav.Link>
        //             <Link to="/categoryId/anteojos"><Nav.Link>Anteojos</Nav.Link></Link>
        //             {/* componente cartwidget */}
        //             <CartWidget/>
        //         </Nav>
        //     </Container>
        // </Navbar>
    );
}

export default NavBar;