import React from 'react'

import styles from './Line.module.scss'

type Props = {

	solid?: boolean;
	dashed?: boolean;
	color?: 'air' | 'fire' | 'water' | 'earth' | 'black' | 'white' | 'accent'
	opacity?: 'o10' | 'o25' | 'o50' | 'o75' | 'o100'
}

export const Line: React.FC<Props> = ({dashed, solid, color='black', opacity='o100'}) => {
		const mods = [
			styles.line,
			dashed && styles.dashed,
			solid && styles.solid,
			styles[color],
			styles[opacity]
	].join(' ')

	return (
		<hr className={mods} />
	)
}
