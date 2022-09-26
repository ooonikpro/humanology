import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Socionics } from 'src/types';
import { WhiteCard } from '../WhiteCard';
import styles from './Modal.module.scss';

let openedModals: Array<HTMLElement> = [];

const ANIMATE_DURATION = 50;
const target = document.querySelector('.app-modals') as HTMLElement;

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Props extends ModalProps {
    render: (closeModal: () => void) => React.ReactChild | React.ReactNode;
}

export const Modal: React.FC<Props> = ({ isOpen, render, onClose }) => {
    const container = useMemo(() => document.createElement('div'), []);
    const [animate, setAnimate] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const showModal = () => {
        setIsShow(true);
        setAnimate(true);
        openedModals.push(container);
    };
    const hideModal = () => {
        setAnimate(false);
        setTimeout(() => setIsShow(false), ANIMATE_DURATION);
    };
    const closeModal = () => {
        setAnimate(false);

        setTimeout(() => {
            onClose();
            openedModals = openedModals.filter((c) => c != container);
        }, ANIMATE_DURATION);
    };

    const onEscPress = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape' && openedModals.at(-1) === container) {
            closeModal();

            document.removeEventListener('keydown', onEscPress);
        }
    }, []);

    const onMount = () => {
        document.documentElement.classList.add('no-scroll');
        document.addEventListener('keydown', onEscPress);
    };

    const onUnmount = () => {
        if (openedModals.length === 0) {
            document.documentElement.classList.remove('no-scroll');
        }

        document.removeEventListener('keydown', onEscPress);
    };

    const rootClasses = [
        styles.root,
        animate ? styles.open : '',
        styles[`lvl_${openedModals.length}`]
    ].join(' ');

    useEffect(() => {
        if (isOpen) {
            showModal();
            onMount();
        } else {
            hideModal();
            onUnmount();
        }

        return onUnmount;
    }, [isOpen]);

    if (!isOpen && !isShow) {
        return null;
    }

    return createPortal(
        (
            <div className={rootClasses}>
                <div className={styles.bg} onClick={closeModal} />
                <div className={styles.inner}>
                    <WhiteCard color="beige" className={styles.container}>
                        <div className={styles.drag} onClick={closeModal} />
                        {render(closeModal)}
                    </WhiteCard>
                </div>
            </div>
        ),
        target
    );
};
