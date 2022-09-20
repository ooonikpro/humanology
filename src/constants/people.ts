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
        uid: 'carl_gustav_ug',
        id: 'ENTP',
        name: 'Карл Густав Юнг',
        subtitle: '1875 — 1961',
        birthDate: '07/26/1875',
        gender: 'male'
    }
];
