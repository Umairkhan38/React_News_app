import React, { Component } from 'react'
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import News from './News';


export default class App extends Component {

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div className='APP'>
          <Router>
        <Navbar />
        <LoadingBar
        height={2.5}
        color='rgb(0,0,135)'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route exact path='/'element={<News setProgress={this.setProgress} key='General' pageSize={21}Gcategory='General'/>} />
        <Route exact path='/business' element={<News setProgress={this.setProgress} pageSize={21} category='Business' />}/>
        <Route exact path='/Entertainment' element={<News setProgress={this.setProgress} key='Entertainment' pageSize={21} category='Entertainment'/>}/>
        <Route exact path='/General' element={<News setProgress={this.setProgress} key='General' pageSize={21}category='General' />}/>
        <Route exact path='/Health' element={<News setProgress={this.setProgress} key='Health' pageSize={21} category='Health' />}/>
        <Route exact path='/Science' element={<News setProgress={this.setProgress} key='Science' pageSize={21} category='Science' />}/>
        <Route exact path='/Sports' element={<News setProgress={this.setProgress} key='Sports'pageSize={21} category='Sports' />}/>
        <Route exact path='/Technology' element={<News setProgress={this.setProgress} key='Technology' pageSize={21} category='Technology'/>}/>
       
        </Routes>
        </Router>        
      </div>
    )
  }
}

