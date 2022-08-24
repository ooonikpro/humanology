import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Quadras.module.scss';
import { Text } from '../../components/Text';
import { WhiteCard } from '../../components/WhiteCard';
import { Props as QuadraCardProps, QuadraCard } from '../../components/QuadraCard';
import { AuthorLine } from '../../components/AuthorLine';

const QUADRAS_DATA: Array<Omit<QuadraCardProps, 'onClick'>> = [
    {
        element: 'air',
        status: 'Альфа',
        types: ['Демократия', 'Рассудительность'],
        intro: 'Создать и распространить в обществе принципиально новые идеи социального развития.',
        description: [
            {
                title: 'Демократы',
                content: 'Открытость, плюрализм, преобладание горизонтальных управленческих связей.'
            },
            {
                title: 'Рассудительные',
                content: 'Совещательность, отсутствие силового компонента в принятии решений.'
            }
        ]
    },
    {
        element: 'fire',
        status: 'Бета',
        types: ['Аристократия', 'Решительность'],
        intro: 'Превратить первоначальную концепцию в законченную идеологию и внедрить новые порядки, создавая организационные структуры.',
        description: [
            {
                title: 'Аристократия',
                content: 'Закрытость, преобладание вертикальных, иерархических, управленческих связей.'
            },
            {
                title: 'Решительность',
                content: 'Приоритет силовых методов, решительные и активные действия'
            }
        ]
    },
    {
        element: 'water',
        status: 'Гамма',
        types: ['Демократия', 'Решительность'],
        intro: 'Снять накопившиеся на предыдущем этапе противоречия через критику допущенных ошибок и провести реформирование отживших жестких структур.',
        description: [
            {
                title: 'Демократия',
                content: 'Открытость, плюрализм, преобладание горизонтальных управленческих связей.'
            },
            {
                title: 'Решительность',
                content: 'Приоритет силовых методов, решительные и активные действия'
            }
        ]
    },
    {
        element: 'earth',
        status: 'Дельта',
        types: ['Аристократия', 'Рассудительность'],
        intro: 'Снять накопившиеся на предыдущем этапе противоречия через критику допущенных ошибок и провести реформирование отживших жестких структур.',
        description: [
            {
                title: 'Аристократия',
                content: 'Закрытость, преобладание вертикальных, иерархических, управленческих связей.'
            },
            {
                title: 'Рассудительность',
                content: 'Совещательность, отсутствие силового компонента в принятии решений.'
            }
        ]
    }
];

export default function Quadras() {
    const goTo = useNavigate();

    return (
        <div className={styles.root}>
            <WhiteCard color="beige-title-big">
                <Text tag="h1" size="h4" font="additional" className={styles.title}>
                    Квадры
                </Text>
                <AuthorLine readTime='5'>äлеша</AuthorLine> 

                <Text tag="p" className={styles.text}>
                    Совокупность социотипов, которые совместимы между собой, их
                    связывают общие цели, жизненные позиции и способы достижения
                    замыслов.
                </Text>

                <Text tag="p" className={styles.text}>
                    Всего существует четыре квадры — Альфа, Бета, Гамма и
                    Дельта.
                </Text>

                <Text tag="p" className={styles.text}>
                    В каждой квадре властвует особая психологическая атмосфера,
                    или дух квадры.
                </Text>

                <Text tag="p" className={styles.text}>
                    В квадре находятся четыре разных социотипа, их объединяют
                    признаки:
                </Text>

                <Text tag="ul" className={styles.list}>
                    <Text tag="li">Язык квадры</Text>
                    <Text tag="li">Взгляды на мир и принципы ценностей</Text>
                    <Text tag="li">Способ принятия решений</Text>
                    <Text tag="li">
                        Сексуальная программа — техника секса, соблазнение,
                        прелюдия и т.д.
                    </Text>
                    <Text tag="li">Комплекс квадры</Text>
                </Text>
            </WhiteCard>

            {QUADRAS_DATA.map((item, $i) => {
                return <QuadraCard {...item} onClick={() => goTo(item.element)} key={$i}/>;
            })}
        </div>
    );
}