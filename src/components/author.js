import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../static/author/author1.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                        Susan Lee was born in New Zealand.  She now lives in Northern Ontario with her Canadian husband, close to her children and grandchildren.  She worked for many years in the legal field.
                        </p>

                        <h1 className="author-name-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <span></span>
                            <span>Susan M. <br/>Lee</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>

                        <button className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" >
                            <Link to="/about-the-author">Read More</Link>
                        </button>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;