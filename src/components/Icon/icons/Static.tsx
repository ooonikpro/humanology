import * as React from 'react';
import { SVGProps } from 'react';

const SvgStatic = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.475 48s-.415-16.72-.472-19.917c-.09-3.788 1.79-4.669 5.092-5.175 1.572-.242 4.883-.734 8.17-1.222l1.163-4.139c3.367-2.154 12.228-1.894 15.747-.232l1.464 4.603c3.665.587 7.33 1.16 8.85 1.383 1.961.28 3.553 1.7 3.51 4.806-.042 3.258-.293 19.543-.293 19.543l-43.23.35Zm6.14-17.88c-2.399 0-2.512 3.655.038 3.655 2.334 0 2.348-3.674-.037-3.674v.018Zm15.842-4.793c-12.332 0-12.927 18.818.208 18.818 11.973 0 12.072-18.818-.208-18.818Zm-19.365-6.264L18.92 19l.53 2.245-6.83.293.472-2.476Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgStatic;
