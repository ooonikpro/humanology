import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Contrary() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Contrary' back>Погашение</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>

            <div className={styles.intertypeIconsPink}>
                <Icon name="Contrary" size={128} className={styles.intertypeIconPink} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>

            <Text tag="p" size="h5" className={styles.intertypeTextPink}>
                Решение проблем, скука
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Неблагоприятные отношения, в которых партнеры «гасят» друг в друге искренние и яркие проявления, считая их чрезмерными и бессмысленными.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В отношениях полной противоположности партнерам практически невозможно установить правильную дистанцию в общении, это получается сделать только в том случае, когда партнеры общаются наедине друг с другом.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Как только появляется третий человек, дискуссия превращается в жаркий спор, где каждый пытается доказать, что он прав. Причем ни один из партнеров не аргументирует свою позицию, поэтому этот спор не несет никакого смысла.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                «Погашенцы» очень любят друг друга критиковать, задевая за живое.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Именно обиды — главная проблема в таких отношениях, поскольку партнер может задеть ваши сильные стороны, подвергнуть сомнению целесообразность вашей жизненной установки.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Партнеры в отношениях полной противоположности часто могут спрогнозировать поведение друг друга, ожидаемые провалы или успехи.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Партнеры-«погашенцы» думают совершенно по-разному, хоть и могут называть свои мысли одинаковыми словами. Часто в этих отношениях создается ощущение, будто партнер подсмеивается над вами.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Читать книги, написанные «погашенцем», сложно и непонятно. Даже если это классики литературы, то произведение все равно воспринимается поверхностным, мутным, оно не «цепляет».
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Спустя время быстро забывается и сюжет, и мораль.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Сильное притяжение, взаимное любопытство, интересное общение, решение конкретных проблем.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Внутреннее неудовольствие, тревога, напряжение, изнурительные бесплодные споры, обиды, раздражение, нервозность, агрессивность, озлобленность, сарказм, черствость, придирчивость, преувеличивание недостатков, угнетение, нетактичность, унижения, издевательства, бурные стычки, отсутствие взаимопомощи, усталость, полный разлад, психические и психосоматические нарушения.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Оригинальность</Text>
                <Text tag="li" size="h6">Сложность</Text>
                <Text tag="li" size="h6">Стычки</Text>
            </Text>

            <EndPoint />
        </div>
    );
}
