import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home  from '../Home';
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBLog/index';
import { Footer, Header } from '../../components/molecules';
import './mainApp.scss'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <div className="header-wrapper">
                <Header/>
            </div>
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/create-blog">
                            <CreateBlog/>
                        </Route>
                        <Route path="/detail-blog">
                            <DetailBlog/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </div>
            <div className="footer-wrapper">
                <Footer/>
            </div>
        </div>
        
                   
    )
}

export default MainApp
