import * as React from 'react';
import { SVGProps } from 'react';

const SvgAspectLogicMini = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={4.5}
            y={4.5}
            width={15}
            height={15}
            rx={0.5}
            fill="#fff"
            stroke="#202322"
        />
    </svg>
);

export default SvgAspectLogicMini;
