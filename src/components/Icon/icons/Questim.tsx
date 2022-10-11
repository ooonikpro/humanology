import * as React from 'react';
import { SVGProps } from 'react';

const SvgQuestim = (props: SVGProps<SVGSVGElement>) => (
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
            d="m51.038 43.996-5.03-.159-.64 7.163-7.282-7.41-12.651-.397-.753-4.597-7.566 6.386.085-7.94c-11.945-5.37-8.84-24.59 7.908-24.03 8.289.28 13.079 4.626 14.412 9.65L54 22.021l-2.962 21.974Zm-26.17-18.004 2.818 14.627 11.818.49 3.952 4.538.376-4.36 5.078.21 1.773-16.533-25.815 1.028Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgQuestim;
