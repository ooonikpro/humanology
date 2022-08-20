import * as React from 'react';
import { SVGProps } from 'react';

const SvgAspectBusinessMini = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path fill="currentColor" d="M3 3h18v18H3z" />
        <path
            d="M10.283 16h3.996c.416 0 .692-.246.692-.639 0-.392-.281-.638-.692-.638h-3.24V8.23c0-.498-.281-.785-.756-.785-.469 0-.756.287-.756.785v6.985c0 .492.287.785.756.785Z"
            fill="#fff"
        />
    </svg>
);

export default SvgAspectBusinessMini;
