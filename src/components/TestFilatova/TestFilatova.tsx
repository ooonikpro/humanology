import React, { useCallback, useState } from 'react';
import styles from './TestFilatova.module.scss';
import { FILATOVA } from '../../constants/tests';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { SocietyCardMini } from '../SocietyCardMini';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Socionics } from '../../types';
import { EndPoint } from '../EndPoint';

export const TestFilatova = () => {
    const [step, setStep] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [answers, setAnswer] = useState<number[]>([]);

    console.log('ANSWERS >>', answers);

    const testResult = () => {

        const a = answers[0] + answers[4] + answers[8] + answers[12] + answers[16] + answers[20] + answers[24] + answers[28] + answers[32] + answers[36];
        const b = answers[1] + answers[5] + answers[9] + answers[13] + answers[17] + answers[21] + answers[25] + answers[29] + answers[33] + answers[37];
        const c = answers[2] + answers[6] + answers[10] + answers[14] + answers[18] + answers[22] + answers[26] + answers[30] + answers[34] + answers[38];
        const d = answers[3] + answers[7] + answers[11] + answers[15] + answers[19] + answers[23] + answers[27] + answers[31] + answers[35] + answers[39];

        let letter3 = 'F';
        let letter4 = 'J';
        let letter2 = 'S';
        let letter1 = 'E';

        if (a >= 45) {
            letter1 = 'I';
        }

        if (b >= 45) {
            letter4 = 'P';
        }

        if (c >= 45) {
            letter3 = 'T';
        }

        if (d >= 45) {
            letter2 = 'N';
        }

        const SociotypeID = [letter1, letter2, letter3, letter4].join('');
        const id = SociotypeID as Socionics.SocionicsType;

        return (
            <div className={styles.resultCard}>
                <Text tag="span" size="h6" color="accent">
                    Ваш социотип
                </Text>
                <Text tag="p" size="body" color="accent">
                    По результатам теста
                </Text>
                <Link
                    to={`${ROUTES.SOCIOTYPES(SociotypeID)}/card`}
                    className={styles.link} >
                    <SocietyCardMini id={id} className={styles.sociotype} />
                </Link>
            </div>
        );
    };

    const isAvailablePrev = step >= 1;
    const isAvailableNext = step < FILATOVA.length - 1;

    const next = () => {
        if (isAvailableNext) {
            setStep((prev: number) => prev + 1);
        } else {
            testResult();
            setIsFinished(true);
        }
    };

    const prev = () => {
        if (isAvailablePrev) {
            setStep((prev: number) => prev - 1);
        }
    };

    const addAnswer = (answer: number) => () => {
        setAnswer((res: number[]) => {
            res[step] = answer;

            return res;
        });

        setIsDisabled(true);

        setTimeout(() => {
            next();
            setIsDisabled(false);
        }, 500);
    };

    const isActiveButton = useCallback((value: number) => answers[step] === value, [step]);

    const reset = () => {
        setAnswer([]);
        setStep(0);
        setIsFinished(false);
        setIsDisabled(false);
    };

    return (
        <div className={styles.test}>
            <div className={styles.nextPrevButtons}>
                <div>
                    {
                        !isFinished && isAvailablePrev && (
                            <button onClick={prev}>
                                <div className={styles.pair}>
                                    <Icon name="ArrowLeftSquare" size={20} color="accent" />
                                    <Text tag="span" size="body" color="accent">Предыдущий</Text>
                                </div>
                            </button>
                        )
                    }
                </div>
                {
                    isFinished && <Text tag="span" size="large" color="accent">Тест пройден</Text>
                }
                <div>
                    {
                        !isFinished && isAvailableNext && (
                            <button onClick={next}>
                                <div className={styles.pair}>
                                    <Text tag="span" size="body" color="accent">Следующий</Text>
                                    <Icon name="ArrowRightSquare" size={20} color="accent" />
                                </div>
                            </button>
                        )
                    }
                </div>
            </div>

            {
                !isFinished && <div className={styles.stepCounter}>
                    <Text tag="p" size="body" color="accent">Постарайтесь отвечать честно</Text>
                    <Text tag="p" size="body" color="grey">Вопрос {step + 1} из {FILATOVA.length}</Text>
                </div>
            }

            {
                !isFinished &&
                <div className={styles.answerBlock}>
                    {
                        !isFinished &&
                        <>
                            <Text tag="p" size="h6" className={styles.text}>
                                {FILATOVA[step].question}
                            </Text>
                        </>

                    }

                    {
                        !isFinished && FILATOVA[step].answers.map((answers, key: number) =>
                            <div className={styles.answer} key={key}>
                                <Icon name={key === 0 ? 'SquareA' : 'SquareB'} size={24} color="accent" className={styles.answerIcon} />
                                <Text tag="span" className={styles.text} key={key}>
                                    {answers}
                                </Text>
                            </div>

                        )
                    }
                </div>
            }
            {
                !isFinished &&
                <div className={styles.buttonBlock}>
                    <div className={styles.buttonPair}>
                        <button className={[isActiveButton(1) && styles.active].join(' ')} onClick={addAnswer(1)}
                            disabled={isDisabled}>
                            <Icon name="SquareA" size={24} color="accent" className={styles.buttonIconLeft} />
                            <Text tag="span" size="large" color="accent">
                                Как правило
                            </Text>
                        </button>
                        <button className={[isActiveButton(9) && styles.active].join(' ')} onClick={addAnswer(9)}
                            disabled={isDisabled}>
                            <Icon name="SquareB" size={24} color="accent" className={styles.buttonIconRight} />
                            <Text tag="span" size="large" color="accent">
                                Как правило
                            </Text>
                        </button>
                    </div>
                    <div className={styles.buttonPair}>
                        <button className={[isActiveButton(3) && styles.active].join(' ')} onClick={addAnswer(3)}
                            disabled={isDisabled}>
                            <Icon name="SquareA" size={24} color="accent" className={styles.buttonIconLeft} />
                            <Text tag="span" size="large" color="accent">
                                Чаще
                            </Text>
                        </button>
                        <button className={[isActiveButton(7) && styles.active].join(' ')} onClick={addAnswer(7)}
                            disabled={isDisabled}>
                            <Icon name="SquareB" size={24} color="accent" className={styles.buttonIconRight} />
                            <Text tag="span" size="large" color="accent">
                                Чаще
                            </Text>
                        </button>
                    </div>
                    <button className={[isActiveButton(5) && styles.active].join(' ')} onClick={addAnswer(5)}
                        disabled={isDisabled}>
                        <Text tag="span" size="large" color="accent">
                            Затрудняюсь ответить
                        </Text>
                    </button>
                </div>
            }
            {
                isFinished &&
                <div className={styles.result}>
                    {testResult()}
                    <button onClick={() => reset()}>
                        <Text tag="span" size="large" color="accent">
                            Пройти еще раз
                        </Text>
                    </button>
                </div>
            }
            <EndPoint />
        </div >
    );
};
