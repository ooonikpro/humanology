import React from 'react';

import styles from './AttributesRow.module.scss';

import { Text } from '../Text';
import { Icon } from '../Icon';

export interface Props {
	className?: string;
}

export const AttributesRow:React.FC<Props> = ({ className }) => {
	return (
		<>
		<div className={styles.row1}>		
			<span className={styles.attribute}>
				<Icon name='QuadraAir' color='quadra' size={16}/>
				<Text size='small' font='primary' color='quadra'>
					Воздух
				</Text>
			</span>
			
			<span className={styles.attribute}>
				<Icon name='RoleKnight' color='role' size={16}/>
				<Text size='small' font='primary' color='role'>
					Рыцарь
				</Text>
			</span>
			
			<span className={styles.attribute}>
				<Icon name='PsychotypeInfantile' color='accent' size={16}/>
				<Text size='small' font='primary' color='accent'>
					Инфантил
				</Text>
			</span>

			<span className={styles.attribute}>
				<Text size='small' font='primary' color='accent'>
					ENTP
				</Text>
			</span>
		</div>

		<div className={styles.row2}>		
			<span className={styles.attribute}>
				<Icon name='ClubScientific' color='accent' size={16}/>
				<Text size='small' font='primary' color='accent'>
					Исследователь
				</Text>
			</span>
			
			<span className={styles.attribute}>
				<Icon name='TarotSwords' color='accent' size={16}/>
				<Text size='small' font='primary' color='accent'>
					Мечи
				</Text>
			</span>

			<span className={styles.attribute}>
				<Text size='small' font='primary' color='accent' opacity='o75'>
					Дон Кихот
				</Text>
			</span>
		</div>
		</>
	);
};