import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Supervisor() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Supervisor' back>Ревизор</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>

            <div className={styles.intertypeIconsYellow}>
                <Icon name="Supervisor" size={128} className={styles.intertypeIconYellow} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>

            <Text tag="p" size="h5" className={styles.intertypeTextYellow}>
                Самоуважение, напряжение
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Неблагоприятные отношения, которые отличаются также отсутствием симметрии: в этой паре партнеры относятся друг к другу неодинаково.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Один из партнеров имеет название ревизора, а второй — подревизного.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                У подревизного партнера создается впечатление, что ревизор специально следит за ним, пытаясь выведать все его неудачи, смотря на него сверху вниз, снисходительно.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Подревизный ощущает, что ревизор постоянно его оценивает, и поэтому, в его присутствии, он напрягается, пытаясь не сделать ошибок.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Для подревизного ревизор является человеком значимым, его внимание и похвалу очень хочется заслужить своими действиями.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                При этом подревизный постоянно ощущает, что ревизор его недооценивает, что еще сильней увеличивает желание доказать свою значимость и полезность. К сожалению, такие попытки никогда не бывают успешными.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Ревизор в глазах подревизного — это преподаватель, который постоянно придирается, пытается учить, перевоспитывать.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                При этом, в глазах ревизора подревизный кажется человеком неплохим, но которому не хватает опыта. Подревизного хочется обучить, подсказать ему, как лучше делать. Но советы он не воспринимает и делает как прежде, что очень нервирует ревизора. Из-за этого ревизор может считать подревизного бестолковым человеком.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Отношения ревизор-подревизный — это отношения матери и непослушного ребенка.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В отношениях ревизии оба партнера чувствуют свою значимость: ревизор понимает, что подревизный без него пропадет, а подревизный видит, что для ревизора он важен и ценен, несмотря на придирки.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В отношениях ревизии напряжение склонно накапливаться постепенно. С каждым днем растет раздражение ревизора над бестолковостью подревизного, а подревизный начинает нервничать, поскольку не понимает, почему ревизор хочет его перевоспитать.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Рано или поздно взаимное недовольство перерастает в конфликт.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Очень тревожные отношения для подревизного, поскольку при появлении ревизора у него появляется навязчивая мысль, что он все делает «не так». Особенно ярко конфликт ревизии проявляется в том случае, если ревизор и подревизный — это коллеги, работающие над одним проектом.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В целом, любое тесное взаимодействие — это уже гарантия возникающих сложностей между этими людьми.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Подревизные часто страдают тогда, когда ревизор – один из родителей или ближайших родственников. Из таких отношений подревизный партнер выходит часто с психологической травмой, неуверенностью в себе. Подревизные часто страдают тогда, когда ревизор – один из родителей или ближайших родственников.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Из таких отношений подревизный партнер выходит часто с психологической травмой, неуверенностью в себе.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Отношения ревизии — одни из самых неблагоприятных, наравне с конфликтными, поэтому при возможности, общение между партнерами стоит сократить — это стресс, как и для ревизора, так и для подревизного.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Если же общение сократить никак не получается, необходимо следовать советам, которые помогут предотвратить ссоры.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Отношения ревизии могут развиваться лишь в спокойное время.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                <i>Когда наступает период активных быстрых действий, все проблемы отношений выплескиваются друг на друга. Поэтому необходимо поддерживать, хотя бы и искусственно, спокойное течение жизни: необходимо заранее друг друга предупреждать о каких-то внезапных ситуациях, рассказывать об изменениях, которые будут происходить, не эмоционировать и обсуждать все наедине друг с другом.</i>
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Ревизор должен дозировать информацию.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                <i>Это касается любой информации, выдаваемой подревизному. Не стоит также требовать от него быстрого понимания. За любые положительные проявления со стороны подревизного стоит радоваться, за отрицательные — постараться не ругаться.</i>
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Учитывайте критическое отношение друг к другу.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Ревизор всегда будет критиковать подревизного, причем не конкретные его огрехи, а его образ жизни целиком. При этом, подревизный, наоборот, будет критиковать конкретные проявления ревизора, в целом, восхищаясь им как человеком более опытным и знающим.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Интересное общение, самосовершенствование, значимость, благотворительная опека, увлечение партнером, помощь.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Неуважительные замечания, пренебрежение, придирки, указывание на недостатки, повышенная требовательность, упреки, обвинения, оскорбления, насмешки, недооценка и унижение партнера, самодовольство, стремление перевоспитывать, упрямство, презрение, беспокойство, тревога, перенапряжение, раздражение, моральные издевательства.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>
            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Забота</Text>
                <Text tag="li" size="h6">Напряженность</Text>
                <Text tag="li" size="h6">Раздражительность</Text>
            </Text>

            <EndPoint />
        </div>
    );

}
