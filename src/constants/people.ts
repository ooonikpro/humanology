import { Socionics, UnixDate } from 'src/types';

export type PeopleItem = {
    uid: string;
    id: Socionics.SocionicsType
    name: string;
    subtitle: string;
    birthDate: UnixDate; // dd.mm.YYYY
    gender: Socionics.Gender;
}

export const PEOPLE: PeopleItem[] = [
    {
        uid: 'ilon-mask',
        id: 'ENTP',
        name: 'Илон Маск',
        subtitle: 'Миллиардер',
        birthDate: '06/28/1971',
        gender: 'male'
    },
    {
        uid: 'danila-poperechniy',
        id: 'ENTP',
        name: 'Данила Поперечный',
        subtitle: 'Стендап-комик',
        birthDate: '03/10/1994',
        gender: 'male'
    },
    {
        uid: 'brad-pitt',
        id: 'ENTP',
        name: 'Брэд Питт',
        subtitle: 'Актер',
        birthDate: '12/18/1963',
        gender: 'male'
    },
    {
        uid: 'richard-branson',
        id: 'ENTP',
        name: 'Ричард Бренсон',
        subtitle: 'Бизнесмен',
        birthDate: '07/18/1950',
        gender: 'male'
    },
    {
        uid: 'alexander-pushnoy',
        id: 'ENTP',
        name: 'Александр Пушной',
        subtitle: 'Телеведущий',
        birthDate: '05/16/1975',
        gender: 'male'
    },
];
