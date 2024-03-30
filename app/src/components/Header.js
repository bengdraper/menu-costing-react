import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Art from '../app/assets/img/Art_1.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark sticky='top' expand='md'>
            <NavbarBrand className='ms-3' href='/'>
                <img src={Art} alt='logo' className='float-start' />                
                <h1 className='mt-3' >MENU CONTROL</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

            <Collapse isOpen={menuOpen} navbar >
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink to='/' className='nav-link'> 
                            Home  <i className='fa fa-home fa-lg' />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/MenusPage' className='nav-link'>
                            Menus  <i className='fa fa-cutlery ' />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/UserPage' className='nav-link'>
                            Users  <i className='fa fa-user fa-lg' />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/OrgSetupPage' className='nav-link'>
                            Setup  <i className='fa fa-wrench' />
                        </NavLink>
                    </NavItem>
                </Nav>

            </Collapse>
        </Navbar>
    )
}

export default Header