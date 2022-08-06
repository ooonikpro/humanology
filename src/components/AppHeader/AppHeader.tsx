import React from 'react'

import { Icon } from '../Icon';
import styles from './AppHeader.module.scss';
import { Line } from '../Line';
import { Text } from '../Text';

export const AppHeader = () => {
	return (
		<header className={styles.header}>
			<div className={styles.top_section}>

				<button 
				className={`${styles.btn} ${styles['btn-top-section']} ${styles['btn-o50']}`}>
					<Icon name='IconMenu' size={24} color='accent'/>
				</ button>

				<button 
					className={`${styles.btn24} ${styles['btn-top-section']} ${styles['btn-o25']}`}>
					<Icon name='HumanologyLogo' size={24} color='accent'/>
				</ button>

				<button
				className={`${styles.btn24} ${styles['btn-top-section']} ${styles['btn-o50']}`}>
					<Icon name='IconUserSquare' size={24} color='accent' />
				</button>

			</div>
			
			<Line solid color='accent' opacity='o10' />

			<div className={styles.bottom_section}>
				<span className={styles['menu']}>
					<button
						className={`${styles.btn} ${styles['btn-bottom-section']} ${styles['btn-o50']}`}>
						<div className={styles['icon-wrap']}>
							<Icon name='IconEqualSquare' size={16} color='accent' />
						</div>
					</button>
					<Text className={styles['bottom-section-name']} size='small' color='accent'>
						Меню
					</Text>
				</span>
				<span className={styles['book']}>
					<Text 
						className={styles['bottom-section-name']} size='small' color='accent'>
						Соционика
					</Text>
					<button 
						className={`${styles.btn} ${styles['btn-bottom-section']} ${styles['btn-o50']}`}>
						<div className={styles['icon-wrap']}>
							<Icon name='IconBookOpen' size={16} color='accent' />
						</div>
					</button>
					</span>
			</div>
		</ header>
	)
}