'use client';

import { createContext } from 'react';

const SidebarContext = createContext({});

export function Sidebar() {
    return (
        <SidebarContext.Provider value={({})}>
            <div>Контент какой-то</div>
        </SidebarContext.Provider>
    )
}

// Это всё сделано для примера использования контекста
