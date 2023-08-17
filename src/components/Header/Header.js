import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { HomeRounded } from '@mui/icons-material';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import { Telegram } from '@mui/icons-material';
import './Header.css'


const Header = (props) => {
  const pathName= props?.location?.pathname;
  return (
    <Navbar expand="lg" className="header" sticky='top' >
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'>
          <HomeRounded/>
          </Navbar.Brand>

      </Nav.Link>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav className='header_left'>
          {/* Resume Link */}
          <Nav.Link as ={NavLink} to='/' className={pathName ==='/' ? 'header_link_active' :'header_link'}>Resume</Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link as={NavLink} to='/portfolio' className={ pathName === '/portfolio ' ? 'header_link_active' : 'header_link'}>
            Portfolio
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(resumeData.Socials).map(key => (
            <a href={resumeData.Socials[key].link} target="_blank"  rel="noreferrer" >{resumeData.Socials[key].icon}</a>
          ))}
         
          <a href='#contact' >
          <CustomButton text={'Hire Me'} icon={<Telegram/>}/>
          </a>
        </div>

        </Navbar.Collapse>
      
    </Navbar>
  )
}

export default Header;