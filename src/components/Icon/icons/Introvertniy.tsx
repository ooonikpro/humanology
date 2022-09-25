import * as React from 'react';
import { SVGProps } from 'react';

const SvgIntrovertniy = (props: SVGProps<SVGSVGElement>) => (
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
            fill="#fff"
        />
        <path
            d="M8 15c3.312 0 6-2.688 6-6s-2.688-6-6-6a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 0 0 6Zm0-2.063a.938.938 0 1 1 0-1.875.938.938 0 0 1 0 1.876Z"
            fill="#202322"
        />
    </svg>
);

export default SvgIntrovertniy;
