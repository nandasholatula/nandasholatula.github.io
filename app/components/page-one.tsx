'use client'

import React, { useEffect, useState } from 'react';
import img from '../assets/home/home-bg.jpg';
import styled from 'styled-components';
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Image from 'react-bootstrap/Image';
import Partikel from './Partikel';
import "../public/App.css";


const pageOne = () => {

  // const [blog, blogs] = useState([]);

  // const getData = () => {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:3000/api", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => blogs(result))
  //     .catch((error) => console.log("error", error));
  // };

  // useEffect(() => {
  //   console.log(getData());
  // }, []);
  const blog = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1 ini' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3' },
    // Add more cards as needed
  ];

  return (
    <section>
      <div  className="home-section" id="home">
        <Partikel />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello, folks!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                
                <strong className="main-name"> Discover my stories and creative ideas.</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
           
                <Typewriter
                  options={{
                    strings: [
                      "Software Developer",
                      "Freelancer"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
              
            </Col>

           
          </Row>
        </Container>
      </div>
    </section>

    
  );
};

export default pageOne;