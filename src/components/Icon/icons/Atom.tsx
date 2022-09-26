import * as React from 'react';
import { SVGProps } from 'react';

const SvgAtom = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M20.5 19.75c-2.21 2.21-7.582.418-12-4s-6.21-9.79-4-12c2.21-2.21 7.582-.418 12 4s6.21 9.79 4 12Z"
            stroke="currentColor"
            fill="none"
        />
        <path
            d="M4.5 19.75c-2.21-2.21-.418-7.582 4-12s9.791-6.21 12-4c2.21 2.21.418 7.582-4 12s-9.79 6.21-12 4Z"
            stroke="currentColor"
            fill="none"
        />
        <path d="M14.5 11.75a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" fill="none" />
    </svg>
);

export default SvgAtom;
