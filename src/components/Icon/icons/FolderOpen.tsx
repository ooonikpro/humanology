import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderOpen = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 9.312C3 4.938 3.938 4 8.312 4H9.93a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 14.07 7h5.056c1.055 0 1.887.82 1.877 1.876L21 9.312v5.376C21 19.062 20.062 20 15.688 20H8.312C3.938 20 3 19.062 3 14.688V9.312Z"
            stroke="currentColor"
            strokeLinejoin="round"
        />
        <path
            d="M21 11h-8.688C7.938 11 7 11.938 7 16.312V19.5"
            stroke="currentColor"
            strokeLinecap="round"
        />
    </svg>
);

export default SvgFolderOpen;
