import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'}
    }
    
    h2 {
        font-size: 1.2rem;
        color: gray;
    }
`

const AppHeader = ({ posts, liked }) => {
    return (
        <Header as='a'>
            <h1>onnkek</h1>
            <h2>{posts} posts, {liked} likes</h2>
        </Header>
    )
}

export default AppHeader;