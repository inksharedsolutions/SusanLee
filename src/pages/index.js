import React from 'react';

import Layout from '../components/layout';
import Nav from '../components/nav';
import Banner from '../components/banner';
import MidBook from '../components/front-book';
import Author from '../components/author';
// import ParallaxBottom from "../components/parallax-bottom"
import FeaturedLogos from '../components/mid-main';
import { Helmet } from 'react-helmet';

const IndexPage = (props) => (
	<Layout>
		<Helmet title="Home | Susan M. Lee" />
		<Nav pathExt={props.path} />
		<Banner />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<MidBook />
		<Author />
		{/* <ParallaxBottom /> */}
		<FeaturedLogos />
	</Layout>
);

export default IndexPage;
