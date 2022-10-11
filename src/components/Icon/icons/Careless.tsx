import * as React from 'react';
import { SVGProps } from 'react';

const SvgCareless = (props: SVGProps<SVGSVGElement>) => (
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
            d="m45.983 20.55 2.082 23.04a27.826 27.826 0 0 0 3.513-1.893l1.997 2.069c-7.681 9.63-31.793 9.65-40.031.032l2.115-2.18a22.375 22.375 0 0 0 3.22 1.981l2.885-18.076c-2.12-.812-4.877.051-4.877 8.773l-6.53.808C7.694 19.119 20.663 19.179 24.691 23.86l9.914-.175c0-6.423 4.278-16.9 18.531-10.892L54 25.722l-3.593 1.242-4.424-6.413ZM22.037 44.944c7.082 2.47 15.665 2.285 22.922-.139-4.655-11.972-17.747-12.092-22.922.139Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgCareless;
