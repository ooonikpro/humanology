import React, { useMemo, useState } from 'react';
import { AppIframeWrapper } from '../AppIframeWrapper/AppIframeWrapper';
import styles from './AppWrapper.module.scss';

const MAX_IFRAME_COPIES = 2;

export const AppWrapper = () => {
    const [count, setCount] = useState(1);
    const isShowPlusBtn = count < MAX_IFRAME_COPIES;

    const addCopy = () => {
        if (isShowPlusBtn) {
            setCount(count + 1);
        }
    };

    const removeCopy = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const copies = useMemo(() => {
        const iframes = [];

        for (let i = 0; i < count; i++) {
            iframes.push(<AppIframeWrapper key={i} isShowCloseBtn={ count > 1} onClickCloseBtn={removeCopy}/>);
        }

        return iframes;
    }, [count]);

    return (
        <div className={styles.wrapper}>
            {copies}
            {isShowPlusBtn ? <button onClick={addCopy} className={styles.addBtn}>+</button> : null}
        </div>
    );
};
