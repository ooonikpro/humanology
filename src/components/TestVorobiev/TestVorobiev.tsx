import React, { useCallback, useState } from 'react';
import styles from './TestVorobiev.module.scss';
import { VOROBIEV } from 'src/constants/tests';

export const TestVorobiev = () => {
    const [step, setStep] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [answers, setAnswer] = useState<number[]>([]);

    console.log('ANSWERS >>', answers);

    const calculate = () => {
        const a = eval(answers.slice(0, 7).join('+'));
        const b = eval(answers.slice(7, 14).join('+'));
        const c = eval(answers.slice(14, 21).join('+'));
        const d = eval(answers.slice(21, 28).join('+'));

        return <div>
            {a} {b} {c} {d}
        </div>;
    };

    const isAvailablePrev = step >= 1;
    const isAvailableNext = step < VOROBIEV.length -1;

    const next = () => {
        if (isAvailableNext) {
            setStep((prev: number) => prev + 1);
        } else {
            calculate();
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
        <div>
            {
                !isFinished && isAvailablePrev && (
                    <button onClick={prev}>Prev</button>
                )
            }
            {
                !isFinished && isAvailableNext && (
                    <button onClick={next}>Next</button>
                )
            }

            <br />

            {
                !isFinished && VOROBIEV[step].answers.map((btn, key: number) =>
                    <button
                        key={key}
                        onClick={addAnswer(btn.value)}
                        disabled={isDisabled}
                        className={[isActiveButton(btn.value) && styles.active].join(' ')}
                    >
                        {btn.label}
                    </button>
                )
            }

            {
                isFinished && <div>
                    My results {calculate()}

                    <button onClick={() => reset()}>Go again</button>
                </div>
            }
        </div>
    );
};
