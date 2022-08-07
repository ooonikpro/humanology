import React from 'react'
import styles from './TypeCard.module.scss';

import { Text } from '../Text';
import { getIconName, Icon } from '../Icon';
import { Tag } from '../Tag';

import { SocionicsType } from '../../types';
import { ELEMENTS } from '../../constants/quadras';
import { MINDKEY, MINDSET } from '../../constants/mind'
import { ROLE } from '../../constants/role'
import { CLUBS } from '../../constants/clubs'
import { TAROT } from '../../constants/tarot'
import { GROUPS } from '../../constants/groups';
import { DICHOTOMIES } from '../../constants/dichotomies';

import { Portrait } from '../Portrait';
import { QuadraCircle } from '../IllustrationQuadraCircle';
import { SOCIONICS_TYPE } from 'src/constants/socionicsType';
import { WhiteCard } from '../WhiteCard';
import { CircleQuadra } from '../CircleQuadra';

interface Props extends SocionicsType.SocionicsTypeProp {
	id: SocionicsType.SocionicsType;
	mini?: boolean;
}

export const TypeCard: React.FC<Props> = (props) => {
	const text = {
		id: props.id,
		quadra: ELEMENTS[props.quadra],
		role: ROLE[props.role],
		mindKey: MINDKEY[props.mindKey],
		name: props.name,
		mbti: props.mbti,
		genderRole: props.genderRole,
		alias: props.alias,
		club: CLUBS[props.club],
		tarot: TAROT[props.tarot],
		psychotype: GROUPS[props.psychotype],
		percentage: props.populationPercentage,
		yung: props.yung.map((item) => DICHOTOMIES[item]),

	};

	const Classes = [styles.typeCard, props.mini && styles.mini].join(' ');

	return (
		<WhiteCard className={Classes}>
			<div className={styles.header}>
				
				<div
					className={[
						styles.params,
						props.mini && styles.inline,
					].join(' ')}
				>
					<div className={styles['params-line']}>
						<Text tag='b' size='small'>
								{text.id}
						</Text>
						<Text tag='b' size='small'>
								{text.alias}
						</Text>

						{!props.mini && (
							<Text tag='span' size='small'>
								{text.club}
							</Text>
						)}
					</div>
				</div>

				<div className={styles['params-line']}>
					<Text tag='b' color='quadra' size='small'>
						{text.quadra}
					</Text>
					<Text tag='b' color='role' size='small'>
						{text.role}
					</Text>

					{!props.mini && (
						<Text tag='span' color='grey' size='small'>
							{text.psychotype}
						</Text>
					)}
				</div>


			<Icon
				name={getIconName(props.mindKey)}
				size={{width: 40, height: 8}}
				color="quadra"
			/>
			</div>

			<div className={styles.body}>
				{!props.mini && (
					<CircleQuadra
						quadra={props.quadra}
						genderRole={props.genderRole}
						className={styles.quadra}
					/>
				)}

				<Portrait name={props.id} className={styles.portrait} gender={props['genderRole']} age='adult'/>

				<Text
					font='secondary'
					color='role'
					size='h1'
					className={styles.name}
					>
						{text.name}
				</Text>


				{!props.mini && (
					<div className={styles.tags}>
						<Tag icon={props.quadra} />
						<Tag icon={props.role} />
						<Tag icon={props.tarot} />
						<Tag icon={props.psychotype} />
						<Tag icon={props.club} />
						<Tag icon={props.genderRole} />
					</div>
				)}
			</div>
			
			{!props.mini && (
				<div className={styles.footer}>
					{text.yung.map((row,$i) => (
						<Text
							size='small'
							color='role'
							key={$i}
							className={styles['footer-text']}
						>
							{row}
						</Text>
					))}
				</div>
			)}
		</WhiteCard>
	);
};