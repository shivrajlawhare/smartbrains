import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Design from './components/particles/Design';
import { Component } from 'react';



class App extends Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  render(){
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange = {this.onInputChange}
          onButtonSubmit = {this.onButtonSubmit}/>
        <Design />
        {/* {
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
