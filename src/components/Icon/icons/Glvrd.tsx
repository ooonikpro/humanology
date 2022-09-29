import * as React from 'react';
import { SVGProps } from 'react';

const SvgGlvrd = (props: SVGProps<SVGSVGElement>) => (
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
            d="M44.885 54c-8.551-.025-9.277-12.528-15.042-13.56l-.605 2.06c1.11.2 2.002 1.262 2.832 2.73l-11.109-.175c.61-7.275.05-9.949-6.17-12.12-2.917-9.683 2.002-24.78 18.6-22.75 16.599 2.031 16.719 16.819 12.39 25.52-6.165.434-7.916 2.494-8.797 7.184 1.561 1.637 2.827 3.368 4.554 4.32l.72-2.908 7.211.095s.355 2.495.5 3.991c.326 4.34-1.986 5.623-5.084 5.613ZM25.125 23.49c-6.205-.763-7.657 8.592-1.051 9.4 6.035.738 7.23-8.646 1.05-9.4Zm12.6 3.493c-4.339-.529-5.36 5.987-.736 6.58 4.224.5 5.06-6.061.736-6.595v.015Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgGlvrd;
