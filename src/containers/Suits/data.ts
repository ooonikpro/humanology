import { Socionics } from 'src/types';

export type DataCardItem = {
    status: string;
    types: string[];
    title: string;
    intro: string;
    description: string[];
};

export type DataRoleItem = {
    role: Socionics.Role;
} & DataCardItem;

export type DataSuitItem = {
    tarot: Socionics.Tarot;
} & DataCardItem;

export const DATA_ROLES: DataRoleItem[] = [
    {
        role: 'king',
        status: 'Статус',
        title: 'Короли',
        types: ['Экстраверты', 'Сенсорики', 'Предусмотрительные'],
        intro: 'Это лидеры своей масти, их жизнь проходит на виду и имеет социальную значимость, репутация заслужена.',
        description: [
            'В описаниях Королей всегда присутствуют понятия авторитета, руководства, покровительства, уверенности, мудрости, ответственности.',
            'Они умеют добиться задуманного, решать трудные задачи, распорядиться властью, позаботиться об окружающих.',
        ],
    },
    {
        role: 'paige',
        status: 'Самодостаточность',
        title: 'Пажи',
        types: ['Интроверты', 'Интуиты', 'Предусмотрительные'],
        intro: 'Это персонажи, не обладающие силой и властью, подвижные, гибкие, быстрые.',
        description: [
            'В описании Пажей всегда присутствуют понятия новости, вести, хорошей ориентации в жизненных ситуациях, восприимчивости, податливости. Они олицетворяют то, что связано с молодостью: энтузиазм, неопытность, ранимость, привлекательность.',
            'Эта группа реализует свои интересы в нетрадиционных либо обновляющихся областях деятельности с постоянным кругом контактов.',
            'Им нравится заниматься тем, что значимо лично для них, их внутренний мир идей, возможность работать в присущем им ритме.',
        ],
    },
    {
        role: 'knight',
        status: 'Уникальность',
        title: 'Рыцари',
        types: ['Экстраверты', 'Интуиты', 'Беспечные'],
        intro: 'Эти персонажи, ищущие, увлеченные своей идеей.',
        description: [
            'В описаниях Рыцарей всегда присутствует мотив движения, перемен, собственных целей, личной свободы. Они каждый день должны доказывать себе и миру, что они Рыцари, поэтому они устраивают турниры и дуэли, стараются выделиться, ищут новых и новых испытаний своих достоинств.',
            'Эта группа реализуется в нетрадиционных или постоянно обновляющихся сферах деятельности с расширяющимся кругом контактов.',
            'Их увлекают сложные перспективные задачи с масштабными последствиями.',
        ],
    },
    {
        role: 'lady',
        status: 'Уникальность',
        title: 'Дамы',
        types: ['Интроверты', 'Сенсорики', 'Беспечные'],
        intro: 'Это персонажи, сосредоточенные на своих отношениях с миром.',
        description: [
            'В описаниях Дам всегда присутствуют понятия авторитета, практичности, понимания собственных целей и умения их добиваться, уравновешенности, способности оказать поддержку, силы. Отмечаются качества, обеспечивающие комфортное взаимодействие с другими: доброжелательность, понимание, спокойствие, надежность, щедрость, зрелый жизненный опыт.',
            'Этой группе свойственна деятельность практического характера с постоянным кругом контактов.',
            'Их интересует хорошее материальное обеспечение, комфортные условия жизни и работы, запасы, обеспечивающие богатство ощущений и информации.',
        ],
    },
];

export const DATA_SUITS: DataSuitItem[] = [
    {
        tarot: 'swords',
        status: 'Прогресс',
        title: 'Мечи',
        types: ['Конструктивисты', 'Иррационалы', 'Логики'],
        intro: 'Олицетворяют в обществе власть и закон.',
        description: [
            'В их описании всегда присутствуют понятия силы, власти, воли, решительности, агрессии, справедливости, иерархии, порядка.',
            'Им присуще ясное понимание своих интересов, умение добиться результата, способность отстоять свои интересы и завоевывать, расширять территорию своих интересов.',
        ],
    },
    {
        tarot: 'cups',
        status: 'Утешение',
        title: 'Кубки',
        types: ['Эмотивисты', 'Иррационалы', 'Этики'],
        intro: 'Олицетворяют чувственное начало в обществе',
        description: [
            'В их описании всегда присутствуют понятия чувств и отношений, обаяния, духовности, милосердия, служения идеалу, и заботы о ближнем. ',
            'Их ценят за дружественный настрой, проявление симпатии, умение сопереживать и тонкую чувствительность.',
        ],
    },
    {
        tarot: 'wands',
        status: 'Назидание',
        title: 'Посохи',
        types: ['Конструктивисты', 'Рационалы', 'Этики'],
        intro: 'Олицетворяют идеологическое начало в обществе',
        description: [
            'В их описании присутствуют понятия морального авторитета, личной инициативы, трудолюбия, успеха.',
            'Их ценят за умение добиться поставленных целей и за готовность предоставить помощь или хороший совет, при решении трудной задачи.',
        ],
    },
    {
        tarot: 'pentacles',
        status: 'Фундаменталисты',
        title: 'Пентакли',
        types: ['Эмотивисты', 'Рационалы', 'Логики'],
        intro: 'Олицетворяют в обществе предпринимательскую активность, богатство.',
        description: [
            'В их описании всегда содержатся понятия богатства, собственности, благополучия, престижа, коммерческого интереса, влияния, материальных ценностей.',
            'Им присуще умение управлять материальными ресурсами, разумно обращаться с властью и деньгами, добиваться высокого социального статуса.',
        ],
    },
];
