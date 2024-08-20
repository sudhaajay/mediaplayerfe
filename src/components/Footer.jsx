import React from "react"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="d-flex justify-content-center aline-items-center">
      <div className='d-flex justify-content-evenly align-items-center'>
        <div style={{ width: "400px" }}>
          <h5 className="textStyle"><i className="fa-solid fa-video text-warning me-3"></i>Media Player</h5>
          <p style={{ textAlign: "justify"}} className="textStyle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            culpa nemo! Odio, minus debitis cumque non assumenda reprehenderit,
            inventore quas et libero voluptates repellat quam soluta eaque
            laudantium totam iure!
          </p>
        </div>
        <div className='d-flex flex-column ms-3' >
          <h4 className="textStyle">Links</h4>
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Landing Page</Link>
          <Link to='/home' style={{textDecoration: 'none', color: 'white'}}>Home</Link>
          <Link to='/watch' style={{textDecoration: 'none', color: 'white'}}>Watchhistory</Link>
        </div>

        <div className='d-flex flex-column ms-3' >
          <h4 className="textStyle">Gudies</h4>
          <Link to="https://react.dev/" target='_blank' style={{textDecoration: 'none', color: 'white'}}>React</Link>
          <Link to='https://react-bootstrap.netlify.app/'  target='_blank'  style={{textDecoration: 'none', color: 'white'}}>React Bootstrap</Link>
          <Link to='https://www.npmjs.com/package/json-server'  target='_blank'  style={{textDecoration: 'none', color: 'white'}}>Json Server</Link>
        </div>

        <div className='ms-5'>
          <h4 className="textStyle">Contact Us</h4>
      <div className='d-flex'>
        <input type="text"className='form control' placeholder="Enter your email id"/>
        <button className='btn btn-warning ms-2'>SUBSCRIBE</button>
        </div>
         <div className='d-flex justify-content-evenly align-items-center mt-3'>
        <Link style={{textDecoration: 'none', color: 'white'}}><i className="fa-brands fa-instagram"></i></Link>
        <Link style={{textDecoration: 'none', color: 'white'}}><i className="fa-brands fa-facebook"></i></Link>
        <Link style={{textDecoration: 'none', color: 'white'}}><i className="fa-brands fa-twitter"></i></Link>
        <Link style={{textDecoration: 'none', color: 'white'}}><i className="fa-brands fa-reddit"></i></Link>
        </div>
      
        </div>
      </div>
    </div>
  );
}

export default Footer;
