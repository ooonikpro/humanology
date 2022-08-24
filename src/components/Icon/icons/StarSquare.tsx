import * as React from 'react';
import { SVGProps } from 'react';

const SvgStarSquare = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m16.958 11.042-1.534 1.534a2 2 0 0 0-.547 1.807L15.2 16l.046.228a.563.563 0 0 1-.849.59l-1.344-.833a2 2 0 0 0-2.106 0l-1.344.832a.563.563 0 0 1-.849-.589L8.8 16l.323-1.617a2 2 0 0 0-.547-1.806L7 11a.586.586 0 0 1 .414-1H8.941a2 2 0 0 0 1.876-1.305L11.444 7a.592.592 0 0 1 1.112 0l.627 1.695A2 2 0 0 0 15.06 10h1.468a.61.61 0 0 1 .431 1.042Z"
            stroke="currentColor"
            strokeLinejoin="round"
            fill="none"
        />
        <path
            d="M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
            stroke="currentColor"
            fill="none"
        />
    </svg>
);

export default SvgStarSquare;
