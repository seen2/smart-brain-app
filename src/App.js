import React, { Component } from 'react';
import 'tachyons';
import Particles from 'react-particles-js';

import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageForm from './components/imageForm/ImageForm';

const particlesOptions = {
	particles: {
		number: {
			value: 130,
			density: {
				enable: true,
				value_area: 800
			}
		}
	}
}

class App extends Component {
  render() {
    return (
			<div className="App" >
				<Navigation  />
				<Logo/>
				<ImageForm/>
				<Particles 
					className='particles'
					params={particlesOptions}
				/>
				{/*
				<FaceRecognition/>
				*/}
      </div>
    );
  }
}

export default App;
