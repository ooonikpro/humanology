import styles from '../QuadrasItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Air() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Air' back>Воздух</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>Виктор Гуленко</AuthorLine>
            <div className={styles.quadraBlock}>
                <Icon name="Air" color="air" size={96} />
                <div className={styles.quadraTitle}>
                    <Text tag="span" size="h4" className={styles.airText}>
                        Воздух
                    </Text>
                    <Text tag="p" size="h6" className={styles.text}>
                        Альфа
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.airText}>
                    Дети
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Демокарты
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Рассудительные
                </Text>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Идеи
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Наука
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Понимание мира
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Теории
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Свобода
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Эмоции
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Комфорт
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Секс
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Радость жизни
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Фантазии
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Возможности
                </Text>
            </div>

            <hr />

            <Text tag="span" size="body" className={styles.text}>
                Кредо
            </Text>

            <Text tag="p" size="h5" className={styles.airText}>
                Хорошо, когда весело, интересно, понятно и комфортно.
            </Text>

            <Text tag="p" className={styles.text}>
                Ценят необычные теории и новые возможности, они с радостью проводят время в уюте, отдыхая среди друзей, делясь друг с другом хорошим настроением.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Ценят нестандартные решения, любят фантазировать и придумывать новое. Борятся за свободу слова, стремятся к обновлению мира и устоев.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Большинство революционеров в истории мира были представителями этой квадры.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                Не выносят шаблонного мышления, они избегают мест, где их ограничивают морально и физически.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Стереотипное, шаблонное мышление не приветствуется, одобряют умение мыслить за рамками, находить нестандартные подходы, активно использовать свое воображение.
            </Text>

            <Text tag="p" className={styles.text}>
                Необычная информация всегда вызывает интерес у представителей этих социотипов. Здесь рады революционным, глобальным переменам, которые благоприятно повлияют на жизнь людей.
            </Text>

            <Text tag="p" className={styles.text}>
                Им нравится ломать старые, отжившие свое подходы и принципы, избавляться от всего старого и уже неспособного функционировать с прежней эффективностью.
            </Text>

            <Text tag="p" className={styles.text}>
                Отрицательно относятся к попыткам загнать их в определенные временные рамки. Им нравится жить тихо, спокойно, размеренно, неторопливо.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Философски-созерцательный образ жизни им подходит как нельзя лучше.
            </Text>

            <Text tag="p" className={styles.text}>
                Не станут терпеть какие-либо моральные рамки, будут избегать строгих требований различных заповедей, требований и правил.
            </Text>

            <Text tag="p" className={styles.text}>
                Стараются с легкостью относиться к жизни, без необходимости не затрудняют ее проблемами, минимизируют количество негативных эмоций, переживаний.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Они не станут стыдиться своих чувств и прятать их.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.airText}>
                Могут
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Устроить революцию.
                </Text>
                <Text tag="li">
                    Эпатировать публику.
                </Text>
                <Text tag="li">
                    Создать оазис абсолютной свободы (анархии).
                </Text>
                <Text tag="li">
                    Быстро и радикально решать проблемы общества и вершить судьбы людей (судить, казнить или миловать).
                </Text>
                <Text tag="li">
                    Создавать новые науки, идеи, религии.
                </Text>
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                Не могут
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Проводить планомерную экспансию (захват пространства и подданных).
                </Text>
                <Text tag="li">
                    Сохранять и накапливать ресурсы (материальные и силовые).
                </Text>
                <Text tag="li">
                    Обеспечивать какую-либо стабильность и давать людям веру или надежду — они обычно заменяются порывом энтузиазма.
                </Text>
                <Text tag="li">
                    Предсказывать развитие общества.
                </Text>
                <Text tag="li">
                    Вести разведку.
                </Text>
            </Text>

            <hr />

            <div className={styles.airBlock}>
                <Text tag="p" size="h5" color="air" className={styles.airText}>
                    Идеи и творчество
                </Text>

                <Text tag="p" className={styles.text}>
                    Революционные и зачастую шокирующие идеи <mark className={styles.water}>Новатора</mark> и его безапелляционность дополняются, уравновешиваются эмоциональной поддержкой, которую старается создавать <mark className={styles.earth}>Дипломат</mark>.
                </Text>
            </div>

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

            <hr />
            <div className={styles.airBlock}>
                <Text tag="p" size="h5" color="air" className={styles.airText}>
                    Контроль и распределение
                </Text>

                <Text tag="p" className={styles.text}>
                    Активируются в условиях хаоса — <mark className={styles.fire}>Энтузиаст</mark> осуществляет контроль эмоциональной энергии (обычно огромной), где он напоминает человека в одиночку управляющего ядерным реактором.
                </Text>

                <Text tag="p" className={styles.text}>
                    <mark className={styles.air}>Аналитик</mark> оценивает события и поступки людей с позиции своей правды, создавая новую систему ценностей и логически обосновывая все действия дуала, доказывая их необходимость и справедливость.
                </Text>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}