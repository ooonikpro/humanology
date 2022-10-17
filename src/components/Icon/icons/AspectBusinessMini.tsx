import * as React from 'react';
import { SVGProps } from 'react';

const SvgAspectBusinessMini = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect x={4} y={4} width={16} height={16} rx={1} fill="#202322" />
    </svg>
);

export default SvgAspectBusinessMini;
