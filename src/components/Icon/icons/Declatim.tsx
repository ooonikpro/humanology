import * as React from 'react';
import { SVGProps } from 'react';

const SvgDeclatim = (props: SVGProps<SVGSVGElement>) => (
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
            d="m49.272 33.307-.858-10.842 3.586.806-.169 9.36-2.559.676Zm-8.41 10.702s-2.41-9.393-19.132-9.393l-7.914-.067c-2.443-2.23-2.38-10.214-.058-14.141l7.981-.12C37.474 20.288 41.38 11 41.38 11l4.086.206-.265 32.559-4.338.244Zm-10.12-5.691.183 5.653-3.778.307-.405 3.524c2.164.48 2.506 3.414 2.506 4.953L16.554 53l2.082-15.709 12.106 1.027Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgDeclatim;
