import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Careless() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Careless' back>Беспечные</PageTitle>

            <AuthorLine text='Читать 6 минут' iconName='Time'>Екатерина Филатова</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Восприятие проблемной ситуации происходит через обнаружение в ней новых, незнакомых черт, а поиск решения проблемы ведется в рамках текущей ситуации.
            </Text>

            <Text tag="p" className={styles.text}>
                Это вынуждает каждый раз составлять новый алгоритм, пригодный для конкретной задачи, и позволяет находить принципиально новые решения.
            </Text>

            <Text tag="p" className={styles.text}>
                Склонны решать какую-либо проблему, искать решение, используя только ту информацию, которая доступна в данной ситуации (например, в условии задачи).
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Поэтому каждый раз составляют новый алгоритм — под конкретную задачу.
            </Text>

            <Text tag="p" className={styles.text}>
                Полагаются на свои идеи или замыслы, чтобы получить доступ к ресурсам.
            </Text>


            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Низкосигнальная сенсорика
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Повышенная чувствительность к боли, виду крови, к сигналам собственного организма, а также к звуковыми и зрительным стимулам.
            </Text>

            <Text tag="p" className={styles.text}>
                Повышенная сенсорная чувствительность — к боли, к виду крови, виду и звукам чужих физических страданий. Ранняя влюбчивость, сенсорная впечатлительность, прислушивание к ощущениям своего тела.
            </Text>

            <Text tag="p" className={styles.text}>
                Высоко чувствительны и к слабым сигналам собственного организма: могут сосредоточиться и «почувствовать» работу своих внутренних органов.
            </Text>

            <Text tag="p" className={styles.text}>
                Тонко чувствительны к звуковым сигналам: точно и быстро определяют направление на источник звука. Подмечают характерные особенности в чужой манере речи. Во время работы подмечают любые слабые и случайные посторонние звуки с улицы.
            </Text>

            <Text tag="p" className={styles.text}>
                Характерны и зрительная чувствительность, наблюдательность к мелким деталям в окружающей природе,облакам, насекомым, травинкам, хорошие следопыты.
            </Text>

            <Text tag="p" className={styles.text}>
                Высокая чувствительны к реальным физическим запахам. Предпочитают «чистый» тонкий вкус продуктов, без вкусовой смеси и без заглушки интенсивным вкусом сахара, — тут специалисты по слабым сигналам выбирают изолированные слабосигнальные детали и части, а не смешанное интегральное целое.
            </Text>

            <Text tag="p" className={styles.text}>
                В групповой тенденции — «совы». К вечеру сенсорные пороги у человека повышаются, а количество случайных звуковых и световых раздражителей с улицы уменьшается, что делает стимульную среду для них более комфортной.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Высокосигнальная интуиция
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Любовь к риску, богемным компаниям, дальним странствиям, оптимистичность в ожиданиях, завышенная планка своих надежд.
            </Text>

            <Text tag="p" className={styles.text}>
                Любят ситуации, возбуждающие и стимулирующие ожидания их воображение: рискованные ставки в игре, книги и фильмы про пиратов и дальние странствия, богемные компании с рискованными развлечениями и авантюрными приключениями.
            </Text>

            <Text tag="p" className={styles.text}>
                Любят ситуации, возбуждающие и стимулирующие ожидания их воображение: рискованные ставки в игре, книги и фильмы про пиратов и дальние странствия, богемные компании с рискованными развлечениями и авантюрными приключениями.
            </Text>

            <Text tag="p" className={styles.text}>
                Нравятся лесть и комплименты в их адрес — в данном случае комплименты надо поставить в один ряд с авантюрами и отнести их не на счет сильносигнальной этики, а на счет сильносигнальной интуиции, требующей интенсивных возбудителей, одним из которых и могут выступать комплименты.
            </Text>

            <Text tag="p" className={styles.text}>
                В том же смысле своей интуитивной сильносигнальности они оптимистичны в ожиданиях: завышают планку своих надежд.
            </Text>

            <Text tag="p" className={styles.text}>
                В своем восприятии больше опираются на зрение, чем на все остальное. Объяснение — универсальность зрения как сенсорной модальности с избыточной информацией.
            </Text>

            <Text tag="p" className={styles.text}>
                «Беспечны» лишь в интуитивной сфере того, что может случиться, но еще не произошло, а в сенсорной области как раз мелочно капризны и привередливы.
            </Text>

            <Text tag="p" className={styles.text}>
                Зрительный мир беспечных чаще состоит из одного выделяемого крупным планом уникального объекта со множеством столь же уникальных, правдоподобно реальных, безошибочно-конкретных и часто вкусно удивительных деталей, требующих от субъекта отдельного разглядывания.
            </Text>

            <Text tag="p" className={styles.text}>
                Представлены <mark className={styles.earth}>дамами</mark> и <mark className={styles.water}>рыцарями</mark>.
            </Text>

            <PageBreak iconName='Careless'>Беспечные</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTP" className={styles.sociotype} />
                </Link>
            </div>
        </div>
    );
}