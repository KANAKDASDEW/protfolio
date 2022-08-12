
import './App.css';

import Header from './views/components/Header';
import Intro from './views/components/Intro';
import Contact from './views/components/Contract';
import { Switch, Route, Link,  BrowserRouter as Router,
} from "react-router-dom";
import About from './views/components/About';
import Footer from './views/components/Footer';
import Work from './views/components/Work';
import AllWork from './views/components/Allwork';


function App() {



  return (
  

<Router>

      
     <Switch>
        
     <Route exact path="/">
           <Header/>
           <Intro/>
           <About/>
           <Work/>
           <Contact/>
           <Footer/>
          </Route>
          <Route path="/home">
            <Header />
            <Intro />
            <About/>
            <Work />
            <Contact />
            <Footer />
            </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/work">
            <Header />
            <AllWork />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
           
          
            </Switch>
   
    </Router>



    

  
    
  );
}

export default App;

//    <Route path="/" element={<Home />} />


// chnages
// chnages
// chnages
// chnages
// chnages

