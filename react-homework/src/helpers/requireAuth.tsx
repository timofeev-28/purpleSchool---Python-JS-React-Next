import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { KEY_LOCAL_STORAGE, loadState } from '../store/userSlice/storage';
import { UserState } from '../store/userSlice/user.slice';


export const RequireAuth = ({ children }: {children: ReactNode}) => {
    const res: UserState[] = loadState(KEY_LOCAL_STORAGE);
    const userIsLogined = res.find((el) => el.isLogined === true);

    if (!userIsLogined) {
        return <Navigate to='/login' replace />;
    }
    return children;
}
