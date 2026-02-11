import { getMenu } from '@/api/getMenu';
import { JSX } from 'react';
import styles from './Menu.module.css';
import BuildFirstLevel from '../BuildFirstLevel/BuildFirstLevel';

export default async function Menu(): Promise<JSX.Element> {
    async function getAllMenu() {
        const allMenu = [];
        for (let i = 0; i < 4; i++) {
            const menu = await getMenu(i);
            allMenu.push(menu);
        }
        return allMenu;
    };

    const allMenu = await getAllMenu();

    return (
        <nav className={styles.menu} role='navigation'>
            <BuildFirstLevel menu={allMenu} />
        </nav>
    )
}
