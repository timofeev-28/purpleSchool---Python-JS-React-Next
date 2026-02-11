'use client';

import Link from 'next/link';
import { JSX } from 'react';
import cn from 'classnames';
import styles from './header.module.css';
import PurpleSchool from '@/src/components/ui/purpleSchool/purpleSchool';
import Github from '@/src/components/header/github/github';
import { GithubContextProvider } from '@/src/context/githubContext';
import { GITHUB } from '@/src/utils/api';

export function Header(): JSX.Element {
    return (
        <GithubContextProvider github={GITHUB}>
            <header className={cn('container', styles.header)}>
                <Link className={styles.header__logo} href={'/'} aria-label='Логотип'>.my_blog</Link>
                <PurpleSchool />
                <Github />
            </header>
        </GithubContextProvider>
    );
}
