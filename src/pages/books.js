import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book3 from '../../static/books/book3.png'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'susan-m-lee',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="Books | Susan M. Lee" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={``}
                    contextHeading={`Books`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Murder Most Complicated`,
                                spanFirst: ``,
                                imgSrc: Book3,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        A young woman survives an attempted murder in Sudbury, Ontario, and Detective Inspector Vincent Powell is assigned to the case. However, nothing is as simple as it first appears. The investigation develops a life of its own, and Vincent finds himself working with police teams on both sides of the Atlantic. FBI-trained profiler and criminologist Dr. Gary Hopkins is a member of the joint task force, but even he is challenged by the complexity of this investigation. Who wants this young woman dead? The whys and wherefores may be understood, but where is the proof? And can the perpetrator be brought to justice?
                                        </p> 
                                        <p>
                                        Murder Most Complicated is a psychological mystery and an old-fashioned whodunit. It will keep you guessing until the end.

                                        </p>
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/murder-most-complicated-susan-m-lee/1139210069?ean=9781648953613',
                                    amazon: 'https://www.amazon.com/Murder-Most-Complicated-Susan-Lee-ebook/dp/B092QV61KD/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1618257517&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Murder-Most-Complicated-Susan-Lee/dp/1648953603/ref=sr_1_1?dchild=1&keywords=9781648953606&qid=1618257517&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/murder-most-complicated-susan-m-lee/1139210069?ean=9781648953606',
                                    booksamillion: 'https://www.booksamillion.com/p/Murder-Most-Complicated/Susan-M-Lee/9781648953606?id=8258036461372',
                                }
                            }}
                        />

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;