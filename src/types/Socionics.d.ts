export namespace Socionics {
	export type GenderRole = 'male' | 'female';
	export type Quadra = 'air' | 'fire' | 'earth' | 'water';
	export type Role = 'king' | 'queen' | 'knight' | 'lady' | 'paige';
	export type Psychotype = 'infantile' | 'care' | 'aggressor' | 'victim';
	export type Tarot = 'swords' | 'cups' | 'wands' | 'pentacles';
	export type Club = 'scientific' | 'practice' | 'social' | 'humanitarian';
	export type Mindkey = 'irratio1' | 'irratio2' | 'ratio1' | 'ratio4';
	export type Mindset = 'causal' | 'dialectic' | 'vortex' | 'holo';
	export type SocionicsType = 'innovator' | 'diplomat' | 'enthusiast' | 'analytic' | 'inspector' | 'mentor' | 'lyricist' | 'leader' | 'critic' | 'politic' | 'guardian' | 'businessman' | 'administrator' | 'humanist' | 'adviser' | 'master';
	export type MBTI = 'ENTP' | 'ISFP' | 'ESFJ' | 'INTJ' | 'ISTJ' | 'ENFJ' | 'INFP' | 'ESTP' | 'INTP' | 'ESFP' | 'ISFJ' | 'ENTJ' | 'ESTJ' | 'INFJ' | 'ENFP' | 'ISTP';
	export type Aspect = 'business' | 'logic' | 'emotions' | 'relations' | 'will' | 'comfort' | 'ideas' | 'time';
	export type Function = 'base' | 'creative' | 'role' | 'pain' | 'suggestive' | 'activate' | 'limit' | 'background';
	export type FunctionKey = 'lives' | 'creates' | 'mad' | 'suffers' | 'desires' | 'likes' | 'afraids' | 'does';
	export type Motivation = 'uniqueness' | 'wealth' | 'status' | 'selfSufficiency';
	export type Communication = 'business' | 'soulful' | 'passionate' | 'coldBlooded';
	export type Companion = 'categorical' | 'sensitive' | 'uncompromising' | 'restrained' | 'provident' | 'volitional' | 'stubborn';
	export type Temperament = 'choleric' | 'sanguine' | 'melancholic' | 'phlegmatic';
	export type Alignment = 'LawfulGood' | 'LawfulNeutral' | 'LawfulEvil' | 'NeutralGood' | 'TrueNeutral' | 'NeutralEvil' | 'ChaoticGood' | 'ChaoticNeutral' | 'ChaoticEvil';
	export type Dichotomy = 'intuit' | 'sensory' | 'logic' | 'ethic' | 'extravert' | 'introvert' | 'irrational' | 'rational';
	export type ReininSign = 'static' | 'dynamic' | 'positivist' | 'negativist' | 'questim' | 'declatim'| 'tactics' | 'strategy' | 'constructivist' | 'emotivist' | 'process' | 'result' | 'compliant' | 'stubborn' | 'careless' | 'foresight' | 'prudent' | 'decisive' | 'subjective' | 'objective' | 'democrat' | 'aristocrat';
	
	export type QuadraProp = {
		label: string;
		quadra: Socionics.Quadra;
	};

	export type SocionicsTypeProp = {
		quadra: Quadra;
		role: Role;
		mbti: MBTI;
		name: string;
		alias: string;
		mindKey: Mindkey;
		mindset: Mind;
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
		yung: Dichotomy[];
		reinin: ReininSign[];
	};
}