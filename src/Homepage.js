import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import File1 from './componentHome/File1';
import File2 from './componentHome/File2'
import Heder from './componentHome/Heder';

const Homepage = () =>{
    return(
        <div>
            <div>
                <Heder />
            </div>
            <div>
                <Router>
                    
                    <Switch>
                        <Route path="/" exact>
                        <File1 />
                        </Route>
                        <Route path="/about" component={File2}>
                        {/* <File2 /> */}
                        </Route>
                        <Route path="/blog">
                            111111
                        </Route>
                    </Switch>
                    
                </Router>
            </div>
        </div>
    )
}
export default Homepage
