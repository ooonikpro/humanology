import React, { useCallback, useMemo, useRef } from 'react';
import styles from './Tabs.module.scss';

import { Props as TabProps, Tab } from '../Tab';
import { getIconName } from '../Icon';

interface Props {
    items: Array<TabProps>
    small?: boolean
    className?: string
}

export const Tabs: React.FC<Props> = ({ items, small, className }) => {
    const ref = useRef<HTMLDivElement>(null);

    const setScrollLeft = useCallback((left: number) => {
        if (ref && ref.current) {
            ref.current.scrollLeft = left - ref.current.clientWidth * 0.25;
        }
    }, [ref]);

    return (
        <div className={[styles.root, small && styles.small, className].filter(Boolean).join(' ')}>
            <div ref={ref} className={styles['horizontal-scrollbar']}>
                {useMemo(() => items.map((item, key) => {
                    return <Tab {...item}
                        onActive={setScrollLeft}
                        key={key}
                        icon={item.icon ? getIconName(item.icon) : undefined}
                    />;
                }), [])}
            </div>
        </div>
    );
};
