import styles from '../QuadrasItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';
import { PageBreak } from '../../../components/PageBreak';

export default function Earth() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Earth' back>Земля</PageTitle>
            <AuthorLine text='Читать 6 минут' iconName='Time'>Виктор Гуленко</AuthorLine>
            <div className={styles.quadraBlock}>
                <Icon name="Earth" color="earth" size={96} />
                <div className={styles.quadraTitle}>
                    <Text tag="span" size="h4" className={styles.earthText}>
                        Земля
                    </Text>
                    <Text tag="p" size="h6" className={styles.text}>
                        Дельта
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.earthText}>
                    Старики
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Аристократы
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Рассудительные
                </Text>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Способности
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Единство
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Потенциал
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Уют
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Совесть
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Здоровье
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Качество
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Гармония
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Польза
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Надежность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Умения
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Навыки
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Технологии
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Новинки
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Человечность
                </Text>
            </div>

            <hr />

            <Text tag="span" size="body" className={styles.text}>
                Кредо
            </Text>

            <Text tag="p" size="h5" className={styles.earthText}>
                Стабильность, дружелюбность, практичность и комфорт.
            </Text>

            <Text tag="p" className={styles.text}>
                Ценят такие вещи, как уют, благополучие, стабильный доход, им важно, чтобы рядом были близкие люди, которым можно доверять.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Ориентируются на «вечные» ценности в стабильном мире.
            </Text>

            <Text tag="p" className={styles.text}>
                Считают, что для комфортной жизни важна самореализация, работа, приносящая хорошие деньги, отсутствие отрицательных ощущений и приятные люди вокруг.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Не понимают идеи ради идей, они ценят изобретательность, которую можно применить на практике, получив реальную выгоду.
            </Text>

            <Text tag="p" className={styles.text}>
                Считают важнейшей частью человека его нравственность, мудрость, доброту.
            </Text>

            <Text tag="p" className={styles.text}>
                Присущи такие качества, как расчетливость, доброжелательность и дружественность.
            </Text>

            <Text tag="p" className={styles.text}>
                Практики, способных воплощать в жизнь продуктивные замыслы в их полном объеме, до тех пор, пока все возможности не будут исчерпаны.
            </Text>

            <Text tag="p" className={styles.text}>
                Этих людей отличает открытость, добродушие, доброжелательность, умение по достоинству ценить комфорт, уют и стабильность в семье.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Ценят социальную стабильность, консервативный подход, бережливое отношение к природным и экономическим ресурсам.
            </Text>

            <Text tag="p" className={styles.text}>
                Придают большое значение новым технологиям, научному прогрессу, высококвалифицированному труду, находчивости и изобретательности в условиях стабильной экономической обстановки.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Работают добросовестно и с удовольствием, воспринимая труд как инструмент для реализации природной потребности человека в творческом самовыражении.
            </Text>

            <Text tag="p" className={styles.text}>
                А показателем степени реализации считают личные заслуги человека.
            </Text>

            <Text tag="p" className={styles.text}>
                Можно узнать по таким этическим ценностям позитивного характера, как признание роли религии, толерантность, принятие индивидуальности каждого человека, гуманизм, соблюдение личных границ, невмешательство в чужой внутренний мир.
            </Text>

            <Text tag="p" className={styles.text}>
                А еще им присуще стремление свести к нулю количество негативный ощущений, куда входит создание самых лучших условий для работы, избегание дискомфорта, сведение к минимуму негативное воздействие внешней среды.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.earthText}>
                Могут
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Помочь личному росту каждого.
                </Text>
                <Text tag="li">
                    Создать локальный рай.
                </Text>
                <Text tag="li">
                    Открывать таланты.
                </Text>
                <Text tag="li">
                    Действовать экологично во всех областях природы и психики.
                </Text>
                <Text tag="li">
                    Дать обществу новую, адекватную времени мораль.
                </Text>
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                Не могут
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Действовать силовыми, негуманными методами.
                </Text>
                <Text tag="li">
                    Вести пропаганду.
                </Text>
                <Text tag="li">
                    Распространять свое влияние в глобальных масштабах.
                </Text>
                <Text tag="li">
                    Придумать новую философию, науку.
                </Text>
                <Text tag="li">
                    Переступить через приоритет личности.
                </Text>
                <Text tag="li">
                    Создать государство как аппарат подавления свободы.
                </Text>
            </Text>

            <PageBreak iconName="Earth">Земля</PageBreak>

            <div className={styles.earthBlock}>
                <Text tag="p" size="h5" color="air" className={styles.earthText}>
                    Совершенствование и человечность
                </Text>

                <Text tag="p" className={styles.text}>
                    Создает общество изобилия, используя оточенные технологии, мастерство и постоянно качественно улучшает жизнь, добиваясь максимальной отдачи и эффективности.
                </Text>

                <Text tag="p" className={styles.text}>
                    Новые высокие стандарты — моральные и технологические. Идеалы этого блока являются определяющими в формировании таких общечеловеческих ценностей как практичность — <mark className={styles.fire}>Администратор</mark> и гуманность — <mark className={styles.air}>Гуманист</mark>.
                </Text>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFJ" className={styles.sociotype} />
                </Link>
            </div>

            <hr />
            <div className={styles.earthBlock}>
                <Text tag="p" size="h5" color="air" className={styles.earthText}>
                    Идеализация и развитие
                </Text>

                <Text tag="p" className={styles.text}>
                    Качественное улучшение жизни вокруг себя путем перехода с одного чувственно-ощущающего уровня на другой — создает максимально комфортные условия жизни.
                </Text>

                <Text tag="p" className={styles.text}>
                    <mark className={styles.earth}>Мастер</mark> совершенствует окружающее пространство, социально раскрепощает людей, дает шанс для самореализации каждого конкретного человека — раскрытия всех его потенциальных возможностей, талантов.
                </Text>

                <Text tag="p" className={styles.text}>
                    <mark className={styles.water}>Советчик</mark> стимулирует и помогает в процессе личностного роста.
                </Text>
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

            <EndPoint />
        </div>
    );
}