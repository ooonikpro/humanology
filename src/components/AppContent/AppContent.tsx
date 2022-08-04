import React from 'react'

import { Icon } from '../Icon'
import { Line } from '../Line'


export const AppContent = () => {
	return (
		<div>
			<Line dashed color='air' opacity='o50'/>
			<br /> 
			<Icon name='Aspect01Business' size={24} color='accent' />
			<Icon name='Aspect02Logic' size={24} color='black' />
		</div>
		
	)
}
