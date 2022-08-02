export namespace Humanology {

	export type GenderRole = 
			| 'male' 
			| 'female'
			| 'flexible';

	export type Quadra = 
			| 'air' 
			| 'fire' 
			| 'water' 
			| 'earth';

	export type Zodiac =
			| 'aries'
			| 'taurus'
			| 'gemini'
			| 'cancer'
			| 'leo'
			| 'virgo'
			| 'libra'
			| 'scorpio'
			| 'sagittarius'
			| 'capricorn'
			| 'aquarius'
			| 'pisces';

	export type Bazi =
			| 'rat'
			| 'bull'
			| 'tiger'
			| 'rabbit'
			| 'dragon'
			| 'snake'
			| 'horse'
			| 'goat'
			| 'monkey'
			| 'chicken'
			| 'dog'
			| 'pig';

	export type Role = 
			|	'king'
			| 'queen'
			| 'paige'
			|	'knight' 
			| 'lady';

	export type Psychotype = 
			| 'infantile'
			| 'aggressor'
			| 'care'
			| 'victim';

	export type Tarot = 
			| 'swords'
			| 'pentacles'
			| 'cups'
			| 'wands';

	export type Club =
			| 'scientific'
			| 'practice'
			| 'social'
			| 'humanitarian';

	export type MindKey =
			| 'irrational-1'
			| 'irrational-2'
			| 'rational-1'
			| 'rational-4';

	export type Mindset = 
			| 'causal'
			| 'dialectic'
			| 'vortex'
			| 'holo';

	export type Intertype =
			| 'innovator'
			| 'diplomat'
			| 'enthusiast'
			| 'analytic'
			| 'inspector'
			| 'mentor'
			| 'lyricist'
			| 'leader'
			| 'critic'
			| 'politic'
			| 'guardian'
			| 'businessman'
			| 'administrator'
			| 'humanist'
			| 'adviser'
			| 'master';

	export type Aspect =
			| 'business'
			| 'logic'
			| 'emotions'
			| 'relations'
			| 'will'
			| 'comfort'
			| 'ideas'
			| 'time';

	export type AspectKey =
			| 'live'
			| 'create'
			| 'mad'
			| 'do'
			| 'afraid'
			| 'suffer'
			| 'desire'
			| 'like';

	export type Function =
			| 'base'
			| 'creative'
			| 'role'
			| 'pain'
			| 'suggestive'
			| 'activate'
			| 'back'
			| 'limit';

	export type Motivation =
			| 'uniqueness'
			| 'wealth'
			| 'status'
			| 'selfSufficiency';

	export type Communication =
			| 'business'
			| 'soulful'
			| 'passionate'
			| 'coldBlooded';

	export type Companion =
			| 'categorical'
			| 'sensitive'
			| 'uncompromising'
			| 'restrained'
			| 'provident'
			| 'volitional'
			| 'stubborn';

	export type Temperament =
			| 'sanguine'
			| 'melancholic'
			| 'choleric'
			| 'phlegmatic';

	export type Alignment =
			|	'lawfulGood' 
			|	'neutralGood'
			| 'chaoticGood'
			| 'lawfulNeutral'
			| 'trueNeutral'
			| 'chaoticNeutral'
			| 'lawfulEvil'
			| 'neutralEvil'
			| 'chaoticEvil';

	export type YungDichotomy =
			| 'intuit'
			| 'sensor'
			| 'logic'
			| 'ethic'
			| 'extravert'
			| 'introvert'
			| 'irrational'
			| 'rational';

	export type ReininSign =
			| 'static'
			| 'dynamic'
			| 'positivist'
			| 'negativist'
			| 'asking'
			| 'declaring'
			| 'tactician'
			| 'strategist'
			| 'constructive'
			| 'emotive'
			| 'process'
			| 'result'
			| 'compliant'
			| 'stubborn'
			| 'careless'
			| 'provident'
			| 'reasonable'
			| 'decisive'
			| 'subjective'
			| 'objective'
			| 'democrat'
			| 'aristocrat';

	export type SignProp = {
			label: string;
			element: Humanology.Elements;
	};

	export type IntertypeProp = {
			quadra: quadra;
			role: Role;
			alias: string;
			mindKey: MindKey;
			mindset: Mindset;
			name: string;
			genderRole: Humanology.GenderRole;
			club: Humanology.Club;
			tarot: Humanology.Tarot;
			psychotype: Humanology.Psychotype;
			populationPercentage: string;
			aspects: Record<AspectKey, Aspect>;
			motivation: Motivation;
			communication: CommunicationStyle;
			companion: Companion;
			temperament: Temperament;
			alignment: Alignment;

			yung: YungDichotomy[];
			reinin: ReininSign[];
	};
}

export type Tabs = {
	label: string;
	path: string;
	order: number;
};
