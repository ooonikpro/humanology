import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlertSquare = (props: SVGProps<SVGSVGElement>) => (
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
            d="m12.474 8.44-.05 4.76h-.85l-.04-4.76h.94Zm-.47 6.68a.602.602 0 0 1-.43-.16.602.602 0 0 1-.16-.43c0-.173.053-.313.16-.42a.583.583 0 0 1 .43-.17.55.55 0 0 1 .42.17.55.55 0 0 1 .17.42.583.583 0 0 1-.17.43.568.568 0 0 1-.42.16Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgAlertSquare;
