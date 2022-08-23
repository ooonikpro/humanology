import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquare11 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.06 15h-.93V9.88c-.24.093-.523.14-.85.14h-.77v-.86h.73c.294 0 .514-.06.66-.18.154-.127.23-.307.23-.54h.93V15Zm3.78 0h-.93V9.88c-.24.093-.523.14-.85.14h-.77v-.86h.73c.293 0 .513-.06.66-.18.153-.127.23-.307.23-.54h.93V15Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgSquare11;
