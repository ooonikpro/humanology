import React from 'react';
import styles from './DichotomiesYung.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { DetailCard } from '../../components/DetailCard';
import { DETAIL_CARD_YUNG } from '../../constants/detailCard';
import { PageBreak } from '../../components/PageBreak';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function DichotomiesYung() {
    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='Square11'>Дихотомии Юнга</PageTitle>
                <AuthorLine text='Читать 7 минут' iconName='Time'>Интернет</AuthorLine>
                <Text tag="p" size="h6" className={styles.text}>
                    Откуда же взялись именно 16 типов?
                </Text>
                <Text tag="p" className={styles.text}>
                    Юнг вывел четыре пары взаимоисключающих понятий — дихотомий (он установил их на практике, наблюдая за пациентами). Это:
                </Text>

                <div className={styles.row}>
                    <Text size="body" color="grey">Иррационал</Text>
                    <Text size="body" color="grey">Рационал</Text>
                </div>

                <div className={styles.row}>
                    <Text size="body" color="grey">Сенсорик</Text>
                    <Text size="body" color="grey">Интуит</Text>
                </div>


                <div className={styles.row}>
                    <Text size="body" color="grey">Этик</Text>
                    <Text size="body" color="grey">Логик</Text>
                </div>

                <div className={styles.row}>
                    <Text size="body" color="grey">Интроверт</Text>
                    <Text size="body" color="grey">Экстраверт</Text>
                </div>

                <PageBreak>Иррационал · Рационал</PageBreak>

                <Text tag="p" className={styles.text}>
                    Рационалы стремятся дать оценку всему, что они видят, чувствуют и замечают. Хорошо, плохо, правильно, неправильно, прямо, криво — рационалу легко подобрать слова на любой случай. А вот впитывают новое рационалы ограниченными дозами — мешают фильтры в сознании. Эти же фильтры позволяют легко подбирать слова.
                </Text>

                <Text tag="p" className={styles.text}>
                    У иррационалов все наоборот. Они постоянно ощущают мир на своей шкуре. А вот подобрать слова сложно — сознание иррационала в основном состоит из черных ящиков. Оценки даются лишь отдельным, лучше изученным объектам, ощущениям и явлениям.Рационал сначала думает, потом делает. Иррационал сначала делает, потом думает.
                </Text>

                <Text tag="p" className={styles.text}>
                    Лучший способ отличить рационала от иррационала — проверить реакцию человека на нарушение порядка вещей вокруг него. Реакция иррационала будет очень резкой — быстро поставить все, как надо, найти и наказать виновных. Реакция рационала будет более сдержанной, скорее описательной — что в ситуации плохого, и какой порядок ему привычен.
                </Text>

                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_YUNG.slice(0, 2).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <PageBreak>Сенсорик · Интуит</PageBreak>

                <Text tag="p" className={styles.text}>
                    Сенсорики более прагматичны и более конкретны, имеют хорошую мышечную моторную ловкость, слух, глазомер, для них более важны еда, секс, приятные телесные ощущения, власть над реальным окружающим пространством.
                </Text>
                <Text tag="p" className={styles.text}>
                    У интуитов же развито воображение, фантазия. Они обладают такими способностями к абстракции, обобщению, аналогиям и ассоциациям, которых нет и не может быть у сенсориков.
                </Text>

                <Text tag="p" className={styles.text}>
                    На физиологическом уровне этот признак связан с балансом некоторых нейромедиаторных систем мозга, важную роль в предопределении того, кем станет человек — интуитом или сенсориком — играет мозговой серотонин.
                </Text>

                <Text tag="p" className={styles.text}>
                    Внешне, как у женщин, так и у мужчин, он отражается в голосе, в живости интонаций, в приподнятости бровей — у этиков, ну и, конечно, в круге жизненных и профессиональных интересов.
                </Text>

                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_YUNG.slice(2, 4).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <Text tag="p" size="h6" color="accent" className={styles.text}>
                    Альянс двух сенсориков
                </Text>

                <Text tag="p" className={styles.text}>
                    Приведёт к тому, что они будут жить только сегодняшним днём, без перспектив развития. Жизнь превращается в скучную рутину: «Ну что, поели – теперь можно и поспать. Поспали – можно и поесть».
                </Text>

                <hr />

                <Text tag="p" size="h6" color="accent" className={styles.text}>
                    Два интуита
                </Text>

                <Text tag="p" className={styles.text}>
                    Чересчур оторваны от реалий жизни. Редко доводят задуманное до реализации.
                </Text>

                <hr />

                <Text tag="P" size="h6" color="accent" className={styles.text}>
                    Зачем они друг другу?
                </Text>

                <Text tag="p" className={styles.text}>
                    Сенсорику нужен интуит для того, чтобы понять, к чему ведет ситуация, какой курс лучше выбрать, какие существуют альтернативы.
                </Text>

                <Text tag="p" className={styles.text}>
                    Интуиту нужен сенсорик, чтобы помочь отстоять своё мнение, довести дела до конца. К тому же сенсорик подскажет интуиту, когда и как нужно обратить внимание на своё здоровье.
                </Text>

                <PageBreak>Этик · Логик</PageBreak>

                <Text tag="p" className={styles.text}>
                    У логиков преобладает холодный рассудок, у этиков – эмоции. Этот признак связан как с полушарными различиями между людьми, так и с балансом женских и мужских половых гормонов, эстрогенов и андрогенов.
                </Text>

                <Text tag="p" className={styles.text}>
                    Внешне, как у женщин, так и у мужчин, он отражается в голосе, в живости интонаций, в приподнятости бровей — у этиков, ну и, конечно, в круге жизненных и профессиональных интересов.
                </Text>

                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_YUNG.slice(4, 6).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <Text tag="p" size="h6" color="accent" className={styles.text}>
                    Партнерство двух этиков
                </Text>

                <Text tag="p" className={styles.text}>
                    Мучительное явление и потому нежизнеспособное: представьте постоянные взаимные упреки, обиды, ссоры и выяснения отношений; постоянные нотации и нравоучения, которые, хотя и игнорируются, но уже давным-давно набили оскомину.
                </Text>

                <Text tag="p" className={styles.text}>
                    Вечные напоминания о том, как любил раньше и как любит теперь. Постоянное перекладывание друг на друга проблем, которые сложно решить им обоим.
                </Text>

                <hr />

                <Text tag="p" size="h6" color="accent" className={styles.text}>
                    Отношения двух логиков
                </Text>

                <Text tag="p" className={styles.text}>
                    «Пресные», «суховатые», там не будет эмоциональной наполненности. Часто эти отношения бывают занудными, логик постоянно будет искать новые аргументы своей правоты, спор может тянуться бесконечно, ужасно утомив обоих спорщиков.
                </Text>

                <hr />

                <Text tag="P" size="h6" color="accent" className={styles.text}>
                    Зачем они друг другу?
                </Text>

                <Text tag="p" className={styles.text}>
                    Логику нужен этик для того, чтобы поддержать настроение, наладить отношения, приободрить. Помочь разобраться в межличностных проблемах, воодушевить. Этик может подсказать линию поведения, какую позицию лучше занять в общении с теми или иными людьми.
                </Text>

                <Text tag="p" className={styles.text}>
                    Этику нужен логик, чтобы выяснить целесообразность или нецелесообразность действий, рассчитать расходы, выявить логические связи, помочь разобраться с логической информацией: законами, технологиями и пр.
                </Text>

                <PageBreak>Экстраверт · Интроверт</PageBreak>

                <Text tag="p" className={styles.text}>
                    Физиологически связан с преобладанием в регуляции мозговой деятельности какой-либо из двух наличествующих в мозге оппозиционных регуляторных систем — эрготропной, энергозатратной или трофотропной, энергосберегающей.
                </Text>
                <div className={styles.detailCards}>
                    {
                        DETAIL_CARD_YUNG.slice(6, 8).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
                    }
                </div>

                <Text tag="p" className={styles.text}>
                    Не следует отождествлять понятия экстраверсии и интроверсии со степенью общительности или замкнутости человека.
                </Text>

                <Text tag="p" className={styles.text}>
                    Юнг отмечал, что в мире нет ни чистых экстравертов, ни чистых интровертов, но каждый индивидуум более склонен к одной из этих установок и действует преимущественно в её рамках.
                </Text>

                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}