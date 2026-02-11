import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import { JSX } from 'react';

export const Card = ({ color = 'white', children, className, ref, ...props }: CardProps): JSX.Element => {
	return (
		<div className={cn(styles.card, className, {
			[styles.blue]: color == 'blue'
		})}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	);
};
