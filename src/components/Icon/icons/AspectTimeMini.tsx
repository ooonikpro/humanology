import * as React from 'react';
import { SVGProps } from 'react';

const SvgAspectTimeMini = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m3.38 18.735 8.196-13.113a.5.5 0 0 1 .848 0l8.196 13.113a.5.5 0 0 1-.424.765H3.804a.5.5 0 0 1-.424-.765Z"
            fill="#fff"
            stroke="#202322"
        />
    </svg>
);

export default SvgAspectTimeMini;
