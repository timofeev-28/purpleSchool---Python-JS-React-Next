'use client';

import { firstLevelMenu } from '@/helpers/helpers';
import styles from './BuildFirstLevel.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { JSX, useState } from 'react';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { usePathname } from 'next/navigation';
import { useCategoryStore } from '@/store/firstCategory';
import { motion } from 'framer-motion';

interface IMenu {
    menu: MenuItem[][];
}
interface ThirdPages {
    category: string;
    pages: PageItem[];
}

const firstCategory = 0;

export default function BuildFirstLevel({ menu }: IMenu): JSX.Element {
    const pathname = usePathname();
    const [category, setCategory] = useState<number>(firstCategory);
    const [firstLevelPages, setfirstLevelPages] = useState<ThirdPages>({category: 'Аналитика', pages: menu[0][0].pages});
    const { setFirstCategory } = useCategoryStore();
    const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();

    const openFirstLevel = (level: number) => {
        setCategory(level);
        setFirstCategory(level);
    }

    const variants = {
        visible: {
            marginBottom: 4,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: { marginBottom: 0}
    }

    const variantsChildren = {
        visible: {
            opacity: 1
        },
        hidden: { opacity: 0}
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        const openSecondLevel = (category: string) => {
            const elem = menu[menuItem.id].find(m => m._id.secondCategory === category);
            if (!elem) {
                setAnnounce('closed');
                return;
            }
            setAnnounce('opened');
            setfirstLevelPages((prevState) => ({
                ...prevState,
                category: category,
                pages: elem.pages,
            }));
        };

        return (
            <ul className={styles.secondBlock}>
                {menu[menuItem.id].map(m => {
                    return (
                    <li key={m._id.secondCategory}>
                        <button
                            className={styles.secondevel}
                            onClick={() => openSecondLevel(m._id.secondCategory)}
                            aria-expanded={firstLevelPages.category === m._id.secondCategory}
                        >
                            {m._id.secondCategory}
                        </button>
                        <motion.ul
                            layout
                            variants={ variants }
                            initial={'hidden'}
                            animate={true ? 'visible' : 'hidden'}
                            className={styles.secondLevelBlock}
                        >
                            {firstLevelPages.category === m._id.secondCategory && firstLevelPages.pages.length > 0 &&
                                buildThirdLevel(firstLevelPages.pages, menuItem.route)}
                        </motion.ul>
                    </li>
                );
    })}
            </ul>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <motion.li
                    // layout
                    key={p._id}
                    variants={ variantsChildren }
                >
                    <Link
                        href={`/${route}/${p.alias}`}
                        className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${p.alias}` === pathname
                        })}
                        aria-current={`/${route}/${p.alias}` === pathname ? 'page' : false}
                    >
                        {p.category}
                    </Link>
                </motion.li>
            ))
        )
    };

    return (
        <>
            {announce && <span role='log' className='visuallyHidden'>{announce === 'opened' ? 'развёрнуто' : 'свётнуто'}</span>}
            <ul className={styles.firstLevelList}>
                {firstLevelMenu.map(m => (
                    <li key={m.route} aria-expanded={m.id === category}>
                        {/* <Link href={`/${m.route}`}> */}
                        <button onClick={() => openFirstLevel(m.id)} type='button'>
                            <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: m.id === category
                                })}>
                                    {m.icon}
                                    <span>{m.name}</span>
                            </div>
                        </button>
                        {/* </Link> */}
                        {m.id === category && buildSecondLevel(m)}
                    </li>
                ))}
            </ul>
        </>

    );
};
