import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

export default () => {
    const [buttonLabel, setButtonLabel] = useState('click me');
    return (
        <Fragment>
            <Heading>Bonjour, monde.</Heading>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div data-testid="emoji">😊</div>
            <button onClick={() => setButtonLabel('clicked!')}>
                {buttonLabel}
            </button>
        </Fragment>
    );
};

const Heading = styled.h1``;
