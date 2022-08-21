import React from 'react';
import styles from './SocietyCard.module.scss';
import { Humanology } from '../../types';
import { NATURE_ELEMENTS } from '../../constants/natureElements';
import { MIND_KEY } from '../../constants/mind';
import { ROLE } from '../../constants/role';
import { CLUBS } from '../../constants/clubs';
import { TAROT } from '../../constants/tarot';
import { GROUPS } from '../../constants/groups';
import { WhiteCard } from '../WhiteCard';
import { MultiTag } from '../MultiTag';
import { Tag } from '../Tag';
import { Text } from '../Text';
import { getIconName, Icon } from '../Icon';
import { CircleQuadra } from '../CircleQuadra';
import { Person } from '../Person';
import { JUNGS_DICHTOMIES } from 'src/constants/jungsDichotomies';

interface Props extends Humanology.IntertypeProp {
    id: Humanology.Intertype;
    mini?: boolean;
}

export const SocietyCard: React.FC<Props> = (props) => {
    const text = {
        id: props.id,
        element: NATURE_ELEMENTS[props.element],
        role: ROLE[props.role].label,
        mindKey: MIND_KEY[props.mindKey],
        name: props.name,
        alias: props.alias,
        club: CLUBS[props.club],
        tarot: TAROT[props.tarot],
        psychotype: GROUPS[props.psychotype],
        percentage: props.populationPercentage,
        jungs: props.jungs.map((item) => JUNGS_DICHTOMIES[item]),
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
                        <Text tag="b" size="small" color="accent">
                            {text.id}
                        </Text>
                        <Text tag="b" size="small" color="accent">
                            {text.alias}
                        </Text>
                        {!props.mini && (
                            <Text tag="span" color="grey" size="small">
                                {text.club}
                            </Text>
                        )}
                    </div>

                    <div className={styles['params-line']}>
                        <Text tag="span" color="element" size="small">
                            {text.element}
                        </Text>
                        <Text tag="span" color="role" size="small">
                            {text.role}
                        </Text>
                        {!props.mini && (
                            <Text tag="span" color="grey" size="small">
                                {text.psychotype}
                            </Text>
                        )}
                    </div>
                </div>

                <Icon
                    name={getIconName(props.mindKey)}
                    size={{ width: 40, height: 8 }}
                    color="element"
                />
            </div>

            <div className={styles.body}>
                {!props.mini && (
                    <CircleQuadra
                        element={props.element}
                        gender={props.gender}
                        className={styles.quadra}
                        size={144}
                    />
                )}

                <Person name={props.id} className={styles.person} />
                <Text
                    font="additional"
                    color="role"
                    size="h3"
                    className={styles.name}
                >
                    {text.name}
                </Text>

                {!props.mini && (
                    <div className={styles.tags}>
                        <MultiTag element={props.element} role={props.role} />
                        <Tag sign={props.tarot} />
                        <Tag sign={props.psychotype} />
                        <Tag sign={props.club} />
                        <Tag sign={props.gender} />
                    </div>
                )}
            </div>

            {!props.mini && (
                <div className={styles.footer}>
                    {text.jungs.map((row, $i) => (
                        <Text
                            size="small"
                            color="role"
                            key={$i}
                            className={styles['footer-text']}
                        >
                            {row}
                        </Text>
                    ))}
                </div>
            )}
        </WhiteCard>
    );
};
