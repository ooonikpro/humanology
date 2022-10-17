export namespace SocionicsType {

	export type GenderRole =
		| 'male'
		| 'female'

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

	export type BaziElement =
		| 'wood'
		| 'fire'
		| 'earth'
		| 'metal'
		| 'water';

	export type Role =
		| 'king'
		| 'queen'
		| 'paige'
		| 'knight'
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
		| 'irrational1'
		| 'irrational2'
		| 'rational1'
		| 'rational4';

	export type Mindset =
		| 'causal'
		| 'dialectic'
		| 'vortex'
		| 'holo';

	export type Mbti =
		| 'ENTP'
		| 'ISFP'
		| 'ESFJ'
		| 'INTJ'
		| 'ISTJ'
		| 'ENFJ'
		| 'INFP'
		| 'ESTP'
		| 'INTP'
		| 'ESFP'
		| 'ISFJ'
		| 'ENTJ'
		| 'ESTJ'
		| 'INFJ'
		| 'ENFP'
		| 'ISTP';

	export type SocionicsType =
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

	export type FunctionKey =
		| 'lives'
		| 'creates'
		| 'mad'
		| 'does'
		| 'afraid'
		| 'suffers'
		| 'desires'
		| 'likes';

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
		| 'lawfulGood'
		| 'neutralGood'
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

	export type BaziProp = {
		label: string;
		element: SocionicsType.Quadra;
	};

	export type ZodiacProp = {
		label: string;
		element: SocionicsType.Quadra;
	};

	export type RoleProp = {
		label: string;
		element: SocionicsType.Quadra;
	};

	export type SocionicsTypeProp = {
		quadra: Quadra;
		role: Role;
		alias: string;
		mbti: string;
		mindKey: MindKey;
		mindset: Mindset;
		name: string;
		genderRole: GenderRole;
		club: Club;
		tarot: Tarot;
		psychotype: Psychotype;
		populationPercentage: string;
		aspects: Record<FunctionKey, Aspect>;
		motivation: Motivation;
		communication: Communication;
		companion: Companion;
		temperament: Temperament;
		alignment: Alignment;
		yung: YungDichotomy[];
		reinin: ReininSign[];
	};
}