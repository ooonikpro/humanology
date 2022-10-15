import styles from '../ClubsPsychotype.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';
import { PageBreak } from '../../../components/PageBreak';

export default function Infantile() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Infantile' back>Инфантилы</PageTitle>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Интернет</AuthorLine>
            <div className={styles.psychotypeBlock}>
                <div>
                    <Icon name="Infantile" size={96} className={styles.infantileIcon} />
                </div>
                <div>
                    <Text tag="span" size="h4" className={styles.infantileText}>
                        Инфантилы
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.text}>
                    Интуиты
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Рассудительные
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Предпочитает не проявлять инициативу, а подхватывать её. Ему важен полный комфорт в отношениях, покой и доверие партнеру.
            </Text>

            <Text tag="p" className={styles.text}>
                Хорошо воспринимает заботу в его сторону, любит, когда решают его проблемы, воспринимает это как проявление любви.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Свою заинтересованность часто выражает, как ребёнок, старающийся привлечь внимание.
            </Text>

            <Text tag="p" className={styles.text}>
                В любовной игре предпочтение отдает психологическому фактору — душевной беседе, располагающей музыке, созданию условий для релаксации.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Ожидает от партнёра деловой и эмоциональной поддержки, уважает в нём опыт и отзывчивость к его проблемам.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Люди, которые не хотят иметь ограничений, для которого свобода выбора — во главе угла.
            </Text>

            <Text tag="p" className={styles.text}>
                Инфантилом он называется не потому, что не может постоять за себя, отвечать за себя или нуждается в том, чтоб его постоянно гладили по головке.
            </Text>

            <Text tag="p" className={styles.text}>
                Это не так. Инфантилом он называется потому, что его разум подобен разуму ребенка, который познает мир.
            </Text>

            <Text tag="p" className={styles.text}>
                Он пытлив, терпеть не может запреты и четкие схемы, жаждет новых впечатлений и ему быстро наскучивают старые и понятные.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Ему необходима постоянная движуха, ему хочется нарушать законы и правила не потому что «я один против вас всех» (как виктим) а потому, что «а вдруг за ними что-то там еще есть вкусное?».
            </Text>

            <Text tag="p" className={styles.text}>
                Его сутью является постоянный поиск новых «вкусностей», как буквально — в плане еды, любят пробовать все новое, так и в метафорическом смысле.
            </Text>

            <Text tag="p" className={styles.text}>
                И любые жесткие ограничения, и даже ограничения формальные и не жесткие для инфантила кажутся таковыми.
            </Text>

            <Text tag="p" className={styles.text}>
                Поэтому частенько именно инфантилы больше всех не любят всяческие типологии и прочие инструменты категоризации.
            </Text>

            <Text tag="p" className={styles.text}>
                В силу своих внутренних установок они не умеют этими инструментами пользоваться, и почти сразу же априори воспринимают их как средство ограничения в большей степени, чем способ познания мира.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Они терпеть не могут познавать мир по кем-то уже начертанным схемам. И именно поэтому лучшие ученые-первооткрыватели среди инфантилов.
            </Text>

            <Text tag="p" className={styles.text}>
                Они просто не верят в любые утверждения, сделанные кем-то до них, и часто, конечно, бьются башкой об стену, но порой, попутно открывают теорию относительности.
            </Text>

            <Text tag="p" className={styles.text}>
                Инфантил подобен ребенку исключительно в том смысле, что, сколько ты ребенку не говори «не трогай горячий утюг, обожжешься!», пока он не обожжется, он не поверит в то, что это действительно опасно.
            </Text>

            <Text tag="p" className={styles.text}>
                А потом еще разберет этот утюг, пока родителей нет, чтоб выяснить, а почему он его обжег.
            </Text>

            <hr />
            <div className={styles.infantileBlock}>
                <div>
                    <Icon name="Male" size={40} className={styles.infantileIcon} />
                    <Text tag="p" size="h6" className={styles.infantileText}>
                        Мужчина-инфантил
                    </Text>
                </div>

                <Text tag="p" size="h6" className={styles.text}>
                    Несамостоятельный, наивный в житейских делах, ожидает от женщины деловой и эмоциональной поддержки.
                </Text>

                <Text tag="p" className={styles.text}>
                    Невольно подчеркивает свою обойденность вниманием, загубленные способности, неприспособленность к жизненной борьбе.
                </Text>

                <Text tag="p" className={styles.text}>
                    Уважает в женщинах опыт и отзывчивость к его проблемам.
                </Text>
            </div>

            <hr />
            <div className={styles.infantileBlock}>
                <div>
                    <Icon name="Female" size={40} className={styles.infantileIcon} />
                    <Text tag="p" size="h6" className={styles.infantileText}>
                        Женщина-инфантил
                    </Text>
                </div>

                <Text tag="p" size="h6" className={styles.text}>
                    Идеал этой женщины — это добрый и опытный, хорошо приспособленный к жизни мужчина, обычно старше её по возрасту.
                </Text>

                <Text tag="p" className={styles.text}>
                    В присутствии такого мужчины она чувствует себя маленькой девочкой, почти во всем зависимой от него.
                </Text>

                <Text tag="p" className={styles.text}>
                    В любовной игре предпочтение отдает психологическому фактору — душевной беседе, располагающей музыке, созданию условий для релаксации. Превыше всего ценит снисходительность и заботу.
                </Text>
            </div>

            <PageBreak iconName="Infantile">Инфантилы</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}