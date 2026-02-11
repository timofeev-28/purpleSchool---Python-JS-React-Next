import { UserState } from './user.slice';

export const KEY_LOCAL_STORAGE = 'user';

export function loadState<T>(key: string): T | [] {
    try {
        const jsonState = localStorage.getItem(key);
        if (!jsonState) {
            return [];
        }
        return JSON.parse(jsonState);
    } catch(e) {
        console.error(e);
        return [];
    }
}

export function saveState<T>(state: T, key: string) {
    const stringState = JSON.stringify(state);
    localStorage.setItem(key, stringState);
}

export const getInitialState = () => {
    const res: UserState[] = loadState(KEY_LOCAL_STORAGE);
    const userIsLogined = res.find((el) => el.isLogined === true);

    if (res.length === 0 || !userIsLogined) {
        return {
            name: '',
            isLogined: false,
            favorites: []
        }
    }
    return userIsLogined;
}

