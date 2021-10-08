import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {Link} from "react-router-dom";
import Ami from './constants/Ami.jpg'
import './viewPlayer.css'

export default function ViewPlayer() {
    const[search, setSearch]=useState('')
  
 
    const submit=()=>{
      window.location.href="http://localhost:3000/viewPlayer";
      Axios.post("http://localhost:9000/go",{search:search});
    };
    const[playerslist,setplayerslist]=useState([])
    useEffect(()=>{
        Axios.get("http://localhost:9000/go/show").then((response)=>{
         setplayerslist(response.data);
         
        })
        },[])

    return (
        <html>
        <head>
          <meta charset="utf-8" />
          <title></title>
          <link href="style.css" rel="stylesheet" type="text/css" />
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </head>
        <body class="bd1">
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
                    type="text" name="search"
                    placeholder="Search" onChange={(e)=>{
                      setSearch(e.target.value)
                    }
                    }
                  />
                  <button class="btn btn-primary" type="button" onClick={submit} >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <h1 class="h1b">PLAYER DETAILS</h1>
          <div class='display'>
            {playerslist.map((val)=>{
             return(
                 
             <div class="player">
                <img src={val.image} alt="no image"/>  
                <div class="data">        
                <h4>Player name : {val.name}</h4>
                <h4> Age : {val.age}</h4>
                <h4> Runs:{val.Runs}</h4>
                <h4> Role : {val.type}</h4>
                <div class="data2">
                  <div class='d3'>
                <h4> Country : {val.country}</h4>
                <h4> Innings : {val.innings}</h4>
                <h4> Bat averge: {val.batavg}</h4>
                <h4> Wickets : {val.wickets}</h4>
                <h4> Debut : {val.debut}</h4>
                </div>
                </div>
                </div>
             </div>
            )})}
        </div>
    
        </body>
            </html>

      





        
    )
}
