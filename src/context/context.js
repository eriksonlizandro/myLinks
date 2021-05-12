import React from 'react';

const MyLinksContext = React.createContext(); 

export const MyLinksProvider = MyLinksContext.Provider;
export const MyLinksConsumer = MyLinksContext.Consumer;

export default MyLinksContext;