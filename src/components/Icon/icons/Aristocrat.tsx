import * as React from 'react';
import { SVGProps } from 'react';

const SvgAristocrat = (props: SVGProps<SVGSVGElement>) => (
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
            d="M32.765 49c-19.363 0-22.593-5.837-22.754-8.655-.119-2.016.565-2.834 7.85-3.146l.05 2.312c4.805 4.2 24.22 4.317 29.08 0l.068-2.272c6.648.328 7.057 1.146 6.922 3.11C53.779 43.154 52.127 49 32.765 49ZM17.87 34.329l-.724-20.211L47.634 14l-.585 20.324c-6.316 2.69-23.121 2.558-29.179.005Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgAristocrat;
