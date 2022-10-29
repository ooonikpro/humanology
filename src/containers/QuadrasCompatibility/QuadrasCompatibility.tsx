import React from 'react';
import { AuthorLine } from '../../components/AuthorLine';
import { PageTitle } from '../../components/PageTitle';
import { WhiteCard } from '../../components/WhiteCard';
import { Icon } from '../../components/Icon';
import { EndPoint } from '../../components/EndPoint';
import { Text } from '../../components/Text';
import styles from './QuadrasCompatibility.module.scss';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function QuadrasCompatibility() {

    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='Dildo' back >Сексуальные программы квадр</PageTitle>
                <AuthorLine text='Читать 7 минут' iconName='Time'>Александр Букалов</AuthorLine>
                <Icon name="QuadrasCompatibility" size={{ width: 240, height: 64 }} className={styles.titleIcon} />

                <Text tag="p" size="h4" color="accent" font="additional" className={styles.text}>
                    Сексуальные <br /> программы квадр
                </Text>

                <Text tag="p" className={styles.text}>
                    Интересно, что когда встречаются типы из различных квадр, то им непривычны особенности сексуального поведения партнера.
                </Text>

                <Text tag="p" className={styles.text}>
                    Члены квадры являются наиболее сексуально совместимыми партнëрами. Рассмотрим более подробно сексуальное поведение в каждой квадре.
                </Text>

                <hr />

                <div className={styles.airBlock}>
                    <Icon name="Air" size={64} className={styles.airIcon} />
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.airText}>
                            Воздух
                        </Text>
                        <Text tag="p" color="accent" className={styles.text}>
                            Телячьи нежности и эксперименты
                        </Text>

                        <Text tag="p" size="h6" className={styles.airText}>
                            Характеризуется нежными прикосновениями.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            В диаде <mark className={styles.water}>Новатор</mark> и <mark className={styles.earth}>Дипломат</mark> партнеры «любят друг друга кожей», как бы растворяясь в объятиях друг друга.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Сенсорные типы <mark className={styles.earth}>Дипломат</mark> и <mark className={styles.fire}>Энтузиаст</mark> любят, чтобы их нежно гладили по коже.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Но <mark className={styles.fire}>Энтузиаст</mark>, по сравнению с <mark className={styles.earth}>Дипломатом</mark>, более эмоционален и неистов в любовных проявлениях, потому что ему приходится «раскачивать» своего дуала — <mark className={styles.air}>Аналитика</mark>.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Однако <mark className={styles.earth}>Дипломат</mark>, как иррациональный сенсорный тип, проявляет больше творчества и гибкости.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Интуитивно-логические типы — <mark className={styles.water}>Новатор</mark> и <mark className={styles.air}>Аналитик</mark> особенно женщины, проявляют вначале меньшую активность.
                        </Text>

                        <hr />

                        <Text tag="p" className={styles.text}>
                            Отношения между <mark className={styles.water}>Новатором</mark> и <mark className={styles.air}>Аналитиком</mark> характеризуются скудостью чувств и эмоций, поскольку это логические и интуитивные типы.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            А зеркальные отношения между <mark className={styles.fire}>Энтузиаста</mark> и <mark className={styles.earth}>Дипломата</mark> проявляются в ярких эмоциях и ощущениях. Но очень часто накапливается взаимное подсознательное недовольство друг другом.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            <i>Вообще зеркальные отношения в браке постепенно невротизируют партнеров. Особенно страдает от своей рациональности Энтузиаст, на иррациональном Дипломате это отражается меньше.</i>
                        </Text>
                    </div>
                </div>

                <div className={styles.fireBlock}>
                    <Icon name="Fire" size={64} className={styles.fireIcon} />
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.fireText}>
                            Огонь
                        </Text>
                        <Text tag="p" color="accent" className={styles.text}>
                            Страсти-мордасти и внезапность
                        </Text>

                        <Text tag="p" size="h6" className={styles.fireText}>
                            Характер сексуальных ласк совсем другой — не любят легких поглаживаний, а стремятся к интенсивному воздействию на кожу, что проявляется в сильных объятиях, когда партнеры стискивают, сдавливают друг друга.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Сенсорные типы <mark className={styles.fire}>Лидер</mark> и <mark className={styles.earth}>Инспектор</mark> очень ревнивы: одна мысль об измене может отравить им жизнь.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            <i>Шекспировский Отелло <mark className={styles.earth}>Инспектор</mark> убивает Дездемону.</i>
                        </Text>

                        <Text tag="p" className={styles.text}>
                            <i>Муж <mark className={styles.earth}>Инспектор</mark> и жена <mark className={styles.water}>Наставник</mark> живут в общежитии. Поскольку жена — общительный экстраверт, то муж очень часто ревнует её к соседям. При этом сцена каждый раз разыгрывается почти по Шекспиру: «Ты с кем была ?» — спрашивает он и берет её руками за шею. Она вскрикивает, и он испуганно отпускает ее.</i>
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Что касается <mark className={styles.fire}>Лидера</mark>, то он может в моменты близости давать четкие уверенные команды <mark className={styles.air}>Лирику</mark>.
                        </Text>

                        <hr />

                        <Text tag="p" className={styles.text}>
                            Зеркальные отношения <mark className={styles.fire}>Лидер</mark> — <mark className={styles.earth}>Инспектор</mark> довольно сложны: чтобы подстроиться под партнера, <mark className={styles.fire}>Лидеру</mark> необходимо постоянно контролировать себя, сдерживаться.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Это очень утомляет его, но если он этого не будет делать, то невротизирует <mark className={styles.earth}>Инспектора</mark> своей сенсорикой, отсутствующей у <mark className={styles.water}>Наставника</mark>.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            От <mark className={styles.water}>Наставника</mark> <mark className={styles.earth}>Инспектор</mark> ждет бурных драматических чувств и поддержки своих сенсорных инициатив. При этом партнеры могут принимать самые невероятные позы.
                        </Text>
                    </div>
                </div>

                <Text tag="p" size="h6" color="accent" className={styles.text}>
                    Интересно, что когда встречаются типы из различных квадр, то им непривычны особенности поведения партнера.
                </Text>
                <Text tag="p" className={styles.text}>
                    <i>Так, женщина-<mark className={styles.earth}>Хранитель</mark> была очень удивлена, когда мужчина-<mark className={styles.air}>Лирик</mark> сильно сжимал её в своих объятиях, — ей пришлось «переучивать» его.</i>
                </Text>

                <hr />

                <div className={styles.waterBlock}>
                    <Icon name="Water" size={64} className={styles.waterIcon} />
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.waterText}>
                            Вода
                        </Text>
                        <Text tag="p" color="accent" className={styles.text}>
                            Прагматичность и динамика
                        </Text>

                        <Text tag="p" size="h6" className={styles.waterText}>
                            Сексуальная программа весьма динамична и часто характеризует акробатичность поведения партнеров
                        </Text>

                        <Text tag="p" className={styles.text}>
                            В диаде <mark className={styles.fire}>Политик</mark> и <mark className={styles.air}>Критик</mark> инициатива обычно всегда в руках <mark className={styles.fire}>Политика</mark>, который сенсорно управляет партнером.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            <mark className={styles.air}>Критик</mark> подчиняется, даже если его просто решительно взять за руку. Он говорит: «Если меня взять и повести, то я сразу пойду и не буду сопротивляться, поддамся контролю партнера».
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Что касается диады <mark className={styles.earth}>Хранитель</mark> и <mark className={styles.water}>Предприниматель</mark>, то здесь характерны частая смена поз партнеров и высокая интенсивность чувств, а также большое количество половых актов, например, за несколько дней, при последующем длительном отдыхе.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Если <mark className={styles.fire}>Политик</mark> после сексуального общения «остывает» очень быстро, то <mark className={styles.earth}>Хранителю</mark> может потребоваться один-два часа ласк и поглаживаний партнера.
                        </Text>

                        <hr />

                        <Text tag="p" className={styles.text}>
                            Зеркальные отношения между <mark className={styles.fire}>Политиком</mark> и <mark className={styles.earth}>Хранителем</mark> похожи на отношения между <mark className={styles.fire}>Лидером</mark> и <mark className={styles.earth}>Инспектором</mark>: <mark className={styles.earth}>Хранитель</mark> тоже довольно ревнив.
                        </Text>
                    </div>
                </div>

                <Text tag="p" className={styles.text}>
                    В этой связи интересно сопоставить интимные отношения <mark className={styles.earth}>Дипломата</mark> и <mark className={styles.fire}>Политика</mark>. Между ними отношения полной противоположности. Это может привести к тому, что партнеры (особенно интроверт) быстро охладевают друг к другу, происходит действительно полное сенсорное и эмоциональное погашение.
                </Text>

                <Text tag="p" className={styles.text}>
                    А вот между <mark className={styles.water}>Новатором</mark> и <mark className={styles.air}>Критиком</mark>, <mark className={styles.air}>Лириком</mark> и <mark className={styles.water}>Советчиком</mark> такое погашение происходит реже их функции сенсорики находятся в подсознании.
                </Text>

                <hr />

                <div className={styles.earthBlock}>
                    <Icon name="Earth" size={64} className={styles.earthIcon} />
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.earthText}>
                            Земля
                        </Text>
                        <Text tag="p" color="accent" className={styles.text}>
                            Веселые девушки и хлопцы
                        </Text>

                        <Text tag="p" size="h6" className={styles.earthText}>
                            Игровое поведение, смех, пощипывание партнера.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            <mark className={styles.fire}>Администратор</mark> проявляет больше энергии, но меньше творчества, чтобы «раскачать» застенчивого <mark className={styles.air}>Гуманиста</mark>, и менее сдержан по сравнению с <mark className={styles.earth}>Мастером</mark>.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Сам <mark className={styles.earth}>Мастер</mark>, экономя энергию, проявляет со своим дуалом <mark className={styles.water}>Советчиком</mark> больше творчества, они оба смотрят на это как на высокое искусство.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Для <mark className={styles.water}>Советчиков</mark>-женщин характерны извивающиеся, кокетливые и «кошачьи» движения. Очень сильно воздействуют стимулы извне — фильмы, литература, музыка.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Слабая сторона <mark className={styles.water}>Советчика</mark> — жалость: партнер может добиться успеха, рассказывая о своих страданиях. В этой ситуации <mark className={styles.water}>Советчик</mark> становится нежным, чувствует острую необходимость принести хоть кому-то облегчение;
                        </Text>

                        <hr />

                        <Text tag="p" className={styles.text}>
                            Кстати, другой псевдоним <mark className={styles.water}>Советчика</mark> — Дон Жуан: он успешно ухаживает за женщиной, но в последний момент может уклониться от близости.
                        </Text>

                        <Text tag="p" className={styles.text}>
                            Только его дуал <mark className={styles.earth}>Мастер</mark> или активатор <mark className={styles.fire}>Администратор</mark> могут взять инициативу в свои руки.
                        </Text>
                    </div>
                </div>

                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}