import React, { useCallback, useState } from 'react';
import styles from './TestMegedOvcharova.module.scss';
import { MEGED_OVCHAROVA } from '../../constants/tests';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { SocietyCardMini } from '../SocietyCardMini';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Socionics } from '../../types';
import { EndPoint } from '../EndPoint';

export const TestMegedOvcharova = () => {
    const [step, setStep] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [answers, setAnswer] = useState<number[]>([]);

    console.log('ANSWERS >>', answers);

    const testResult = () => {
        let letter3 = 'T';
        let letter4 = 'J';
        let letter2 = 'S';
        let letter1 = 'I';

        if (answers[0] == 1) {
            letter4 = 'P';
        }

        if (answers[1] == 1) {
            letter3 = 'F';
        }

        if (answers[2] == 1) {
            letter2 = 'N';
        }

        if (answers[3] == 1) {
            letter1 = 'E';
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
    const isAvailableNext = step < MEGED_OVCHAROVA.length - 1;

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
                    <Text tag="p" size="body" color="accent">Выберите подходящее для вас</Text>
                    <Text tag="p" size="body" color="grey">Вопрос {step + 1} из {MEGED_OVCHAROVA.length}</Text>
                </div>
            }

            {
                !isFinished &&
                <div className={styles.questionBlock}>
                    {
                        !isFinished && MEGED_OVCHAROVA[step].answers.map((btn, key: number) =>
                            <div className={styles.question} key={key}>
                                <Icon name={key === 0 ? 'SquareA' : 'SquareB'} size={24} color="accent" className={styles.answerIcon} />
                                <Text tag="span" size="large">{btn.label}</Text>
                            </div>
                        )
                    }
                </div>
            }
            {
                !isFinished &&
                <div className={styles.buttonBlock}>
                    <div className={styles.buttonPair}>
                        {
                            !isFinished && MEGED_OVCHAROVA[step].answers.map((btn, key: number) =>


                                <button
                                    key={key}
                                    onClick={addAnswer(btn.value)}
                                    disabled={isDisabled}
                                    className={[isActiveButton(btn.value) && styles.active].join(' ')}
                                >
                                    <Icon name={key === 0 ? 'SquareA' : 'SquareB'} size={24} color="accent" className={key === 0 ? styles.buttonIconLeft : styles.buttonIconRight} />
                                    <Text tag="span" size="body">Скорее</Text>
                                </button>

                            )
                        }
                    </div>
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
