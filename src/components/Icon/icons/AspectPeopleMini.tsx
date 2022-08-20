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
            d="M19.495 2.618c1.185-.396 2.322.735 1.923 1.934l-2.214 6.667a2.535 2.535 0 0 0 0 1.598l2.214 6.667c.399 1.199-.738 2.33-1.923 1.934l-6.643-2.222a2.513 2.513 0 0 0-1.595 0l-6.51 2.178c-1.203.402-2.347-.768-1.91-1.974l2.044-5.642a2.536 2.536 0 0 0 .04-1.607l-2.35-7.67c-.366-1.191.764-2.29 1.934-1.9l6.752 2.26a2.514 2.514 0 0 0 1.595 0l6.643-2.223Z"
            fill="#fff"
            stroke="#230000"
        />
        <path
            d="M10.107 16h4.12c.416 0 .691-.246.691-.639 0-.392-.275-.638-.691-.638h-3.364v-2.414h3.188c.392 0 .65-.235.65-.604 0-.37-.264-.598-.65-.598h-3.188V8.822h3.364c.416 0 .691-.246.691-.638 0-.393-.275-.64-.691-.64h-4.12c-.468 0-.755.294-.755.786v6.885c0 .492.287.785.755.785Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgAspectPeopleMini;