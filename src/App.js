import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMoovieTC, setGanresTC, setPerfectTC, setTestTC } from './bll/moovieReducer';
import './App.css'
import Nav from './components/nav';
import GanresNav from './components/leftbar/ganres';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import TopMoovie from './components/topMoovie/topMoovie';
import Ganres from './components/ganres/ganres';
import MooviePage from './components/mooviePage/mooviePage';
import PopularMoovie from './components/popular/popular'
import Footer from './components/footer';
import ListFilm from './components/listFilm';
import MoovieYear from './components/moovieYear/moovieYearPage';

function App() {
  const perfect = useSelector((state) => state.moovie.perfect)
  const dispatch = useDispatch()    

  useEffect(() => {
    dispatch(setGanresTC())
    dispatch(setPerfectTC())
  },[])
  console.log(perfect)
  return (
    <BrowserRouter>
    <div className="wrapper">
        <Nav />
        <PopularMoovie />
    <div className="container">  
    <div className="row">
      <div className="col s12 m3">    
          <GanresNav />
      </div>
      <div className="col s12 m9">
        <Switch>
            <Route exact path="/" component={TopMoovie} />
            <Route path="/ganres/:name/:id" component={Ganres} />
            <Route path="/moovie/:id" component={MooviePage} />
            <Route path="/films/:years" component={MoovieYear} />
        </Switch>
      </div>
    </div>
    </div>
      <ListFilm />
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App;
