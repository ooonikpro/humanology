import * as React from 'react';
import { SVGProps } from 'react';

const SvgEmotivist = (props: SVGProps<SVGSVGElement>) => (
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
            d="M49.378 15.121H52c-.33 8.715-4.46 12.521-4.46 12.521s1.838-8.555 1.838-12.521Zm-5.758-2.223h3.23c0 9.283-3.483 18.499-3.483 18.499l.253-18.499Zm-8.952 31.458C38.552 46.672 37.645 54 32.093 54c-6.047 0-6.804-7.22-2.916-9.602l-.077-7.592c-3.379-1.031-6.18-4.048-6.18-9.035v-17.76h5.026c0 4.398.067 15.156.067 17.348 0 6.147 7.726 6.11 7.726 0 0-1.826.052-13.037.067-17.359h4.955s.103 14.92.103 17.787c0 5.084-2.956 8.127-6.474 9.107l.278 7.462ZM20.076 12.898l.325 18.499s-3.482-9.216-3.482-18.499h3.157Zm-5.552 2.367c0 3.956 2.06 12.377 2.06 12.377S12.33 23.976 12 15.265h2.524Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgEmotivist;
