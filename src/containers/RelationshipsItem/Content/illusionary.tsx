import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Illusionary() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Illusionary' back>Миражные</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>

            <div className={styles.intertypeIconsGreen}>
                <Icon name="Illusionary" size={128} className={styles.intertypeIconGreen} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>

            <Text tag="p" size="h5" className={styles.intertypeTextGreen}>
                Расслабление, смущение
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Издалека партнер-«миражник» выглядит похожим на дуала, чем вызывает симпатию, но при близком общении возникает ощущение, что партнер – это лишь «мираж» дуала, его подобие.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В миражных отношениях партнеры расслабляются, поскольку чувствуют защиту слабых мест.
                С «миражником» хорошо разговаривать на отвлеченные темы, отдыхать, развлекаться. При этом, в миражных отношениях партнерам достаточно сложно работать.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Миражные отношения относятся к благоприятным отношениям.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Как только начинается деловое сотрудничество «миражников», сразу возникает непонимание в вопросах организации труда, эффективности рабочего времени, не ясны мотивы партнера.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Каждый из партнеров ожидает от второго других действий, более целесообразных с их точки зрения. Часто возникают ссоры именно во время работы, поэтому «миражникам» лучше работать по-отдельности, не контролируя друг друга.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В паре «миражников» экстравертный партнер пытается сделать интровертного партнера «нормальным человеком», а интровертный партнер пытается отвязаться от навязывания экстравертным партнером своего ритма работы.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                При том, что конфликты в миражной паре иногда случаются, они обычно кратковременные и неглубокие.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Партнерам интересно друг с другом, они общаются комфортно и расслабленно.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Отношения между «миражниками» скачут от ощущения счастья и гармонии к ощущению злости и полного непонимания. Когда партнеры привыкают к этому, то отношения становятся более стабильными.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В миражных отношениях партнеры то улучшают, то ухудшают взаимопонимание. «Миражникам» приятно общаться друг с другом наедине, а не в большом коллективе. Миражная пара, чаще всего, не склонна к постоянной социальной жизни, этим людям хорошо вдвоем, им больше никто не нужен.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Миражные отношения учат нас осуществлять детские мечты, становится более свободными и расслабленными.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Комфортное расслабление, интересное общение, благосклонность, вежливость, внимание, подхваливания, стремление поддержать и морально, и в деле.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Пренебрежение интересами партнера, плохое взаимопонимание, недоверие к способностям, несогласованность в работе, истощение.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>
            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Расслабление</Text>
                <Text tag="li" size="h6">Несуразица</Text>
                <Text tag="li" size="h6">Вседозволенность</Text>
            </Text>

            <EndPoint />
        </div>
    );

}