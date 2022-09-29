import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Identical() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Identical' back>Тождественные</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>

            <div className={styles.intertypeIcons}>
                <Icon name="Identical" size={128} className={styles.intertypeIcon} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>

            <Text tag="p" size="h5" className={styles.intertypeText}>
                Самооценка, ясность
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Отношения между людьми одного типа. Считаются нейтральными по степени комфортности.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Когда вы впервые встречаете человека с таким же типом, в соционике такие люди называются «тождики», то сначала вы удивляетесь тому, насколько вы похожи. Создается ощущение, будто вы встретили близнеца по характеру, по жизненным предпочтениям.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Тождественные отношения — это идеальные отношения для объяснения и обучения.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Лучшим преподавателем всегда будет ваш «тождик»: только он сможет объяснить всю информацию простыми словами, и вы схватите все на лету.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Хорошо, если один из родителей является «тождиком» ребенка — в этом случае, и ребенок будет понимать мотивы родителя, и родитель прекрасно видит, почему ребенок поступает именно так.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Несмотря на то, что понимание между людьми с тождественными типами складывается отличное, эти люди не могут друг другу помочь: у них одни и те же слабые стороны, которые нуждаются в прикрытии. К «тождику» часто возникает сочувствие, понимание его истинных мотивов и желание оправдать: ведь вы бы в такой ситуации поступили абсолютно также.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Тождественное общение быстро надоедает.
            </Text>

            <Text tag="p" size="large" color="accent" className={styles.text}>
                <i>Если учитель в начальной школе совпадает по типу с учеником, то ученик учится хорошо, выбивается в отличники, становится любимчиком. </i>
            </Text>

            <Text tag="p" size="large" color="accent" className={styles.text}>
                <i>Если же типы учителя и ученика не совместимы, то, порой, проблема не в том, что ребенок ленится, или учитель плохо объясняет – часто эти два человека просто говорят на разных языках, поэтому и учитель не может ничего объяснить, и ученик – понять.</i>
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Люди с тождественными типами совсем не спорят, ведь их точки зрения, в целом, совпадают.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Если такие люди долгое время находятся вдвоем, они могут и вовсе прекратить разговоры – зачем это нужно, если они и так друг друга понимают с полуслова?
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Человек с таким же типом, как и ваш, для вас абсолютно «прозрачен», как и вы для него. Этот человек читается как открытая книга, его мотивы ясны, его задачи понятны. С таким человеком получается деловое общение, при этом говорить на «пустые» темы совсем не выходит.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Легкое общение, быстрое и простое взаимпонимание, общность взглядов и ценностей, спокойствие, легкая передач опыта и знаний.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Однообразие, скука, чувство пустоты и одиночества, угнетенность, депрессия.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>
            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Легкость</Text>
                <Text tag="li" size="h6">Равнодушие</Text>
                <Text tag="li" size="h6">Пустота</Text>
            </Text>

            <EndPoint />
        </div>
    );

}
