import * as React from 'react';
import { SVGProps } from 'react';

const SvgCard = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5 12c0-7.412-.411-9 7-9 7.412 0 7 1.588 7 9s.412 9-7 9c-7.411 0-7-1.588-7-9Z"
            stroke="currentColor"
            fill="none"
        />
        <path
            d="M8 14c.425-1.538 1.52-2 4-2s3.575.462 4 2"
            stroke="currentColor"
            strokeLinecap="round"
            fill="none"
        />
        <path d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" fill="none"/>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 16.5c0-.276.184-.5.412-.5h13.176c.228 0 .412.224.412.5s-.184.5-.412.5H5.412C5.184 17 5 16.776 5 16.5Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgCard;
