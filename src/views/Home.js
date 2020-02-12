import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import LoremIpsum from '../components/LoremIpsum';

export default () => {
    const [buttonLabel, setButtonLabel] = useState('click me');
    return (
        <Fragment>
            <Heading>Bonjour, monde.</Heading>
            <LoremIpsum />
            <div data-testid="emoji">😊</div>
            <button onClick={() => setButtonLabel('clicked!')}>
                {buttonLabel}
            </button>
        </Fragment>
    );
};

const Heading = styled.h1`
    border-bottom: 1px;
`;
