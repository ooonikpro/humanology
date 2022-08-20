import * as React from 'react';
import { SVGProps } from 'react';

const SvgVictim = (props: SVGProps<SVGSVGElement>) => (
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
            d="m11.72 8.254.739-1.753 1.197.405-.829 3.082-2.966 3.182.096 1.46-4.09.055.021-2.543-1.502-3.048-1.612-1.436-.43-2.445 1.235-.07.408 1.57 1.052.8.158-.098-1.09-3.027.486-2.485 1.276.238-.223 1.85L6.65 6.787c.111-.036.223-.07.332-.1l-.344-2.73 1.446-2.642 1.16.625-1.041 2.145.356 2.258c.16-.024.255-.035.255-.035l.597-2.314 2.614-1.012.498 1.102-1.95 1.429.045 2.913 1.102-.172Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgVictim;
