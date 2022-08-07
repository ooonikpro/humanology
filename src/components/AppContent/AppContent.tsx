import React from 'react'
import styles from './AppContent.module.scss';

import { WhiteCard } from '../WhiteCard';
import { Portrait } from '../Portrait';
import { Tag } from '../Tag';
import { TypeCard } from '../TypeCard';

export const AppContent = () => {
	return (
		<>
		<WhiteCard backslide className={styles['backslide']} color='white' />
		<WhiteCard className={styles.content} color='white'>
			<Portrait className={styles.portrait} name='enthusiast' gender='female' age='adult' />
			<Tag icon='ClubHumanitarian' color='role'/>
		</WhiteCard>
		</>
	)
}
