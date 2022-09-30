import React from 'react';
import { INTERTYPE_RELATIONS } from 'src/constants/intertypeRelations';
import { SOCIOTYPES } from 'src/constants/socionicsTypes';
import { Socionics } from 'src/types';
import { Icon, getIconName } from '../Icon';
import { Text } from '../Text';
import { SocietyCardMini } from '../SocietyCardMini';
import styles from './IntertypesCard.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/constants/routes';

export interface Props {
    id: Socionics.SocionicsType;
    intertype: Socionics.IntertypeRelations;
}

export const IntertypesCard: React.FC<Props> = ({ id, intertype }) => {
    const info = INTERTYPE_RELATIONS[intertype];
    const sociotype = SOCIOTYPES[id];

    const classNames = [
        styles.root,
        styles[intertype],
    ].join(' ');

    const classNamesBackground = [
        styles.background,
        styles[intertype],
    ].join(' ');

    return (
        <div className={classNames}>
            <Link
                to={`${ROUTES.RELATIONSHIPS_ITEM(intertype)}`}
                className={styles.intertype}>
                <Icon name="IntertypeBg" size={{ width: 160, height: 128 }} className={classNamesBackground} />
                <Icon name="Help" size={24} className={styles.help} />
                <Icon name={getIconName(intertype)} size={128} className={styles.icon} />

                <div className={[styles.lvl, styles[`lvl-${info.lvl}`]].join(' ')}>
                    {new Array(4).fill(undefined).map((i) => <span key={i} />)}
                </div>

                <hr className={styles.line} />

                <div className={styles.text}>
                    <Text color="black" size="h5" font="additional">{info.name}</Text>
                    <Text color="accent" size="large" className={styles.description}>{info.description}</Text>
                </div>
            </Link>
            <Link
                to={`${ROUTES.SOCIOTYPES(id)}/card`}
                className={styles.sociotype}
            >
                <SocietyCardMini id={id} {...sociotype} />
            </Link>
        </div>
    );
};
