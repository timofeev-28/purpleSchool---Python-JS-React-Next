'use client';

import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Logo from '@/public/logo.svg';
import cn from 'classnames';
import { JSX, useEffect, useState } from 'react';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
// import { Sidebar } from '../Sidebar/Sidebar';
// import { motion, useReducedMotion } from 'framer-motion';
// import { Sidebar } from '../Sidebar/Sidebar';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	// const shouldReduceMotion = useReducedMotion();
	const pathname = usePathname();

	useEffect(() => {
		setIsOpened(false);
	}, [pathname]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%',
		}
	};

	return (
		<header className={cn(className, styles.header)} {...props}>
			<Logo />
			<ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)} />
			<motion.div
				className={styles.mobileMenu}
				variants={variants}
				initial={'closed'}
				animate={isOpened ? 'opened' : 'closed'}
			>
				{/* Sidebar на эту страницу не вставить, она клиентская, А в сайдбаре есть асинхр.функ. >  */}
				{/* <Sidebar /> */}
				<Link href={'/'} >Ссылка 1 </Link>
				<Link href={'/'} > Ссылка 2 </Link>
				<Link href={'/'} > Ссылка 3</Link>
				<ButtonIcon className={styles.menuClose} appearance='white' icon='close' onClick={() => setIsOpened(false)} />
			</motion.div>
		</header>
	);
};
