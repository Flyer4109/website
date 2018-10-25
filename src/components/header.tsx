import * as React from 'react';
import Helmet from 'react-helmet'

interface HeaderProps {
    title: string;
}

interface HeaderState {
    state1: number;
    state2: boolean;
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            state1: 0,
            state2: false,
        };
    }

    render() {
        return (
            <Helmet>
                <title>{this.props.title}</title>
                <html lang="en" />
                <meta charSet="UTF-8" />
                <meta name="author" content="Andres Isao Ramos-Yamasaki" />
                <meta name="description" content="Personal Website" />
            </Helmet>
        );
    }
}
