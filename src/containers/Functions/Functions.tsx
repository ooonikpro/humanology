import React from 'react';
import styles from './Functions.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { SimpleFunctionCard } from '../../components/SimpleFunctionCard';
import { Humanology } from 'src/types';
import { TextInline } from 'src/components/TextInline';
import { TitleInfo } from 'src/components/TitleInfo';

interface IData {
    function: Humanology.Function;
    labels: Array<string>
    intro: string;
    text: Array<string>;
}

const DATA: IData[] = [
    {
        function: 'base',
        labels: ['Ментальная', 'Ценностная', 'Сильная'],
        intro: 'Основа личности. Получается лучше всего. Является самой экспертной.',
        text: [
            'Определяет то, как человек видит мир. Взгляд на жизнь, главный приоритет, основной маячок у человека. '
        ]
    },
    {
        function: 'creative',
        labels: ['Витальная', 'Ценностная', 'Сильная'],
        intro: 'Инструмент достижение целей. Наиболее изобретательно, творчески подходит к решению задач.',
        text: [
            'У каждого творческая функция является самой красивой. Она гибкая, быстрая, умеет приспосабливаться под ситуацию и конкретный момент. Активизируется в сложных ситуациях —палочка-выручалочка для каждого человека.'
        ]

    },
    {
        function: 'pain',
        labels: ['Витальная', 'Внеценностная', 'Слабая'],
        intro: 'Самое уязвимое место. Вызывает дискомфорт. Легче всего обидеть человека, задев его именно по болевой.',
        text: [
            'Если по другим функциям человек хочет работать или работает автоматически, то болевую функцию лучше не трогать вообще.',
            'Критика, возмущение, даже просто много информации, попадающей на болевую функцию, способны вывести человека  из состояния равновесия.',
        ]
    },
    {
        function: 'role',
        labels: ['Ментальная', 'Внеценностная', 'Слабая'],
        intro: 'Человек обычно старается показать себя компетентным, но разрешать сложные ситуации и долго работать в режиме этой функции человеку сложно.',
        text: [
            'Человек по ее области реализациидля адаптации в непривычных для себя условиях играет некую роль, помогающую социализироваться. Личность развивает в себе качества, как бы соответствующие определенным нормам, предъявляемым обществом к индивидууму.'
        ]
    },
    {
        function: 'suggestive',
        labels: ['Витальная', 'Ценностная', 'Слабая'],
        intro: 'Самая слабая из всех функций.Нравится в других. Получая достаточно информации по суггестивной функции, человек становится более счастливым.',
        text: [
            'Не получая информации по суггестивной функции, человек теряет интерес к жизни. Ему крайне нужна эта ценная информация и, подсознательно настраиваясь на дуала (ваша суггестивная функция — базовая функция дуала), человек готов слушать информацию по ней постоянно.'
        ]
    },
    {
        function: 'activate',
        labels: ['Ментальная', 'Ценностная', 'Слабая'],
        intro: 'Идеальная  рабочая обстановка. Охотно принимается помощь. Ориентируется на ближайшее окружение, положительно реагирует на воздействие.',
        text: [
            'Учиться в области активационной функции несложно, при этом очень интересно. Результат не только приятен, но и повышает самооценку.',
            'Информация по функции активации поднимает настроение человеку, побуждает к активным действиям.'
        ]
    },
    {
        function: 'back',
        labels: ['Ментальная', 'Внеценностная', 'Сильная'],
        intro: 'Все ясно, не хочется объяснять. Отслеживается неосознанно.',
        text: [
            'Одна из наименее осознаваемых. Постоянно и надежно выполняет свою интернальную функцию в психической структуре человека.',
            '«Ведет» практически не требуя сознательного вмешательства, в автоматическом режиме. Человек настолько уверен в своих силах, что не страшиться сколь угодно трудной ситуации по аспектам функции.',
            'Автоматически реагирует в тех случаях, когда раздумывать некогда.'
        ]
    },
    {
        function: 'limit',
        labels: ['Витальная', 'Внеценностная', 'Сильная'],
        intro: 'В процессе жизненного формирования выстраивает (больше в бессознательном) определенные жесткие правила, которым должно удовлетворять поведение людей из значимого окружения и свое собственно.',
        text: [
            'Информация, поступающая на функцию защиты, неприятна и тяжела. Человек не хочет проявлять функцию без надобности.',
            'Работать по ограничительной функции человек не сможет — слишком это чужие и неважные для него детали, а любую задачу можно с легкостью решить с помощью связки базовой и творческой функций.'
        ]
    }
];

export default function Functions() {
    return (
        <div className={styles.root}>
            <WhiteCard>
                <Text tag="h3" size="h3" className={styles.title}>Функции</Text>

                <Text tag="p" className={styles.text}>
                    Целостное психологическое образование, которое также содержит: некоторое целостное внутренние
                    пространство, внутреннюю сферу, память, составные части.
                </Text>

                <Text tag="p" size="h6" color="accent" className={styles.text}>
                    Каждая функция работает
                    с определенным аспектом жизни.
                </Text>

                <Text tag="p" className={styles.text}>Каждая функция психики человека влияет
                    на его поведение, обозначает определенные признаки характера и побуждает принимать соответствующее
                    только ему решение.
                </Text>
            </WhiteCard>

            {
                DATA.map((item, $itemKey) => (
                    <WhiteCard key={$itemKey}>
                        <TitleInfo align="start" render={() => (
                            <SimpleFunctionCard function={item.function} />
                        )} className={styles.title} />

                        <TextInline className={styles.text}>
                            {
                                item.labels.map((label, $labelKey) => (
                                    <Text color="grey" size="small" key={$labelKey}>
                                        {label}
                                    </Text>
                                ))
                            }
                        </TextInline>

                        <Text tag="p" size="h6" color="accent" className={styles.text}>
                            {item.intro}
                        </Text>

                        {
                            item.text.map((text, $textKey) => (
                                <Text tag="p" className={styles.text} key={$textKey}>
                                    {text}
                                </Text>
                            ))
                        }
                    </WhiteCard>
                ))
            }
        </div>
    );
}
