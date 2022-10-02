import React from 'react';
import { AuthorLine } from '../../components/AuthorLine';
import { PageTitle } from '../../components/PageTitle';
import { WhiteCard } from '../../components/WhiteCard';
import { Icon } from '../../components/Icon';
import { EndPoint } from '../../components/EndPoint';
import { Text } from '../../components/Text';
import styles from './PsychotypesCompatibility.module.scss';
import { PageBreak } from '../../components/PageBreak';

export default function PsychotypesCompatibility() {

    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='Cockring' back >Совместимость психотипов</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>Александр Букалов</AuthorLine>
            <Icon name="PsychotypesCompatibility" size={{ width: 240, height: 64 }} className={styles.titleIcon} />

            <Text tag="p" size="h4" color="accent" font="additional" className={styles.text}>
                Совместимость <br /> психосексуальных групп
            </Text>

            <Text tag="p" className={styles.text}>
                От психосексуальности зависит их поведение как в отношениях, так и непосредственно в постели.
            </Text>

            <Text tag="p" className={styles.text}>
                Дуальные пары всегда состоят из агрессора и виктима или заботливого и инфантила, что логично — именно эти сочетания являются оптимальными, в них партнёры соответствуют запросам друг друга и могут дать друг другу то, что им надо.
            </Text>

            <PageBreak>Гармоничные отношения</PageBreak>

            <div className={styles.accentBlock}>
                <Icon name="Aggressor" size={64} className={styles.aggressorIcon} />
                <Icon name="Victim" size={64} className={styles.victimIcon} />
                <div>
                    <Text tag="span" size="h4" font="additional" className={styles.text}>
                        Агрессор и виктим
                    </Text>
                    <Text tag="p" color="accent" className={styles.text}>
                        Идеальные кошки-мышки
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Отношения напоминают игру в кошки-мышки.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Причём, что немаловажно, «мышка» заинтересована в том, чтобы её поймали, не меньше, чем «кошка», и поймать её должен данный конкретный хищник.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Вопреки распространённому заблуждению, <mark className={styles.accent}>виктим</mark> вовсе не горит желанием подчиняться кому ни попадя.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Это жертва, которая всегда сама выбирает себе охотника. Это гармоничные взаимоотношения.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Здесь нет места манипуляциям, так как каждый в паре даёт другому именно то, что ему нужно.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <mark className={styles.accent}>Виктим</mark> постоянно проверяет на прочность себя и партнёра, а агрессору нравится завоёвывать, ведь удовольствие охотника не в том, чтобы жертва сама приползла к нему, а в том, чтобы преодолеть её сопротивление.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <mark className={styles.accent}>Агрессор</mark> говорит: «Я хочу», подразумевая «И возьму». <mark className={styles.accent}>Виктим</mark> отвечает: «Попробуй» и это означает согласие.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Секс в данной паре, построенный на доминантности и противоборстве, страстный, даже жесткий.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <mark className={styles.accent}>Виктим</mark> завлекает <mark className={styles.accent}>агрессора</mark>, провоцирует охоту на себя и не дается. Заставляет <mark className={styles.accent}>агрессора</mark> проявлять силу и упорство, добиваться, несмотря на отказ или игнорирование, и наслаждается доказательством того, что его хотят.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <mark className={styles.accent}>Агрессор</mark>, в свою очередь, ищет сложную цель, ему нравится, когда его дразнят и распаляют. Для этих отношений характерно взаимное сексуальное напряжение, нагнетание его для последующего чувственного взрыва и разрядки.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <i>Агрессорско-виктимские отношения часто путают что в корне неверно. Суть отношений в БДСМ — в добровольности, в заранее оговорённых ролях. Здесь же никто не обязан по умолчанию подчиняться, как, впрочем, и подчинять.</i>
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <i>Что касается БДСМ, предрасположенность к нему не зависит от типа информационного метаболизма, так что не стоит проводить никаких параллелей.</i>
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <i>Виктим может быть садистом, инфантил — доминантом, а суровый агрессор — сабмиссивом-мазохистом.</i>
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Это ни в коем случае не отношения раба и хозяина — партнёры всегда равноправны.
                    </Text>
                </div>
            </div>

            <div className={styles.accentBlock}>
                <Icon name="Care" size={64} className={styles.careIcon} />
                <Icon name="Infantile" size={64} className={styles.infantileIcon} />
                <div>
                    <Text tag="span" size="h4" font="additional" className={styles.text}>
                        Заботливый и инфантил
                    </Text>
                    <Text tag="p" color="accent" className={styles.text}>
                        Гармоничные дочки-матери
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Гармоничные взаимоотношения, построенные на взаимном согласии.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Это не обязательно нежность и уси-пуси вообще, но борьба как таковая отсутствует.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <mark className={styles.accent}>Заботливый</mark> не стремится завоевать партнёра агрессивными методами. Он спрашивает: «Ты хочешь?» и инфантил отвечает: «Хочу». Если же он говорит «не хочу», то это не провокация, а вполне серьезное объяснение.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        И, напротив, <mark className={styles.accent}>инфантилам</mark> особенно может быть тяжело озвучить своё желание: они его смущаются, предоставляя инициативу <mark className={styles.accent}>заботливому</mark>.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <mark className={styles.accent}>Инфантил</mark> стремится получать всевозможные удовольствия и экспериментировать, <mark className={styles.accent}>заботливый</mark> же проявляет чувства в том, чтобы удовлетворять все его капризы, и они могут далеко в этом зайти.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Ценностью является комфорт, как физический так и психологический и отсутствие ограничений.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Возможна универсальность, отсутствие четкой привязки к тому, кто будет сверху.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Секс в этой паре оценивается не как всплеск, вспышка, страсть, а как поддержка, тепло, еще один способ выражения привязанности и любви.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Совсем не обязательно он будет исключительно нежным, но и устраивать в постели сафари они вряд ли будут.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Разве что для разнообразия — они ценят эксперименты.
                    </Text>
                </div>
            </div>

            <PageBreak>Негармоничные отношения</PageBreak>

            <div className={styles.accentBlock}>
                <Icon name="Aggressor" size={64} className={styles.aggressorIcon} />
                <Icon name="Care" size={64} className={styles.careIcon} />
                <div>
                    <Text tag="span" size="h4" font="additional" className={styles.text}>
                        Агрессор и заботливый
                    </Text>
                    <Text tag="p" color="accent" className={styles.text}>
                        Рубить траву неинтересно
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Отношения <mark className={styles.accent}>агрессора</mark> и <mark className={styles.accent}>заботливого</mark> далеко не так гармоничны. Оба имеют разные цели.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <mark className={styles.accent}>Агрессор</mark>, настроенный на <mark className={styles.accent}>виктима</mark>, будет стремиться подчинить партнёра, в то время как <mark className={styles.accent}>заботливый</mark> этого не приемлет.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Вероятней всего, он в силу своего стремления договориться миром и отдавать начнет исполнять для <mark className={styles.accent}>агрессора</mark> роль <mark className={styles.accent}>виктима</mark>, но будет при этом разочарован попытками насадить тиранию, нежеланием и неумением воспринимать равноправный диалог, как это будет выглядеть с его точки зрения.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        В сексе <mark className={styles.accent}>заботливый</mark> будет прислушиваться к желаниям <mark className={styles.accent}>агрессора</mark>, но тот хочет захватывать и завоевывать, а не получать просто так, и будет испытывать скуку.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        В то же время <mark className={styles.accent}>заботливый</mark> не приемлет сильных, но грубых ласк.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Лишенная прелюдии силовая эротическая игра угнетает его сексуальность. Оба останутся недовольны друг другом.
                    </Text>
                </div>
            </div>

            <div className={styles.accentBlock}>
                <Icon name="Aggressor" size={64} className={styles.aggressorIcon} />
                <Icon name="Infantile" size={64} className={styles.infantileIcon} />
                <div>
                    <Text tag="span" size="h4" font="additional" className={styles.text}>
                        Агрессор и инфантил
                    </Text>
                    <Text tag="p" color="accent" className={styles.text}>
                        Насилие над детьми
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        В этих отношениях тоже нет понимания.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <mark className={styles.accent}>Инфантил</mark>, настроенный на то, что его желаниями интересуются, будет чувствовать себя ущемленным <mark className={styles.accent}>агрессором</mark>.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Провокации <mark className={styles.accent}>инфантила</mark>, уверенного, что его капризы и проказы будут удовлетворены и прощены будут восприняты <mark className={styles.accent}>агрессором</mark> как виктимная провокация и призыв к активным действиям по их преодолению и подавлению.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Но когда он начнёт действовать, <mark className={styles.accent}>инфантил</mark> вместо приятия, начнет сопротивляться по-настоящему.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Ведь его «не хочу» означает именно «не хочу», а не «попробуй, возьми».
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Это недопонимание приведет к тому, что оба будут испытывать эмоциональный дискомфорт из-за ощущения принуждения.
                    </Text>
                </div>
            </div>

            <div className={styles.accentBlock}>
                <Icon name="Victim" size={64} className={styles.victimIcon} />
                <Icon name="Care" size={64} className={styles.careIcon} />
                <div>
                    <Text tag="span" size="h4" font="additional" className={styles.text}>
                        Виктим и заботливый
                    </Text>
                    <Text tag="p" color="accent" className={styles.text}>
                        Обслуживание тюремной камеры
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        В этих отношениях <mark className={styles.accent}>виктим</mark> будет провоцировать <mark className={styles.accent}>заботливого</mark>.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Тот, чтобы угодить партнёру, начнет проявлять агрессию, ему несвойственную, давить на <mark className={styles.accent}>виктима</mark>, как тот того хочет, но виктим не будет ему подчиняться в силу неуверенности <mark className={styles.accent}>заботливого</mark> в своем праве на то.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <mark className={styles.accent}>Заботливый</mark> будет недоволен тем, что не может удовлетворить партнера, никак не может ему угодить, и виктим не желает идти на примирение, а <mark className={styles.accent}>виктим</mark> будет видеть слабость в стремлении к комфорту.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Таким образом, оба останутся недовольны.
                    </Text>
                </div>
            </div>

            <div className={styles.accentBlock}>
                <Icon name="Victim" size={64} className={styles.victimIcon} />
                <Icon name="Infantile" size={64} className={styles.infantileIcon} />
                <div>
                    <Text tag="span" size="h4" font="additional" className={styles.text}>
                        Виктим и инфантил
                    </Text>
                    <Text tag="p" color="accent" className={styles.text}>
                        Ребенок с пистолетом
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        <mark className={styles.accent}>Виктим</mark> вполне может соблазнить <mark className={styles.accent}>инфантила</mark> поиграть в агрессора.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        В силу их любви к экспериментам, но вскоре понадобится исполнение и других его желаний, а <mark className={styles.accent}>виктим</mark> будет продолжать требовать завоевывать его и подчинять.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        <mark className={styles.accent}>Инфантил</mark> устанет нести агрессорские обязанности, начнет капризничать, что вызовет непонимание и разочарование у <mark className={styles.accent}>виктима</mark>.
                    </Text>
                </div>
            </div>

            <PageBreak>Совсем далекие от гармонии отношения</PageBreak>

            <div className={styles.accentBlock}>
                <Icon name="Aggressor" size={64} className={styles.aggressorIcon} />
                <Icon name="Aggressor" size={64} className={styles.aggressorIcon} />
                <div>
                    <Text tag="span" size="h4" font="additional" className={styles.text}>
                        Два агрессора
                    </Text>
                    <Text tag="p" color="accent" className={styles.text}>
                        Железные дровосеки
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Эта пара может создать впечатление сумасшедшей страсти в постели, однако это заблуждение.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Оба настроены действовать одинаково, оба хотят наслаждаться подчинением, но для каждого из них подчинение его самого неприятно или даже невозможно.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Каждый из них настроен брать. Поэтому и тот, кто сверху, и тот кто снизу будут вести себя равно, и не равно не получать того, чего оба хотят.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        <mark className={styles.accent}>Агрессор</mark>, в отличие от <mark className={styles.accent}>виктима</mark>, не умеет создавать эмоциональное напряжение, сексуальную обстановку, он может только отвечать и действовать.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Таким образом, этот секс будет агрессивным, но механическим, без ярких чувств.
                    </Text>
                </div>
            </div>

            <div className={styles.accentBlock}>
                <Icon name="Victim" size={64} className={styles.victimIcon} />
                <Icon name="Victim" size={64} className={styles.victimIcon} />
                <div>
                    <Text tag="span" size="h4" font="additional" className={styles.text}>
                        Два виктима
                    </Text>
                    <Text tag="p" color="accent" className={styles.text}>
                        Прикованы к кровати и некому спеть
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Отношений в этой паре — тоже игра, но отнюдь неприятная обоим.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Это игра в то, кто кого перевиктимит, что будет раздражать каждого из них.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Одному из них придется взять на себя роль <mark className={styles.accent}>агрессора</mark>, начать проявлять сексуальную инициативу, чего виктим делать не умеет и не хочет, и каждый будет пытаться перекинуть это на партнера.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Им обоим не удастся испытать себя на прочность, ощутить опасность, через которую проявляется доверие.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Чувство незащищенности, недостатка сильной руки выразится во взаимных скандалах, неудовлетворении друг другом.
                    </Text>
                </div>
            </div>

            <div className={styles.accentBlock}>
                <Icon name="Care" size={64} className={styles.careIcon} />
                <Icon name="Care" size={64} className={styles.careIcon} />
                <div>
                    <Text tag="span" size="h4" font="additional" className={styles.text}>
                        Два заботливых
                    </Text>
                    <Text tag="p" color="accent" className={styles.text}>
                        Забота в обе стороны, которая никому не нужна
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        В отсутствие провокатора к сексуальным отношениям они будут искать предложения друг в друге.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Но ни один из них не нуждается в том, что они могут отдавать, что в итоге приведет к ощущению недооцененности.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        У одного или обоих партнеров собственные сексуальные стремления останутся нереализованными.
                    </Text>
                </div>
            </div>

            <div className={styles.accentBlock}>
                <Icon name="Infantile" size={64} className={styles.infantileIcon} />
                <Icon name="Infantile" size={64} className={styles.infantileIcon} />
                <div>
                    <Text tag="span" size="h4" font="additional" className={styles.text}>
                        Два инфантила
                    </Text>
                    <Text tag="p" color="accent" className={styles.text}>
                        Показывать письки на балконе
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Вполне вероятно, что до секса дело так и не дойдет.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Если же они окажутся в одной постели, то каждый будет уверен в том, что именно его фантазии им следует исполнять, что именно его должны ублажать.
                    </Text>

                    <Text tag="p" size="h6" className={styles.text}>
                        Оба будут считать своего партнера нечутким.
                    </Text>
                </div>
            </div>

            <EndPoint />
        </WhiteCard>
    );
}