import { createContext, useContext } from 'react';
import Recommend from './store';

const stores = { recommend: new Recommend() };

const StoresContext = createContext(stores);

const StoresProvider = StoresContext.Provider;

const useMobxStore = () => useContext(StoresContext);

//const useMobxSelector = () => {};

export { stores, StoresProvider, useMobxStore };
