import React, { useMemo } from 'react';
import styles from './Home.module.scss';
import { CardGroupByElement } from '../../components/CardGroupByElement';
import { QUADRAS } from '../../constants/natureElements';
import { SOCIOTYPES } from '../../constants/socionicsTypes';
import { Socionics } from '../../types';
import { SocietyCardMini } from '../../components/SocietyCardMini';
import { ROUTES } from 'src/constants/routes';
import { Link, Outlet } from 'react-router-dom';
import { EndPoint } from '../../components/EndPoint';

const intertypes = (Object.keys(SOCIOTYPES) as Socionics.SocionicsType[]).map(
    (key) => ({
        id: key,
        ...SOCIOTYPES[key],
    })
);

const elements = (Object.keys(QUADRAS) as Socionics.Quadras[]).map(
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
                            to={`${ROUTES.SOCIOTYPES(card.id)}/card`}
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

    return (
        <div className={styles.root}>
            {renderGroups}

            <Outlet />
            <EndPoint />
        </div>
    );
}
