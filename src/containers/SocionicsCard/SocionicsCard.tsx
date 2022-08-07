import React from 'react'
import styles from './SocionicsCard.module.scss';
import { useParams } from 'react-router-dom';

import { TypeCard } from '../../components/TypeCard';
import { WhiteCard } from '../../components/WhiteCard';
import { SocionicsType } from '../../types';
import { useSocionicsType } from '../../hooks/useSocionicsType';

import { DICHOTOMIES } from '../../constants/dichotomies';
import { REININ_SIGNS } from '../../constants/reininSigns';

const getRow = (
	options: Array<string[]>,
	translate: Record<string, string>
) => {
	return (value: string, $i: number) => {
		const label = options[$i].filter((l) => l !== value).toLocaleString();

		return {
			label: translate[label],
			value: translate[value],
		};
	};
};

const dichotomy: Array<SocionicsType.YungDichotomy[]> = [
	['intuit', 'sensor'],
	['logic', 'ethic'],
	['extravert', 'introvert'],
	['irrational','rational'],
];

const reininSigns: Array<SocionicsType.ReininSign[]> = [
	['static', 'dynamic'],
	['positivist', 'negativist'],
	['asking', 'declaring'],
	['tactician', 'strategist'],
	['constructive', 'emotive'],

	['process', 'result'],
	['compliant', 'stubborn'],
	['careless', 'provident'],

	['reasonable', 'decisive'],
	['subjective', 'objective'],
	['democrat', 'aristocrat'],
];

export default function SocionicsCard() {
	const params = useParams();
	const id = params.id as SocionicsType.SocionicsType;
	const { SocionicsTypeProps } = useSocionicsType(id);

	const dichotomyYung = SocionicsTypeProps.yung.map(
		getRow(dichotomy, DICHOTOMIES)
	);

	const list = SocionicsTypeProps.reinin.map(getRow(reininSigns, REININ_SIGNS ));
	const reininList = [list.slice(0, 5), list.slice(5, 8), list.slice(8)];

	// Затуп с Роутером

	return (
		<>
			<TypeCard {...SocionicsTypeProps} />
		</>
	)
}