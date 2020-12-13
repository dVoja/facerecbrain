import { Component } from 'react';
import Clarifai from 'clarifai'
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import Rank from './Components/Rank/Rank'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import './App.css';


const app = new Clarifai.App({
  apiKey: '04a66b0d1c6747c2a0b54605b8bfb3a6'
});

const particlesOptions={
  particles:{
    number:{
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
      
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) =>{
      console.log(event.target.value)
  }

  onButtonSubmit = () =>{
    console.log('click');
    app.models.predict("04a66b0d1c6747c2a0b54605b8bfb3a6", "https://samples.clarifai.com/face-det.jpg").then(
      function(response){
        console.log(response)
      },
      function(err) {

      }
    )
  }
  render(){
    return (
      <div className="App">
        <Particles className='particles'
            params={particlesOptions} 
          />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
          onInputChange ={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
        {/*<FaceReckognition/>*/}

      </div>
    );
  }
}

export default App;
