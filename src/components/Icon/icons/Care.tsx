import * as React from 'react';
import { SVGProps } from 'react';

const SvgCare = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.135 7.217c-.295 2.726-4.097 4.653-7.142 6.077C4.485 11.064 1.45 8.12 1.88 5.372c.5-3.201 4.308-3.57 6.44-.835l.674.973.59-.254L9.16 4.02c2.737-1.569 5.296.2 4.976 3.197Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgCare;
