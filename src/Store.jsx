import React, { createContext, useState } from 'react';

export const GlobalStoreContext = createContext({
    isAppLoaded: false,
    latitude: 0,
    longitude: 0,
    city: null,
    currentTemp: null,
    JSON: {},
});

export function Store({ children }) {
    const [globalStore, setGlobalStore] = useState({
        isAppLoaded: false,
        latitude: 0,
        longitude: 0,
        city: null,
        currentTemp: null,
        JSON: {},
    });

    return (
        <GlobalStoreContext.Provider value={[globalStore, setGlobalStore]}>
            {children}
        </GlobalStoreContext.Provider>
    );
}

export default Store;
