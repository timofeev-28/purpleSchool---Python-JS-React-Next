'use client';

import { JSX } from 'react';
import styles from './cardMini.module.css';
import Image from 'next/image';
import CardMiniInfo from '@/src/components/cardMini/cardMiniInfo/cardMiniInfo';
import { PostItemProps } from '@/src/interface/postItem.props';
import { DataCardsProps } from '@/src/interface/dataCards.props';
import { motion } from 'motion/react';

interface CardMiniProps {
    data: PostItemProps;
    dataCard: DataCardsProps;
    index: number;
}

const listVariants = {
    hidden: { opacity: 0, x: -15, y: -15},
    visible: (index: number) => ({
        opacity: 1,
        x: 0,
        y:0,
        transition: {
          delay: index * 0.2,
        }
      }),
}

export const CardMini = ({ data, dataCard, index }: CardMiniProps): JSX.Element => {
    return (
        <motion.li
            className={styles.card}
            variants={ listVariants }
            initial='hidden'
            animate='visible'
            custom={index}
            tabIndex={0}
        >
            <span className="visually-hidden">{`Статья ${index + 1}блога`}</span>
            <div className={styles.card__image_wrap}>
                <Image
                    className={styles.card__image}
                    src={dataCard.src}
                    width={300}
                    height={192}
                    alt='Изображение из статьи'
                />
            </div>
            <CardMiniInfo data={data} dataCard={dataCard}/>
        </motion.li>
    );
};
