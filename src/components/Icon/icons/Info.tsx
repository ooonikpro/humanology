import * as React from 'react';
import { SVGProps } from 'react';

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M16 4a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Zm2.425 10.916L16.6 21h1.26a.5.5 0 0 1 .485.621l-.25 1a.5.5 0 0 1-.485.379H14a1.408 1.408 0 0 1-1.425-1.916L14.4 15h-.76a.5.5 0 0 1-.485-.621l.25-1A.5.5 0 0 1 13.89 13H17a1.408 1.408 0 0 1 1.425 1.916Zm.145-3.334a.5.5 0 0 1-.494.418H15.59a.499.499 0 0 1-.493-.582l.333-2A.5.5 0 0 1 15.924 9h2.486a.5.5 0 0 1 .493.582l-.333 2Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgInfo;
