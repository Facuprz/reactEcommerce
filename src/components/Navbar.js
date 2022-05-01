// Boostrap Navbar
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container fluid>
                <Link to='/' style={{textDecoration: 'none'}}><Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src="https://cdn-icons-png.flaticon.com/512/3617/3617003.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Opti-shop
                </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/category/1' style={{textDecoration: 'none'}}><Nav.Link href="#home">Lentes de contacto</Nav.Link></Link>
                        <Link to='/category/2' style={{textDecoration: 'none'}}><Nav.Link href="#link">Anteojos</Nav.Link></Link>
                        <Link to='/category/3' style={{textDecoration: 'none'}}><Nav.Link href="#home">Soluciones</Nav.Link></Link>
                    </Nav>
                    <Nav>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;