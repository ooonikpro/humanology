import styles from '../SuitsCard.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';
import { PageBreak } from '../../../components/PageBreak';

export default function Knight() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Knight' back>Рыцари</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>Виктор Гуленко</AuthorLine>
            <div className={styles.suitBlock}>
                <div>
                    <Icon name="Knight" color="water" size={96} />
                </div>
                <div className={styles.suitTitle}>
                    <Text tag="span" size="h4" className={styles.waterText}>
                        Рыцари
                    </Text>
                    <Text tag="p" size="h6" className={styles.waterText}>
                        Уникальность
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Экстраверты
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Интуиты
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Беспечные
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" className={styles.waterText}>
                Восприятие ориентировано на внешний мир, на расширение и, как интуитов, на абстрактные объекты.
            </Text>

            <Text tag="p" className={styles.text}>
                Всегда настроен на расширение своего интереса.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Изучив объект, он быстро теряет к нему свой интерес, и ему нужен новый объект для изучения.
            </Text>

            <Text tag="p" className={styles.text}>
                Как только работа становится рутиной, она тяготит «рыцаря», которому нужен постоянный вызов и уникальные задачи, с которыми он раньше не сталкивался.
            </Text>

            <Text tag="p" className={styles.text}>
                Стимулируются к работе тем, что ново, необычно, нестандартно, нетрадиционно, оригинально. Увлекаются новыми перспективными направлениями деятельности, науки, религии.
            </Text>

            <Text tag="p" className={styles.text}>
                В работе их привлекает необычность, увлекательность задачи, её сложность, далеко идущие и масштабные последствия предлагаемых проектов.
            </Text>

            <Text tag="p" className={styles.text}>
                Они способны заглянуть в будущее, увидеть отдаленные, невидимые другим перспективы, и, как интуиты, впоследствии оказываются правы.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Очень часто они выступают в роли первопроходцев, первооткрывателей, несут миру новые идеи, новые направления мысли.
            </Text>

            <Text tag="p" className={styles.text}>
                Многие люди не способны их понять, так как представители этой группы видят далеко вперед своего времени.
            </Text>

            <hr />

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Внимательны к уникальному.
                </Text>
                <Text tag="li">
                    Стремятся к новому, необычному.
                </Text>
                <Text tag="li">
                    Бросают и принимают вызовы.
                </Text>
                <Text tag="li">
                    Совершают «подвиги».
                </Text>
                <Text tag="li">
                    «Бравируют» отвагой.
                </Text>
                <Text tag="li">
                    Слово «честь» — не пустой звук.
                </Text>
                <Text tag="li">
                    Добывают «трофеи».
                </Text>
            </Text>

            <PageBreak iconName='Knight'>Рыцари</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}