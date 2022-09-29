import * as React from 'react';
import { SVGProps } from 'react';

const SvgLeaf = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4.449 17.009C-.246 7.838 7.34.686 19.555 3.612a1.843 1.843 0 0 1 1.41 1.882c-.379 7.794-3.93 12.21-14.832 12.492a1.828 1.828 0 0 1-1.684-.977Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        <path
            d="M4 21c1.5-5.5 2-8.5 8-11"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    </svg>
);

export default SvgLeaf;
