import React from 'react';
import styles from './Aspects.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { TextInline } from '../../components/TextInline';
import { getIconName, Icon } from '../../components/Icon';
import { Socionics } from '../../types';
import { ASPECTS, ASPECTS_GROUPS, ASPECTS_LABEL } from '../../constants/aspects';
import { useNavigate } from 'react-router-dom';

const AspectCard: React.FC<{ aspect: Socionics.Aspect; onClick: () => void; }> = ({ aspect, onClick }) => {
    const aspectIconMini = getIconName(`aspect-${aspect}-mini`);
    const aspectIcon = getIconName(`aspect-${aspect}`);
    const aspectTitle = ASPECTS[aspect];
    const aspectSubtitle = ASPECTS_LABEL[aspect];

    return (
        <div className={styles.card} onClick={onClick}>
            <Icon name={aspectIconMini} size={24} className={styles['mini-icon']}/>
            <Icon color="accent" name={aspectIcon} size={96}/>
            <Text tag="h6" size="h6" className={styles.mb8}>{aspectTitle}</Text>
            <Text color="accent">{aspectSubtitle}</Text>
        </div>
    );
};

export default function Aspects() {
    const goTo = useNavigate();

    return (
        <div className={styles.root}>
            <WhiteCard>
                <Text tag="h1" size="h4" font="additional" className={styles.title}>
                    Аспекты
                </Text>

                <Text tag="p" color="accent" className={styles.text}>
                    Макроаспекты
                </Text>

                <Text tag="ul" className={styles.list}>
                    <Text tag="li"><b>Объекты:</b> черная логика, она же – деловая, объектная, экстравертная и белая логика, структурная, субъектная, интровертная.</Text>
                    <Text tag="li"><b>Энергия:</b> черная этика, объектная, экстравертная, этика эмоций и белая этика, субъектная, интровертная, этика отношений.</Text>
                    <Text tag="li"><b>Пространство:</b> черная сенсорика, волевая, объектная, экстравертная и белая сенсорика, субъективная, интровертная, сенсорика ощущений.</Text>
                    <Text tag="li">
                        <b>Время:</b> черная интуиция, объектная, экстравертная, интуиция возможностей и белая интуиция, субъектная, интровертная, интуиция времени.
                    </Text>
                </Text>

                <hr/>

                <Text tag="p" className={styles.text}>Каждый макроаспект делится на 2 аспекта:</Text>

                <TextInline align="start">
                    <div className={styles.grower}>
                        <Icon name="Extravertniy" size={48} className={styles.text}/>

                        <Text tag="p" className={styles.text}>
                            <b>Экстравертный</b> <br/> «черный» <br/> объективный
                        </Text>

                        <Text tag="p" size="small" className={styles.text}>
                            Сущность аспекта, <br/> его свойства
                        </Text>
                    </div>

                    <div className={styles.grower}>
                        <Icon name="Introvertniy" size={48} className={styles.text}/>

                        <Text tag="p" className={styles.text}>
                            <b>Интровертный</b> <br/> «белый» <br/> cубъективный
                        </Text>

                        <Text tag="p" size="small" className={styles.text}>
                            Отношения сущностей аспекта, сопоставление
                        </Text>
                    </div>
                </TextInline>

                <hr/>

                {
                    ASPECTS_GROUPS.map((item, $a) => {
                        return (
                            <div key={$a}>
                                <TextInline justify="between" className={styles.text}>
                                    <Text tag="h3" size="h3" color="accent">{item.title}</Text>
                                    <Text>{item.subtitle}</Text>
                                </TextInline>

                                <TextInline align="stretch">
                                    <AspectCard aspect={item.aspects[0]} onClick={() => goTo(item.aspects[0])}/>
                                    <AspectCard aspect={item.aspects[1]} onClick={() => goTo(item.aspects[1])}/>
                                </TextInline>

                                <hr/>
                            </div>
                        );
                    })
                }
            </WhiteCard>
        </div>
    );
}
