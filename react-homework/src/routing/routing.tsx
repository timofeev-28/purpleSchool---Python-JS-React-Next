import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/layuot/layout';
import Film from '../components/film/film';
import UserProfile from '../components/userProfile/userProfile';
import MainContent from '../components/mainContent/mainContent';
import Entrance from '../components/entrance/entrance';
import FavoritesFilms from '../components/favoritesFilms/favoritesFilms';
import ErrorPage from '../components/errorPage/errorPage';
import axios from 'axios';
import { PREFIX } from '../helpers/API';
import { RequireAuth } from '../helpers/requireAuth';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <RequireAuth><MainContent /></RequireAuth>
            },
            {
                path: '/login',
                element: <Entrance />
            },
            {
                path: '/favorites',
                element: <RequireAuth><FavoritesFilms /></RequireAuth>
            },
            {
                path: '/movie/:id',
                element: <RequireAuth><Film /></RequireAuth>,
                errorElement: <>Ошибка загрузки</>,
                loader: async ({ params }) => {
                    return axios
                        .get(`${PREFIX}/?tt=${params.id}`)
                        .then((res) => res.data)
                        .catch(e => console.log(e));
                }
            },
            {
            path: '/user',
            element: <RequireAuth><UserProfile /></RequireAuth>
            },
            {
            path: '*',
            element: <ErrorPage />
            }
        ]
    }
]);
