import styles from '../DichotomiesYungItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Introvert() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Introvert' back>Интроверт</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>Просоционик</AuthorLine>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Видит себя как некий центр, который окружен людьми, событиями. Ему интересно то, что его непосредственно касается.
            </Text>

            <Text tag="p" size="h5" className={styles.text}>
                Склонен доверять собственному мнению, и его сложно переубедить в чем-либо.
            </Text>

            <Text tag="p" className={styles.text}>
                Важны не объекты, как таковые, а то, как он к ним относится, и то, в каких отношениях эти объекты состоят между собой. Это могут быть отношения между людьми или связи между различными фактами.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Мнение окружающих для него не так значимо, как для экстраверта. Это не означает, что интроверт совсем не учитывает мнения других людей, однако он менее зависим от него, чем экстраверт.
            </Text>

            <Text tag="p" className={styles.text}>
                Восстанавливает энергию, находясь наедине с собой. Он хорошо разбирается в своих собственных мыслях, чувствах, ощущениях.
            </Text>

            <Text tag="p" className={styles.text}>
                Других людей ему понять сложнее, чем себя.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Ему сложнее, чем экстраверту, встать на точку зрения другого человека и посмотреть на ситуацию «другими глазами».
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Кратко и по пунктам
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Интересуются только тем, что имеет к ним непосредственное отношение.
                </Text>
                <Text tag="li">
                    Склонны углубляться в детали.
                </Text>
                <Text tag="li">
                    Сложнее вступают в контакт при общении с незнакомцами. Эффективнее работают в одиночку.
                </Text>
                <Text tag="li">
                    Мнение людей для них не так важно, как собственная точка зрения. Не слишком интересуются тем, что думают о них окружающие.
                </Text>
                <Text tag="li">
                    Энергию черпают изнутри.
                </Text>
                <Text tag="li">
                    Хорошо осознают свои внутренние потребности.
                </Text>
                <Text tag="li">
                    Им требуется совершить некоторое усилие, чтобы осознать потребности окружающих.
                </Text>
                <Text tag="li">
                    Жесты интровертов имеют небольшую амплитуду , «от локтя». Закрытые заказы.
                </Text>
                <Text tag="li">
                    Взгляд направлен как бы внутрь себя, либо зафиксирован на одном объекте.
                </Text>
            </Text>

            <PageBreak iconName='Introvert'>Интроверты</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
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
                    to={`${ROUTES.SOCIOTYPES('ISFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFJ" className={styles.sociotype} />
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