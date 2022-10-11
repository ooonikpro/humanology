import * as React from 'react';
import { SVGProps } from 'react';

const SvgObjective = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m11 34.35.16-1.629 3.09-.419-.29-1.628L43.283 15.34l.463-2.726L46.853 11l1.006 1.963 2.41-1.252 2.303 4.418-38.155 20.323L11 34.35Zm4.267 3.753L53 18.501l-.16 3.025-16.038 8.523c1.84 3.997 1.153 5.846-4.005 8.525l-1.584.791 1.942 5.832c1.642-.31 3.033 1.184 3.625 2.34L24.787 54s-1.372-5.553-2.637-9.981c-1.378-4.835-6.613-4.318-6.613-4.318l-.27-1.598Zm19.309-6.838-3.04 1.615.977 3.041c3.023-1.647 3.273-2.275 2.05-4.68l.013.024Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgObjective;
