import React from 'react'
import classes from './AmbassadorProgram.module.scss'
import ambassador from '../img/ambassador.png'

import target from '../img/target.svg'
import businessman from '../img/businessman.svg'
import benefit from '../img/benefit.svg'
import settings from '../img/settings.svg'

const AmbassadorProgram = () => {
    return(
        <div className={classes.container}>
            <img src={ambassador} alt='img' className={classes.img} />
            <div className={classes.content}>
                <h2 className={classes.heading}>Spores Ambassador Program</h2>
                <p className={classes.text}>
                    Our founders are embarking on a mission to create a digital ecosystem that focuses on NFT and GameFi projects while emphasizing the importance and value of creators and communities.
                    To make it happen, we need to have Spores Warriors become our right hand in brand activation and community outreaching within the crypto world.
                </p>
            </div>
            <div className={classes.contentRow}>
                <div className={classes.row}>
                    <img src={target} alt='icon' className={classes.icon} />
                    <p className={classes.title}>Who we are looking for</p>
                </div>
                <div className={classes.rowAround}>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Crypto & blockchain enthusiasts
                            </li>
                            <li className={classes.item}>
                                Well-networked individuals
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Resourceful, creative, and self-motivated individuals
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Outstanding verbal and written communication skills
                            </li>
                            <li className={classes.item}>
                                Ability to deliver engaging presentations
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className={classes.contentRow}>
                <div className={classes.row}>
                    <img src={businessman} alt='icon' className={classes.icon} />
                    <p className={classes.title}>Responsibilities</p>
                </div>
                <div className={classes.rowAround}>
                    <div className={classes.content}>
                        <p className={classes.label}>Business Development</p>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Find and onboard new potential partners on Spores Marketplace, GameStore, Launchpad
                            </li>
                            <li className={classes.item}>
                                Raise funds for Spores’ incubated projects
                            </li>
                            <li className={classes.item}>
                                Organize and host meet-ups with fellow crypto-fanatics and local investment communities (if possible)
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                    <p className={classes.label}>Partner Relations</p>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Represent Spores at industry events, conferences, and workshops to drive conversations and create interest with potential industry players (if possible)
                            </li>
                            <li className={classes.item}>
                                Acquire and develop trust relationships with industry players, including crypto projects, NFTs projects, communities, KOLs, VCs, game guilds
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                    <p className={classes.label}>Brand Advocacy t</p>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Become a product expert and brand ambassador
                            </li>
                            <li className={classes.item}>
                                Function as Spores Network community expert — understand programs, activate community conversations, be part of helping build a vibrant community
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className={classes.contentRow}>
                <div className={classes.row}>
                    <img src={benefit} alt='icon' className={classes.icon} />
                    <p className={classes.title}>Benefits</p>
                </div>
                <div className={classes.rowAround}>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Incentives for organizing meet-ups & representing Spores at events
                            </li>
                            <li className={classes.item}>
                                Huge bonuses for referring successful partnerships
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                VIP tier on Spores launchpad
                            </li>
                            <li className={classes.item}>
                                Opportunity to work directly with our experienced industry leaders
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                Exclusive invitations to Spores events and meet-ups and exclusive Spores gifts and merchandise
                            </li>
                            <li className={classes.item}>
                                Opportunity to join Spores as a full-time employee
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className={classes.contentRow}>
                <div className={classes.row}>
                    <img src={settings} alt='icon' className={classes.icon} />
                    <p className={classes.title}>How to participate</p>
                </div>
                <div className={classes.rowAround}>
                    <div className={classes.content}>
                        <div className={classes.row}>
                            <p className={classes.number}>1</p>
                            <p className={classes.text}>Fill out this<br /> 
                                <a >Google Form</a>
                            </p>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.row}>
                            <p className={classes.number}>2</p>
                            <p className={classes.text}>
                             Spores will review the application within 7 working days.
                            </p>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.row}>
                            <p className={classes.number}>3</p>
                            <p className={classes.text}>
                                Interview with the Community Manager — Investor Relations
                            </p>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.row}>
                            <p className={classes.number}>4</p>
                            <p className={classes.text}>
                            Interview <br /> with CMO
                            </p>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.btn}>Apply Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmbassadorProgram