'use client';

import Link from 'next/link';
import { JSX, useContext } from 'react';
import styles from './github.module.css';
import { GithubContext } from '@/src/context/githubContext';
import { IContext } from '@/src/context/githubContext';

export default function Github(): JSX.Element {
    const { github } = useContext<IContext>(GithubContext);

    return (
        <Link className={styles.header__github} href={github} target='_blank' aria-label='Репозиторий данного проекта'></Link>
    );
}
