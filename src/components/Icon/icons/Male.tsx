import * as React from 'react';
import { SVGProps } from 'react';

const SvgMale = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9.5 3v1h1.795L9.45 5.845A3.962 3.962 0 0 0 7 5C4.795 5 3 6.795 3 9s1.795 4 4 4 4-1.795 4-4c0-.925-.315-1.77-.845-2.45L12 4.705V6.5h1V3H9.5ZM7 12c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgMale;
