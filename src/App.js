
import { Grid,Container } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'



function App() {
  return (
    
      <Container className='res'>
        <Grid container spacing={7} >
          <Grid item xs={12} sm={12} lg={3} md={4}>
            <Profile/>
          </Grid>
          
          <Grid item xs style={{}}>
            
            <Router>
            <Header />
            <div className='main-content container_shadow'>
            <Routes>
                  <Route path='/portfolio' element={<Portfolio/>}>
                  
                  </Route>
                  <Route path='/' element={<Resume/>}>
                  
                  </Route>
                </Routes>

            </div>
               
            </Router>
            
            <Footer/>            
          </Grid>

        </Grid>
      </Container>
  );
}

export default App;
