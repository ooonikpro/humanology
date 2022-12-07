import React, { useCallback, useState } from 'react';
import { AppIframeWrapper } from '../AppIframeWrapper/AppIframeWrapper';
import styles from './AppWrapper.module.scss';

const MAX_IFRAME_COPIES = 2;

const createIframe = () => ({ uid: Date.now() });

export const AppWrapper = () => {
    const [iframes, setIframes] = useState<Array<{uid: number}>>([createIframe()]);
    const count = iframes.length;
    const isShowPlusBtn = count < MAX_IFRAME_COPIES;

    const addCopy = () => setIframes((prevArr) => [...prevArr, createIframe()]);

    const removeCopy = (uid: number) => () => setIframes(arr => arr.filter((iframe) => iframe.uid !== uid));

    return (
        <div className={styles.wrapper}>
            {iframes.map((item) => (
                <AppIframeWrapper key={item.uid} isShowCloseBtn={count > 1} onClickCloseBtn={removeCopy(item.uid)}/>
            ))}
            {isShowPlusBtn ? <button onClick={addCopy} className={styles.addBtn}>+</button> : null}
        </div>
    );
};
