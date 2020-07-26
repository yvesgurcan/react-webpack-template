import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import LoremIpsum from '../components/Home.LoremIpsum';

const isServiceWorkerRegistered = async (
    serviceWorker: ServiceWorkerContainer
) => {
    if (serviceWorker) {
        const registrations = await serviceWorker.getRegistrations();
        return registrations.length > 0;
    }

    return false;
};

const registerServiceWorker = (serviceWorker: ServiceWorkerContainer) => {
    serviceWorker.register('/service-worker.js');
};

const unregisterServiceWorker = async (
    serviceWorker: ServiceWorkerContainer
) => {
    if (serviceWorker) {
        const registrations = await serviceWorker.getRegistrations();
        for (let registration of registrations) {
            registration.unregister();
        }
    }
};

export default () => {
    const [buttonLabel, setButtonLabel] = useState('click me');
    const [offlineAccessEnabled, setOfflineAccessEnabled] = useState(false);

    useEffect(() => {
        async function getServiceWorkerRegistration() {
            const serviceWorkerRegistered = await isServiceWorkerRegistered(
                navigator.serviceWorker
            );
            setOfflineAccessEnabled(serviceWorkerRegistered);
        }
        getServiceWorkerRegistration();
    });

    return (
        <Fragment>
            <Heading>Bonjour, monde.</Heading>
            <LoremIpsum />
            <div data-testid="emoji">😊</div>
            <button onClick={() => setButtonLabel('clicked!')}>
                {buttonLabel}
            </button>
            <label>
                <input
                    type="checkbox"
                    checked={offlineAccessEnabled}
                    onChange={async () => {
                        const updatedOfflineAccessEnabled = !offlineAccessEnabled;
                        if (updatedOfflineAccessEnabled) {
                            registerServiceWorker(navigator.serviceWorker);
                        } else {
                            unregisterServiceWorker(navigator.serviceWorker);
                        }
                        setOfflineAccessEnabled(updatedOfflineAccessEnabled);
                    }}
                />
                Service worker
            </label>
        </Fragment>
    );
};

const Heading = styled.h1`
    border-bottom: 1px;
`;
