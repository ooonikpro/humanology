import * as React from 'react';
import { SVGProps } from 'react';

const SvgSortingHat = (props: SVGProps<SVGSVGElement>) => (
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
            d="m40.552 33.193 2.847 10.346L56 44.819c-1.964 3.653-7.162 6.35-15.405 5.3C32.975 49.14 32.174 53 27.015 53 11.089 53 8 39.944 8 39.944l11.1 1.128-.343-4.816s5.521-6.712 6.82-18.454c5.757-9.818 17.475-8.099 21.582-.61l-6.757.16c.483 1.764-1.448 3.385-2.949 3.493l1.849 5.373 2.538 1.465-5.453 4.079.483 1.558 3.682-.127Zm-12.413-7.254-.714 6.238 5.873 1.03.483-1.558-5.642-5.71Zm-3.286 13.863.506 1.094c6.849 0 10.43-1.534 10.43-1.534l4.13 1.822.483-.723c-2.76-5.03-10.207-4.713-15.535-.66h-.014Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgSortingHat;
