import * as React from 'react';
import { SVGProps } from 'react';

const SvgFire = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m3.956 13.5-.989-1.117C6.327 9.705-.73 5.2 4.513 2.5c0 0 .809 1.061.787 1.123-3.373 2.334 3.568 6.495-1.344 9.877Zm3.86 0-.989-1.117C10.187 9.705 3.128 5.2 8.372 2.5c0 0 .81 1.061.788 1.123-3.374 2.334 3.567 6.495-1.345 9.877Zm3.86 0-.989-1.117C14.04 9.705 6.988 5.2 12.231 2.5c0 0 .81 1.061.787 1.123-3.372 2.334 3.57 6.495-1.343 9.877Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgFire;
