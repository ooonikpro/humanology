import * as React from 'react';
import { SVGProps } from 'react';

const SvgMap = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 9c0-.981 0-1.472.211-1.894.211-.423.604-.717 1.389-1.306L7 4c.7-.525 1.05-.787 1.43-.886a2 2 0 0 1 1.108.028c.375.119.71.399 1.383.959l1.649 1.374c1.166.972 1.75 1.458 2.444 1.475.695.018 1.302-.437 2.517-1.348L18 5.25c1.236-.927 3-.045 3 1.5V15c0 .982 0 1.472-.211 1.895-.211.422-.604.716-1.389 1.305L17 20c-.7.525-1.05.787-1.43.886a2 2 0 0 1-1.108-.028c-.375-.119-.71-.399-1.383-.958l-2.158-1.8c-.672-.56-1.008-.84-1.383-.958a2 2 0 0 0-1.108-.028c-.38.099-.73.361-1.43.886-.682.512-1.023.767-1.283.867a2 2 0 0 1-2.64-1.32C3 17.279 3 16.852 3 16V9Z"
            stroke="currentColor"
            fill="none"
            strokeLinejoin="round"
        />
        <path
            d="M15 7.23V20.5M9 3.5v13.208"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SvgMap;
