import React from 'react'
import styles from './AppContent.module.scss';

import { Icon } from '../Icon';
import { Line } from '../Line';
import { Text } from '../Text';

export const AppContent = () => {
	return (
		<body>
			<div className={styles['backslide']}></div>
			<div className={styles['content']}>
				
				<div className={styles['title']}>
					<Text size='h3' color='accent'>
						Заголовок
					</Text>
				</div>
				<Line solid color='accent' opacity='o05' />
				<Text size='body' color='black'>
						Основной текст
				</Text>
			</div>
		</body>
	)
}
