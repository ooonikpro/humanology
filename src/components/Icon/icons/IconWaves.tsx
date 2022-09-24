import * as React from 'react';
import { SVGProps } from 'react';

const SvgIconWaves = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 98 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            opacity={0.25}
            d="M17 49c0-26.352 5.648-32 32-32s32 5.648 32 32-5.648 32-32 32-32-5.648-32-32Z"
            stroke="currentColor"
            fill="none"
        />
        <path
            opacity={0.1}
            d="M1 49C1 9.472 9.472 1 49 1s48 8.472 48 48-8.472 48-48 48S1 88.528 1 49Z"
            stroke="currentColor"
            fill="none"
        />
    </svg>
);

export default SvgIconWaves;
