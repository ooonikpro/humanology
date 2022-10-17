import * as React from 'react';
import { SVGProps } from 'react';

const SvgAspectPeopleMini = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5 4.5h6a.5.5 0 0 1 .5.5v6a1.5 1.5 0 0 0 1.5 1.5h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5Z"
            fill="#fff"
            stroke="#202322"
        />
    </svg>
);

export default SvgAspectPeopleMini;
