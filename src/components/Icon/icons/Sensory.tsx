import * as React from 'react';
import { SVGProps } from 'react';

const SvgSensory = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M17 11V9.273c0-.518.259-1.001.69-1.288l.049-.033A1.454 1.454 0 0 1 20 9.162V13c0 1.7-.53 3.276-1.434 4.571A7.991 7.991 0 0 1 12 21a7.991 7.991 0 0 1-6.566-3.429A7.963 7.963 0 0 1 4 13v-.788a2 2 0 0 1 4 0V13"
            stroke="currentColor"
            strokeLinecap="round"
            fill="none"
        />
        <path
            d="M8 12V5.803a1.5 1.5 0 1 1 3 0V11M14 11V5.803a1.5 1.5 0 0 1 3 0V9M11 6V4.803a1.5 1.5 0 0 1 3 0V6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    </svg>
);

export default SvgSensory;
