import styles from '../QuadrasItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Fire() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Fire' back>Огонь</PageTitle>
            <AuthorLine text='Читать 6 минут' iconName='Time'>Виктор Гуленко</AuthorLine>
            <div className={styles.quadraBlock}>
                <Icon name="Fire" color="fire" size={96} />
                <div className={styles.quadraTitle}>
                    <Text tag="span" size="h4" className={styles.fireText}>
                        Огонь
                    </Text>
                    <Text tag="p" size="h6" className={styles.text}>
                        Бета
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.fireText}>
                    Подростки
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Аристократы
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Решительные
                </Text>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Система
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Законы
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Порядок
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сила
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сроки
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Иерархии
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Правила
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Авторитеты
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    История
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Мотивация
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Темп
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Страсть
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Настрой
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Воля
                </Text>
            </div>

            <hr />

            <Text tag="span" size="body" className={styles.text}>
                Кредо
            </Text>

            <Text tag="p" size="h5" className={styles.fireText}>
                Бороться, любить, ценить момент и быть справедливым.
            </Text>

            <Text tag="p" className={styles.text}>
                Люди сильные и настроенные на борьбу ради того, чтобы стать первыми в своем деле и в жизни.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Не обращают внимание на слабости, превозмогают, упорно идут к цели несмотря на неудачи и возникающие проблемы.
            </Text>

            <Text tag="p" className={styles.text}>
                Интересуются мировой историей, проводят параллели между настоящим и прошлым, любят людей эмоциональных и чувствующих, верят в судьбу и во всем стараются быть лучшими.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Не любят слабаков, тех людей, которые быстро сдаются. Готовы пожертвовать мелкими радостями быта ради большой цели, которая всегда маячит на горизонте.
            </Text>

            <Text tag="p" className={styles.text}>
                Для них важно быть храбрыми, сильными и ощущать себя избранными.
            </Text>

            <Text tag="p" className={styles.text}>
                Основное внимание отдано воле, разуму, увлеченности и историческим перспективам.
            </Text>

            <Text tag="p" className={styles.text}>
                Дорожат умением избавляться от слабостей, стойко бороться с различными лишениями, сопротивляться большей силе и приобретая тем самым авторитет и уважение окружающих.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Слабость здесь не приветствуется и всячески порицается.
            </Text>

            <Text tag="p" className={styles.text}>
                Сильные, выносливые и стойкие люди, пренебрегающие болью, не прячущиеся за чужими спинами и несущие полную ответственность за свои действия.
            </Text>

            <Text tag="p" className={styles.text}>
                Никто не понимает «значимость текущего момента» так, как они. Эти люди просчитывают свои шаги, предусматривают любые мелочи, которые могут оказаться фатальными для их деятельности.
            </Text>

            <Text tag="p" className={styles.text}>
                Они умеют учиться на чужих ошибках, верят в предназначение и судьбу и всегда готовы бороться, превозмогать трудности и преодолевать препятствия ради светлого будущего и всеобщего счастья.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Отказываются от непритязательных, мелкобуржуазных удовольствий, игнорируют обывательские радости.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.fireText}>
                Могут
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Захватить власть.
                </Text>
                <Text tag="li">
                    Создать империю или корпорацию.
                </Text>
                <Text tag="li">
                    Победить в войне.
                </Text>
                <Text tag="li">
                    Преодолеть разруху.
                </Text>
                <Text tag="li">
                    Осуществить глобальные суперпроекты.
                </Text>
                <Text tag="li">
                    Вселить в людей чувство оптимизма, сопричастности, гордости за державу.
                </Text>
                <Text tag="li">
                    Дать людям смысл существования — веру в светлое будущее.
                </Text>
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                Не могут
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Создать принципиально новое — используют заготовки и опыт других квадр.
                </Text>
                <Text tag="li">
                    Наладить конкурентоспособное в торговом отношении производство — здесь оно обычно экстенсивное — эффект достигается за счет резкого увеличения затрат сил и ресурсов.
                </Text>
                <Text tag="li">
                    Гибко реагировать с учетом ситуации на местах — сказывается сильная инерция и консервативность иерархической пирамиды, построенной на силовых, директивных методах.
                </Text>
            </Text>

            <hr />

            <div className={styles.fireBlock}>
                <Text tag="p" size="h5" color="air" className={styles.fireText}>
                    Иерархия и ресурсы
                </Text>

                <Text tag="p" className={styles.text}>
                    Стабилизируют иерархию — <mark className={styles.earth}>Инспектор</mark> создает логически обоснованные правила построения общества, а <mark className={styles.water}>Наставник</mark> распространяет их, тонко играя на эмоциональных струнах и вдохновляя идеями, сплачивающими людей в единое целое.
                </Text>

                <Text tag="p" className={styles.text}>
                    Кроме того, <mark className={styles.earth}>Инспектор</mark> организует порядок в области материального производства и распределения ресурсов, а также занимается подготовкой — обучением профессиональных кадров.
                </Text>
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

            <hr />
            <div className={styles.fireBlock}>
                <Text tag="p" size="h5" color="air" className={styles.fireText}>
                    Экспансия и захват
                </Text>

                <Text tag="p" className={styles.text}>
                    Концентрация сил, средств, власти и построение империи. Рассматривая всех людей в качестве «винтиков», можно собрать и заставить работать механизм. Такой подход оправдан, ведь основная масса человечества несовершенна, понимает только силу. Именно в таких условиях <mark className={styles.fire}>Лидер</mark> максимально реализует себя.
                </Text>

                <Text tag="p" className={styles.text}>
                    <mark className={styles.air}>Лирик</mark> является этическим компенсатором в жестких условиях развития империи и реально помогает преодолеть крутые повороты судьбы — не сломаться и дуалу, и многим другим — в этом его отнюдь не легкая миссия.
                </Text>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTP" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}