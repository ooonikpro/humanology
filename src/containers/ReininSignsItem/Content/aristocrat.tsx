import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Aristocrat() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Aristocrat' back>Аристократы</PageTitle>

            <AuthorLine text='Читать 2 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>

            <Text tag="p" className={styles.text}>
                Воспринимают людей с точки зрения их принадлежности некоторой группе, определенному слою в иерархии или определенному кругу общения, в большей степени, чем с точки зрения их индивидуальных качеств.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Делят людей на своих и чужих, избранных и подчиняющихся, талантливых и бездарей.
            </Text>

            <Text tag="p" className={styles.text}>
                Предпочитают формальные, официальные отношения.
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Оценивают людей с точки зрения положения в обществе или принадлежности к социальной группе.
            </Text>

            <Text tag="p" className={styles.text}>
                Настроены на иерархию, «социальную лестницу», где каждый должен занимать «свою ступеньку». Соблюдают субординацию, считают ее необходимой.
            </Text>

            <Text tag="p" className={styles.text}>
                Отношения в коллективе строят в соответствии с подчинением по должности или по старшинству. Заслуги определяются стажем и опытом. «Старше – значит, умнее», «Старших надо слушаться».
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Коллективисты. В компании есть некая склонность к фирменной идеологии и пропаганда коллективного образа действия.
            </Text>

            <Text tag="p" className={styles.text}>
                Преобладание вертикальной коммуникации над горизонтальной. При вертикальных связях заметно иерархическое неравенство: начальник — подчинённый, старший — младший, свой — чужой.
            </Text>

            <Text tag="p" className={styles.text}>
                Такая коммуникация носит характер субординации. Человек оценивается прежде всего по его статусу относительно того, кто оценивает (моего уровня или нет?), а затем уже по остальным критериям.
            </Text>

            <PageBreak iconName='Fire'>Огненная квадра</PageBreak>

            <Text tag="p" className={styles.text}>
                В <mark className={styles.fire}>огненной</mark> аристократизм более жёсткий. Это деление на «слуг и господ», таланты и бездарности, своих и врагов, кастовость.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Аристократия носит не структурно-ведомственный характер.
            </Text>

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

            <PageBreak iconName='Earth'>Земная квадра</PageBreak>

            <Text tag="p" className={styles.text}>
                В <mark className={styles.earth}>земной</mark> аристократизм сглажен, образ врага, как в <mark className={styles.fire}>огненной</mark>, не формируется, но ведущие себя нецивилизованным способом или просто интеллектуально неразвитые особи зачисляются в разряд второсортных.
            </Text>

            <Text tag="p" className={styles.text}>
                Тоже руководствуется принципом «свои – чужие» при оценке людей: живут ли другие по таким же законам, что и мы? Здесь больше выражена клановость.
            </Text>

            <Text tag="p" className={styles.text}>
                Сомнений по поводу оптимальности своих приоритетов, как правило, не возникает.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Это также квадра аристократов, но только здесь являет собой семейно-клановую иерархию.
            </Text>

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