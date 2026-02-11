import styles from "./mainContent.module.css";
import Title from "../ui/title/title";
import Paragraph from "../ui/paragraph/paragraph";
import SearchForm from "./searchForm/searchForm";
import ListFilms from "./listFilms/listFilms";
import { useState } from 'react';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { GetDataProps, StateProps } from './mainContent.props';


export default function MainContent() {
    const [movies, setMovies] = useState<StateProps[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [initialState, setInitialState] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getData = async (value: string) => {
      try {
        setIsLoading(true);

        const { data } = await axios.get<GetDataProps>(`${PREFIX}/?q=${value}`);

        if (!initialState) {
            setInitialState(true);
        }
        setError(false);
        setMovies(data.description);
        setIsLoading(false);
      } catch(e) {
          console.error(e);
          setError(true);
          setIsLoading(false);
      }
    };

    return (
        <section className={styles.main__content}>
            <div className='container'>
              <Title text='Поиск' />
              <Paragraph
                text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
                appearance='fz20'
              />
              <SearchForm getData={getData} />
              <ListFilms movies={movies} error={error} initialState={initialState} isLoading={isLoading} />
            </div>
        </section>
    );
}
