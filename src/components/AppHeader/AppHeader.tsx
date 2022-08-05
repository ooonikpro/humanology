import React from 'react'

import { Icon } from '../Icon';
import styles from './AppHeader.module.scss';
import { Line } from '../Line';

export const AppHeader = () => {
	return (
		<header className={styles.header}>
			<div className={styles.section}>
				<button 
				className={`${styles.btn} ${styles['btn-o50']}`}>
					<Icon name='IconMenu' size={24} />
				</ button>
				<button 
					className={`${styles.btn} ${styles['btn-025']}`}>
					<Icon name='Logo' size={24} color='role' />
				</ button>
				<button
				className={`${styles.btn} ${styles['btn-o50']}`}>
					<Icon name='IconUserSquare' size={24} />
				</button>
			</div>		
			<Line solid color='accent' opacity='o10' />
		</ header>
	)
}