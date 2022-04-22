import React from 'react'
import { Link } from 'react-router-dom';

const FooterPage = () => {
    return (
        <div className='container sticky-bottom'>
            <div className='py-3 my-4'>
                <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                    <li className='nav-item'>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <a href='#' className='nav-link px-2 text-muted'>Home</a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="category/1" style={{textDecoration: 'none'}}>
                            <a href='#' className='nav-link px-2 text-muted'>Lentes de contacto</a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="category/2" style={{textDecoration: 'none'}}>
                            <a href='#' className='nav-link px-2 text-muted'>Anteojos</a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="category/3" style={{textDecoration: 'none'}}>
                            <a href='#' className='nav-link px-2 text-muted'>Soluciones</a>
                        </Link>
                    </li>
                </ul>
                <p className='text-center text-muted'> 
                    @2022 Opti-shop inc. Derechos reservados.
                </p>
            </div>
        </div>
    );
}

export default FooterPage;