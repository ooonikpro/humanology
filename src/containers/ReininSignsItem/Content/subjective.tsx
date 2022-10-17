import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Subjective() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Subjective' back>Субъективные</PageTitle>

            <AuthorLine text='Читать 2 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>

            <Text tag="p" className={styles.text}>
                Другое название — Веселые.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Считают собственные понятия и суждения верными или неверными без сверки их с общедоступными и общепринятыми знаниями.
            </Text>

            <Text tag="p" className={styles.text}>
                Опора в суждениях делается на субъективную оценку в рамках собственной концепции. Много говорят о том, что правильно и что неправильно. Ценят собственное понимание.
            </Text>

            <Text tag="p" className={styles.text}>
                Свободно обсуждаются темы хорошего или плохого настроения. Ценят веселье, юмор, воодушевленность.
                Проявления эмоций более непосредственны и индивидуальны.
            </Text>

            <Text tag="p" className={styles.text}>
                Любят учиться и работать «весело». Веселье могут совмещать с работой. Могут работать в шуме.
            </Text>

            <Text tag="p" className={styles.text}>
                О планируемых делах молчат, либо говорят социально ожидаемо, то есть о том, что принято.
            </Text>

            <Text tag="p" className={styles.text}>
                При коммуникации в каждом конкретном случае происходит выработка локального языка и совместной оценочной системы, что служит залогом взаимопонимания.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Для интенсивного общения не требуется поэтапного сближения, как условия выявления общей когнитивной платформы.
            </Text>

            <Text tag="p" className={styles.text}>
                Представлены нисходящей воронкой «из хаоса — в реальность» — <mark className={styles.air}>воздушной</mark> и <mark className={styles.fire}>огненной</mark> квадрой.
            </Text>

            <PageBreak iconName='Subjective'>Субъективные</PageBreak>

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
        </div>
    );
}