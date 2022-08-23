import * as React from 'react';
import { SVGProps } from 'react';

const SvgAspectComfort = (props: SVGProps<SVGSVGElement>) => (
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
            d="M23.658 43.852c-1.802-2.117-1.255-6.933 1.181-8.217 2.533-1.33 7.3-1.877 10.067.653.205-.208.908-.819 1.018-.956-1.5-2.223-6.268-3.902-12.734-1.927l-.943-8.997 5.235 2.368c.578-.776 3.951-1.059 5.25-.794l4.234-3.704 1.855 6.174s5.413.352 8.382 3.07c2.969 2.716 3.901 8.065 1.184 11.91-4.192 5.885-19.83 6.146-24.729.42Zm2.781-22.541v1.545l-3.409.095-.425-1.333 1.245-1.56-1.107-.07-.319-1.577 3.586-.085.496 1.612-1.337 1.373h1.27Zm-6.338 3.217v1.56l-3.42.095-.429-1.344 1.245-1.56-1.092-.07-.32-1.574 3.583-.084.497 1.612-1.334 1.372 1.27-.007Zm-.422-7.571.13 1.905-5.1.145L14 17.454l2.873-3.394-2.674-.098-.132-1.835L19.164 12l.71 1.764-2.621 3.27 2.426-.077Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgAspectComfort;
