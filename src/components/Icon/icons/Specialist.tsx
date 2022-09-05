import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpecialist = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m17 17 4 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"            
        />
        <path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="currentColor" fill="none"/>
        <path
            d="M7 15c.425-1.538 1.52-2 4-2s3.575.462 4 2"
            stroke="currentColor"
            strokeLinecap="round"
            fill="none"
        />
        <path d="M13 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" fill="none"/>
    </svg>
);

export default SvgSpecialist;
