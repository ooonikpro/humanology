import React, { useMemo } from 'react';
import styles from './Home.module.scss';
import { CardGroupByElement } from '../../components/CardGroupByElement';
import { QUADRAS } from '../../constants/natureElements';
import { INTERTYPES } from '../../constants/intertypes';
import { Humanology } from '../../types';
import { SocietyCardMini } from '../../components/SocietyCardMini';
import { ROUTES } from 'src/constants/routes';
import { Link } from 'react-router-dom';

const intertypes = (Object.keys(INTERTYPES) as Humanology.Intertype[]).map(
    (key) => ({
        id: key,
        ...INTERTYPES[key],
    })
);

const elements = (Object.keys(QUADRAS) as Humanology.Elements[]).map(
    (element) => ({
        element,
        cards: intertypes.filter((type) => type.element === element),
    })
);

export default function Home() {
    const renderGroups = useMemo(() => {
        return elements.map((item, $i) => {
            return (
                <CardGroupByElement key={$i} element={item.element}>
                    {item.cards.map((card, $j) => (
                        <Link
                            to={`${ROUTES.SOCIATYPES(card.id)}/card`}
                            key={$j}
                            className={styles.link}
                        >
                            <SocietyCardMini {...card} />
                        </Link>
                    ))}
                </CardGroupByElement>
            );
        });
    }, [elements]);

    return <div className={styles.root}>{renderGroups}</div>;
}
