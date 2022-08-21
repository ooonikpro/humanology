import React from 'react';
import styles from './SocietyCardMini.module.scss';
import { Humanology } from '../../types';
import { WhiteCard } from '../../components/WhiteCard';
import { getIconName, Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
import { useColorRole } from '../../hooks';
import { MultiTag } from '../../components/MultiTag';
import { CircleQuadra } from '../../components/CircleQuadra';
import { Person } from '../../components/Person';

type Props = Humanology.IntertypeProp & { id: Humanology.Intertype };

export const SocietyCardMini: React.FC<Props> = (props) => {
    const { color: roleColor } = useColorRole(props.role);

    return (
        <WhiteCard className={styles.root} style={roleColor}>
            <div className={styles.body}>
                <div className={styles.tags}>
                    <MultiTag element={props.element} role={props.role} />
                    <Icon
                        name={getIconName(props.mindKey)}
                        size={{ width: 40, height: 8 }}
                        className={styles['mind-key']}
                    />
                </div>

                <CircleQuadra
                    element={props.element}
                    gender={props.gender}
                    size={144}
                    className={styles['quadra-img']}
                />
                <Person name={props.id} className={styles.person} />
            </div>

            <div className={styles.footer}>
                <Text tag="b" size="small">
                    {props.id}
                </Text>
                <Text tag="b" size="small">
                    {props.alias}
                </Text>
                <Text
                    font="additional"
                    color="role"
                    size="h5"
                    className={styles.name}
                >
                    {props.name}
                </Text>
            </div>
        </WhiteCard>
    );
};
