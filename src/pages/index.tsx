import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
//import Heading from 'grommet/components/Heading';
import { Button, Box, Grid, Image, Heading, Carousel } from 'grommet';
import * as Icons from 'grommet-icons';
import { base } from 'grommet/themes';
import japan from '../images/japan.jpg';

const IndexPage = () => (
    <Layout title={'Testing'}>
        <Grid
            fill={true}
            areas={[
                { name: 'image', start: [0, 0], end: [0, 0] },
                { name: 'main', start: [0, 1], end: [0, 1] },
            ]}
            rows={['63%', '37%']}
            columns={['full']}
        >
            <Box gridArea={'image'} background={'black'}>
                <Carousel play={4000} fill={true}>
                    <Image src={japan} fit={'cover'} style={{width: '100%', height: '60vh'}} />
                    <Image src={japan} fit={'cover'} style={{width: '100%', height: '60vh'}} />
                    <Image src={japan} fit={'cover'} style={{width: '100%', height: '60vh'}} />

                </Carousel>
            </Box>
            <Box gridArea={'main'} align="center">
                <Heading
                    level="1"
                    responsive={true}
                    textAlign="center"
                    margin="none"
                >
                    Isao Ramos-Yamasaki
                </Heading>
            </Box>
        </Grid>
    </Layout>
);

export default IndexPage;

/* <Layout lol="strong" lol2={0}>
        <Heading strong={false}>
            Sample Heading
        </Heading>
        <Button label='Label' />


<Box>
    <Button
        icon={<Icons.Action />}
        label="Edit"
        onClick={() => alert('Clicked')}
    />
</Box>

<h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<Link to="/page-2/">Go to page 2</Link>
</Layout>*/
