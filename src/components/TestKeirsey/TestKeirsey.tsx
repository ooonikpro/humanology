import React, { useCallback, useState } from 'react';
import styles from './TestKeirsey.module.scss';
import { KEIRSEY } from '../../constants/tests';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { SocietyCardMini } from '../SocietyCardMini';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Socionics } from '../../types';
import { EndPoint } from '../EndPoint';

export const TestKeirsey = () => {
    const [step, setStep] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [answers, setAnswer] = useState<number[]>([]);

    console.log('ANSWERS >>', answers);

    const testResult = () => {
        const numbersA = [0,7,14,21,28,35,42,49,56,63];
        const numbersB = [1,2,8,9,15,16,22,23,29,30,36,37,43,44,50,51,57,58,64,65];
        const numbersC = [3,4,10,11,17,18,24,25,31,32,38,39,45,46,52,53,59,60,66,67];
        const numbersD = [5,6,12,13,19,20,26,27,33,34,40,41,47,48,54,55,61,62,68,69];

        const { a, b, c, d } = answers.reduce((res, answer = 0, i) => {
            if (numbersA.includes(i)) {
                res.a += answer;
            }

            if (numbersB.includes(i)) {
                res.b += answer;
            }

            if (numbersC.includes(i)) {
                res.c += answer;
            }

            if (numbersD.includes(i)) {
                res.d += answer;
            }

            return res;
        }, {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
        });

        let letter3 = 'F';
        let letter4 = 'P';
        let letter2 = 'N';
        let letter1 = 'I';

        if (a >= 5) {
            letter1 = 'E';
        }

        if (b >= 10) {
            letter4 = 'J';
        }

        if (c >= 10) {
            letter3 = 'T';
        }

        if (d >= 10) {
            letter2 = 'S';
        }

        const id = [
            letter1,
            letter2,
            letter3,
            letter4,
        ].join('') as Socionics.SocionicsType;

        return (
            <div className={styles.resultCard}>
                <Text tag="span" size="h6" color="accent">
                    Ваш социотип
                </Text>
                <Text tag="p" size="body" color="accent">
                    По результатам теста
                </Text>
                <Link
                    to={`${ROUTES.SOCIOTYPES(id)}/card`}
                    className={styles.link} >
                    <SocietyCardMini id={id} className={styles.sociotype} />
                </Link>
            </div>
        );
    };

    const isAvailablePrev = step >= 1;
    const isAvailableNext = step < KEIRSEY.length - 1;

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
                    <Text tag="p" size="body" color="accent">Выберите подходящее утверждение</Text>
                    <Text tag="p" size="body" color="grey">Вопрос {step + 1} из {KEIRSEY.length}</Text>
                </div>
            }
            {
                !isFinished &&
                    <>
                        <Text tag="p" size="h6" className={styles.text}>
                            {KEIRSEY[step].question}
                        </Text>
                    </>

            }
        

            {
                !isFinished &&
                <div className={styles.questionBlock}>
                    {
                        !isFinished && KEIRSEY[step].answers.map((answers, key: number) =>
                            <div className={styles.question} key={key}>
                                <Icon name={key === 0 ? 'SquareA' : 'SquareB'} size={24} color="accent" className={styles.answerIcon} />
                                <Text tag="span" size="large">{answers}</Text>
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
                            !isFinished && 
                            <>
                                <button
                                    onClick={addAnswer(1)}
                                    disabled={isDisabled}
                                    className={[isActiveButton(1) && styles.active].join(' ')}
                                >
                                    <Icon name='SquareA' size={24} color="accent" className={styles.buttonIconLeft} />
                                    <Text tag="span" size="body">Вариант А</Text>
                                </button>
                                <button
                                    onClick={addAnswer(0)}
                                    disabled={isDisabled}
                                    className={[isActiveButton(0) && styles.active].join(' ')}
                                >
                                    <Icon name='SquareB' size={24} color="accent" className={styles.buttonIconRight} />
                                    <Text tag="span" size="body">Вариант Б</Text>
                                </button>
                            </>
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