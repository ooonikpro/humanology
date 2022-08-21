export namespace Humanology {
    export type Gender = 'male' | 'female';
    export type Elements = 'air' | 'fire' | 'earth' | 'water';
    export type HoroSign =
        | 'oven'
        | 'telets'
        | 'blizneci'
        | 'rak'
        | 'lev'
        | 'deva'
        | 'vesi'
        | 'scorpion'
        | 'strelec'
        | 'kozerog'
        | 'vodolei'
        | 'ribi';
    export type ChineseHoroSign =
        | 'bik'
        | 'drakon'
        | 'koza'
        | 'krisa'
        | 'loshad'
        | 'obezyana'
        | 'petuh'
        | 'sobaka'
        | 'svinya'
        | 'tigr'
        | 'zayac'
        | 'zmeya';
    export type Role = 'knight' | 'king' | 'queen' | 'paige' | 'lady';
    export type Psychotype = 'infantile' | 'aggressor' | 'care' | 'victim';
    export type Tarot = 'swords' | 'pentacles' | 'cups' | 'wands';
    export type Club = 'scientific' | 'practice' | 'social' | 'humanitarian';
    export type MindKey =
        | 'irrational-1'
        | 'irrational-2'
        | 'rational-1'
        | 'rational-4';
    export type Mind = 'casual' | 'algorithmic' | 'vortical' | 'holographic';
    export type Intertype =
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
    export type Aspect =
        | 'ideas'
        | 'business'
        | 'will'
        | 'emotions'
        | 'time'
        | 'logic'
        | 'comfort'
        | 'people';
    export type AspectKey =
        | 'good'
        | 'necessary'
        | 'bad'
        | 'noNeed'
        | 'fear'
        | 'problems'
        | 'desires'
        | 'solutions';
    export type Function =
        | 'base'
        | 'creative'
        | 'suggestive'
        | 'activate'
        | 'role'
        | 'pain'
        | 'back'
        | 'limit';
    export type Stimulant =
        | 'uniqueness'
        | 'welfare'
        | 'status'
        | 'selfSufficiency';
    export type CommunicationStyle =
        | 'business'
        | 'sincere'
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
    export type Ideology =
        | 'chaoticNeutral'
        | 'chaoticKindly'
        | 'chaoticBad'
        | 'lawAbidingNeutral'
        | 'lawAbidingBad'
        | 'neutral'
        | 'neutralBad'
        | 'neutralKindly';
    export type Dichotomie =
        | 'intuit'
        | 'sensoric'
        | 'logic'
        | 'etic'
        | 'extravert'
        | 'introvert'
        | 'irrational'
        | 'rational';
    export type ReininSign =
        | 'static'
        | 'dynamic'
        | 'positivist'
        | 'negativist'
        | 'questim'
        | 'declamtim'
        | 'tactician'
        | 'strategist'
        | 'constructivist'
        | 'emotivist'
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
        element: Elements;
        role: Role;
        alias: string;
        mindKey: MindKey;
        mind: Mind;
        name: string;
        gender: Humanology.Gender;
        club: Humanology.Club;
        tarot: Humanology.Tarot;
        psychotype: Humanology.Psychotype;
        populationPercentage: string;
        aspects: Record<AspectKey, Aspect>;
        stimulant: Stimulant;
        communication: CommunicationStyle;
        companion: Companion;
        temperament: Temperament;
        ideology: Ideology;
        jungs: Dichotomie[];
        reinin: ReininSign[];
    };
}

export type Tabs = {
    label: string;
    path: string;
    order: number;
};
