import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { EVENT } from 'src/constants/events';
import { AppIframeWrapper } from '../AppIframeWrapper/AppIframeWrapper';
import styles from './AppWrapper.module.scss';

interface Props {
    startUrl: string
 }

interface IframePayload {
    uid: number,
    startUrl: string,
    ref: React.RefObject<HTMLIFrameElement>,
}

const MAX_IFRAME_COPIES = 2;

const createIframe = (startUrl = '/') => ({ uid: Date.now(), startUrl, ref: React.createRef<HTMLIFrameElement>() });

const Wrapper: React.FC<Props> = ({ startUrl }) => {
    const [iframes, setIframes] = useState<Array<IframePayload>>([createIframe(startUrl)]);
    const count = iframes.length;
    const isShowPlusBtn = count < MAX_IFRAME_COPIES;

    const addCopy = () => setIframes((prevArr) => {
        const prevIframe = prevArr.at(-1);
        const url = prevIframe?.ref.current?.contentDocument?.location.href;

        return [...prevArr, createIframe(url)];
    });

    const removeCopy = (uid: number) => () => setIframes(arr => arr.filter((iframe) => iframe.uid !== uid));

    useEffect(() => {
        window.addEventListener('message', (e) => {
            try {
                const data = JSON.parse(e.data);

                if (data.eventName === EVENT.LOCATION_SYNC) {
                    window.history.replaceState(null, document.title, data.data);
                }
            } catch(e) {
                //
            }
        });
    });

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

export const AppWrapper: React.FC<Props> = ({ startUrl }) => (
    <BrowserRouter><Wrapper startUrl={startUrl}/></BrowserRouter>
);
