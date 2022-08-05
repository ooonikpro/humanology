import React from 'react'
import styles from '.AppContent.module.scss';

import { Icon } from '../Icon';
import { Illustration } from '../IllustrationQuadraCircle/IllustrationQuadraCircle';
import { Line } from '../Line';
import { Text } from '../Text';



export const AppContent = () => {
	return (
		<div>
			<Line dashed color='air' opacity='o50'/>
			<br /> 
			<Icon name='Aspect01Business' size={64} color={'accent'} />
			<Icon name='Aspect02Logic' size={64} color={'black'} />
			<Illustration name='QuadraCircle02FireEthic' size={128} color={'black'} />
			<Text classname={styles.example} color='accent' tag='h1' size='h1'>
                Что за херня.
      </ Text>
		</ div>
		
	)
}
