import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareB = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
            stroke="currentColor"
            fill="none"
        />
        <path
            d="M13.995 8.44v.85h-3.25v1.95h1.63c.64 0 1.14.163 1.5.49.366.32.55.76.55 1.32v.15c0 .553-.184.993-.55 1.32-.367.32-.867.48-1.5.48h-2.57V8.44h4.19Zm-1.64 5.71c.373 0 .656-.08.85-.24.193-.167.29-.407.29-.72v-.15c0-.307-.097-.543-.29-.71-.194-.167-.477-.25-.85-.25h-1.61v2.07h1.61Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgSquareB;
