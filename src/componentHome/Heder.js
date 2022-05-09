import React from 'react'
// import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, NavLink, Link} from 'react-router-dom'
import classes from './style/Header.module.scss'

const Heder = () =>{
    return(
        <div className={classes.container} >
            <Router>
                <a href="/"
                    className={classes.link}
                    activeClassName={classes.linkActive}
                >
                    <span>home</span> 
                </a>
                <a href="/about"
                    className={classes.link}
                    activeClassName={classes.linkActive}
                >about</a>
                <a href="/blog"
                    className={classes.link}
                    activeClassName={classes.linkActive}
                >blog</a>
            </Router>
            
        </div>
    )
}
export default Heder
 