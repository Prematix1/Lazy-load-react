import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LazyLoad from 'react-lazy-load'; 
class App extends Component { 

  render() { 
    return (
      <div className="App">
        <div>
          Scroll to load images.
    <div className="filler" />
          <LazyLoad height={762} offsetVertical={300}>
            <img src={logo} alt="" />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad height={683} offsetTop={200}>
            <img src='http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg' alt="" />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad height={480} offsetHorizontal={50}>
            <img src='http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif' alt="" />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad
            height={720}
            onContentVisible={() => console.log('look ma I have been lazyloaded!')}
          >
            <img  src='http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg' alt="" />
          </LazyLoad>
          <div className="filler" />
        </div>
      </div>
    );
  }
}

export default App;
