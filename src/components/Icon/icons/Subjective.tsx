import * as React from 'react';
import { SVGProps } from 'react';

const SvgSubjective = (props: SVGProps<SVGSVGElement>) => (
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
            d="M39.483 44.016C35.03 36.913 29.087 40.026 23.399 54c-2.478-3.5-3.797-10.039-2.922-15.104C27.659 34.48 23.269 28.34 10 23.58c3.892-2.936 11.047-5.088 15.159-3.88C29.527 26.506 35.196 24.54 40.345 10c3.142 4.293 4.008 11.641 3.169 15.113-6.837 4.63-3.654 9.984 10.486 15.521-3.838 2.492-10.329 3.853-14.517 3.382Zm-7.299-14.564c-3.52 0-3.69 5.419.058 5.419 3.425 0 3.448-5.42-.058-5.42Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgSubjective;
