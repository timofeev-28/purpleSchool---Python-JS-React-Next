import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import  Menu from '@/components/Menu/Menu';
import Logo from '@/public/logo.svg';
import { Search } from '@/components/Search/Search';
import { JSX } from 'react';
import Link from 'next/link';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Link href='/'>
				<Logo className={styles.logo} />
			</Link>
			<Search />
			<Menu />
		</div>
	);
};
