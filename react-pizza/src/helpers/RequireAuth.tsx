import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

// в эту функцию оборачиваем те компоненты, куда без логинизации не зайти
export const RequireAuth = ({ children }: { children: ReactNode }) => {
    // с помощью хука useSelector мы получаем доступ к слайсам хранилища и их методам;
    const jwt = useSelector((s: RootState) => s.user.jwt);

    if (!jwt) {
        return <Navigate to='/auth/login' replace />;
    }
    return children;
};
