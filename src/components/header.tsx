import * as React from 'react';

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
        return <p>Hello</p>;
    }
}
