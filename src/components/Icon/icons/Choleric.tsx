import * as React from 'react';
import { SVGProps } from 'react';

const SvgCholeric = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 40 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M32 2.667 29.36 7.65c-.084.16.04.349.23.349h4.822c.19 0 .312.188.227.347L32 13.333M24 2.667 21.36 7.65c-.084.16.04.349.23.349h4.822c.19 0 .312.188.228.347L24 13.333M16 2.667 13.36 7.65c-.084.16.04.349.23.349h4.822c.19 0 .312.188.228.347L16 13.333M8 2.667 5.36 7.65c-.084.16.04.349.23.349h4.822c.19 0 .312.188.228.347L8 13.333"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SvgCholeric;
