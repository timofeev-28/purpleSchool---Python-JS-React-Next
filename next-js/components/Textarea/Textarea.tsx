import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';
import { JSX } from 'react';

export const Textarea = ({ className, error, ref, ...props }: TextareaProps): JSX.Element => {
	return (
		<div className={cn(styles.textAreaWrapper, className)}>
			<textarea
				className={cn(styles.textarea, {
					[styles.error]: error
				})}
				ref={ref}
				{...props}
			/>
			{error && <span role='alert' className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
};
