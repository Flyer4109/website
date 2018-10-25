import React from 'react';
import { Grommet, Grid, Box } from 'grommet';
import { base } from 'grommet/themes';
import Header from './header';
import './layout.css';

interface LayoutProps {
    title: string;
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
                <Header title={this.props.title} />
                <Grid
                    fill={'true'}
                    areas={[
                        { name: 'nav', start: [0, 0], end: [0, 0] },
                        { name: 'main', start: [0, 1], end: [0, 1] },
                    ]}
                    rows={['5%', '95%']}
                    columns={['full']}
                >
                    <Box gridArea={'nav'} background={'dark-1'} />
                    <Box
                        gridArea={'main'}
                        align="center"
                    >
                        {this.props.children}
                    </Box>
                </Grid>
            </Grommet>
        );
    }
}
