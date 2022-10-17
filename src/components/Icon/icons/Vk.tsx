import * as React from 'react';
import { SVGProps } from 'react';

const SvgVk = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12 3c-7.412 0-9 1.588-9 9s1.588 9 9 9 9-.5 9-6.5"
            stroke="currentColor"
            strokeLinecap="round"
            fill="none"
        />
        <path
            d="m18.866 5.375 1.78 1.276h.002a10.078 10.078 0 0 1-2.118 2.408L21 12.197l-2.579.14-1.567-2.07c-.275.165-.503.29-.67.37l-.053 1.708c-2.168.318-5.564-1.929-6.131-6.555l2.325-.032c-.068 1.315 1.015 3.558 1.903 3.713l-.057-2.869-.285-.943 2.441.04-.08 2.582 2.619-2.906Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgVk;
