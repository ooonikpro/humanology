import React, { useEffect, useState } from 'react';
import { WhiteCard } from '../WhiteCard';
import styles from './Modal.module.scss';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Props extends ModalProps {
    render: (closeModal: () => void) => React.ReactChild | React.ReactNode;
}

export const Modal: React.FC<Props> = ({ isOpen, render, onClose }) => {
    const [animate, setAnimate] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const showModal = () => {
        setIsShow(true);
        setAnimate(true);
    };
    const hideModal = () => {
        setAnimate(false);
        setTimeout(() => setIsShow(false), 250);
    };
    const closeModal = () => {
        setAnimate(false);

        setTimeout(onClose, 250);
    };

    const onEscPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            hideModal();

            document.removeEventListener('keydown', onEscPress);
        }
    };

    const onMount = () => {
        document.documentElement.classList.add('no-scroll');
        document.addEventListener('keydown', onEscPress);
    };

    const onUnmount = () => {
        document.documentElement.classList.remove('no-scroll');
        document.removeEventListener('keydown', onEscPress);
    };

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

    return (
        <div className={[styles.root, animate ? styles.open : ''].join(' ')}>
            <div className={styles.bg} onClick={closeModal} />

            <WhiteCard className={styles.container}>
                <div className={styles['top-background']}>
                    <div className={styles.drag} onClick={closeModal} />
                </div>
                {render(closeModal)}
            </WhiteCard>
        </div>
    );
};
