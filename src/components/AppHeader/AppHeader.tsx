import React from 'react'

import { Icon } from '../Icon';
import styles from './AppHeader.module.scss';

export const AppHeader = () => {
	return (
		<header className={styles.header}>
			<div className='{styles.section}'>
				<Icon name='IconMenu' size={24} color='black'/>
				<Icon name='Logo' size={24} color='black'/>
			</div>
		</header>
	)
}