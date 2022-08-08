import React from 'react';

import type { Socionics } from '../../types/Socionics';
import { Icon } from '../Icon';
import { capitalizeFirstLetter } from '../../utils/captalizeFirstLetter';

interface Props {
	mindKey: Socionics.Mindkey;
	className?: string;
}

export function RatioIndicator({mindKey, className}) {
	
	let mindKeyString: string[] = mindKey.split('-',2);
	let Quantity: number = parseInt(mindKeyString[1]);
	
	return (
		<div className={className}>
			{
				for (let i = 0; i < Quantity; i++){
					<Icon name={capitalizeFirstLetter(mindKeyString[0])} />
				}
			}
		</div>
	);
}