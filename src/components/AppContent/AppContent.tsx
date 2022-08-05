import React from 'react'

import { Icon } from '../Icon'
import { Line } from '../Line'


export const AppContent = () => {
	return (
		<div>
			<Line dashed color='air' opacity='o50'/>
			<br /> 
			<Icon name='Aspect01Business' size={64} color={'accent'} />
			<Icon name='Aspect02Logic' size={64} color={'black'} />
		</div>
		
	)
}
