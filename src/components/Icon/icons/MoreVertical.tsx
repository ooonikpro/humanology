import * as React from 'react';
import { SVGProps } from 'react';

const SvgMoreVertical = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M19 24a3 3 0 1 1-5.999 0A3 3 0 0 1 19 24Zm-3-11a3 3 0 1 0 0 5.999A3 3 0 0 0 16 13Zm0-2a3 3 0 1 0 0-5.999A3 3 0 0 0 16 11Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgMoreVertical;
