import React, { useCallback, useState } from 'react';
import styles from './SocietyCard.module.scss';
import { Socionics } from '../../types';
import { QUADRAS } from '../../constants/natureElements';
import { MIND_KEY } from '../../constants/mindset';
import { ROLE } from '../../constants/role';
import { CLUBS } from '../../constants/clubs';
import { TAROT } from '../../constants/tarot';
import { GROUPS } from '../../constants/groups';
import { WhiteCard } from '../WhiteCard';
import { Tag } from '../Tag';
import { Text } from '../Text';
import { getIconName, Icon } from '../Icon';
import { CircleQuadra } from '../CircleQuadra';
import { YUNGS_DICHTOMIES } from 'src/constants/yungsDichotomies';
import { Portrait } from '../Portrait';
interface Props extends Socionics.IntertypeProp {
    id: Socionics.SocionicsType;
    mini?: boolean;
}

export const SocietyCard: React.FC<Props> = (props) => {
    const [gender, setGender] = useState(props.gender);
    const toggleGender = useCallback(() => {
        gender === 'male' ? setGender('female') : setGender('male');
    }, [gender]);
    const text = {
        id: props.id,
        gender,
        element: QUADRAS[props.element],
        role: ROLE[props.role].label,
        mindKey: MIND_KEY[props.mindKey],
        name: props.name,
        alias: props.alias,
        club: CLUBS[props.club],
        tarot: TAROT[props.tarot],
        psychotype: GROUPS[props.psychotype],
        percentage: props.populationPercentage,
        yungs: props.yungs.map((item) => YUNGS_DICHTOMIES[item]),
    };

    const rootClasses = [styles.root, props.mini && styles.mini].join(' ');

    return (
        <WhiteCard className={rootClasses}>
            <div className={styles.header}>
                <div
                    className={[
                        styles.params,
                        props.mini && styles.inline,
                    ].join(' ')}
                >
                    <div className={styles['params-line']}>
                        <Text tag="p" size="body" color="accent">
                            {text.id}
                        </Text>
                        <Text tag="p" size="body" color="grey">
                            {text.alias}
                        </Text>
                    </div>
                    <div className={styles['params-line']}>
                        <span className={styles.pair}>
                            <Tag sign={props.element} color='element' size={16} />
                            <Text tag="p" color="element" size="body">
                                {text.element}
                            </Text>
                        </span>
                        <span className={styles.pair}>
                            <Tag sign={props.role} color='role' size={16} />
                            <Text tag="p" color="role" size="body">
                                {text.role}
                            </Text>
                        </span>
                        <span className={styles.pair}>
                            <Tag sign={props.tarot} color='accent' size={16} />
                            <Text tag="p" color="accent" size="body">
                                {text.tarot}
                            </Text>
                        </span>
                    </div>
                    {!props.mini && (
                        <>
                            <div className={styles['params-line']}>
                                <span className={styles.pair}>
                                    <Tag sign={props.club} color='accent' size={16} />
                                    <Text tag="p" color="accent" size="body">
                                        {text.club}
                                    </Text>
                                </span>
                                <span className={styles.pair}>
                                    <Tag sign={props.psychotype} color='accent' size={16} />
                                    <Text tag="p" color="accent" size="body">
                                        {text.psychotype}
                                    </Text>
                                </span>
                            </div>
                        </>)}
                </div>

                <Icon
                    className={styles.mindkey}
                    name={getIconName(props.mindKey)}
                    size={{ width: 32, height: 6 }}
                    color="element"
                />
            </div>

            <div className={styles.body}>
                <CircleQuadra
                    id={props.id}
                    className={styles.quadra}
                />
                <Portrait name={props.id} gender={gender} className={styles.portrait} onClick={toggleGender} />

                {!props.mini && (
                    <Text
                        color="role"
                        size="small"
                        className={styles.population}
                    >
                        {text.percentage}
                    </Text>
                )}
                <Text
                    font="additional"
                    color="role"
                    size="h3"
                    className={styles.name}
                >
                    {text.name}
                </Text>

                {!props.mini && (
                    <div className={styles.footer}>
                        {text.yungs.map((row, $i) => (
                            <Text
                                tag="span"
                                size="body"
                                color="accent"
                                key={$i}
                                className={styles['footer-text']}
                            >
                                {row}
                            </Text>
                        ))}
                    </div>
                )}
            </div>
        </WhiteCard>
    );
};
