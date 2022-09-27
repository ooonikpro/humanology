import { DetailCardProps } from 'src/components/DetailCard';

export const DETAIL_CARD_FUNCTIONS: DetailCardProps[] = [
    {
        type: 'function',
        socionicFn: 'base',
        tags: ['Ментальная', 'Акцептная', 'Сильная', 'Четырехмерная', 'Инертная', 'Вербальная', 'Оценочная', 'Внешняя'],
        title: '',
        subtitle: 'Основа личности. Получается лучше всего. Является самой экспертной.',
        content: [
            'Определяет то, как человек видит мир. Взгляд на жизнь, главный приоритет, основной маячок у человека. '
        ]
    },
    {
        type: 'function',
        socionicFn: 'creative',

        tags: ['Витальная', 'Продуктивная', 'Сильная', 'Трехмерная', 'Контактная', 'Вербальная', 'Ситуативная', 'Внутренняя'],
        title: '',
        subtitle: 'Инструмент достижение целей. Наиболее изобретательно, творчески подходит к решению задач.',
        content: [
            'У каждого творческая функция является самой красивой. Она гибкая, быстрая, умеет приспосабливаться под ситуацию и конкретный момент. Активизируется в сложных ситуациях —палочка-выручалочка для каждого человека.'
        ]

    },
    {
        type: 'function',
        socionicFn: 'role',
        tags: ['Ментальная', 'Акцептная', 'Слабая', 'Двухмерная', 'Контактная', 'Невербальная', 'Ситуативная', 'Внешняя'],
        title: '',
        subtitle: 'Человек обычно старается показать себя компетентным, но разрешать сложные ситуации и долго работать в режиме этой функции человеку сложно.',
        content: [
            'Человек по ее области реализации для адаптации в непривычных для себя условиях играет некую роль, помогающую социализироваться. Личность развивает в себе качества, как бы соответствующие определенным нормам, предъявляемым обществом к индивидууму.'
        ]
    },
    {
        type: 'function',
        socionicFn: 'pain',
        tags: ['Витальная', 'Продуктивная', 'Слабая', 'Одномерная', 'Инертная', 'Невербальная', 'Оценочная', 'Внутренняя'],
        title: '',
        subtitle: 'Самое уязвимое место. Вызывает дискомфорт. Легче всего обидеть человека, задев его именно по болевой.',
        content: [
            'Если по другим функциям человек хочет работать или работает автоматически, то болевую функцию лучше не трогать вообще.',
            'Критика, возмущение, даже просто много информации, попадающей на болевую функцию, способны вывести человека  из состояния равновесия.',
        ]
    },
    {
        type: 'function',
        socionicFn: 'suggestive',
        tags: ['Витальная', 'Акцептная', 'Слабая', 'Одномерная', 'Контактная', 'Вербальная', 'Оценочная', 'Внутренняя'],
        title: '',
        subtitle: 'Самая слабая из всех функций. Нравится в других. Получая достаточно информации по внушаемой функции, человек становится более счастливым.',
        content: [
            'Не получая информации по этой функции, человек теряет интерес к жизни. Ему крайне нужна эта ценная информация и, подсознательно настраиваясь на дуала (ваша внушаемая функция — базовая функция дуала), человек готов слушать информацию по ней постоянно.'
        ]
    },
    {
        type: 'function',
        socionicFn: 'activate',
        tags: ['Витальная', 'Продуктивная', 'Слабая', 'Двухмерная', 'Инертная', 'Вербальная', 'Ситуативная', 'Внешняя'],
        title: '',
        subtitle: 'Идеальная  рабочая обстановка. Охотно принимается помощь. Ориентируется на ближайшее окружение, положительно реагирует на воздействие.',
        content: [
            'Учиться в области активационной функции несложно, при этом очень интересно. Результат не только приятен, но и повышает самооценку.',
            'Информация по функции активации поднимает настроение человеку, побуждает к активным действиям.'
        ]
    },
    {
        type: 'function',
        socionicFn: 'limit',
        tags: ['Витальная', 'Акцептная', 'Сильная', 'Трехмерная', 'Инертная', 'Невербальная', 'Ситуативная', 'Внутренняя'],
        title: '',
        subtitle: 'В процессе жизненного формирования выстраивает (больше в бессознательном) определенные жесткие правила, которым должно удовлетворять поведение людей из значимого окружения и свое собственно.',
        content: [
            'Информация, поступающая на функцию защиты, неприятна и тяжела. Человек не хочет проявлять функцию без надобности.',
            'Работать по ограничительной функции человек не сможет — слишком это чужие и неважные для него детали, а любую задачу можно с легкостью решить с помощью связки базовой и творческой функций.'
        ]
    },
    {
        type: 'function',
        socionicFn: 'back',
        tags: ['Витальная', 'Продуктивная', 'Сильная', 'Четырехмерная', 'Контактная', 'Невербальная', 'Оценочная', 'Внешняя'],
        title: '',
        subtitle: 'Все ясно, не хочется объяснять. Отслеживается неосознанно.',
        content: [
            'Одна из наименее осознаваемых. Постоянно и надежно выполняет свою внутреннюю функцию в психической структуре человека.',
            '«Ведет» практически не требуя сознательного вмешательства, в автоматическом режиме. Человек настолько уверен в своих силах, что не страшиться сколь угодно трудной ситуации по аспектам функции.',
            'Автоматически реагирует в тех случаях, когда раздумывать некогда.'
        ]
    }
];

export const DETAIL_CARD_ASPECTS: DetailCardProps[] = [
    {
        type: 'aspect',
        aspect: 'business',
        alias: ['Черная логика', 'Te'],
        tags: ['Работа', 'Деятельность', 'Выгода', 'Результат', 'Цель', 'Эффективность', 'Метод', 'Дело', 'Бизнес', 'Развитие', 'Рынок', 'Цены', 'Стоимость'],
        title: 'Дела',
        subtitle: 'Деловая логика',
        content: [
            'Перемещение объектов в пространстве, алгоритмы, технологические процессы.',
            'Планирование деятельности для достижения той или иной цели, определение необходимых для этого ресурсов, организация бизнес-процессов.',
        ],
    },
    {
        type: 'aspect',
        aspect: 'logic',
        alias: ['Белая логика', 'Ti'],
        tags: ['Логичность', 'Статус', 'Система', 'Классификация', 'Закон', 'Структура', 'Вид', 'Критерий', 'Анализ', 'График', 'Сравнение', 'Формула', 'Порядок'],
        title: 'Разум',
        subtitle: 'Структурная логика',
        content: [
            'Системное видение объекта, выделение в нем частей и взаимосвязей между ними. Различные классификации и правила.',
            'Формальные иерархии в организациях, формализованные правила взаимодействия между людьми — правила этикета, должностные инструкции, юридические законы.',
        ],
    },
    {
        type: 'aspect',
        aspect: 'emotions',
        alias: ['Черная этика', 'Se'],
        tags: ['Страсть', 'Эмоция', 'Восторг', 'Ликование', 'Агрессия', 'Атмосфера', 'Настроение', 'Печаль', 'Депрессия', 'Вдохновение', 'Страдание', 'Влюбленность', 'Обожание'],
        title: 'Эмоции',
        subtitle: 'Этика эмоций',
        content: [
            'Изменения внутреннего состояния объекта.Видение мира как переходящих друг в друга потоков энергии.',
            'Влияние на эмоциональное состояние, умение успокоить, развеселить. Эмпатия, способность к сочувствию.',
        ],
    },
    {
        type: 'aspect',
        aspect: 'people',
        alias: ['Белая этика', 'Si'],
        tags: ['Отношения', 'Любовь', 'Ненависть', 'Симпатия', 'Антипатия', 'Душевность', 'Сочувствие', 'Привязанность', 'Дружба', 'Вражда', 'Открытость', 'Уважение', 'Родина'],
        title: 'Люди',
        subtitle: 'Этика отношений',
        content: [
            'Скрытое взаимодействие объектов — притяжение и отталкивание.',
            'Симпатии и антипатии, субъективные предпочтения одного отдельно взятого человека. Чувство такта, неформальные взаимоотношения в коллективе.',
        ],
    },
    {
        type: 'aspect',
        aspect: 'will',
        alias: ['Черная сенсорика', 'Fe'],
        tags: ['Характер', 'Сопротивление', 'Сила', 'Физическая сила', 'Власть', 'Управление', 'Территория', 'Пространство', 'Конкуренция', 'Захват', 'Союз', 'Соратник', 'Охрана границ'],
        title: 'Воля',
        subtitle: 'Волевая сенсорика',
        content: [
            'Свойства объекта: прочность, массивность, видение слабых мест объекта, на которые можно воздействовать в целях его изменения или разрушения.',
            'Способность человека противостоять давлению на него и оказывать давление на других. Восприятие сферы влияния человека, его «статусности», визуальных признаков его положения в иерархии.',
        ],
    },
    {
        type: 'aspect',
        aspect: 'comfort',
        alias: ['Белая сенсорика', 'Fi'],
        tags: ['Комфорт', 'Уют', 'Тепло', 'Холод', 'Вкус', 'Отдых', 'Наслаждение', 'Удовольствие', 'Жажда', 'Голод', 'Текстура', 'Материал', 'Расслабленность', 'Напряженность'],
        title: 'Комфорт',
        subtitle: 'Сенсорика ощущений',
        content: [
            'Восприятие вкусов, запахов, цвета, оценка гармоничного сочетания объектов между собой.',
            'Комфорт и ощущение собственного тела, собственного самочувствие и самочувствие окружающих.',
        ],
    },
    {
        type: 'aspect',
        aspect: 'ideas',
        alias: ['Черная интуиция', 'Ne'],
        tags: ['Возможность', 'Потенциал', 'Варианты', 'Суть', 'Смысл', 'Способности', 'Талант', 'Идея', 'Оригинальность', 'Перспектива', 'Банальность', 'Интерес', 'Незаурядность'],
        title: 'Идеи',
        subtitle: 'Интуиция возможностей',
        content: [
            'Предположения о внутреннем устройстве объекта, скрытом от глаз наблюдателя. Научные и околонаучные идеи, законы природы.',
            'Видение способностей, качеств и черт характера человека, прогнозирование, что можно от него ожидать в тех или иных ситуациях.',
        ],
    },
    {
        type: 'aspect',
        aspect: 'time',
        alias: ['Белая интуиция', 'Ni'],
        tags: ['Событие', 'Изменение', 'Перемена', 'Опоздание', 'Тенденция', 'Предсказание', 'Цикличность', 'Прогноз', 'Прошлое', 'Будущее', 'Повторение', 'Этап'],
        title: 'Время',
        subtitle: 'Интуиция времени',
        content: [
            'Согласованность различных процессов между собой. Ощущение мировой гармонии, взаимосвязи всего существующего.',
            'Распределение времени, упорядочивание и согласование дел между собой, понимание момента, когда нужно начинать или прекращать действовать.',
        ],
    },
];

export const DETAIL_CARD_BLOCKS: DetailCardProps[] = [
    {
        type: 'block',
        block: 'ego',
        tags: ['Взрослый блок', 'Воздействие на мир'],
        title: 'Блок Эго',
        subtitle: 'Блок принятия решений, творчества. Состоит из двух осознанных сильных функций.',
        content: [
            'По этому блоку человек может работать достаточно долго и эффективно, причем решать как и частные задачи, так и выявлять общие свойства и закономерности у совершенно различных ситуаций.',
            'Результаты работы по функциям этого блока может быть использована и для своих нужд, и в интересах общества в целом.',
        ]
    },
    {
        type: 'block',
        block: 'id',
        tags: ['Социальная реализация'],
        title: 'Блок Айди',
        subtitle: 'Блок индивидуального контроля',
        content: [
            'Отслеживание безопасности, удовлетворение базовых нужд и обеспечение выживания самого человека и, возможно, его ближайшего окружения.',
            'Другая деятельность по этому блоку не представляет интереса и как правило, социально значимых результатов по нему не бывает.',
        ]
    },
    {
        type: 'block',
        block: 'superego',
        tags: ['Ориентация в мире'],
        title: 'Блок Суперэго',
        subtitle: 'Блок социальной адаптации. Совесть, социальные знания',
        content: [
            'Адаптация в обществе. Как встроиться в коллектив, что тут принято, что на этот счет говорят люди. ',
            'Нужен, чтобы отслеживать социальные нормы. Отслеживаем — нас принимают, не отслеживаем — нас отторгают.',
        ]
    },
    {
        type: 'block',
        block: 'superid',
        tags: ['Детский блок', 'Самочувствие'],
        title: 'Блок Суперайди',
        subtitle: 'Блок индивидуальной деятельности. Слабые неосознанные функции',
        content: [
            'Как правило, заниматься по нему какой-либо целенаправленной деятельностью трудно, поэтому чаще всего по этому блоку человек выступает в роли потребителя.',
            'Охотно принимая от окружающих информацию по аспектам этого блока и даже провоцируя их на более активную выдачу этой информации.',
        ]
    },
];

export const DETAIL_CARD_RINGS: DetailCardProps[] = [
    {
        type: 'ring',
        ring: 'mental',
        tags: ['Сознание'],
        title: 'Ментальное кольцо',
        subtitle: 'Ментальные функции осознаются человеком постоянно, ими он пользуется сознательно.',
        content: [
            'С помощью ментальных функций возможно не только решать конкретные жизненные задачи, но и мыслить абстрактно, делать обобщения между различными задачами, сопоставлять их между собой.',
        ]
    },
    {
        type: 'ring',
        ring: 'vital',
        tags: ['Подсознание'],
        title: 'Витальное кольцо',
        subtitle: 'Витальные функции большую часть времени работают неосознанно и направлены на решение каких-то локальных задач здесь и сейчас.',
        content: [
            'Хотя переключение сознания на функции витального кольца в принципе возможно, но оно требует целенаправленных усилий и сознательного контроля, и возможно только на короткое время.',
            'Как только контроль ослабевает, происходит обратное переключение сознания на функции ментального кольца.',
        ]
    },
];

export const DETAIL_CARD_QUADRAS: DetailCardProps[] = [
    {
        type: 'quadra',
        quadra: 'air',
        tags: ['Дети', 'Альфа', 'Демократы', 'Рассудительные'],
        title: 'Воздух',
        subtitle: 'Генерировать новые идеи для будущего человечества.',
        content: [
            'Интуитивно-аналитическое и эмоционально-сенсорное мышление.',
            'Генерирование идей и системных проектов, склонность к теоретизированию и абстрактному осмыслению окружающей действительности, психологическому комфорту и позитивным эмоциям.',
        ]
    },
    {
        type: 'quadra',
        quadra: 'fire',
        tags: ['Подростки', 'Бета', 'Аристократы', 'Решительные'],
        title: 'Огонь',
        subtitle: 'Запустить импульс изменений и проконтролировать внедрение.',
        content: [
            'Конкретно-системное мышление волевыми (силовыми) категориями (порядок и сила) и событийно-эмоциональная идеология.',
            'Склонность к системному, волевому, эмоциональному, событийному осмыслению действительности, к системно-силовой и эмоционально-событийной реализации идеологических решений.',
        ]
    },
    {
        type: 'quadra',
        quadra: 'water',
        tags: ['Взрослые', 'Гамма', 'Демократы', 'Решительные'],
        title: 'Вода',
        subtitle: 'Суммировать наработанный опыт и корректировать направление.',
        content: [
            'Событийно-деловое мышление, идеология защиты и контроля отношений.',
            'Склонность к технологическому, прогностическому, волевому, коммуникативному осмыслению и критическому отношению к действительности, событийно-методическому и прагматично-консервативному взаимодействию с окружающей средой.',
        ]
    },
    {
        type: 'quadra',
        quadra: 'earth',
        tags: ['Старики', 'Дельта', 'Аристократы', 'Рассудительные'],
        title: 'Земля',
        subtitle: 'Гуманно управлять процессом и давать возможность развития каждому.',
        content: [
            'Конкретно-деловое, позитивно-отношенческое мышление, идеология глобальных возможностей и деловых удобств.',
            'Склонность к технологическому, возможностному осмыслению действительности с позиций комфортных условий работы и отношений.',
        ]
    },
];

export const DETAIL_CARD_SUITS: DetailCardProps[] = [
    {
        type: 'suit',
        suit: 'swords',
        tags: ['Прогресс', 'Логики', 'Иррационалы', 'Конструктивисты'],
        title: 'Мечи',
        subtitle: 'Власть и закон в обществе',
        content: [
            'Понятия силы, власти, воли, решительности, агрессии, справедливости, иерархии, порядка.',
            'Ясное понимание своих интересов, умение добиться результат, способность отстоять свои интересы и завоевывать, расширять территорию своих интересов.',
        ]
    },
    {
        type: 'suit',
        suit: 'cups',
        tags: ['Утешение', 'Этики', 'Иррационалы', 'Эмотивисты'],
        title: 'Кубки',
        subtitle: 'Чувственное начало общества',
        content: [
            'Понятия чувств и отношений, обаяния, духовности, милосердия, служения идеалу и заботы о ближнем.',
            'Дружественный настрой, проявление симпатии, умение сопереживать и тонкую чувствительность.',
        ]
    },
    {
        type: 'suit',
        suit: 'wands',
        tags: ['Назидание', 'Этики', 'Рационалы', 'Конструктивисты'],
        title: 'Посохи',
        subtitle: 'Идеологическое начало общества',
        content: [
            'Понятия морального авторитета, личной инициативы, трудолюбия, успеха.',
            'Умение добиваться поставленных целей и за готовность предоставить помощь или хороший совет, при решении трудной задачи.',
        ]
    },
    {
        type: 'suit',
        suit: 'pentacles',
        tags: ['Фундаменталисты', 'Логики', 'Рационалы', 'Эмотивисты'],
        title: 'Пентакли',
        subtitle: 'Предпринимательскую активность, ресурсы, богатство',
        content: [
            'Понятия богатства, собственности, благополучия, престижа, коммерческого интереса, влияния, материальных ценностей.',
            'Умение управлять материальными ресурсами, разумно обращаться с властью и деньгами, добиваться высокого социального статуса.',
        ]
    },
];

export const DETAIL_CARD_ROLES: DetailCardProps[] = [
    {
        type: 'role',
        role: 'king',
        tags: ['Статус', 'Экстраверты', 'Сенсорики', 'Предусмотрительные'],
        title: 'Короли и королевы',
        subtitle: 'Лидеры своей масти, их жизнь проходит на виду и имеет социальную значимость, репутация заслужена',
        content: [
            'Понятия авторитета, руководства, покровительства, уверенности, мудрости, ответственности.',
            'Умеют добиться задуманного, решать трудны задачи, распорядиться властью, позаботиться об окружающих.',
        ]
    },
    {
        type: 'role',
        role: 'paige',
        tags: ['Самодостаточность', 'Интроверты', 'Интуиты', 'Предусмотрительные'],
        title: 'Пажи',
        subtitle: 'Не обладающие силой и властью, но подвижные, гибкие и быстрые',
        content: [
            'Понятия новостей, вестей, хорошей ориентации в жизненных ситуациях, восприимчивости, податливости.',
            'Они олицетворяют то, что связано с молодостью: энтузиазм, неопытность, ранимость, привлекательность.',
            'Реализуют свои интересы в нетрадиционных, либо обновляющихся областях деятельности с постоянным кругом контактов.',
            'Нравится заниматься тем, что значимо лично для них, их внутренний мир идей, возможность работать в присущем им ритме.',
        ]
    },
    {
        type: 'role',
        role: 'knight',
        tags: ['Уникальность', 'Экстраверты', 'Интуиты', 'Беспечные'],
        title: 'Рыцари',
        subtitle: 'Ищущие, увлеченные своей идеей',
        content: [
            'Мотив движения, перемен, собственных целей, личной свободы.',
            'Каждый день должны заказывать себе и миру, что они Рыцари, поэтому устраивают турниры и дуэли, стараются выделиться, ищут новых и новых испытаний своих достоинств.',
            'Увлекают сложные перспективные задачи с масштабными последствиями.',
        ]
    },
    {
        type: 'role',
        role: 'lady',
        tags: ['Благосостояние', 'Интроверты', 'Сенсорики', 'Беспечные'],
        title: 'Дамы',
        subtitle: 'Сосредоточенные на своих отношениях с миром',
        content: [
            'Понятия авторитета, практичности, понимания собственных целей и умения их добиваться, уравновешенности, способности оказать поддержку, силы.',
            'Отмечаются качества, обеспечивающие комфортное взаимодействие с другими: доброжелательность, понимание, спокойствие, надежность, щедрость, зрелый жизненный опыт.',
            'Свойственна деятельность практического характера с постоянным кругом контактов.',
            'Интересует хорошее материальное обеспечение, комфортные условия жизни и работы, запасы, обеспечивающие богатство ощущений и информации.',
        ]
    },
];

export const DETAIL_CARD_CLUBS: DetailCardProps[] = [
    {
        type: 'club',
        club: 'scientific',
        tags: ['Логики', 'Интуиты', 'Демократы'],
        title: 'Исследователи',
        subtitle: 'Научно-исследовательская и конструкторская деятельность, анализ и прогнозирование.',
        content: [
            'Хорошо разбираются в универсальных законах и правилах, общих принципах устройства и функционирования устройств.'
        ]
    },
    {
        type: 'club',
        club: 'social',
        tags: ['Этики', 'Сенсорики', 'Демократы'],
        title: 'Социалы',
        subtitle: 'Социальное обслуживание, общение, налаживание контактов, медицина.',
        content: [
            'Лучше всех чувствуют потребности общества и индивидов. Хорошо ведут хозяйство.'
        ]
    },
    {
        type: 'club',
        club: 'practice',
        tags: ['Логики', 'Сенсорики', 'Аристократы'],
        title: 'Практики',
        subtitle: 'Налаживание процессов, производство, управление техникой, техническое сервисное обслуживание.',
        content: [
            'Могут досконально разобраться в технике. Хорошо налаживают производство, учитывая все мелочи. Также прекрасно владеют инструментом.'
        ]
    },
    {
        type: 'club',
        club: 'humanitarian',
        tags: ['Этики', 'Интуиты', 'Аристократы'],
        title: 'Гуманитарии',
        subtitle: 'Культура и искусство, актёрская деятельность, психология, реклама и общественные отношения.',
        content: [
            'В первую очередь разбираются в психологии людей и их духовных потребностях.'
        ]
    },
];

export const DETAIL_CARD_PSYCHOTYPES: DetailCardProps[] = [
    {
        type: 'psychotype',
        psychotype: 'infantile',
        tags: ['Интуиты', 'Рассудительные'],
        title: 'Инфантилы',
        subtitle: 'Проявляют качества ребёнка — непосредственность, любознательность, фантазирование.',
        content: [
            'Часто выбирают роль неопытного партнёра, с одной стороны осторожного, с другой стороны — стремящегося попробовать в жизни всё.'
        ]
    },
    {
        type: 'psychotype',
        psychotype: 'care',
        tags: ['Сенсорики', 'Рассудительные'],
        title: 'Заботливые',
        subtitle: 'Мягкие, склонные опекать, защищать, поддерживать партнёра.',
        content: [
            'Стремятся быть более опытными в повседневных делах, но к власти не стремятся.'
        ]
    },
    {
        type: 'psychotype',
        psychotype: 'victim',
        tags: ['Интуиты', 'Решительные'],
        title: 'Виктимы',
        subtitle: 'Стремятся подстраиваться под партнёра, ожидая от них указаний, наставлений, упрёков.',
        content: [
            'Играют в жертву, которая то демонстрирует подчинённость, то пытается вырваться из под контроля.',
            'Они врождённые провокаторы: нередко совершают поступки, за которые их одёргивают и упрекают.'
        ]
    },
    {
        type: 'psychotype',
        psychotype: 'aggressor',
        tags: ['Сенсорики', 'Решительные'],
        title: 'Агрессоры',
        subtitle: 'Стремящиеся к доминированию, в том числе в личных отношениях.',
        content: [
            'Отношения строят на соперничестве и борьбе. Проявляют надменность и неприязнь к человечески слабостям, пытаясь вызвать на прямое противостояние. ',
            'Физический контакт также основан на силовом воздействии, характерны крепкие объятия и сжатие. Могут в процессе игры или в шутку причинить боль или унизить партнёра.'
        ]
    },
];

export const DETAIL_CARD_MINDS: DetailCardProps[] = [
    {
        type: 'mindset',
        mindset: 'causal',
        tags: ['Статик', 'Позитивист', 'Последовательная логика', 'Дедукция', 'Детерминизм'],
        title: 'Причинно-следственное',
        subtitle: 'Самое жесткое мышление. Нет свободной воли. Все предопределено. Предписано.',
        content: [
            'Жесткая последовательность событий. Одни и те же причины приводят к одним и тем же последствиям. Построение длинных цепочек причин и следствий.',
            'Выведение сложного из простого. Мышление программируемое и трудно изменяемое.',
            'Тяжело отказываются от выводов. Умеют строго следовать алгоритмам. Хороши в математике. ',
            'Компьютерное мышление — все просчитывается.',
            'В научной сфере так мыслит Новатор, в технико-управленческой сфере — методичный Инспектор, в социальной сфере просчитывает цепочки материальных интересов Политик, в гуманитарной же сфере подчинен категорическому императиву Гуманист.',
            'Этому стилю мышления присущи большая четкость и сконцентрированность. Особой концентрацией отличается тип Инспектор. Однако и иррациональный Политик рассуждает довольно здраво, выводя одно следствие из другого, что предполагает сосредоточение на цепочке шагов.',
            'Если хотя бы одно звено по какой-либо причине выпадает, то детерминисты теряют ощущение разумной объясненности и затрудняются совершать действия, так как не видят оснований для них.',
        ]
    },
    {
        type: 'mindset',
        mindset: 'algorithmic',
        tags: ['Динамик', 'Негативист', 'Поиск противоречий', 'Столкновение'],
        title: 'Диалектико-алгоритмическое',
        subtitle: 'Ассоциативный поток сталкивающихся мыслей. Борьба противоположных точек зрения. Самые большие спорщики.',
        content: [
            'Любят втягиваться в дискуссии. Находят и указывают на противоречия.',
            'Ведут диалоги и спорят сами с собой. Тратят много энергии на мышление — более напряженное. Нервничают, могут двигаться во время спора.',
            'Тянет на споры, могут быть язвительными и высмеивать ошибки партнера. Неуравновешены в споре.',
            'Хорошо работают с вероятностями.',
            'В речи оно пользуется синтаксической конструкцией «если-то-иначе», прогнозирующей варианты развития процесса.',
            'Мыслители этого стиля отличаются выраженным стремлением к синтезу противоположностей, снятию противоречий, которые они так обостренно воспринимают.',
            'Его преимущества очевидны: это наиболее гибкое и утонченное мышление.',
            'Алгоритмическое мышление также хорошо решает задачи на классификацию, поскольку имеет дар распознавания сложных образов. За условиями задачи оно усматривает типичный алгоритм ее решения.',
            'Два его представителя — Наставник и Критик обычно воспринимаются в социуме как самые интеллектуальные типы.'
        ]
    },
    {
        type: 'mindset',
        mindset: 'holographic',
        tags: ['Статик', 'Негативист', 'Параллельная логика', 'Фрактал', 'Многоракурсность'],
        title: 'Голографическое',
        subtitle: 'Периодический поворот объекта мысли разными гранями.',
        content: [
            'Периодическая смена ракурса, точки рассмотрения.',
            'Как в видеоклипах. Со стороны - мерцание, исчезание какой-то мысли и возврат к ней. ',
            'Плавности переходов между ракурсами нет, и не надо.',
            'Людям, с последовательной логикой, может быть сложно понимать параллельных логиков.',
            'Голографическое мышление обслуживают следующие грамматические связки: «или — или», «либо-либо», «с одной стороны, с другой стороны». Оно активно использует принцип меню, свободного выбора точки зрения.',
            'Имеет характерный скелетно-схватывающий, проницающий, «рентгеновский» характер. Оно без сожаления отсекает подробности, оттенки. Дает общее, весьма свернутое представление о предмете.',
            'Так мыслит Лидер в бою. Анализируя ситуацию, он упрощает ее до двух-трех проекций (фронтальной, с фланга, с тыла), но зато быстро выходит на более высокий уровень понимания.',
            'Аналитик выпукло схватывает проблему с альтернативных сторон, мысленно поворачивая ситуацию вокруг ее смысловых осей.',
            'Хранитель, то приближая, то удаляя человека, как бы прощупывает его с разных сторон, отсекая людей, которые его могут подвести.',
            'Советчик улавливает скрытые, альтернативные побуждения человека, как бы строит его психологическую «голограмму».'
        ]
    },
    {
        type: 'mindset',
        mindset: 'vortical',
        tags: ['Динамик', 'Позитивист', 'Случайные комбинации', 'Перебор'],
        title: 'Вихревое',
        subtitle: 'Циркуляция мыслей вокруг волнующего вопроса, перебор вариантов, пробы и ошибки.',
        content: [
            'Мышление наиболее природное.',
            'Принимает решения, потом проверяет. Если полезное - закрепляет. Не жизнеспособное отсеивается.',
            'Характеристика «вихревое» означает самоорганизующееся, движущееся подобно вихрю.',
            'Фактически протекает как быстрый перебор вариантов, их апробация и последующий отсев тех, которые не дают результата. В его основе лежит испытательность — продвижение к цели через пробы и ошибки.',
            'В определенном смысле его можно сравнить с экспериментом в лаборатории, которой является мозг человека.',
            'Первое преимущество вихревого мышления — живость и естественность. Оно как бы имитирует те процессы, которые реально протекают в природе.',
            'Другое его преимущество — вера в успех, везучесть. Синергетиков не смущают временные неудачи и текущие ошибки. Они предпринимают попытку за попыткой, пока к ним, наконец, не приходит удача.',
            'Наибольший недостаток этого мышления в том, что интеллектуальный поиск идет вслепую, а значит, неэкономно. Еще одна трудность — его хаотичность, стихийность.',
            'Лирик словно в калейдоскопе видит причудливые, переливающиеся картины — то наплывающие, то отдаляющиеся.',
            'Предприниматель мыслит очень экспериментально: ускоренно перебираетв голове множество вариантов и тестирует их на практическую пригодность.',
            'Энтузиаст инициирует социальные процессы, оставляя за собой шлейф мелких эмоциональных завихрений. Мысли «роятся» в его голове, вытесняя друг друга. ',
            'Мастер как бы "лежит в дрейфе" и ждет попутного ветра. Но как только ситуация становится благоприятной, начинается самоорганизация — его мышление быстро запускается, прокручивая поступающую информацию, выделяет наиболее и наименее удачные варианты действий.'
        ]
    },
];

export const DETAIL_CARD_INTERTYPE: DetailCardProps[] = [
    {
        type: 'intertype',
        intertype: 'dual',
        tags: ['Взаимопомощь', 'Баланс'],
        title: 'Дуальные',
        subtitle: 'Полное психологическое дополнение',
        content: [
            'Партнеры дополняют друг друга, общение обычно легкое и непринужденное, а совместная работа — приятная, хотя при налаживании отношений возможна довольно болезненная «притирка».',
            'Все сферы деятельности так или иначе оказываются в зоне сильных функций одного из партнеров, при этом они имеют общие ценности (ценностные функции) и одинаковый жизненный ритм — оба рационалы или иррационалы.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'activity',
        tags: ['Откровенность', 'Зарядка'],
        title: 'Активационные',
        subtitle: 'Поощрение активности друг друга',
        content: [
            'Легкие и приятные, завязываются быстро и легко. Любая сфера деятельности оказывается в зоне сильных функций одного из партнеров.',
            'Однако они имеют разный жизненный ритм (рационал и иррационал), к тому же оба экстраверты или интроверты, при длительном общении склонны уставать друг от друга.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'mirror',
        tags: ['Дискуссии', 'Уважение'],
        title: 'Зеркальные',
        subtitle: 'Отношения конструктивной критики',
        content: [
            'Интересны для общения и совместной деятельности, у партнеров имеются общие ценности и нередко — интересы, возможна конструктивная критика.',
            'Сильные и слабые стороны во многом совпадают.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'identical',
        tags: ['Самооценка', 'Ясность'],
        title: 'Тождественные',
        subtitle: 'Полное понимание, но неумение помочь',
        content: [
            'Партнеры аналогичным образом воспринимают и осмысливают информацию, имеют одинаковые сильные и слабые стороны, общие ценности, нередко — общие интересы.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'kindred',
        tags: ['Обмен мнениями', 'Соперничество'],
        title: 'Родственные',
        subtitle: 'Отношения дальних родственников',
        content: [
            'Сложные отношения со сходными жизненными установками и противоположными программами их реализации.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'semidual',
        tags: ['Поддержка', 'Оценка'],
        title: 'Полудуальные',
        subtitle: 'Отношения неполного дополнения',
        content: [
            'Взаимный интерес в общении, однако при попытках сближения возможны серьезные проблемы.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'pragmatic',
        tags: ['Восхищение интеллектом', 'Сотрудничество'],
        title: 'Деловые',
        subtitle: 'Отношения равных партнёров',
        content: [
            'Отношения делового равноправия с элементами соперничества и конкуренции при разных целях партнеров.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'illusionary',
        tags: ['Восхищение интеллектом', 'Смущение'],
        title: 'Миражные',
        subtitle: 'Отношения неполного дополнения',
        content: [
            'Взаимный интерес в общении, однако при попытках сближения возможны серьезные проблемы.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'beneficiary',
        tags: ['Выполнение потребностей', 'Бессмысленность'],
        title: 'Заказчик',
        subtitle: 'Заказчик смотрит на приемника, сверху вниз, как на нижестоящего, недооценивая его',
        content: [
            'Асимметричные отношения, в которых заказчик обычно имеет больше влияния на подзаказного, чем подзаказный на заказчика.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'giver',
        tags: ['Самореализация', 'Подталкивание'],
        title: 'Подзаказный',
        subtitle: 'Заказчик смотрит на приемника, сверху вниз, как на нижестоящего, недооценивая его',
        content: [
            'В таких отношениях заказчик может несколько недооценивать партнера, а подзаказный — стараться либо угодить партнеру, либо сопротивляться его влиянию.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'supervisor',
        tags: ['Самоуважение', 'Напряжение'],
        title: 'Ревизор',
        subtitle: 'Ревизор как бы постоянно следит за подревизным, обращая внимание на его слабое место',
        content: [
            'Асимметричные отношения, в которых ревизор постоянно, хотя и непреднамеренно, указывает подревизному на его слабое место, иногда пытаясь его «перевоспитывать».'
        ]
    },
    {
        type: 'intertype',
        intertype: 'underling',
        tags: ['Значимость', 'Перегрузка'],
        title: 'Подревизный',
        subtitle: 'Ревизор как бы постоянно следит за подревизным, обращая внимание на его слабое место',
        content: [
            'Отношения неблагоприятны для совместной жизни и семейных отношений — в чем-то даже опаснее конфликтных, которые опасны обоюдно и заставляют партнеров поддерживать дистанцию.',
            'Однако нормальный режим существования возможен, если партнеры сознательно не будут задевать друг другу точки наименьшего сопротивления, болевые функции.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'quasidentical',
        tags: ['Информационная насыщенность', 'Заблуждение'],
        title: 'Квазитождество',
        subtitle: 'Сосуществование при полном непонимании',
        content: [
            'Отношения мирного сосуществования при совпадении сильных и слабых сторон и несовпадении ценностей и интересов.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'parallel',
        tags: ['Веселье', 'Опустошение'],
        title: 'Параллельные',
        subtitle: 'Подспудно назревающий конфликт',
        content: [
            'Отношения вялотекущего, подспудно назревающего конфликта, для таких отношений характерны постоянные и нередко безрезультатные попытки достичь взаимопонимания, нарастающее внутреннее напряжение.',
            'Крайне неблагоприятны для совместной жизни и семейных отношений, однако могут быть полезны в работе при условии параллельной, а не совместной работы.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'contrary',
        tags: ['Решение проблем', 'Скука'],
        title: 'Погашение',
        subtitle: 'Отношения неустойчивой дистанции',
        content: [
            'Партнеры имеют похожие слабые и сильные стороны, однако в общении и совместной деятельности происходит обоюдное погашение, один партнер как бы препятствует деятельности другого.'
        ]
    },
    {
        type: 'intertype',
        intertype: 'superego',
        tags: ['Восхищение способностями', 'Переутомление'],
        title: 'Суперэго',
        subtitle: 'Отношения уважения друг к другу',
        content: [
            'Отношения взаимного уважения и симпатии, которые, однако, при переходе на близкую психологическую дистанцию могут привести к конфликтам и непониманию.',
            'Плохо подходят для совместной жизнии семейных отношений.'
        ]
    },
];