import { Socionics } from '../types';

export const SOCIOTYPES: Record<Socionics.SocionicsType, Socionics.IntertypeProp> = {
    ENTP: {
        element: 'air',
        role: 'knight',
        alias: 'Дон Кихот',
        mindKey: 'irrational-1',
        mindset: 'causal',
        name: 'Новатор',
        typeName: 'innovator',
        gender: 'male',
        club: 'scientific',
        tarot: 'swords', // масть
        psychotype: 'infantile', // группа
        populationPercentage: '2 ~ 5%',
        aspects: {
            lives: 'ideas',
            creates: 'logic',
            mad: 'time',
            does: 'business',
            afraid: 'will',
            suffers: 'people',
            desires: 'comfort',
            likes: 'emotions',
        },
        stimulant: 'uniqueness',
        communication: 'business',
        companion: 'categorical',
        temperament: 'sanguine',
        alignment: 'chaoticEvil',
        yungs: [
            'irrational',
            'intuit',
            'logic',
            'extravert',
        ],
        reinin: [
            'static',
            'positivist',
            'questim',
            'tactician',
            'constructivist',

            'process',
            'compliant',
            'careless',

            'reasonable',
            'subjective',
            'democrat',
        ],
        intertypeRelations: {
            dual: 'ISFP',
            identical: 'ENTP',
            activity: 'ESFJ',
            mirror: 'INTJ',
            kindred: 'ENFP',
            semidual: 'ISTP',
            pragmatic: 'ESTP',
            illusionary: 'INFP',
            beneficiary: 'ENFJ',
            giver: 'ESTJ',
            supervisor: 'ISTJ',
            underling: 'INFJ',
            quasidentical: 'ENTJ',
            parallel: 'ISFJ',
            contrary: 'INTP',
            superego: 'ESFP',
        },
    },

    ISFP: {
        element: 'air',
        role: 'lady',
        alias: 'Дюма',
        mindKey: 'irrational-2',
        mindset: 'algorithmic',
        name: 'Дипломат',
        typeName: 'diplomat',
        gender: 'female',
        club: 'social',
        tarot: 'cups', // масть
        psychotype: 'care', // группа
        populationPercentage: '5 ~ 9%',
        aspects: {
            lives: 'comfort',
            creates: 'emotions',
            mad: 'will',
            does: 'people',
            afraid: 'time',
            suffers: 'business',
            desires: 'ideas',
            likes: 'logic',
        },
        stimulant: 'wealth',
        communication: 'sincere',
        companion: 'sensitive',
        temperament: 'melancholic',
        alignment: 'chaoticGood',
        yungs: [
            'irrational',
            'sensory',
            'ethic',
            'introvert',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'declamtim',
            'strategist',
            'emotivist',

            'result',
            'compliant',
            'careless',

            'reasonable',
            'subjective',
            'democrat',
        ],
        intertypeRelations: {
            dual: 'ENTP',
            identical: 'ISFP',
            activity: 'INTJ',
            mirror: 'ESFJ',
            kindred: 'ISTP',
            semidual: 'ENFP',
            pragmatic: 'INFP',
            illusionary: 'ESTP',
            beneficiary: 'ISTJ',
            giver: 'INFJ',
            supervisor: 'ENFJ',
            underling: 'ESTJ',
            quasidentical: 'ISFJ',
            parallel: 'ENTJ',
            contrary: 'ESFP',
            superego: 'INTP',
        },
    },

    ESFJ: {
        element: 'air',
        role: 'queen',
        alias: 'Гюго',
        mindKey: 'rational-4',
        mindset: 'vortical',
        name: 'Энтузиаст',
        typeName: 'enthusiast',
        gender: 'female',
        club: 'social',
        tarot: 'wands', // масть
        psychotype: 'care', // группа
        populationPercentage: '9 ~ 13%',
        aspects: {
            lives: 'emotions',
            creates: 'comfort',
            mad: 'people',
            does: 'will',
            afraid: 'business',
            suffers: 'time',
            desires: 'logic',
            likes: 'ideas',
        },
        stimulant: 'status',
        communication: 'passionate',
        companion: 'uncompromising',
        temperament: 'choleric',
        alignment: 'lawfulGood',
        yungs: [
            'rational',
            'sensory',
            'ethic',
            'extravert',

        ],
        reinin: [
            'dynamic',
            'positivist',
            'declamtim',
            'tactician',
            'constructivist',

            'result',
            'stubborn',
            'provident',

            'reasonable',
            'subjective',
            'democrat',
        ],
        intertypeRelations: {
            dual: 'INTJ',
            identical: 'ESFJ',
            activity: 'ENTP',
            mirror: 'ISFP',
            kindred: 'ENFJ',
            semidual: 'ISTJ',
            pragmatic: 'ESTJ',
            illusionary: 'INFJ',
            beneficiary: 'ENFP',
            giver: 'ESTP',
            supervisor: 'ISTP',
            underling: 'INFP',
            quasidentical: 'ESFP',
            parallel: 'INTP',
            contrary: 'ISFJ',
            superego: 'ENTJ',
        },
    },

    INTJ: {
        element: 'air',
        role: 'paige',
        alias: 'Робеспьер',
        mindKey: 'rational-1',
        mindset: 'holographic',
        name: 'Аналитик',
        typeName: 'analytic',
        gender: 'male',
        club: 'scientific',
        tarot: 'pentacles', // масть
        psychotype: 'infantile', // группа
        populationPercentage: '2 ~ 4%',
        aspects: {
            lives: 'logic',
            creates: 'ideas',
            mad: 'business',
            does: 'time',
            afraid: 'people',
            suffers: 'will',
            desires: 'emotions',
            likes: 'comfort',
        },
        stimulant: 'selfSufficiency',
        communication: 'coldBlooded',
        companion: 'restrained',
        temperament: 'phlegmatic',
        alignment: 'trueNeutral',
        yungs: [
            'rational',
            'intuit',
            'logic',
            'introvert',
        ],
        reinin: [
            'static',
            'negativist',
            'questim',
            'strategist',
            'emotivist',

            'result',
            'stubborn',
            'provident',

            'reasonable',
            'subjective',
            'democrat',
        ],
        intertypeRelations: {
            dual: 'ESFJ',
            identical: 'INTJ',
            activity: 'ISFP',
            mirror: 'ENTP',
            kindred: 'ISTJ',
            semidual: 'ENFJ',
            pragmatic: 'INFJ',
            illusionary: 'ESTJ',
            beneficiary: 'ISTP',
            giver: 'INFP',
            supervisor: 'ENFP',
            underling: 'ESTP',
            quasidentical: 'INTP',
            parallel: 'ESFP',
            contrary: 'ENTJ',
            superego: 'ISFJ',
        },
    },

    ISTJ: {
        element: 'fire',
        role: 'lady',
        alias: 'Максим Горький',
        mindKey: 'rational-4',
        mindset: 'causal',
        name: 'Инспектор',
        typeName: 'inspector',
        gender: 'male',
        club: 'practice',
        tarot: 'pentacles', // масть
        psychotype: 'aggressor', // группа
        populationPercentage: '11 ~ 14%',
        aspects: {
            lives: 'logic',
            creates: 'will',
            mad: 'business',
            does: 'comfort',
            afraid: 'people',
            suffers: 'ideas',
            desires: 'emotions',
            likes: 'time',
        },
        stimulant: 'wealth',
        communication: 'coldBlooded',
        companion: 'sensitive',
        temperament: 'phlegmatic',
        alignment: 'lawfulEvil',
        yungs: [
            'rational',
            'sensory',
            'logic',
            'introvert',
        ],
        reinin: [
            'static',
            'positivist',
            'declamtim',
            'tactician',
            'emotivist',

            'result',
            'stubborn',
            'careless',

            'decisive',
            'subjective',
            'aristocrat',
        ],
        intertypeRelations: {
            dual: 'ISTJ',
            identical: 'ENFJ',
            activity: 'INFP',
            mirror: 'ESTP',
            kindred: 'INTJ',
            semidual: 'ESFJ',
            pragmatic: 'ISFJ',
            illusionary: 'ENTJ',
            beneficiary: 'INTP',
            giver: 'ISFP',
            supervisor: 'ESFP',
            underling: 'ENTP',
            quasidentical: 'ISTP',
            parallel: 'ENFP',
            contrary: 'ESTJ',
            superego: 'INFJ',
        },
    },

    ENFJ: {
        element: 'fire',
        role: 'knight',
        alias: 'Гамлет',
        mindKey: 'rational-1',
        mindset: 'algorithmic',
        name: 'Наставник',
        typeName: 'mentor',
        gender: 'female',
        club: 'humanitarian',
        tarot: 'wands', // масть
        psychotype: 'victim', // группа
        populationPercentage: '2 ~ 5%',
        aspects: {
            lives: 'emotions',
            creates: 'time',
            mad: 'people',
            does: 'ideas',
            afraid: 'business',
            suffers: 'comfort',
            desires: 'logic',
            likes: 'will',
        },
        stimulant: 'uniqueness',
        communication: 'passionate',
        companion: 'categorical',
        temperament: 'choleric',
        alignment: 'neutralGood',
        yungs: [
            'rational',
            'intuit',
            'ethic',
            'extravert',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'questim',
            'strategist',
            'constructivist',

            'process',
            'stubborn',
            'careless',

            'decisive',
            'subjective',
            'aristocrat',
        ],
        intertypeRelations: {
            dual: 'ISTJ',
            identical: 'ENFJ',
            activity: 'ESTP',
            mirror: 'INFP',
            kindred: 'ESFJ',
            semidual: 'INTJ',
            pragmatic: 'ENTJ',
            illusionary: 'ISFJ',
            beneficiary: 'ESFP',
            giver: 'ENTP',
            supervisor: 'INTP',
            underling: 'ISFP',
            quasidentical: 'ENFP',
            parallel: 'ISTP',
            contrary: 'INFJ',
            superego: 'ESTJ',
        },
    },

    INFP: {
        element: 'fire',
        role: 'paige',
        alias: 'Есенин',
        mindKey: 'irrational-1',
        mindset: 'vortical',
        name: 'Лирик',
        typeName: 'lyricist',
        gender: 'female',
        club: 'humanitarian',
        tarot: 'cups', // масть
        psychotype: 'victim', // группа
        populationPercentage: '4 ~ 5%',
        aspects: {
            lives: 'time',
            creates: 'emotions',
            mad: 'ideas',
            does: 'people',
            afraid: 'comfort',
            suffers: 'business',
            desires: 'will',
            likes: 'logic',
        },
        stimulant: 'selfSufficiency',
        communication: 'sincere',
        companion: 'provident',
        temperament: 'melancholic',
        alignment: 'chaoticGood',
        yungs: [
            'irrational',
            'intuit',
            'ethic',
            'introvert',
        ],
        reinin: [
            'dynamic',
            'positivist',
            'questim',
            'tactician',
            'emotivist',

            'result',
            'compliant',
            'provident',

            'decisive',
            'subjective',
            'aristocrat',
        ],
        intertypeRelations: {
            dual: 'ESTP',
            identical: 'INFP',
            activity: 'ISTJ',
            mirror: 'ENFJ',
            kindred: 'INTP',
            semidual: 'ESFP',
            pragmatic: 'INTP',
            illusionary: 'ENTP',
            beneficiary: 'INTJ',
            giver: 'ISFJ',
            supervisor: 'ESFJ',
            underling: 'ENTJ',
            quasidentical: 'INFJ',
            parallel: 'ESTJ',
            contrary: 'ISTP',
            superego: 'ENFP',
        },
    },

    ESTP: {
        element: 'fire',
        role: 'king',
        alias: 'Маршал Жуков',
        mindKey: 'irrational-1',
        mindset: 'vortical',
        name: 'Лидер',
        typeName: 'leader',
        gender: 'male',
        club: 'practice',
        tarot: 'swords', // масть
        psychotype: 'aggressor', // группа
        populationPercentage: '4 ~ 5%',
        aspects: {
            lives: 'will',
            creates: 'logic',
            mad: 'comfort',
            does: 'business',
            afraid: 'ideas',
            suffers: 'people',
            desires: 'time',
            likes: 'emotions',
        },
        stimulant: 'status',
        communication: 'business',
        companion: 'volitional',
        temperament: 'sanguine',
        alignment: 'chaoticEvil',
        yungs: [
            'irrational',
            'sensory',
            'logic',
            'extravert',
        ],
        reinin: [
            'static',
            'negativist',
            'declamtim',
            'strategist',
            'constructivist',

            'result',
            'compliant',
            'provident',

            'decisive',
            'subjective',
            'aristocrat',
        ],
        intertypeRelations: {
            dual: 'INFP',
            identical: 'ESTP',
            activity: 'ENFJ',
            mirror: 'ISTJ',
            kindred: 'ESFP',
            semidual: 'INTP',
            pragmatic: 'ENTP',
            illusionary: 'ISFP',
            beneficiary: 'ESFJ',
            giver: 'ENTJ',
            supervisor: 'INTJ',
            underling: 'ISFJ',
            quasidentical: 'ESTJ',
            parallel: 'INFJ',
            contrary: 'ENFP',
            superego: 'ISTP',
        },
    },

    INTP: {
        element: 'water',
        role: 'paige',
        alias: 'Бальзак',
        mindKey: 'irrational-1',
        mindset: 'algorithmic',
        name: 'Критик',
        typeName: 'critic',
        gender: 'male',
        club: 'scientific',
        tarot: 'swords', // масть
        psychotype: 'victim', // группа
        populationPercentage: '3 ~ 5%',
        aspects: {
            lives: 'time',
            creates: 'business',
            mad: 'ideas',
            does: 'logic',
            afraid: 'comfort',
            suffers: 'emotions',
            desires: 'will',
            likes: 'people',
        },
        stimulant: 'selfSufficiency',
        communication: 'passionate',
        companion: 'provident',
        temperament: 'melancholic',
        alignment: 'chaoticNeutral',
        yungs: [
            'irrational',
            'intuit',
            'logic',
            'introvert',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'declamtim',
            'tactician',
            'constructivist',

            'process',
            'stubborn',
            'provident',

            'decisive',
            'objective',
            'democrat',
        ],
        intertypeRelations: {
            dual: 'ESFP',
            identical: 'INTP',
            activity: 'ISFJ',
            mirror: 'ENTJ',
            kindred: 'INFP',
            semidual: 'ESTP',
            pragmatic: 'ISTP',
            illusionary: 'ENFP',
            beneficiary: 'INFJ',
            giver: 'ISTJ',
            supervisor: 'ESTJ',
            underling: 'ENFJ',
            quasidentical: 'INTJ',
            parallel: 'ESFJ',
            contrary: 'ENTP',
            superego: 'ISFP',
        },
    },

    ESFP: {
        element: 'water',
        role: 'queen',
        alias: 'Наполеон',
        mindKey: 'irrational-2',
        mindset: 'causal',
        name: 'Политик',
        typeName: 'politic',
        gender: 'female',
        club: 'social',
        tarot: 'cups', // масть
        psychotype: 'aggressor', // группа
        populationPercentage: '4 ~ 9%',
        aspects: {
            lives: 'will',
            creates: 'people',
            mad: 'comfort',
            does: 'emotions',
            afraid: 'ideas',
            suffers: 'logic',
            desires: 'time',
            likes: 'business',
        },
        stimulant: 'status',
        communication: 'passionate',
        companion: 'volitional',
        temperament: 'sanguine',
        alignment: 'chaoticGood',
        yungs: [
            'irrational',
            'sensory',
            'ethic',
            'extravert',
        ],
        reinin: [
            'static',
            'positivist',
            'questim',
            'strategist',
            'emotivist',

            'process',
            'stubborn',
            'provident',

            'decisive',
            'objective',
            'democrat',
        ],
        intertypeRelations: {
            dual: 'INTP',
            identical: 'ESFP',
            activity: 'ENTJ',
            mirror: 'ISFJ',
            kindred: 'ESTP',
            semidual: 'INFP',
            pragmatic: 'ENFP',
            illusionary: 'ISTP',
            beneficiary: 'ESTJ',
            giver: 'ENFJ',
            supervisor: 'INFJ',
            underling: 'ISTJ',
            quasidentical: 'ESFJ',
            parallel: 'INTJ',
            contrary: 'ISFP',
            superego: 'ENTP',
        },
    },

    ISFJ: {
        element: 'water',
        role: 'lady',
        alias: 'Драйзер',
        mindKey: 'rational-4',
        mindset: 'causal',
        name: 'Хранитель',
        typeName: 'guardian',
        gender: 'female',
        club: 'social',
        tarot: 'wands', // масть
        psychotype: 'aggressor', // группа
        populationPercentage: '9 ~ 14%',
        aspects: {
            lives: 'people',
            creates: 'will',
            mad: 'emotions',
            does: 'comfort',
            afraid: 'logic',
            suffers: 'ideas',
            desires: 'business',
            likes: 'time',
        },
        stimulant: 'wealth',
        communication: 'sincere',
        companion: 'sensitive',
        temperament: 'phlegmatic',
        alignment: 'lawfulGood',
        yungs: [
            'rational',
            'sensory',
            'ethic',
            'introvert',
        ],
        reinin: [
            'static',
            'negativist',
            'questim',
            'tactician',
            'constructivist',

            'result',
            'compliant',
            'provident',

            'decisive',
            'objective',
            'democrat',
        ],
        intertypeRelations: {
            dual: 'ENTJ',
            identical: 'ISFJ',
            activity: 'INTP',
            mirror: 'ESFP',
            kindred: 'INFJ',
            semidual: 'ESTJ',
            pragmatic: 'ISTJ',
            illusionary: 'ENFJ',
            beneficiary: 'INFP',
            giver: 'ISTP',
            supervisor: 'ESTP',
            underling: 'ENFP',
            quasidentical: 'ISFP',
            parallel: 'ENTP',
            contrary: 'ESFJ',
            superego: 'INTJ',
        },
    },

    ENTJ: {
        element: 'water',
        role: 'knight',
        alias: 'Джек Лондон',
        mindKey: 'rational-1',
        mindset: 'vortical',
        name: 'Предприниматель',
        typeName: 'businessman',
        gender: 'male',
        club: 'scientific',
        tarot: 'pentacles', // масть
        psychotype: 'victim', // группа
        populationPercentage: '2 ~ 5%',
        aspects: {
            lives: 'business',
            creates: 'time',
            mad: 'logic',
            does: 'ideas',
            afraid: 'emotions',
            suffers: 'comfort',
            desires: 'people',
            likes: 'will',
        },
        stimulant: 'uniqueness',
        communication: 'business',
        companion: 'stubborn',
        temperament: 'choleric',
        alignment: 'trueNeutral',
        yungs: [
            'rational',
            'intuit',
            'logic',
            'extravert',
        ],
        reinin: [
            'dynamic',
            'positivist',
            'declamtim',
            'strategist',
            'emotivist',

            'result',
            'compliant',
            'careless',

            'decisive',
            'objective',
            'democrat',
        ],
        intertypeRelations: {
            dual: 'ISFJ',
            identical: 'ENTJ',
            activity: 'ESFP',
            mirror: 'INTP',
            kindred: 'ESTJ',
            semidual: 'INFJ',
            pragmatic: 'ENFJ',
            illusionary: 'ISTJ',
            beneficiary: 'ESTP',
            giver: 'ENFP',
            supervisor: 'INFP',
            underling: 'ISTP',
            quasidentical: 'ENTP',
            parallel: 'ISFP',
            contrary: 'INTJ',
            superego: 'ESFJ',
        },
    },

    ESTJ: {
        element: 'earth',
        role: 'king',
        alias: 'Штирлиц',
        mindKey: 'rational-4',
        mindset: 'algorithmic',
        name: 'Администратор',
        typeName: 'administrator',
        gender: 'male',
        club: 'practice',
        tarot: 'pentacles',
        psychotype: 'care',
        populationPercentage: '8 ~ 12%',
        aspects: {
            lives: 'business',
            creates: 'comfort',
            mad: 'logic',
            does: 'will',
            afraid: 'emotions',
            suffers: 'time',
            desires: 'people',
            likes: 'ideas',
        },
        stimulant: 'status',
        communication: 'business',
        companion: 'stubborn',
        temperament: 'choleric',
        alignment: 'lawfulEvil',
        yungs: [
            'rational',
            'sensory',
            'logic',
            'extravert',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'questim',
            'tactician',
            'emotivist',

            'process',
            'compliant',
            'provident',

            'reasonable',
            'objective',
            'aristocrat',
        ],
        intertypeRelations: {
            dual: 'INFJ',
            identical: 'ESTJ',
            activity: 'ENFP',
            mirror: 'ISTP',
            kindred: 'ENTJ',
            semidual: 'ISFJ',
            pragmatic: 'ESFJ',
            illusionary: 'INTJ',
            beneficiary: 'ISFP',
            giver: 'ESFP',
            supervisor: 'ENTP',
            underling: 'INTP',
            quasidentical: 'ESTP',
            parallel: 'INFP',
            contrary: 'ISTJ',
            superego: 'ENFJ',
        },
    },

    INFJ: {
        element: 'earth',
        role: 'paige',
        alias: 'Достоевский',
        mindKey: 'rational-1',
        mindset: 'causal',
        name: 'Гуманист',
        typeName: 'humanist',
        gender: 'female',
        club: 'humanitarian',
        tarot: 'wands', // масть
        psychotype: 'infantile', // группа
        populationPercentage: '1 ~ 3%',
        aspects: {
            lives: 'people',
            creates: 'ideas',
            mad: 'emotions',
            does: 'time',
            afraid: 'logic',
            suffers: 'will',
            desires: 'business',
            likes: 'comfort',
        },
        stimulant: 'selfSufficiency',
        communication: 'coldBlooded',
        companion: 'provident',
        temperament: 'phlegmatic',
        alignment: 'neutralGood',
        yungs: [
            'rational',
            'intuit',
            'ethic',
            'introvert',
        ],
        reinin: [
            'static',
            'positivist',
            'declamtim',
            'strategist',
            'constructivist',

            'process',
            'compliant',
            'provident',

            'reasonable',
            'objective',
            'aristocrat',
        ],
        intertypeRelations: {
            dual: 'ESTJ',
            identical: 'INFJ',
            activity: 'ISTP',
            mirror: 'ENFP',
            kindred: 'ISFJ',
            semidual: 'ENTJ',
            pragmatic: 'INTJ',
            illusionary: 'ESFJ',
            beneficiary: 'ENTP',
            giver: 'INTP',
            supervisor: 'ISFP',
            underling: 'ESFP',
            quasidentical: 'INFP',
            parallel: 'ESTP',
            contrary: 'ENFJ',
            superego: 'ISTJ',
        },
    },

    ENFP: {
        element: 'earth',
        role: 'knight',
        alias: 'Гексли',
        mindKey: 'irrational-1',
        mindset: 'holographic',
        name: 'Советчик',
        typeName: 'adviser',
        gender: 'female',
        club: 'humanitarian',
        tarot: 'cups', // масть
        psychotype: 'infantile', // группа
        populationPercentage: '6 ~ 8%',
        aspects: {
            lives: 'ideas',
            creates: 'people',
            mad: 'time',
            does: 'emotions',
            afraid: 'will',
            suffers: 'logic',
            desires: 'comfort',
            likes: 'business',
        },
        stimulant: 'uniqueness',
        communication: 'passionate',
        companion: 'uncompromising',
        temperament: 'sanguine',
        alignment: 'chaoticGood',
        yungs: [
            'irrational',
            'intuit',
            'ethic',
            'extravert',
        ],
        reinin: [
            'static',
            'negativist',
            'declamtim',
            'tactician',
            'emotivist',

            'result',
            'stubborn',
            'careless',

            'reasonable',
            'objective',
            'aristocrat',
        ],
        intertypeRelations: {
            dual: 'ISTP',
            identical: 'ENFP',
            activity: 'ESTJ',
            mirror: 'INFJ',
            kindred: 'ENTP',
            semidual: 'ISFP',
            pragmatic: 'ESFP',
            illusionary: 'INTP',
            beneficiary: 'ENTJ',
            giver: 'ESFJ',
            supervisor: 'ISFJ',
            underling: 'INTJ',
            quasidentical: 'ENFJ',
            parallel: 'ISTJ',
            contrary: 'INFP',
            superego: 'ESTP',
        },
    },

    ISTP: {
        element: 'earth',
        role: 'lady',
        alias: 'Габен',
        mindKey: 'irrational-1',
        mindset: 'vortical',
        name: 'Мастер',
        typeName: 'master',
        gender: 'male',
        club: 'practice',
        tarot: 'swords', // масть
        psychotype: 'care', // группа
        populationPercentage: '4 ~ 6%',
        aspects: {
            lives: 'comfort',
            creates: 'business',
            mad: 'will',
            does: 'logic',
            afraid: 'time',
            suffers: 'emotions',
            desires: 'ideas',
            likes: 'people',
        },
        stimulant: 'wealth',
        communication: 'coldBlooded',
        companion: 'restrained',
        temperament: 'melancholic',
        alignment: 'chaoticEvil',
        yungs: [
            'irrational',
            'sensory',
            'logic',
            'introvert',
        ],
        reinin: [
            'dynamic',
            'positivist',
            'questim',
            'strategist',
            'constructivist',

            'result',
            'stubborn',
            'careless',

            'reasonable',
            'objective',
            'aristocrat',
        ],
        intertypeRelations: {
            dual: 'ENFP',
            identical: 'ISTP',
            activity: 'INFJ',
            mirror: 'ESTJ',
            kindred: 'ISFP',
            semidual: 'ENTP',
            pragmatic: 'INTP',
            illusionary: 'ESFP',
            beneficiary: 'ISFJ',
            giver: 'INTJ',
            supervisor: 'ENTJ',
            underling: 'ESFJ',
            quasidentical: 'ISTJ',
            parallel: 'ENFJ',
            contrary: 'ESTP',
            superego: 'INFP',
        },
    },
};
