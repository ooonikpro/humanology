import * as React from 'react';
import { SVGProps } from 'react';

const SvgQuestion = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M16 4a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Zm2 18a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2Zm2.75-8.886c0 1.38-.867 2.082-1.956 2.825-.667.396-1.185 1-1.473 1.721a.491.491 0 0 1-.472.34h-2.062a.501.501 0 0 1-.494-.58 3.27 3.27 0 0 1 .66-1.601 10.47 10.47 0 0 1 2.327-1.857 1.015 1.015 0 0 0 .47-.848V13a1.001 1.001 0 0 0-1-1h-1.5a1 1 0 0 0-1 1 1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1 4 4 0 0 1 4-4h1.5c2.283 0 4 1.164 4 4v.114Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgQuestion;
