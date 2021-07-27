import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author1.jpg'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="Author | Susan M. Lee" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="Susan M. Lee"/>
                            </div>

                            <div className="heading-quote">
                                <h4>
                                “Profiling gives us a place to start and a way forward. Certain factors point to certain tendencies. But although profiling can be amazingly accurate, tendencies are not certainties. And justice must be predicated on fact, not theory.”
                                </h4>
                                <span className="ata-span-fx">
                                </span>
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Susan M. Lee was born in New Zealand.  She now lives in Northern Ontario with her Canadian husband, close to her children and grandchildren.  She worked for many years in the legal field.
                            </p>
                            <p>
                            Murder Most Complicated is the third in a series of stand-alone fictional murder mysteries which follow the investigations of Ontario Provincial Police Detectives Powell and Hopkins. 
                            </p>
                            <p>
                            Other books in the series are titled: <br/>

                            •	Death and Obsession (co-written with Reggie Caverson) <br/>
                            •	The Malice Effect <br/> <br/>
                            
                            Prior to this mystery series, Susan and Reggie co-wrote (under pseudonyms) It’s a Metaphysical World – Extraordinary Stories from Everyday Life.  <br/> (See website: metaphysical-world.com)

                            </p>
                            

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Susan M. Lee</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;