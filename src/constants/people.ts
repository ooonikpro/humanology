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
        id: 'ISFJ',
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
        id: 'INTP',
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
        id: 'ISFP',
        name: 'Том Харди',
        subtitle: 'Актер',
        birthDate: '09/15/1977',
        gender: 'male'
    },
    {
        uid: 'grigoriy-perelman',
        id: 'ENTP',
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
    {
        uid: 'angelina-jolie',
        id: 'ESTJ',
        name: 'Анжелина Джоли',
        subtitle: 'Актриса',
        birthDate: '06/04/1975',
        gender: 'female'
    },
    {
        uid: 'ivan-ohlobistin',
        id: 'ENTJ',
        name: 'Иван Охлобыстин',
        subtitle: 'Актер',
        birthDate: '07/22/1966',
        gender: 'male'
    },
    {
        uid: 'dmitriy-medvedev',
        id: 'ISFJ',
        name: 'Дмитрий Медведев',
        subtitle: 'Бывший президент РФ',
        birthDate: '09/14/1965',
        gender: 'male'
    },
    {
        uid: 'alexey-navalniy',
        id: 'ESTJ',
        name: 'Алексей Навальный',
        subtitle: 'Политик',
        birthDate: '06/04/1976',
        gender: 'male'
    },
    {
        uid: 'kira-knightly',
        id: 'ENTP',
        name: 'Кира Найтли',
        subtitle: 'Актриса',
        birthDate: '03/26/1985',
        gender: 'female'
    },
    {
        uid: 'cillian-murphy',
        id: 'INTJ',
        name: 'Киллиан Мерфи',
        subtitle: 'Актер',
        birthDate: '05/25/1976',
        gender: 'male'
    },
    {
        uid: 'dwayne-johnson',
        id: 'ESTJ',
        name: 'Дуэйн Джонсон',
        subtitle: 'Актер',
        birthDate: '05/02/1972',
        gender: 'male'
    },
    {
        uid: 'denis-semenikhin',
        id: 'ESTJ',
        name: 'Денис Семинихин',
        subtitle: 'Видеоблогер',
        birthDate: '07/03/1971',
        gender: 'male'
    },
    {
        uid: 'ilya-prusikin',
        id: 'INFP',
        name: 'Илья Прусикин',
        subtitle: 'Певец',
        birthDate: '04/08/1985',
        gender: 'male'
    },
    {
        uid: 'yuri-nikolaenko',
        id: 'INFP',
        name: 'Юрий Николаенко',
        subtitle: 'Актер',
        birthDate: '05/17/1989',
        gender: 'male'
    },
    {
        uid: 'uma-thurman',
        id: 'ESTJ',
        name: 'Ума Турман',
        subtitle: 'Актриса',
        birthDate: '05/29/1970',
        gender: 'female'
    },
    {
        uid: 'ben-affleck',
        id: 'ESTJ',
        name: 'Бен Аффлек',
        subtitle: 'Актер',
        birthDate: '08/15/1972',
        gender: 'male'
    },
    {
        uid: 'matt-daimon',
        id: 'ENTJ',
        name: 'Мэтт Дэймон',
        subtitle: 'Актер',
        birthDate: '10/08/1970',
        gender: 'male'
    },
    {
        uid: 'boris-elcin',
        id: 'ESTJ',
        name: 'Борис Ельцин',
        subtitle: 'Бывший президент РФ',
        birthDate: '02/01/1931',
        gender: 'male'
    },
    {
        uid: 'tom-cruz',
        id: 'ISFP',
        name: 'Том Круз',
        subtitle: 'Актер',
        birthDate: '07/03/1962',
        gender: 'male'
    },
    {
        uid: 'nicole-kidman',
        id: 'ESTJ',
        name: 'Николь Кидман',
        subtitle: 'Актриса',
        birthDate: '06/20/1967',
        gender: 'female'
    },
    {
        uid: 'javier-bardem',
        id: 'ISFP',
        name: 'Хавьер Бардем',
        subtitle: 'Актер',
        birthDate: '03/01/1969',
        gender: 'male'
    },
    {
        uid: 'maxim-averin',
        id: 'ENFJ',
        name: 'Максим Аверин',
        subtitle: 'Актер',
        birthDate: '11/26/1975',
        gender: 'male'
    },
    {
        uid: 'gabe-newell',
        id: 'ISTP',
        name: 'Гейб Ньюэлл',
        subtitle: 'Бизнесмен',
        birthDate: '11/03/1962',
        gender: 'male'
    },
    {
        uid: 'john-lennon',
        id: 'ISTP',
        name: 'Джон Леннон',
        subtitle: 'Музыкант',
        birthDate: '12/08/1980',
        gender: 'male'
    },
    {
        uid: 'yoko-ono',
        id: 'ESFP',
        name: 'Йоко Оно',
        subtitle: 'Художник',
        birthDate: '02/18/1933',
        gender: 'female'
    },
];
