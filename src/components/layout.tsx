import React from 'react';
import Helmet from 'react-helmet';
import { Grommet, Grid, Box } from 'grommet';
import { base } from 'grommet/themes';
import Header from './header';
import './layout.css';

interface LayoutProps {
    lol: string;
    lol2: number;
}

interface LayoutState {
    state1: string;
}

export default class Layout extends React.Component<LayoutProps, LayoutState> {
    constructor(props: LayoutProps) {
        super(props);
        this.state = {
            state1: 'hello',
        };
    }

    harry_surfs() {
        console.log(this.state);
    }

    render() {
        this.harry_surfs();
        console.log(this.props.children);
        return (
            <Grommet full={true} theme={base}>
                <Helmet>
                    <title>Isao Ramos</title>
                    <html lang="en" />
                    <meta charSet="UTF-8" />
                    <meta name="author" content="Andres Isao Ramos-Yamasaki" />
                    <meta name="description" content="Personal Website" />
                </Helmet>
                <Grid
                    fill={'true'}
                    areas={[
                        { name: 'nav', start: [0, 0], end: [0, 0] },
                        { name: 'header', start: [0, 1], end: [0, 1] },
                        { name: 'main', start: [0, 2], end: [0, 2] },
                    ]}
                    rows={['6%', '47%', '47%']}
                    columns={['full']}
                >
                    <Box
                        gridArea={'nav'}
                        border={{ color: 'accent-1',side: 'all', size: 'large' }}
                    >
                        hello
                    </Box>
                    <Box
                        gridArea={'header'}
                    >
                        hello2
                    </Box>
                    <Box
                        gridArea={'main'}
                        border={{ color: 'accent-3', side: 'all', size: 'large' }}
                    >
                        hello
                    </Box>
                </Grid>
            </Grommet>
        );
    }
}
