import * as React from 'react';
import { SVGProps } from 'react';

const SvgExtravertniy = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 9c0-7.412 1.589-9 9-9 7.412 0 9 1.589 9 9 0 7.412-1.588 9-9 9s-9-1.588-9-9Z"
            fill="#202322"
        />
        <path
            d="M10 15a3.001 3.001 0 0 1 0-6 3.001 3.001 0 0 0 0-6C6.688 3 4 5.688 4 9s2.688 6 6 6Zm0-8.063a.938.938 0 1 1 0-1.875.938.938 0 0 1 0 1.875Z"
            fill="#fff"
        />
    </svg>
);

export default SvgExtravertniy;
