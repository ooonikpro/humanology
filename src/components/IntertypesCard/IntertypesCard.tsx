import React from 'react';
import { INTERTYPE_RELATIONS } from 'src/constants/intertypeRelations';
import { SOCIOTYPES } from 'src/constants/socionicsTypes';
import { Socionics } from 'src/types';
import { Icon, getIconName } from '../Icon';
import { Text } from '../Text';
import { SocietyCardMini } from '../SocietyCardMini';
import styles from './IntertypesCard.module.scss';

export interface Props {
    id: Socionics.SocionicsType;
    intertype: Socionics.IntertypeRelations;
}

export const IntertypesCard: React.FC<Props> = ({ id, intertype }) => {
    const info = INTERTYPE_RELATIONS[intertype];
    const sociatype = SOCIOTYPES[id];

    const classNames = [
        styles.root,
        styles[intertype],
    ].join(' ');

    return (
        <div className={classNames}>
            <div className={styles.intertype}>
                <Icon name="Help" size={24}  className={styles.help}/>
                {/*{getIconName(intertype)}*/}
                <Icon name="Parallel" size={108} className={styles.icon} />

                <div className={[styles.lvl, styles[`lvl-${info.lvl}`]].join(' ')}>
                    { new Array(4).fill(undefined).map((i) => <span key={i} />) }
                </div>

                <hr className={styles.line}/>

                <div className={styles.text}>
                    <Text color="accent" size="h6" font="additional">{info.name}</Text>
                    <Text color="accent" size="base" className={styles.description}>{info.description}</Text>
                </div>
            </div>

            <SocietyCardMini id={id} {...sociatype} className={styles.sociotype}/>
        </div>
    );
};
