import styles from '../ClubsPsychotype.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Victim() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Victim' back>Виктимы</PageTitle>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Интернет</AuthorLine>
            <div className={styles.psychotypeBlock}>
                <div>
                    <Icon name="Victim" size={96} className={styles.victimIcon} />
                </div>
                <div>
                    <Text tag="span" size="h4" className={styles.victimText}>
                        Виктимы
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.text}>
                    Интуиты
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Решительные
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                В отношениях играет роль жертвы. Даже если он проявляет инициативу, это выглядит скорее как провокация, а не попытка захвата.
            </Text>

            <Text tag="p" className={styles.text}>
                «Поймай меня, если сможешь», — даёт понять он потенциальному партнёру, при этом нисколько не желая облегчать ему эту задачу.
            </Text>

            <Text tag="p" className={styles.text}>
                Ему нравятся острые ощущения. Он дразнит, нарывается на активные действия в свой адрес, заставляя партнёра потерять контроль над собой.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Виктимам нравятся сильные личности, способные доказать своё право на них, они не желают сдаваться кому попало.
            </Text>

            <Text tag="p" className={styles.text}>
                Почуяв слабину, они не только не подчинятся, но и сами, метафорически выражаясь, могут размазать неудавшегося партнёра по ближайшей стенке.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стремятся подстраиваться под партнёра, ожидая от них указаний, наставлений, упрёков.
            </Text>

            <Text tag="p" className={styles.text}>
                Играют в жертву, которая то демонстрирует подчинённость, то пытается вырваться из под контроля.
            </Text>

            <Text tag="p" className={styles.text}>
                Они врождённые провокаторы: нередко совершают поступки, за которые их одёргивают и упрекают.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Сильный провокатор, так что если провоцируемый окажется слабее, его размажет по стенке — потому только с агрессорами полный комфорт и возможен.
            </Text>

            <Text tag="p" className={styles.text}>
                На самом деле, это не мазохизм.
            </Text>

            <Text tag="p" className={styles.text}>
                Это действительно способ почувствовать себя живым, чтобы мир вокруг трещал по швам, натягивался звонкой нитью-струной, и долго ещё эхом звучал.
            </Text>

            <Text tag="p" className={styles.text}>
                Ещё так выражается желание быть защищённым.
            </Text>

            <Text tag="p" className={styles.text}>
                Проверка на силу, на умение удержать, своего рода: лучше сломаешь ты, чем дашь это сделать чужим. Подмяли, повалили, крепко сжали - держат, не дадут в обиду.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Виктим любит, когда говорят, что никому его не отдадут. И это не клетка.
            </Text>

            <Text tag="p" className={styles.text}>
                Попробуйте сказать виктиму, что он не должен того и того делать, туда ходить! Неет!
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Это скорее высокий забор, и умный агрессор всегда оставит виктиму ключ от свободы, чтобы ему не захотелось уходить. Забор — он от посторонних и посягающих.
            </Text>

            <Text tag="p" className={styles.text}>
                Виктим может строить глазки, быть милым со всеми, но попробуйте протяните к нему руку — хоть отобрать его у агрессора, хоть зацепить — эту руку отгрызут по локоть.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                <i>Соционическую виктимность не следует путать с общепсихологическим значением этого слова.</i>
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                <i>В социальной психологии виктимность определяется как достаточно устойчивое личностное качество, характеризующее «объектную характеристику индивида становиться жертвой внешних обстоятельств и активности социального окружения.</i>
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                <i>Это свойство достаточно жестко коррелирует с неадекватно заниженной самооценкой, с неспособностью, а порой и нежеланием отстаивать собственную позицию и брать на себя ответственность за принятие решения в проблемных ситуациях; с избыточной готовностью принимать позицию другого человека как несомненно верную; с неадекватной, а иногда патологической тягой к подчинению; с неоправданным чувством вины.</i>
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                <i>Психологическая виктимность зачастую является результатом насилия и иных психологических травм, поэтому ей могут быть подвержены представители абсолютно любого социотипа.</i>
            </Text>

            <hr />

            <div className={styles.victimBlock}>
                <div>
                    <Icon name="Female" size={40} className={styles.victimIcon} />
                    <Text tag="p" size="h6" className={styles.victimText}>
                        Женщина-виктим
                    </Text>
                </div>

                <Text tag="p" size="h6" className={styles.text}>
                    Идеал такой женщины — физически сильный мужчина, напоминающий суперменов из американских боевиков. Она желает испытывать на себе его силу, противостоять его натиску, чувствовать себя жертвой.
                </Text>

                <Text tag="p" className={styles.text}>
                    В любовных играх отдает предпочтение разным формам противоборства, разжигающим страсть партнера.
                </Text>

                <Text tag="p" className={styles.text}>
                    Женщинам этого типа порой имманентно присущи мазохистские черты. Правда, далеко не все из них отдают себе в этом отчет.
                </Text>
            </div>

            <hr />
            <div className={styles.victimBlock}>
                <div>
                    <Icon name="Male" size={40} className={styles.victimIcon} />
                    <Text tag="p" size="h6" className={styles.victimText}>
                        Мужчина-виктим
                    </Text>
                </div>

                <Text tag="p" size="h6" className={styles.text}>
                    Идеализирует властную женщину. Подстраивается под ее вкусы, уважает в ней волевые качества.
                </Text>

                <Text tag="p" className={styles.text}>
                    В поведении то подчеркивает свою зависимость и послушность, то вырывается из-под контроля.
                </Text>

                <Text tag="p" className={styles.text}>
                    В отношениях с женщиной подсознательно ожидает распоряжений, подвохов, упреков. Не получая подобных реакций, невольно провоцирует их проявление.
                </Text>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
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
                    to={`${ROUTES.SOCIOTYPES('ENTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}