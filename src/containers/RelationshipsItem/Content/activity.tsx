import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Activity() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Activity' back>Активационные</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>
            <div className={styles.intertypeIcons}>
                <Icon name="Activity" size={128} className={styles.intertypeIcon} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>
            <Text tag="p" size="h5" className={styles.intertypeText}>
                Откровенность, зарядка
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Один из самых приятных видов отношений.
            </Text>
            <Text tag="p" size="large" className={styles.text}>
                Активация идеально подходит для дружбы, а для делового сотрудничества не является оптимальным типом взаимодействия.
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                «Активаторы» видят друг друга сразу, их общение завязывается очень быстро, протекает легко и беспроблемно.
            </Text>
            <Text tag="p" size="large" className={styles.text}>
                Даже удивляет – как так, ведь человек почти незнакомый, а общаемся с ним будто лучшие друзья!
            </Text>
            <Text tag="p" size="large" className={styles.text}>
                «Активаторы» заряжают друг друга энергией, имеют общий юмор, схожие цели в жизни, и их отношения устанавливается намного быстрее, чем у дуалов.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Но не все так хорошо: спустя время партнеры – «активаторы» начинают уставать друг от друга, им нужен перерыв в общении. Проходит неделя-две, и опять хочется общения с «активатором».
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В целом, отношения имеют характер пульсаций, и больше подходят не для деловых союзов, а для дружеских и ни к чему не обязывающих взаимодействий.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                «Активаторам» тяжело поддерживать хорошие отношения в том случае, если они работают вместе. Во-первых, один из партнеров рационален, а другой иррационален, и это уже ведет за собой массу сложностей и недопонимание. Кроме этого, длительный контакт истощяет «активаторов», они начинают цепляться друг к другу, раздражаться, что ведет к конфликтным ситуациям.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                «Активаторов» обижает, что каждый из них будто бы не считается с партнером, что нельзя доверять и положиться на этого человека.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                «Активатор» всегда может научить партнера, причем научить жестко, в какие-то моменты обидев его. Если такие уроки не увенчаются успехом, то общение, скорей всего, сойдет на нет.
            </Text>

            <Text tag="p" size="large" color="accent" className={styles.text}>
                Если же оба партнера настроены на «учебу», то, в конце концов, каждый вынесет из отношений то, что ему пригодится по жизни.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Сильнее это ощущается тогда, когда они по какой-то причине на время расстаются. В диаде, дуальной паре, при успешной дуализации люди способны сильно поднять свою самооценку, получить реальную поддержку друг от друга, вместе справиться со сложностями и быть невероятно близкими друг другу людьми до конца.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Эмоциональный подъем, захватывающее интенсивное общение, откровенность, игривость, поддержка, трудовая активность.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Эмоциональное истощение, раздражительность, упреки, истерики, усталость.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>
            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Наслаждение</Text>
                <Text tag="li" size="h6">Подъем-спад</Text>
                <Text tag="li" size="h6">Истощение</Text>
            </Text>

            <EndPoint />
        </div>
    );
}
