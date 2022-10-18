import React from 'react';
import styles from './Identify.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { AuthorLine } from '../../components/AuthorLine';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { AppScrollbar } from '../../components/AppScrollbar';
import { PageBreak } from '../../components/PageBreak';
import { Portrait } from '../../components/Portrait';
import { BlockLink } from '../../components/BlockLink';
import { Icon } from 'src/components/Icon';

export default function Identify() {
    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='SortingHat'>Как определять социотип?</PageTitle>
                <AuthorLine text='Читать 8 минут' iconName='Time'>Павел Цыпин и другие</AuthorLine>

                <Text tag="p" className={styles.text}>
                    В своих книгах Аушра рассуждает, что проводить типирование можно и нужно <mark className={styles.accent}>из наблюдений, разговоров и поступков людей</mark>.
                </Text>

                <Text tag="p" size="h6" className={styles.text}>
                    Ни в каких тестах истины нет — так сказала Аушра.
                </Text>

                <Text tag="p" color="accent" className={styles.text}>
                    Но если вы нетерпеливы, то ссылка ниже. Предупреждены.
                </Text>

                <div className={styles.linkblock}>
                    <BlockLink path="/tests" label="Тесты" icon="PresentationChart" />
                </div>

                <PageBreak>О правильном типировании</PageBreak>

                <Text tag="p" className={styles.text}>
                    Постараюсь развить тему, уверен что соционика выходит за пределы психики и является эдаким типом тела, структуры мозга, гормонального набора, наряду с генетическими признаками.
                </Text>

                <Text tag="p" size="h6" color="accent" className={styles.text}>
                    Идеально — если вы разберетесь сами. Это не так сложно, как кажется.
                </Text>

                <Text tag="p" className={styles.text}>
                    Протипируете себя, верифицируете результат у специалистов, потому что никто не знает вас, лучше чем вы сами. Главное — не врать себе, и не приукрашивать.
                </Text>

                <Text tag="p" className={styles.text}>
                    Поэтому наблюдения за внешностью, речью, поступками, логические предположения, взаимосвязи множества факторов помогут вам — <mark className={styles.accent}>если вы логик</mark>.
                </Text>

                <Text tag="p" className={styles.text}>
                    <mark className={styles.accent}>Если вы — этик</mark>. То вам, скорее всего, это не нужно. Достаточно загрузить в свою «чуйку на людей» (ваша библиотека эмоционально-этических образов) правильно протипированных людей в реальности, не на картинках. Сделать, так сказать, эталонные слепки, которые вы будете расширять и уточнять уже самостоятельно.
                </Text>

                <PageBreak>Речь</PageBreak>

                <Text tag="p" className={styles.text}>
                    Владимир Львов утверждает, что ключ к правильному типированию находится в анализе речи — врожденные и неотъемлемые свойства вашего типа личности. Склонен считать так же, но как один из факторов.
                </Text>

                <Text tag="span" size="body" color="accent" className={styles.text}>
                    Статики
                </Text>

                <Text tag="p" className={styles.text}>
                    Говорят и пишут отдельными короткими фрагментами.
                </Text>

                <Text tag="span" size="body" color="accent" className={styles.text}>
                    Динамики
                </Text>

                <Text tag="p" className={styles.text}>
                    Непрерывным потоком.
                </Text>

                <hr />

                <Text tag="span" size="body" color="accent" className={styles.text}>
                    Квестимы
                </Text>

                <Text tag="p" className={styles.text}>
                    Повышением голоса в конце фразы с вопросительным поглядыванием на собеседника.
                </Text>

                <Text tag="span" size="body" color="accent" className={styles.text}>
                    Динамики
                </Text>

                <Text tag="p" className={styles.text}>
                    Понижение голоса в конце.
                </Text>

                <hr />

                <Text tag="span" size="body" color="accent" className={styles.text}>
                    Негативисты
                </Text>

                <Text tag="p" className={styles.text}>
                    Лучше озвучивают сомнения, употребляют лишние «нет» и «не».
                </Text>

                <Text tag="span" size="body" color="accent" className={styles.text}>
                    Позитивисты
                </Text>

                <Text tag="p" className={styles.text}>
                    Обходятся без них, и просто утверждают.
                </Text>

                <PageBreak>Телосложение и поведение</PageBreak>

                <Text tag="p" className={styles.text}>
                    Из моих наблюдений — есть 4 типа телосложения с автоматическими шаблонами поведения и реакции на другие типы. Они все повторяют простые архетипы — <mark className={styles.fire}>король или королева</mark>, <mark className={styles.water}>рыцарь</mark>, <mark className={styles.earth}>дама</mark> и <mark className={styles.air}>паж</mark>.
                </Text>

                <Text tag="p" color="accent" className={styles.text}>
                    Телосложения примерно такие…
                </Text>



                <Text tag="p" className={styles.text}>
                    Достаточно просто понаблюдать за интересующими людьми и их поведением.
                </Text>
                <div className={styles.knightBlock}>
                    <Icon name="Knight" size={40} color="water" />

                    <Text tag="p" size="h6" className={styles.text}>
                        <mark className={styles.water}>Рыцари</mark> впечатляют <mark className={styles.earth}>дам</mark>, флиртуют с ними. <br />Выполняют приказы <mark className={styles.fire}>королей</mark>. Игнорируют <mark className={styles.air}>пажей</mark>, либо покровительствуют им.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Бравируют напускной мужественностью. Четкое разделение жизнедеятельности на «поход» и «отдых».
                    </Text>
                </div>


                <div className={styles.kingBlock}>
                    <div>
                        <Icon name="King" size={40} color="fire" />
                        <Icon name="Queen" size={40} color="fire" />
                    </div>

                    <Text tag="p" size="h6" className={styles.text}>
                        <mark className={styles.fire}>Короли и королевы</mark> жестко строят <mark className={styles.earth}>дам</mark>, не флиртуя с ними. Раздают приказы <mark className={styles.water}>рыцарям</mark>. Сильно интересуются <mark className={styles.air}>пажами</mark>, заботятся о них.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Обладают настоящей мужественностью / женственностью. Собирают вокруг себя «свиту», заботятся о ней. Решают проблемы, ставят цели.
                    </Text>
                </div>


                <div className={styles.ladyBlock}>
                    <Icon name="Lady" size={40} color="earth" />

                    <Text tag="p" size="h6" className={styles.text}>
                        <mark className={styles.earth}>Дамы</mark> строят глазки <mark className={styles.water}>рыцарям</mark> и открыто восхищаются ими. Опасаются и обходят <mark className={styles.fire}>королей</mark>, если не примут их за рыцарей. Игнорируют <mark className={styles.air}>пажей</mark> или относятся к ним с пренебрежением.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Показная, но более пассивная женственность / мужественность, чем у рыцарей. Ждут комплиментов и подвигов, строят «башню».
                    </Text>
                </div>

                <div className={styles.paigeBlock}>
                    <Icon name="Paige" size={40} color="air" />

                    <Text tag="p" size="h6" className={styles.text}>
                        <mark className={styles.air}>Пажи</mark> открыто принимают заботу от <mark className={styles.fire}>королей и королев</mark>. Советуют и помогают <mark className={styles.water}>рыцарям</mark>. Развлекают <mark className={styles.earth}>дам</mark>, при отсутствии рыцарей.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Обычно отношение, как к самому младшему, независимо от возраста. Легко принимает покровительство. Очень тяжело обидеть или оскорбить.
                    </Text>
                </div>

                <PageBreak>Черты лица и морщины</PageBreak>

                <Text tag="p" className={styles.text}>
                    У <mark className={styles.accent}>интуитов</mark> форма лица чаще овальная и треугольная, а у <mark className={styles.accent}>сенсориков</mark> — округлая или прямоугольная с чётко выраженным подбородочным выступом
                </Text>

                <hr />

                <Text tag="p" className={styles.text}>
                    У <mark className={styles.accent}>статиков</mark>, мышление которых стремится «в точку» — к истине, к цели — морщины группируются к переносице, это вертикальные морщины.
                </Text>

                <Text tag="p" className={styles.text}>
                    У <mark className={styles.accent}>динамиков</mark>, напротив, переносица и межбровное расстояние может быть «чистым», свободным от морщин, зато лоб покрыт волнообразными параллельными складками
                </Text>

                <hr />

                <Text tag="p" className={styles.text}>
                    <mark className={styles.accent}>Логики</mark> обладают обычно более резкими, угловатыми, выраженными чертами лица.
                </Text>

                <Text tag="p" className={styles.text}>
                    <mark className={styles.accent}>Этики</mark> тяготеют к мягким очертаниям, размытости, возможно, к большему изяществу и тонкости лицевых рельефов.
                </Text>

                <hr />

                <Text tag="p" className={styles.text}>
                    <mark className={styles.accent}>Рационалы</mark> обладают более «правильными», симметричными лицами по сравнению с <mark className={styles.accent}>иррациональными типами</mark>.
                </Text>

                <PageBreak>Взгляд и выражение лица</PageBreak>

                <Text tag="p" className={styles.text}>
                    Взгляд <mark className={styles.accent}>волевого сенсорика</mark> жесткий (иногда до откровенной жестокости), «колючий», оценивающий, придирчивый, недоверчивый, иногда высокомерно демонстрирующий силу и власть, реальную или потенциальную. Возможно также, что выражение лица таких людей являет угрозу и агрессию в адрес окружающих.
                </Text>

                <Text tag="p" className={styles.text}>
                    <mark className={styles.accent}>Обладатель интровертной сенсорики</mark> смотрит на мир спокойно и уверенно, как будто тот весь ему принадлежит. Часто выражение лица скептическое, равнодушное, самоуверенное.
                </Text>

                <Text tag="p" className={styles.text}>
                    <mark className={styles.accent}>Экстравертная интуиция</mark> придает взгляду фиксацию на точке, которая расположена в интересующем человека объекте — этот взгляд как бы пытается увидеть суть объекта или явления внешнего мира.
                </Text>

                <Text tag="p" className={styles.text}>
                    <mark className={styles.accent}>Интровертная интуиция</mark> очень часто расфокусирует взгляд, делает его «невидящим», настроенным в пространство поверх объектов. Выражение лиц таких людей может быть отсутствующим, отстраненным, ведь их мысли витают где-то далеко — там, куда попасть можно только с помощью машины времени.
                </Text>

                <hr />

                <Text tag="p" className={styles.text}>
                    <mark className={styles.accent}>Экстраверты</mark> внимательны к объектам окружающего мира, и потому их взгляд более цепкий, подвижный, им многое вокруг интересно. Выражение лица обычно живое, открытое, более или менее заинтересованное.
                </Text>

                <Text tag="p" className={styles.text}>
                    <mark className={styles.accent}>Интроверты</mark>, напротив, смотрят как бы «в себя», их взгляд не направлен на объекты, а пытается уловить собственные ощущения. Часто выражения их лиц усталое, отстраненное, холодно-вежливое.
                </Text>

                <PageBreak>Внешность определенных типов</PageBreak>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.water}>Новатор</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ENTP
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Дон Кихот
                            </Text>
                        </div>
                    </div>
                    <div className={styles.portraitBlock}>
                        <Portrait name="ENTP" gender="male" className={styles.portrait} />
                        <Portrait name="ENTP" gender="female" className={styles.portrait2} />
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Астеническое. Рост часто выше среднего, нередко выражена сутулость в грудном отделе позвоночника.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Овальная или треугольная. Черты — довольно резкие, заметные.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Сильно выражены вертикальные, расположенные на межбровном расстоянии.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Активный, ищущий, явно заинтересованный в окружающих объектах, открытый, располагающий, но все же сохраняющий дистанцию.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Он как бы показывает, что человека более интересуют предметы, чем люди, с которыми он вовсе не обязательно желает общаться.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        В моменты обдумывания сложных проблем — отстраненный, невидящий, холодный взгляд.
                    </Text>

                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.earth}>Дипломат</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ISFP
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Дюма
                            </Text>
                        </div>
                    </div>
                    <div className={styles.portraitBlock}>
                        <Portrait name="ISFP" gender="female" className={styles.portrait} />
                        <Portrait name="ISFP" gender="male" className={styles.portrait2} />
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Умеренно стеническое, рост чаще всего средний и ниже среднего.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Округлая или мягко овальная. Черты — смягченные, округлые.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Горизонтальные выражены сильнее, чем вертикальные; развита мимика лба.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Самоуверенный, мягкий, оценивающий, приветливый, располагающий к знакомству, чувственный. Если человек данного типа не улыбается, его взгляд кажется «обиженным».
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.fire}>Энтузиаст</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ESFJ
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Гюго
                            </Text>
                        </div>
                    </div>
                    <div className={styles.portraitBlock}>
                        <Portrait name="ESFJ" gender="female" className={styles.portrait} />
                        <Portrait name="ESFJ" gender="male" className={styles.portrait2} />
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Умеренно стеническое, рост преобладает средний, присутствует некоторая склонность к полноте.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Чаще всего округлая. Черты — четкие, заметные, иногда немного закругленные.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Морщины вполне «динамические», хотя в отдельные моменты отмечаются и элементы «вертикальной» мимики.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Увлеченный, самоуверенный, выражающий энтузиазм владельца, внимательный к людям, чаще приветливый, но иногда раздражённый и свирепый.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.air}>Аналитик</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                INTJ
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Робеспьер
                            </Text>
                        </div>
                    </div>
                    <div className={styles.portraitBlock}>
                        <Portrait name="INTJ" gender="male" className={styles.portrait} />
                        <Portrait name="INTJ" gender="female" className={styles.portrait2} />

                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Астеническое, рост не имеет выраженной тенденции, часто сутулость, особенно в области шеи.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Форма лица чаще всего треугольная, подбородок слабо проявлен. Черты — резкие, заметные, «аскетические», строгие.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Ярко выраженные «статические» — вертикальные. Редко улыбаются — мало складок вокруг глаз и рта.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Отстраненный, зафиксированный на точке в пространстве, к людям равнодушный, сосредоточенный на чем-то своем, «умный», размышляющий, устанавливающий жесткую дистанцию с окружающими — в целом взгляд мыслителя, ученого, шахматиста.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.earth}>Инспектор</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ISTJ
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Максим Горький
                            </Text>
                        </div>
                    </div>
                    <div className={styles.portraitBlock}>
                        <Portrait name="ISTJ" gender="male" className={styles.portrait} />
                        <Portrait name="ISTJ" gender="female" className={styles.portrait2} />
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Крепкое стеническое, но с некоторой «сухостью», рост чаще всего средний.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Прямоугольная или реже квадратная. Самые симметричные, «геометрические» лица, строго очерченные прямыми линиями. Черты — резкие, определённые, без закруглений.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Четко выражен нос на фоне не слишком жесткого подбородка. Губы сжатые до белизны. Часто выражена «складка злости», наиболее типичная для <mark className={styles.fire}>Лидера</mark>.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Неярко выраженные статические. Мимика лица не очень живая, улыбается нечасто, поэтому и морщин немного. Впрочем, часто присутствует сеть расходящихся морщин под глазами.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Строгий, серьёзный, неприветливый, жесткий и придирчивый, иногда жестокий, содержащий угрозу и агрессию. У типичный взгляд сыщика, военного или судебного следователя. Смотрит на предмет или человека прямо, испытующе, иногда снисходительно.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.water}>Наставник</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ENFJ
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Гамлет
                            </Text>
                        </div>
                    </div>

                    <div className={styles.portraitBlock}>
                        <Portrait name="ENFJ" gender="female" className={styles.portrait} />
                        <Portrait name="ENFJ" gender="male" className={styles.portrait2} />
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Астеническое, особо выделяются слабые, «безжизненные» руки, тенденция роста не выявлена: могут быть и низкие, и высокие.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Узкая, вытянутая треугольная или овальная. Нередко наряду с солидным подбородком отмечается «безвольный», «капризный» рот. Черты — яркие, запоминающиеся, обычно оцениваемые окружающими как «благородные» или «аристократические».
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Ярко выраженные «динамические» — горизонтальные складки на лбу, переносица иногда совершенно свободна от морщин.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Направлен куда-то вдаль, поверх объектов и людей, расфокусированный, «нездешний», иногда смотрит как бы сквозь предметы. Столь артистичен, что способен придать своему лицу и взгляду практически любое выражение.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.air}>Лирик</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                INFP
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Есенин
                            </Text>
                        </div>
                    </div>
                    <div className={styles.portraitBlock}>
                        <Portrait name="INFP" gender="female" className={styles.portrait} />
                        <Portrait name="INFP" gender="male" className={styles.portrait2} />
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Астеническое при любой массе тела и росте. Это люди часто субтильные, но изящные, возможно даже грациозные.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Треугольная, реже — овальная. Черты — несколько «смазанные», округлые, смягченные, не бросающиеся в глаза. Часто слабый, отступающий назад подбородок.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Ярко выраженные динамические.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Как у <mark className={styles.water}>Наставника</mark>, только более спокойный и «добрый», располагающий к общению.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.fire}>Лидер</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ESTP
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Маршал Жуков
                            </Text>
                        </div>
                    </div>
                    <div className={styles.portraitBlock}>
                        <Portrait name="ESTP" gender="male" className={styles.portrait} />
                        <Portrait name="ESTP" gender="female" className={styles.portrait2} />
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Ярко выраженное стеническое. Крепкие, сильные, коренастые, с мощной костной и мышечной системами. Рост чаще средний и низкий, высокий встречается реже.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Круглая или прямоугольная. Черты — четкие, крупные, «решительные», «волевые», особенно выделяются мощный подбородок и надбровные дуги. Рот сжат и часто искривлен. Выражение – гневное, суровое.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Вполне определённо статические – вертикальные. Имеется также своя отличительная черта – так называемые «складки злости», идущие почти от глаз к нижней челюсти.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Жесткий, неприветливый, насмешливо-агрессивный, придирчивый, властный, очень внимательный, с прищуром — оценивающий силу и слабость окружающих людей и явлений.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.air}>Критик</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                INTP
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Бальзак
                            </Text>
                        </div>
                    </div>
                    <div className={styles.portraitBlock}>
                        <Portrait name="INTP" gender="male" className={styles.portrait} />
                        <Portrait name="INTP" gender="female" className={styles.portrait2} />
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Астеническое, тенденция по росту не выявлена. Следует отметить, что он несколько «крепче» своего «родственника» <mark className={styles.air}>Лирика</mark>.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Треугольная, реже — овальная. Черты — чаще всего удлиненные, резкие, заметны нос и подбородок.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Ярко выраженные динамические.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Скептический, спокойный, беспристрастный, иногда значительно расфокусированный. Он как бы выражает негативизм и философскую объективность его владельца.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.fire}>Политик</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ESFP
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Наполеон
                            </Text>
                        </div>
                    </div>
                    <div className={styles.portraitBlock}>
                        <Portrait name="ESFP" gender="female" className={styles.portrait} />
                        <Portrait name="ESFP" gender="male" className={styles.portrait2} />
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Ярко выраженное стеническое. Крепкие, сильные, коренастые, с мощной костной и мышечной системами. Рост чаще средний и низкий, высокий встречается реже. Нередко выражена склонность к полноте.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Округлая или прямоугольная. Черты — резкие, крупные, заметные нос и подбородок. Рот узкий, плотно сжатый, «решительный».
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Морщины как у <mark className={styles.fire}>Лидера</mark>, но все же несколько мягче – сказывается наличие этики в ведущем блоке.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        «Победителя», несколько высокомерный, снисходительный, властный, внимательный, иногда как бы «сверлящий» окружающих людей и предметы.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.earth}>Хранитель</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ISFJ
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Драйзер
                            </Text>
                        </div>
                    </div>

                    <div className={styles.portraitBlock}>
                        <Portrait name="ISFJ" gender="female" className={styles.portrait} />
                        <Portrait name="ISFJ" gender="male" className={styles.portrait2} />
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Как у <mark className={styles.water}>Предпринимателя</mark>.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Округлая или прямоугольная закругленная. Черты — чёткие, но с некоторыми закруглениями, сбалансированные, часто — «правильные». Мужчины очень любят отращивать усы, чтобы за ними скрывать выражение губ: улыбку или недовольство.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Как у <mark className={styles.earth}>Инспектора</mark>, в том числе и «складка злости».
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Суровый, придирчивый, как бы обвиняющий и в то же время «виноватый», спокойный, самоуверенный, стойкий, нередко «сверлящий», внимательный и направленный прямо в глаза человека.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.water}>Предприниматель</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ENTJ
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Джек Лондон
                            </Text>
                        </div>
                        <div className={styles.portraitBlock}>
                            <Portrait name="ENTJ" gender="male" className={styles.portrait} />
                            <Portrait name="ENTJ" gender="female" className={styles.portrait2} />
                        </div>
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Близкое к стеническому — «спортивное», легко могут развивать мускулатуру, обладают высоким жизненным тонусом. Рост чаще всего средний или высокий, низкий встречается значительно реже.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Чаще прямоугольная с немного зауженной, как бы треугольной нижней частью.
                        Черты — как правило, хорошо сбалансированные, традиционно «мужественные», как бы «плакатные».
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Классические «динамические» — то есть горизонтальные складки на лбу.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Озорной, весёлый, но в то же время где-то блуждающий, расфокусированный, перебегающий с предмета на предмет, не слишком заинтересованный. Но гораздо более внимательный к реальности, чем у <mark className={styles.fire}>Энтузиаста</mark>.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.fire}>Администратор</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ESTJ
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Штирлиц
                            </Text>
                        </div>
                        <div className={styles.portraitBlock}>
                            <Portrait name="ESTJ" gender="male" className={styles.portrait} />
                            <Portrait name="ESTJ" gender="female" className={styles.portrait2} />
                        </div>
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Стеническое «сухое», без склонности к полноте. Фигура часто спортивная, с хорошей осанкой и «военной» выправкой, но не такая массивная и коренастая, как у <mark className={styles.fire}>Лидера</mark>.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Прямоугольная, реже — с треугольной нижней частью. Черты — чёткие, резкие, рельефные, «правильные» или «плакатные», отмечается жесткий «волевой» рот.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Слабо выраженные динамические, на фоне которых присутствуют и вертикальные статические складки на переносице. Присутствуют также «эндемичные» морщины: расходящиеся от глаз к вискам, они символизируют пристальное внимание к мелочам, деталям.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Открытый, спокойный, холодно-приветливый, без дружелюбия, но и без агрессии, внимательный к окружающему миру и происходящим в нём явлениям.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.air}>Гуманист</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                INFJ
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Достоевский
                            </Text>
                        </div>
                        <div className={styles.portraitBlock}>
                            <Portrait name="INFJ" gender="female" className={styles.portrait} />
                            <Portrait name="INFJ" gender="male" className={styles.portrait2} />
                        </div>
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Астеническое, которое не исключает некоторой телесной «рыхлости»; неспортивный тип с невысоким жизненным тонусом. Как у <mark className={styles.air}>Аналитика</mark>, нередко отмечается сутулость, вызванная искривлением в шейном отделе позвоночника.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Треугольная с закруглениями, реже – овальная. Черты — мягкие, изящные, как бы сглаженные.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Как у <mark className={styles.air}>Аналитика</mark> — ярко выраженные «статические» – вертикальные.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Спокойный, немного застенчивый, «исподлобья», внимательный к людям и их поступкам, «виноватый» и как бы «прощающий» окружающим их прегрешения.
                    </Text>

                    <Text tag="p" className={styles.text}>
                        В общем-то, это «добрый» и располагающий к общению взгляд.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.water}>Советчик</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ENFP
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Гексли
                            </Text>
                        </div>
                        <div className={styles.portraitBlock}>
                            <Portrait name="ENFP" gender="female" className={styles.portrait} />
                            <Portrait name="ENFP" gender="male" className={styles.portrait2} />
                        </div>
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Как у <mark className={styles.water}>Новатора</mark> — телосложение астеническое, рост часто выше среднего, нередко выражена сутулость в грудном отделе позвоночника.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Овальная или треугольная. Черты — немного закругленные, «мягкие», без резкой выраженности отдельных элементов.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Сильно выражены вертикальные, расположенные на межбровном расстоянии.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Очень цепкий, хорошо сфокусированный, внимательный, прежде всего — к людям, «психологичный», немного «грустный», понимающий, весьма располагающий к общению с его обладателем.
                    </Text>
                </div>

                <div className={styles.typeBlock}>
                    <div>
                        <Text tag="span" size="h4" font="additional" className={styles.text}>
                            <mark className={styles.earth}>Мастер</mark>
                        </Text>
                        <div className={styles.tags}>
                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                ISTP
                            </Text>

                            <Text tag="span" size="body" color="grey" className={styles.text}>
                                Габен
                            </Text>
                        </div>
                        <div className={styles.portraitBlock}>
                            <Portrait name="ISTP" gender="male" className={styles.portrait} />
                            <Portrait name="ISTP" gender="female" className={styles.portrait2} />
                        </div>
                    </div>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Телосложение
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Умеренно стеническое, жизненный тонус ниже, чем у <mark className={styles.water}>Предпринимателя</mark> и <mark className={styles.fire}>Лидера</mark> , «спортивность» тоже не слишком высока.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Форма и черты лица
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Прямоугольная или округлая. Черты — «спокойные», не ярко выраженные, обычно хорошо сбалансированные.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Морщины
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Их вообще немного, и в основном это «динамические» складки на лбу, но могут иногда присутствовать и слабые «статические» элементы мимики.
                    </Text>

                    <Text tag="span" size="body" color="grey" className={styles.text}>
                        Взгляд
                    </Text>

                    <Text tag="p" className={styles.text}>
                        Самоуверенный, «ленивый», без особого интереса к внешнему миру, нормальной фокусировки, скептический, иногда придирчивый.
                    </Text>
                </div>

                <hr />

                <Text tag="p" className={styles.text}>
                    Разработанные внешние характеристики соционических типов рассчитаны на некий усредненный или классический образ того или иного типа. Являются доминирующими для статистической совокупности их представителей.
                </Text>

                <Text tag="p" size="h6" className={styles.text}>
                    Далеко не все 100 процентов «уроженцев» каждого типа полностью соответствуют по внешности разработанным в статье признакам.
                </Text>

                <Text tag="p" className={styles.text}>
                    Однако, последние – это не просто абстрактное теоретическое правило, но и практическая картина внешности многих людей.
                </Text>

                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}