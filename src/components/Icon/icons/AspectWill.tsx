import * as React from 'react';
import { SVGProps } from 'react';

const SvgAspectWill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M47.42 21.877 43.815 51l-3.654-.273 3.372-29.412C40.724 19.31 41.707 14 46.022 14c4.814 0 5.233 6.648 1.399 7.877ZM29.908 37.693l1.61-11.872 9.622-4.116-2.142 18.285-9.09-2.297ZM14 35.645l14.517-6.114-1.084 10.479L14 35.645Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgAspectWill;
