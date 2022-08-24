import * as React from 'react';
import { SVGProps } from 'react';

const SvgPresentationChart = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h10c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v6c0 1.886 0 2.828-.586 3.414C19.828 17 18.886 17 17 17H7c-1.886 0-2.828 0-3.414-.586C3 15.828 3 14.886 3 13V7Z"
            stroke="currentColor"
            strokeLinejoin="round"
            fill="none"
        />
        <path
            d="m9 21 2.625-3.5a.469.469 0 0 1 .75 0L15 21M12 7v6M16 8v5M8 9v4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    </svg>
);

export default SvgPresentationChart;
