import * as React from 'react';
import { SVGProps } from 'react';

const SvgCups = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.9 5.02c-.713 2.504-2.32 4.096-4.932 4.096-2.677 0-4.283-1.648-4.954-4.258L2 3.935l.68-1.129c-.032-.42-.05-.856-.05-1.306l10.708.012c0 .441-.018.867-.052 1.28L14 3.973 12.9 5.02ZM5.135 2.763 4.252 4.01l.903 1.172.827-1.203-.848-1.216Zm2.907 0L7.036 4.1l1.046 1.358.958-1.396-.999-1.3Zm2.973 0-.872 1.247.892 1.172.826-1.203-.846-1.216ZM7.108 12.12l.216-2.179h1.322l.273 2.172c4.356.899 4.253 2.386-.801 2.386-5.542 0-5.65-1.297-1.01-2.379Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgCups;
