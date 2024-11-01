import * as React from 'react';
import { SVGProps } from 'react';

const SvgFunctionBack = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={16} cy={16} r={4} fill="currentColor" />
    </svg>
);

export default SvgFunctionBack;
