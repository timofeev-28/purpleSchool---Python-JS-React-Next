'use client';

import { createContext, JSX, PropsWithChildren } from 'react';

export interface IContext {
    github: string;
}

export const GithubContext = createContext<IContext>({github: ''});

export const GithubContextProvider = ({ github, children }: PropsWithChildren<IContext>): JSX.Element => {
    return (
        <GithubContext.Provider value={{ github }}>
            {children}
        </GithubContext.Provider>
    );
};
