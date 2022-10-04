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
        uid: 'aushra-augustinavichiute',
        id: 'ENTP',
        name: 'Аушра Аугустинавичюте',
        subtitle: 'Психолог, автор',
        birthDate: '04/04/1927',
        gender: 'female'
    },
    {
        uid: 'ilon-mask',
        id: 'ENTJ',
        name: 'Илон Маск',
        subtitle: 'Бизнесмен',
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
        id: 'ISFP',
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
        id: 'ENFJ',
        name: 'Александр Пушной',
        subtitle: 'Телеведущий',
        birthDate: '05/16/1975',
        gender: 'male'
    },
    {
        uid: 'keanu-reeves',
        id: 'ENTP',
        name: 'Киану Ривз',
        subtitle: 'Актер',
        birthDate: '09/02/1964',
        gender: 'male'
    },
    {
        uid: 'felix-chelberg',
        id: 'ENTP',
        name: 'Феликс Чельберг',
        subtitle: 'Видеоблогер Pewdiepie',
        birthDate: '10/24/1989',
        gender: 'male'
    },
    {
        uid: 'dmitriy-nagiev',
        id: 'ESFP',
        name: 'Дмитрий Нагиев',
        subtitle: 'Актер',
        birthDate: '04/04/1967',
        gender: 'male'
    },
    {
        uid: 'vladimir-putin',
        id: 'ISTJ',
        name: 'Владимир Путин',
        subtitle: 'Президент РФ',
        birthDate: '10/07/1952',
        gender: 'male'
    },
    {
        uid: 'arnold-schwarznegger',
        id: 'ESTJ',
        name: 'Арнольд Шварцнеггер',
        subtitle: 'Актер',
        birthDate: '07/30/1947',
        gender: 'male'
    },
    {
        uid: 'evgeniy-chichivarkin',
        id: 'ENTP',
        name: 'Евгений Чичваркин',
        subtitle: 'Бизнесмен',
        birthDate: '09/10/1974',
        gender: 'male'
    },
    {
        uid: 'albert-einstein',
        id: 'INTP',
        name: 'Альберт Эйнштейн',
        subtitle: 'Ученый',
        birthDate: '03/14/1955',
        gender: 'male'
    },
    {
        uid: 'steve-jobs',
        id: 'ENTP',
        name: 'Стив Джобс',
        subtitle: 'Бизнесмен',
        birthDate: '02/24/1955',
        gender: 'male'
    },
    {
        uid: 'steve-wozniak',
        id: 'ISTP',
        name: 'Стив Возняк',
        subtitle: 'Бизнесмен',
        birthDate: '08/11/1950',
        gender: 'male'
    },
    {
        uid: 'dada-sadananda',
        id: 'INFJ',
        name: 'Дада Садананда',
        subtitle: 'Медитативный йогин',
        birthDate: '',
        gender: 'male'
    },
    {
        uid: 'mila-jovovich',
        id: 'ENTP',
        name: 'Мила Йовович',
        subtitle: 'Актриса',
        birthDate: '12/17/1975',
        gender: 'female'
    },
    {
        uid: 'natali-portman',
        id: 'ISTJ',
        name: 'Натали Портман',
        subtitle: 'Актриса',
        birthDate: '06/09/1981',
        gender: 'female'
    },
    {
        uid: 'barak-obama',
        id: 'INFJ',
        name: 'Барак Обама',
        subtitle: 'Бывший президент США',
        birthDate: '08/04/1961',
        gender: 'male'
    },
    {
        uid: 'silvester-stalone',
        id: 'ISTP',
        name: 'Сильвестр Сталоне',
        subtitle: 'Актер',
        birthDate: '07/06/1946',
        gender: 'male'
    },
    {
        uid: 'tom-hardy',
        id: 'ENTP',
        name: 'Том Харди',
        subtitle: 'Актер',
        birthDate: '09/15/1977',
        gender: 'male'
    },
    {
        uid: 'grigoriy-perelman',
        id: 'INTP',
        name: 'Григорий Перельман',
        subtitle: 'Математик',
        birthDate: '06/13/1966',
        gender: 'male'
    },
    {
        uid: 'pavel-durov',
        id: 'ENTJ',
        name: 'Павел Дуров',
        subtitle: 'Бизнесмен',
        birthDate: '10/10/1984',
        gender: 'male'
    },
    {
        uid: 'eduard-hil',
        id: 'ENFJ',
        name: 'Эдуард Хиль',
        subtitle: 'Певец СССР',
        birthDate: '09/04/1934',
        gender: 'male'
    },
    {
        uid: 'victor-sukhorukov',
        id: 'ENFJ',
        name: 'Виктор Сухоруков',
        subtitle: 'Актер',
        birthDate: '11/10/1951',
        gender: 'male'
    },
    {
        uid: 'david-yan',
        id: 'ENTP',
        name: 'Давид Ян',
        subtitle: 'Предприниматель',
        birthDate: '06/03/1968',
        gender: 'male'
    },
    {
        uid: 'mikael-yan',
        id: 'ENTP',
        name: 'Микаэл Ян',
        subtitle: 'Предприниматель',
        birthDate: '03/29/1988',
        gender: 'male'
    },
    {
        uid: 'oleg-tinkov',
        id: 'ENTJ',
        name: 'Олег Тиньков',
        subtitle: 'Предприниматель',
        birthDate: '12/25/1967',
        gender: 'male'
    },
    {
        uid: 'alexander-gordon',
        id: 'ENTP',
        name: 'Александр Гордон',
        subtitle: 'Телеведущий',
        birthDate: '02/20/1964',
        gender: 'male'
    },
    {
        uid: 'irina-hakamada',
        id: 'INTJ',
        name: 'Ирина Хакамада',
        subtitle: 'Медиаперсона',
        birthDate: '05/13/1955',
        gender: 'female'
    },
    {
        uid: 'bryan-cranston',
        id: 'ESTJ',
        name: 'Брайан Крэнстон',
        subtitle: 'Актер',
        birthDate: '03/07/1956',
        gender: 'male'
    },
];
