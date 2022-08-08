import { Socionics } from "../types/Socionics";

export const SocionicsTypes: Record<Socionics.SocionicsType, Socionics.SocionicsTypeProp> = {
	innovator: {
		quadra: 'air',
		role: 'knight',
		name: 'Новатор',
		mbti: 'ENTP',
		alias: 'Дон Кихот',
		mindKey: 'irratio1',
		mindset: 'causal',
		genderRole: 'male',
		club: 'scientific',
		tarot: 'swords',
		psychotype: 'infantile',
		populationPercentage: '2 ~ 5%',
		aspects: {
			lives: 'ideas',
			creates: 'logic',
			afraids: 'will',
			suffers: 'relations',
			desires: 'comfort',
			likes: 'emotions',
			mad: 'time',
			does: 'business',
		},
		motivation: 'uniqueness',
		communication: 'business',
		companion: 'categorical',
		temperament: 'sanguine',
		alignment: 'ChaoticEvil',
		yung: [
			'intuit',
			'logic',
			'extravert',
			'irrational',
		],
		reinin: [
			'static',
			'positivist',
			'questim',
			'tactics',
			'constructivist',

			'process',
			'compliant',
			'careless',

			'prudent',
			'subjective',
			'democrat',
		],
	},

	diplomat: {
		quadra: 'air',
		role: 'lady',
		name: 'Дипломат',
		mbti: 'ISFP',
		alias: 'Дюма',
		mindKey: 'irratio2',
		mindset: 'dialectic',
		genderRole: 'female',
		club: 'social',
		tarot: 'cups',
		psychotype: 'care',
		populationPercentage: '5 ~ 9%',
		aspects: {
			lives: 'comfort',
			creates: 'emotions',
			afraids: 'time',
			suffers: 'business',
			desires: 'ideas',
			likes: 'logic',
			mad: 'will',
			does: 'relations',
		},
		motivation: 'wealth',
		communication: 'soulful',
		companion: 'sensitive',
		temperament: 'melancholic',
		alignment: 'ChaoticGood',
		yung: [
			'sensory',
			'ethic',
			'introvert',
			'irrational',
		],
		reinin: [
			'dynamic',
			'negativist',
			'declatim',
			'strategy',
			'emotivist',

			'process',
			'compliant',
			'careless',

			'prudent',
			'subjective',
			'democrat',
		],
	},

	enthusiast: {
		quadra: 'air',
		role: 'queen',
		name: 'Энтузиаст',
		mbti: 'ESFJ',
		alias: 'Гюго',
		mindKey: 'ratio4',
		mindset: 'vortex',
		genderRole: 'female',
		club: 'social',
		tarot: 'wands',
		psychotype: 'care',
		populationPercentage: '9 ~ 13%',
		aspects: {
			lives: 'emotions',
			creates: 'comfort',
			afraids: 'business',
			suffers: 'time',
			desires: 'logic',
			likes: 'ideas',
			mad: 'relations',
			does: 'will',
		},
		motivation: 'status',
		communication: 'passionate',
		companion: 'uncompromising',
		temperament: 'choleric',
		alignment: 'LawfulGood',
		yung: [
			'sensory',
			'ethic',
			'extravert',
			'rational',
		],
		reinin: [
			'dynamic',
			'positivist',
			'declatim',
			'tactics',
			'constructivist',

			'result',
			'stubborn',
			'foresight',

			'prudent',
			'subjective',
			'democrat',
		],
	},

	analytic: {
		quadra: 'air',
		role: 'paige',
		name: 'Аналитик',
		mbti: 'INTJ',
		alias: 'Робеспьер',
		mindKey: 'ratio1',
		mindset: 'holo',
		genderRole: 'male',
		club: 'scientific',
		tarot: 'pentacles',
		psychotype: 'infantile',
		populationPercentage: '2 ~ 4%',
		aspects: {
			lives: 'logic',
			creates: 'ideas',
			afraids: 'relations',
			suffers: 'will',
			desires: 'emotions',
			likes: 'comfort',
			mad: 'business',
			does: 'time',
		},
		motivation: 'selfSufficiency',
		communication: 'coldBlooded',
		companion: 'restrained',
		temperament: 'phlegmatic',
		alignment: 'TrueNeutral',
		yung: [
			'intuit',
			'logic',
			'introvert',
			'rational',
		],
		reinin: [
			'static',
			'negativist',
			'questim',
			'strategy',
			'emotivist',

			'result',
			'stubborn',
			'foresight',

			'prudent',
			'subjective',
			'democrat',
		],
	},
		
	inspector: {
		quadra: 'fire',
		role: 'lady',
		name: 'Инспектор',
		mbti: 'ISTJ',
		alias: 'Максим Горький',
		mindKey: 'ratio4',
		mindset: 'causal',
		genderRole: 'male',
		club: 'practice',
		tarot: 'pentacles',
		psychotype: 'aggressor',
		populationPercentage: '11 ~ 14%',
		aspects: {
			lives: 'logic',
			creates: 'will',
			afraids: 'relations',
			suffers: 'ideas',
			desires: 'emotions',
			likes: 'time',
			mad: 'business',
			does: 'comfort',
		},
		motivation: 'wealth',
		communication: 'coldBlooded',
		companion: 'restrained',
		temperament: 'phlegmatic',
		alignment: 'LawfulEvil',
		yung: [
			'sensory',
			'logic',
			'introvert',
			'rational',
		],
		reinin: [
			'static',
			'positivist',
			'declatim',
			'tactics',
			'emotivist',

			'process',
			'stubborn',
			'careless',

			'decisive',
			'subjective',
			'aristocrat',
		],
	},

	mentor: {
		quadra: 'fire',
		role: 'knight',
		name: 'Наставник',
		mbti: 'ENFJ',
		alias: 'Гамлет',
		mindKey: 'ratio1',
		mindset: 'dialectic',
		genderRole: 'female',
		club: 'humanitarian',
		tarot: 'wands',
		psychotype: 'victim',
		populationPercentage: '2 ~ 5%',
		aspects: {
			lives: 'emotions',
			creates: 'time',
			afraids: 'business',
			suffers: 'comfort',
			desires: 'logic',
			likes: 'will',
			mad: 'relations',
			does: 'ideas',
		},
		motivation: 'uniqueness',
		communication: 'passionate',
		companion: 'categorical',
		temperament: 'choleric',
		alignment: 'NeutralGood',
		yung: [
			'intuit',
			'ethic',
			'extravert',
			'rational',
		],
		reinin: [
			'dynamic',
			'negativist',
			'questim',
			'strategy',
			'constructivist',

			'process',
			'stubborn',
			'careless',

			'decisive',
			'subjective',
			'aristocrat',
		],
	},

lyricist: {
		quadra: 'fire',
		role: 'paige',
		name: 'Лирик',
		mbti: 'INFP',
		alias: 'Есенин',
		mindKey: 'irratio1',
		mindset: 'vortex',
		genderRole: 'female',
		club: 'humanitarian',
		tarot: 'cups',
		psychotype: 'victim',
		populationPercentage: '4 ~ 5%',
		aspects: {
			lives: 'time',
			creates: 'emotions',
			afraids: 'comfort',
			suffers: 'business',
			desires: 'will',
			likes: 'logic',
			mad: 'ideas',
			does: 'relations',
		},
		motivation: 'selfSufficiency',
		communication: 'soulful',
		companion: 'provident',
		temperament: 'melancholic',
		alignment: 'ChaoticGood',
		yung: [
			'intuit',
			'ethic',
			'introvert',
			'irrational',
		],
		reinin: [
			'dynamic',
			'positivist',
			'questim',
			'tactics',
			'emotivist',

			'result',
			'compliant',
			'foresight',

			'decisive',
			'subjective',
			'aristocrat',
		],
	},

leader: {
		quadra: 'fire',
		role: 'king',
		name: 'Лидер',
		mbti: 'ESTP',
		alias: 'Маршал Жуков',
		mindKey: 'irratio1',
		mindset: 'holo',
		genderRole: 'male',
		club: 'practice',
		tarot: 'swords',
		psychotype: 'aggressor',
		populationPercentage: '4 ~ 5%',
		aspects: {
			lives: 'will',
			creates: 'logic',
			afraids: 'ideas',
			suffers: 'relations',
			desires: 'time',
			likes: 'emotions',
			mad: 'comfort',
			does: 'business',
		},
		motivation: 'status',
		communication: 'business',
		companion: 'volitional',
		temperament: 'sanguine',
		alignment: 'ChaoticEvil',
		yung: [
			'sensory',
			'logic',
			'extravert',
			'irrational',
		],
		reinin: [
			'static',
			'negativist',
			'declatim',
			'strategy',
			'constructivist',

			'result',
			'compliant',
			'foresight',

			'decisive',
			'subjective',
			'aristocrat',
		],
	},

	critic: {
		quadra: 'water',
		role: 'paige',
		name: 'Критик',
		mbti: 'INTP',
		alias: 'Бальзак',
		mindKey: 'irratio1',
		mindset: 'dialectic',
		genderRole: 'male',
		club: 'scientific',
		tarot: 'swords',
		psychotype: 'victim',
		populationPercentage: '3 ~ 5%',
		aspects: {
			lives: 'time',
			creates: 'business',
			afraids: 'comfort',
			suffers: 'emotions',
			desires: 'will',
			likes: 'relations',
			mad: 'ideas',
			does: 'logic',
		},
		motivation: 'selfSufficiency',
		communication: 'coldBlooded',
		companion: 'provident',
		temperament: 'melancholic',
		alignment: 'ChaoticNeutral',
		yung: [
			'intuit',
			'logic',
			'introvert',
			'irrational',
		],
		reinin: [
			'dynamic',
			'negativist',
			'declatim',
			'tactics',
			'constructivist',

			'process',
			'stubborn',
			'foresight',

			'decisive',
			'objective',
			'democrat',
		],
	},

	politic: {
		quadra: 'water',
		role: 'queen',
		name: 'Политик',
		mbti: 'ESFP',
		alias: 'Наполеон',
		mindKey: 'irratio2',
		mindset: 'causal',
		genderRole: 'female',
		club: 'social',
		tarot: 'cups',
		psychotype: 'aggressor',
		populationPercentage: '4 ~ 9%',
		aspects: {
			lives: 'will',
			creates: 'relations',
			afraids: 'ideas',
			suffers: 'logic',
			desires: 'time',
			likes: 'business',
			mad: 'comfort',
			does: 'emotions',
		},
		motivation: 'status',
		communication: 'passionate',
		companion: 'volitional',
		temperament: 'sanguine',
		alignment: 'ChaoticGood',
		yung: [
			'sensory',
			'ethic',
			'extravert',
			'irrational',
		],
		reinin: [
			'static',
			'positivist',
			'questim',
			'strategy',
			'emotivist',

			'process',
			'stubborn',
			'foresight',

			'decisive',
			'objective',
			'democrat',
		],
	},

	guardian: {
		quadra: 'water',
		role: 'lady',
		name: 'Хранитель',
		mbti: 'ISFJ',
		alias: 'Драйзер',
		mindKey: 'ratio4',
		mindset: 'holo',
		genderRole: 'female',
		club: 'social',
		tarot: 'wands',
		psychotype: 'aggressor',
		populationPercentage: '8 ~ 14%',
		aspects: {
			lives: 'relations',
			creates: 'will',
			afraids: 'logic',
			suffers: 'ideas',
			desires: 'business',
			likes: 'time',
			mad: 'emotions',
			does: 'comfort',
		},
		motivation: 'wealth',
		communication: 'soulful',
		companion: 'sensitive',
		temperament: 'phlegmatic',
		alignment: 'LawfulGood',
		yung: [
			'sensory',
			'ethic',
			'introvert',
			'rational',
		],
		reinin: [
			'static',
			'negativist',
			'questim',
			'tactics',
			'constructivist',

			'result',
			'compliant',
			'careless',

			'decisive',
			'objective',
			'democrat',
		],
	},

	businessman: {
		quadra: 'water',
		role: 'knight',
		name: 'Предприниматель',
		mbti: 'ENTJ',
		alias: 'Джек Лондон',
		mindKey: 'ratio1',
		mindset: 'vortex',
		genderRole: 'male',
		club: 'scientific',
		tarot: 'pentacles',
		psychotype: 'victim',
		populationPercentage: '2 ~ 5%',
		aspects: {
			lives: 'business',
			creates: 'time',
			afraids: 'emotions',
			suffers: 'comfort',
			desires: 'relations',
			likes: 'will',
			mad: 'logic',
			does: 'ideas',
		},
		motivation: 'uniqueness',
		communication: 'business',
		companion: 'stubborn',
		temperament: 'choleric',
		alignment: 'TrueNeutral',
		yung: [
			'intuit',
			'logic',
			'extravert',
			'rational',
		],
		reinin: [
			'dynamic',
			'positivist',
			'declatim',
			'strategy',
			'emotivist',

			'result',
			'compliant',
			'careless',

			'decisive',
			'objective',
			'democrat',
		],
	},

	administrator: {
		quadra: 'earth',
		role: 'king',
		name: 'Администратор',
		mbti: 'ESTJ',
		alias: 'Штирлиц',
		mindKey: 'ratio4',
		mindset: 'dialectic',
		genderRole: 'male',
		club: 'practice',
		tarot: 'pentacles',
		psychotype: 'care',
		populationPercentage: '8 ~ 12%',
		aspects: {
			lives: 'business',
			creates: 'comfort',
			afraids: 'emotions',
			suffers: 'time',
			desires: 'relations',
			likes: 'ideas',
			mad: 'logic',
			does: 'will',
		},
		motivation: 'status',
		communication: 'business',
		companion: 'stubborn',
		temperament: 'choleric',
		alignment: 'LawfulEvil',
		yung: [
			'sensory',
			'logic',
			'extravert',
			'rational',
		],
		reinin: [
			'dynamic',
			'negativist',
			'questim',
			'tactics',
			'emotivist',

			'process',
			'compliant',
			'prudent',

			'foresight',
			'objective',
			'aristocrat',
		],
	},

	humanist: {
		quadra: 'earth',
		role: 'paige',
		name: 'Гуманист',
		mbti: 'INFJ',
		alias: 'Достоевский',
		mindKey: 'ratio1',
		mindset: 'causal',
		genderRole: 'female',
		club: 'humanitarian',
		tarot: 'wands',
		psychotype: 'infantile',
		populationPercentage: '1 ~ 3%',
		aspects: {
			lives: 'relations',
			creates: 'ideas',
			afraids: 'logic',
			suffers: 'will',
			desires: 'business',
			likes: 'comfort',
			mad: 'emotions',
			does: 'time',
		},
		motivation: 'selfSufficiency',
		communication: 'coldBlooded',
		companion: 'provident',
		temperament: 'phlegmatic',
		alignment: 'NeutralGood',
		yung: [
			'intuit',
			'ethic',
			'introvert',
			'rational',
		],
		reinin: [
			'static',
			'positivist',
			'declatim',
			'strategy',
			'constructivist',

			'process',
			'compliant',
			'prudent',

			'foresight',
			'objective',
			'aristocrat',
		],
	},

	adviser: {
		quadra: 'earth',
		role: 'knight',
		name: 'Советчик',
		mbti: 'ENFP',
		alias: 'Гексли',
		mindKey: 'irratio1',
		mindset: 'holo',
		genderRole: 'female',
		club: 'humanitarian',
		tarot: 'cups',
		psychotype: 'infantile',
		populationPercentage: '6 ~ 8%',
		aspects: {
			lives: 'ideas',
			creates: 'relations',
			afraids: 'will',
			suffers: 'logic',
			desires: 'comfort',
			likes: 'business',
			mad: 'time',
			does: 'emotions',
		},
		motivation: 'uniqueness',
		communication: 'passionate',
		companion: 'uncompromising',
		temperament: 'sanguine',
		alignment: 'ChaoticGood',
		yung: [
			'intuit',
			'ethic',
			'extravert',
			'irrational',
		],
		reinin: [
			'static',
			'negativist',
			'declatim',
			'tactics',
			'emotivist',

			'result',
			'stubborn',
			'careless',

			'foresight',
			'objective',
			'aristocrat',
		],
	},

	master: {
		quadra: 'earth',
		role: 'lady',
		name: 'Мастер',
		mbti: 'ISTP',
		alias: 'Габен',
		mindKey: 'irratio1',
		mindset: 'vortex',
		genderRole: 'male',
		club: 'practice',
		tarot: 'swords',
		psychotype: 'care',
		populationPercentage: '4 ~ 6%',
		aspects: {
			lives: 'comfort',
			creates: 'business',
			afraids: 'time',
			suffers: 'emotions',
			desires: 'ideas',
			likes: 'relations',
			mad: 'will',
			does: 'logic',
		},
		motivation: 'wealth',
		communication: 'coldBlooded',
		companion: 'restrained',
		temperament: 'melancholic',
		alignment: 'ChaoticEvil',
		yung: [
			'sensory',
			'logic',
			'introvert',
			'irrational',
		],
		reinin: [
			'dynamic',
			'positivist',
			'questim',
			'strategy',
			'constructivist',

			'result',
			'stubborn',
			'careless',

			'foresight',
			'objective',
			'aristocrat',
		],
	},
}