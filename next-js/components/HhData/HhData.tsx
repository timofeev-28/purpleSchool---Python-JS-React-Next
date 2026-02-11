import { HhDataProps } from './HhData.props';
import styles from './HhData.module.css';
import React, { JSX } from 'react';
import { Card } from '../Card/Card';
import RateIcon from './rate.svg';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary, _id, updatedAt }: HhDataProps): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Начальный</div>
					<div className={styles.salaryValue}>{Intl.NumberFormat('de-DE').format(juniorSalary)} <span>₽</span></div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}>Средний</div>
					<div className={styles.salaryValue}>{Intl.NumberFormat('de-DE').format(middleSalary)} <span>₽</span></div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}>Профессионал</div>
					<div className={styles.salaryValue}>{Intl.NumberFormat('de-DE').format(seniorSalary)} <span>₽</span></div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};
