import styles from '../ClubsPsychotype.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Care() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Care' back>Заботливые</PageTitle>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Интернет</AuthorLine>
            <div className={styles.psychotypeBlock}>
                <div>
                    <Icon name="Care" size={96} className={styles.careIcon} />
                </div>
                <div>
                    <Text tag="span" size="h4" className={styles.careText}>
                        Заботливые
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.text}>
                    Сенсорики
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Рассудительные
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Любит опекать партнёра, поддерживать его, помогать ему решать проблемы.
            </Text>

            <Text tag="p" className={styles.text}>
                Вопреки распространённым стереотипам, он вовсе не проводит жизнь на кухне, стремясь накормить и откомфортитить каждого встречного, но ему нравится покровительствовать партнёру, заботиться о нём и он ценит, когда его заботу охотно принимают.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Он не склонен к завоеванию наскоком.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Для него характерны более мягкие действия на этапе ухаживания — знаки внимания, комплименты, нежные прикосновения, словно невзначай...
            </Text>

            <Text tag="p" className={styles.text}>
                Если потенциальный партнёр откликается, даёт понять, что он не против развития отношений, то в ход идёт «тяжёлая артиллерия» — обнимашки, массажи, а там и до большего недалеко.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Главная доминанта жизни заботливого — комфорт. В первую очередь его личный комфорт.
            </Text>

            <Text tag="p" className={styles.text}>
                В первую очередь эстетически-материальный — чисто, красиво, вкусно, аккуратно, и во второй степени — эмоционально-психологический — спокойно, безопасно, приятно, мило, уютно.
            </Text>

            <Text tag="p" className={styles.text}>
                На самом-то деле суть заботливости заботливого не в том, что он, весь такой жертвенный, жизни себе представить не может, чтоб не накормить голодного инфантила — и кого угодно, кого он таким сочтет, а сочтет он таким любого, в ком увидит какое-то несоответствие тому, что в его понимании соотносится с его представлениями о комфорте в той или иной степени, не убрать в чужой квартире, не погладить по голове страждущего.
            </Text>

            <Text tag="p" className={styles.text}>
                Дело абсолютно и решительно не в этом.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                А в том, что заботливый, попадая, скажем, на чужую кухню, где стоит грязная посуда, испытывает дискомфорт. Ему неприятно видеть грязную посуду. И ему проще самому ее помыть, чтоб уж наверняка, чем терпеть ее наличие.
            </Text>

            <Text tag="p" className={styles.text}>
                А сказать о том, что неплохо бы помыть посуду хозяину он не может, ведь это может быть невежливо, а значит, нарушит комфорт психологический.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Поэтому вся деятельность нацелена на поддержание вокруг себя той среды, которая ему самому будет комфортна.
            </Text>

            <Text tag="p" className={styles.text}>
                И вся прелесть взаимодействия заботливого с инфантилами заключается в том, что инфантилы могут быть очень умильно и трогательно благодарны за такую заботу, в то время как те же виктимы могут и на фиг послать и вообще возмутиться.
            </Text>

            <hr />
            <div className={styles.careBlock}>
                <div>
                    <Icon name="Male" size={40} className={styles.careIcon} />
                    <Text tag="p" size="h6" className={styles.careText}>
                        Заботливая женщина
                    </Text>
                </div>

                <Text tag="p" size="h6" className={styles.text}>
                    Склонна опекать своего партнера мужского пола. Испытывает влечение к слабым, но интеллигентным мужчинам, которые ей подчиняются в повседневных делах.
                </Text>

                <Text tag="p" className={styles.text}>
                    Ей приятно их защитить, поддержать, приободрить.
                </Text>

                <Text tag="p" className={styles.text}>
                    Подобные качества характера, которые в массовом сознании не вызывают уважения к лицам мужского пола, эта женщина прощает либо считает вполне приемлемыми.
                </Text>
            </div>

            <hr />
            <div className={styles.careBlock}>
                <div>
                    <Icon name="Male" size={40} className={styles.careIcon} />
                    <Text tag="p" size="h6" className={styles.careText}>
                        Заботливый мужчина
                    </Text>
                </div>

                <Text tag="p" size="h6" className={styles.text}>
                    Опытный и внимательный к духовному миру женщины партнер, умеющий расположить ее к себе покровительственным ухаживанием.
                </Text>

                <Text tag="p" className={styles.text}>
                    В любовной игре очень ценит женскую нежность и незащищенность, ждет восхищения его жизненным опытом и мастерством.
                </Text>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTP" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}