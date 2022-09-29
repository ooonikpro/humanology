import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Kindred() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Kindred' back>Родственные</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>

            <div className={styles.intertypeIconsGreen}>
                <Icon name="Kindred" size={128} className={styles.intertypeIconGreen} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>

            <Text tag="p" size="h5" className={styles.intertypeTextGreen}>
                Обмен мнениями, соперничество
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Нейтральные отношения между людьми, которые одновременно и очень похожи друг на друга, и совершенно разные.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Взаимопонимание в таких отношениях высоко, но при этом часто бывает и непонимание в бытовых вопросах.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                «Родственники» способны осознать жизненные ценности и желания друг друга, поэтому их дискуссии носят практический склад и партнеры с радостью обмениваются опытом и мнениями.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Но при этом, зона уверенности одного из партнеров попадает на самую слабую зону второго, из-за чего неосознанно можно нанести друг другу обиду.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В целом, отношения напоминают беседы дальних родственников, которые могут формально общаться, при этом быть вежливыми и учтивыми, но не особо интересоваться друг другом.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Зоны интереса в общении у «родственников» одинаковые, поэтому партнер не может удовлетворить ваши вопросы своим экспертным знанием, как и вы его.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Родственные отношения достаточно однообразны.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Расцветают лишь тогда, когда в компании появляются новые люди. Вдвоем «родственники» скучают, обменявшись мнениями и поняв друг друга, им, в целом, не о чем больше говорить.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Если запереть двух «родственников» в одной комнате, то велика вероятность грандиозного конфликта, когда как в большой семье такое общение может быть весьма благоприятным.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Родственные отношения учат нас иначе воспринимать нашу болевую функцию.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В таких отношениях можно получить по ней полезный опыт, который в дальнейшем поможет легче преодолевать трудности.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                «Родственник» помогает нам преодолеть режим страха перед проблемой в режим конструктивного её преодоления.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Приятное приветливое общение, легкое взаимопонимание, общие цели, снятие напряжения и волнения, успокоение, отстаивание и защита друг друга.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Неприятие методов работы, скука из-за схожести взглядов, болезненное восприятие замечаний, ссоры, подчеркивание недостатков, недоверие, неуважение, пренебрежение, необходимость компромиссов и лавирований, застой, потребность в самостоятельности.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>
            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Самоуважение</Text>
                <Text tag="li" size="h6">Верхновенство</Text>
                <Text tag="li" size="h6">Пренебрежение</Text>
            </Text>

            <EndPoint />
        </div>
    );

}
