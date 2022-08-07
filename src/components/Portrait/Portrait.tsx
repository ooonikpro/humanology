import React from 'react'
import { SocionicsType } from '../../types'

interface Props {
	name: SocionicsType.SocionicsType
	gender: 'male' | 'female'
	age: 'kid' | 'adult'
	className: string
}

export const Portrait: React.FC<Props> = ({ name, gender, age, className }) => {
	const src = require(`../../assets/illustrations/portraits/${name.toLowerCase()}-${age}-${gender}.png`);

	return (
		<img src={src} alt={`${name}`} className={className} />
	);
}