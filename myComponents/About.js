import React,{useState,useEffect} from 'react'
import './header.css'
import {Link} from "react-router-dom";
import'./about.css'
import Axios from 'axios'
import Ami from './constants/Ami.jpg'

export default function About() {
  const[search, setSearch]=useState('')
  
 
  const submit=()=>{
    window.location.href="http://localhost:3000/viewPlayer";
    Axios.post("http://localhost:9000/go",{search:search});
  };
    return (
        <html>
        <head>
          <meta charset="utf-8"/>
          <title>Our Team</title>
          <link href="style.css" rel="stylesheet" type="text/css" />
          <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"/>
        </head>
        <body className="bd3">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed:300,400,700" />
     <nav class="navbar navbar-expand-sm navbar-dark ">
          <div class="container-fluid">
            <a href="# " class="logo">
              <img
                src="https://toppng.com/uploads/preview/kkr-squad-ipl-kolkata-knight-riders-logo-11562993217o9jojr35hy.png"
                alt="The logo of Project"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/players">
                    Players
                  </Link>
                </li>
                <li class="nav-item-centre"></li>
                <div class="ami"><a href="#">
                <img src={Ami}
                alt="The logo of Project" 
              />
            </a></div>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="text"
                  placeholder="Search"onChange={(e)=>{
                    setSearch(e.target.value)
                  }
                  }
                />
                <button class="btn btn-primary" type="button" onClick={submit}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      
          <section class="content">
            <div class ="image">
              <img src="https://www.kkr.in/static-assets//images/cssimages/about-us.jpg?v=1.1"/>
            </div>
            <div class="main-text">
              <h1>ABOUT US </h1>
              <p>The name Knight Riders was chosen to mirror the values and culture we uphold. We are impassioned by courage, youth, talent, ambition, focus and dedication and armed with the recognition that with great honor comes greater responsibility.

Responsibility of wisdom, perseverance, ethics, morality and professionalism which we maintain as a benchmark for our brand and in everything we do.

</p>
              
            </div>
          </section>
        </body>
      </html>
    )
}
