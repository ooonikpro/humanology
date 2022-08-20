import * as React from 'react';
import { SVGProps } from 'react';

const SvgIntrovertniy = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={0.5}
            y={0.5}
            width={47}
            height={47}
            rx={3.5}
            fill="#fff"
            stroke="#EBEBEB"
        />
    </svg>
);

export default SvgIntrovertniy;
