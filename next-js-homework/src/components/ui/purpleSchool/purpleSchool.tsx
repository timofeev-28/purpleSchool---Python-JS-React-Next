import Link from 'next/link';
import styles from './purpleSchool.module.css';
import Image from 'next/image';
import { JSX } from 'react';

export default function PurpleSchool(): JSX.Element {
    return (
        <Link className={styles.purpleschool} href={'https://purpleschool.ru/'} target='_blank' aria-label='Курсы программирования PurpleSchool' >
            <Image src={'/logo.svg'} alt='Логотип курсов программирования PurpleSchool' width={200} height={61} />
        </Link>
    );
}
