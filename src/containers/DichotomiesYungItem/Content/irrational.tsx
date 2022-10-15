import styles from '../DichotomiesYungItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { EndPoint } from '../../../components/EndPoint';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Irrational() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Irrational' back>Просоционик</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Воспринимают мир непосредственно, без предварительной оценки, через органы чувств или с помощью интуиции.
            </Text>

            <Text tag="p" className={styles.text}>
                Иррационал не думает, как реагировать, он просто реагирует. Переключение на новую информацию у иррационалов плавное, они как будто живут в потоке постоянно поступающих сигналов окружающего мира и реагируют на них естественным образом.
            </Text>

            <Text tag="p" className={styles.text}>
                У них нет четко обозначенной «точки перестройки», вхождения в другой «режим». Они хорошо воспринимают сюрпризы и с ними постоянно происходит что-то новое.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Достигая поставленных целей, они обращают внимание на всю попутно поступающую информацию и могут отвлекаться на дополнительные факторы.
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Они как бы захватывают по пути все, даже то, что совсем не относится к конечной цели. Из-за этого иррационалы медленнее достигают желаемого по сравнению с рационалами, однако они гибче и лучше приспосабливаются к новым условиям.
            </Text>

            <Text tag="p" className={styles.text}>
                Без труда прощаются со старым, отжившим свое, если это уже не актуально, и потому для них не так важны традиции, если в этом нет для них какого-то личного интереса.
            </Text>

            <Text tag="p" className={styles.text}>
                Сами по себе традиции как символ стабильности и сохранения привычного образа жизни не являются для них ценностью.
            </Text>

            <Text tag="p" className={styles.text}>
                По этой же причине иррационалы не будут сохранять отношения, которые изжили себя, просто для того, чтобы поддержать стабильность в своей жизни.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Зачастую игнорируют правила, предпочитая ориентироваться по ситуации и решать проблемы по мере поступления.
            </Text>

            <Text tag="p" className={styles.text}>
                Поэтому рациональным типам они могут казаться легкомысленными и несерьезными.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Кратко и по пунктам
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Воспринимают новый опыт непосредственно, не сравнивая его с предыдущим.
                </Text>
                <Text tag="li">
                    Принимают решение без предварительной оценки, установки.
                </Text>
                <Text tag="li">
                    На новое переходят плавно, без усилий, живут в потоке.
                </Text>
                <Text tag="li">
                    С ними часто случаются непредвиденные моменты.
                </Text>
                <Text tag="li">
                    Не очень организованы.
                </Text>
                <Text tag="li">
                    Идут к цели, отвлекаясь, из-за чего достигают ее медленнее.
                </Text>
                <Text tag="li">
                    Не держатся за традиции и привычные нормы.
                </Text>
                <Text tag="li">
                    Не станут поддерживать отношения ради одной только стабильности.
                </Text>
                <Text tag="li">
                    Игнорируют правила, предпочитая ориентироваться по ситуации.
                </Text>
                <Text tag="li">
                    Гибкие, хорошо приспосабливаются и подстраиваются под ситуацию.
                </Text>
                <Text tag="li">
                    Внешне выглядят расслабленными, тело – гибкое.
                </Text>
            </Text>

            <PageBreak iconName='Irrational'>Иррационалы</PageBreak>

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
                    to={`${ROUTES.SOCIOTYPES('ESTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFP" className={styles.sociotype} />
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

            <EndPoint />
        </div>
    );
}