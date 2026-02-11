import { ChangeEvent, useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { ProductProps } from '../../interfaces/product.inteface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export default function Menu() {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();
    const [filter, setFilter] = useState<string>('');
    
    useEffect(() => {
        getMenu();
    }, []);

    useEffect(() => {
        getMenu(filter);
    }, [filter]);

    const getMenu = async (name?: string) => {
        try {
            setIsLoading(true);
            // создаём промис для имитации задержки загрузки (для примера)
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1500);
            });

            // метод запроса с помощью библ.axios (npm i axios);
            const { data } = await axios.get<ProductProps[]>(`${PREFIX}/products`, {
                params: {
                    name
                }
            });
            setProducts(data);
            setIsLoading(false);
        } catch(e) {
            console.error(e);
            if (e instanceof AxiosError) {
                setError(e.message);
            }
            setIsLoading(false);
            return;
        }

        // стандартный метод
        // try {
        //     const res = await fetch(`${PREFIX}/products`);
        //     if (!res.ok) {
        //         return;
        //     }
        //     const data = await res.json() as Product[];
        //     setProducts(data);
        // } catch (e) {
        //     console.error(e);
        //     return;
        // }
    };

    const updateFilter = (error: ChangeEvent<HTMLInputElement>) => {
        setFilter(error.target.value);
    };


    return (
        <>
            <div className={styles['head']}>
                <Headling>Меню</Headling>
                <Search placeholder='Введите блюдо или состав' onChange={updateFilter} />
            </div>
            <div>
                {error && <>{error}</>}
                {!isLoading && products.length > 0 && <MenuList products={products} />}
                {!isLoading && products.length === 0 && <>Не найдено блюд по запросу</>}
                {isLoading && <>Загружаем продукты...</>}
            </div>
        </>
    );
}
