import React from 'react'
import classes from './About.module.scss'
import classNames from 'classnames'

import gameController from '../img/gameController.svg'
import goggles from '../img/goggles.svg'
import store from '../img/store.svg'
import monaLisa from '../img/monaLisa.svg'

const About = () => {
    return(
        <div className={classes.container}>
            <h2 className={classes.heading}>Spores Network Ecosystem</h2>
            <div className={classes.contentText}>
                <p className={classes.text}>
                    Spores Network is a GameFi and Metaverse Publisher seeking to empower Web3 experiences that 
                    integrate with culturally forward Entertainment IP and Corporate Brands
                </p>
            </div>
            <p className={classes.title}>GameFi / Metaverse Publisher</p>
            <div className={classes.content}>
                <p className={classes.text}>Entertainment IP and Corporate Brands</p>
                <div className={classes.contentRow}>
                    <div className={classNames(classes.content, classes.mr)}>
                        <div className={classes.row}>
                            <img src={gameController} alt='icon' className={classes.icon} />
                            <span className={classes.title}>GameFi Studio</span>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.row}>
                            <span className={classes.title}>GameFi Studio</span>
                            <img src={goggles} alt='icon' className={classes.icon} />  
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.BoutiqueLaunchpad}>
                <p className={classes.title}>Boutique Launchpad</p>
                <div className={classes.row}>
                    <p className={classes.text}>Rug-Proof Mechanisms</p>
                    <p className={classes.text}>Guaranteed Allocation</p>
                    <p className={classes.text}>High-Quality Projects</p>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.contentRow}>
                    <div className={classNames(classes.content, classes.mr)}>
                        <ul>
                            <li className={classes.item}>
                                Identify, invest, incubate, and operate experienced Web3 design teams in-house; 
                                delivering VC services across CMO (brand activation, community development, marketing), 
                                CFO (finance), and blockchain technology solutions to launch
                            </li>
                            <li className={classes.item}>
                                IDO, INO, IGO partnerships
                            </li>
                            <li className={classes.item}>
                                Offers access to high value platforms at early-stage pricing
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                        <ul>
                            <li className={classes.item}>
                                Spores develops own metaverses – Voxel, 3D
                            </li>
                            <li className={classes.item}>
                                Spores is a landowner who owns and rents land across other metaverses. 
                            </li>
                            <li className={classes.item}>
                                Offers open world to entertainment IP and corporate brands
                            </li>
                            <li className={classes.item}>
                                Creates advertising, media, and event activation opportunities
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.contentFooter}>
                    <div className={classes.row}>
                        <img src={store} alt='icon' className={classes.icon} />
                        <span className={classes.title}>Aggregator Marketplace</span>
                    </div>
                    <div className={classes.row}>
                        <span className={classes.title}>République Marketplace & Gallery</span>
                        <img src={monaLisa} alt='icon' className={classes.icon} />  
                    </div>
            </div>
            </div>
            <div className={classes.ValueCreation}>
                <div className={classes.left}>
                    <p className={classes.title}>
                        Value Creation
                    </p>
                </div>
                <div className={classes.right}>
                    <ul>
                        <li className={classes.item}>
                            Token / Equity Value of Incubated Projects
                        </li>
                        <li className={classes.item}>
                            Revenue from Incubated Projects 
                        </li>
                        <li className={classes.item}>
                            GameFi Revenue Sources
                        </li>
                        <li className={classes.item}>
                        Metaverse Revenue Sources
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    )
}

export default About