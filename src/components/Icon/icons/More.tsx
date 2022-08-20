import * as React from 'react';
import { SVGProps } from 'react';

const SvgMore = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M14 12v.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V12a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5Zm-.5-3.5h-8A.5.5 0 0 0 5 9v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5Zm0-3h-8A.5.5 0 0 0 5 6v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5Zm0-3h-8A.5.5 0 0 0 5 3v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM3 11.5h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5H3a.5.5 0 0 0 .5-.5V12a.5.5 0 0 0-.5-.5Zm0-3h-.5A.5.5 0 0 0 2 9v.5a.5.5 0 0 0 .5.5H3a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5Zm0-3h-.5A.5.5 0 0 0 2 6v.5a.5.5 0 0 0 .5.5H3a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5Zm0-3h-.5A.5.5 0 0 0 2 3v.5a.5.5 0 0 0 .5.5H3a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgMore;
