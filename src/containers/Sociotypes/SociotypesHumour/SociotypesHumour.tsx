import React from 'react';
import { useParams } from 'react-router-dom';
import { Text } from 'src/components/Text';
import { WhiteCard } from 'src/components/WhiteCard';
import { Socionics } from 'src/types';
import styles from './SociotypesHumour.module.scss';

export function SociotypesHumour() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./text/${id}.tsx`).default;

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>Юмор</Text>
                <div className={styles.warning}>
                    <Text tag="span" size="smaller" color="grey">
                        Если вы не можете воспринимать юмор, обидчивы, или зависимы от мнений незнакомцев, пожалуйста, не нужно читать это.
                        Ненормативная лексика и сексуальные темы, оскорбление чувств всех причастных. Но весело и остроумно. Авторская орфография и пунктуация соблюдена.
                    </Text>
                </div>
                <div className={styles.text}>
                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                </div>
            </WhiteCard>
        </div>
    );
}
