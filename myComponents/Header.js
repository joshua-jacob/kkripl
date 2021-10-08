import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import './header.css'
import Axios from 'axios'
import Banner from './Banner'
import Ami from './constants/Ami.jpg'





export default function Header() {
  const[search, setSearch]=useState('')
  const[batsman,setBatsman]=useState([])
  const[RunRate,setRunRate]=useState([])
  const[bowler,setBowler]=useState([])
  useEffect(()=>{
    Axios.get("http://localhost:9000/details1").then((response)=>
    { 
      setBatsman(response.data);
    
    })
    Axios.get("http://localhost:9000/details2").then((response)=>
    {
      setRunRate(response.data);
    })
    Axios.get("http://localhost:9000/details3").then((response)=>{
      setBowler(response.data);
    })
  },[])
 
  const submit=()=>{
    window.location.href="http://localhost:3000/viewPlayer";
    Axios.post("http://localhost:9000/go",{search:search});
  };
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
      <body class="bd">
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
                  <a class="nav-link" href="javascript:void(0)">
                    Home
                  </a>
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
        <div><h1 class="gous">GLIMPSE OF OUR SUCCESS</h1></div>
        <Banner/>
        <div><h2 class="goush2">Previous Year Stats</h2></div>
        <div class="data">
        <table class='styled-table'>
          <thead>
            <tr>
            <th>Description</th>
            <th>Holders</th>
            </tr>
            </thead>
            <tr>
              <td>Last Season Finish</td>
              <td>5th</td>
            </tr>
            <tr>
              <td>Wins</td>
              <td>7</td>
            </tr>
            <tr>
              <td>Loss</td>
              <td>7</td>
            </tr>
            <tr>
              <td>Highest Batting avg</td>
              <td><div class="some">{batsman.map((i)=>{
                return(
                  <p>{i.batsman}</p>
                )
              })}
              </div></td>
            </tr>
            <tr>
              <td>Highest Wickets</td>
              <div class="some">{bowler.map((i)=>{
                return(
                  <p>{i.bowler}</p>
                )
              })}
              </div>
            </tr>
            <tr>
              <td>Net Run Rate</td>
              <div class="some2">{RunRate.map((i)=>{
                return(
                  <p>{i.RunRate}</p>
                )
              })}
              </div>
            </tr>
          </table>
        </div>
        <br/>
        <br/>
        <br/>
      </body>
    </html>
  );
}

