import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Component } from 'react';
import{Routes,Route} from 'react-router-dom';
import Menubar from './components/Menubar';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences'; 
import Contact from './components/Contact';
import Setting from './components/Setting';
import Footer from './components/Footer';
import EditExperience from './components/EditExperience';
import CreateExperience from './components/CreateExperience';


class App extends Component {
  render(){
    return (
      <>
        <Menubar/>
          <div className='App'>
            <main className='main'>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/experiences' element={<Experiences/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/setting' element={<Setting/>} />
                <Route path='/edit-experience/:id' element={<EditExperience/>} />
                <Route path='/create-experience' element={<CreateExperience/>} />
              </Routes>
            </main>
          </div>
        <Footer/>
      </>
    );
  }

}

export default App;
