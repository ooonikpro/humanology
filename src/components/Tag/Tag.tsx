import React from 'react'

import styles from './Tag.module.scss';
import { getIconName, Icon, Props as IconProps } from '../Icon';

interface TagProps {
	icon?: IconProps['name'] | string;
	color?: IconProps['color'];
}

export const Tag: React.FC<TagProps> = ({
	icon = 'IconGhost',
	color = 'accent'
}) => {
	const Classes = [
		styles.tag,
		color && styles[`color-${color}`]
	].join(' ');

	return (
		<div className={Classes}>
				<Icon name={getIconName(icon)} color={color} size={{ width: 20, height: 16 }}/>
		</div>
	)
}