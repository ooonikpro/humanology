import React, { useState } from 'react';
import { AppIframeWrapper } from '../AppIframeWrapper/AppIframeWrapper';
import styles from './AppWrapper.module.scss';

interface IframePayload {
    uid: number,
    startUrl: string,
    ref: React.RefObject<HTMLIFrameElement>,
}

const MAX_IFRAME_COPIES = 2;

const createIframe = (startUrl = '/') => ({ uid: Date.now(), startUrl, ref: React.createRef<HTMLIFrameElement>() });

export const AppWrapper: React.FC<{ startUrl: string }> = ({ startUrl }) => {
    const [iframes, setIframes] = useState<Array<IframePayload>>([createIframe(startUrl)]);
    const count = iframes.length;
    const isShowPlusBtn = count < MAX_IFRAME_COPIES;

    const addCopy = () => setIframes((prevArr) => {
        const prevIframe = prevArr.at(-1);
        const url = prevIframe?.ref.current?.contentDocument?.location.href;

        return [...prevArr, createIframe(url)];
    });

    const removeCopy = (uid: number) => () => setIframes(arr => arr.filter((iframe) => iframe.uid !== uid));

    return (
        <div className={styles.wrapper}>
            {iframes.map((item) => (
                <AppIframeWrapper
                    key={item.uid}
                    ref={item.ref}
                    isShowCloseBtn={count > 1}
                    onClickCloseBtn={removeCopy(item.uid)}
                    startUrl={item.startUrl}
                />
            ))}
            {isShowPlusBtn ? <button onClick={addCopy} className={styles.addBtn}>+</button> : null}
        </div>
    );
};
