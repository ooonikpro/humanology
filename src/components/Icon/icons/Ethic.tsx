import * as React from 'react';
import { SVGProps } from 'react';

const SvgEthic = (props: SVGProps<SVGSVGElement>) => (
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
            d="m46.678 40.325-3.895-9.13-1.005-.11-3.235 11.339-3.527-6.821-.728-.177-2.67 5.258-9.385.263a10.795 10.795 0 0 1-.655-3.624 6.96 6.96 0 0 1 1.474-4.46c-2.723-5.515-1.46-10.162 1.383-12.81l-1.201-4.302 3.68-1.53 1.435 3.696a8.567 8.567 0 0 1 1.881-.254l1.058-3.977 3.35.736-1.747 9.527c-2.144-.708-3.967 2.184-1.508 5.258v.029l1.436 1.544 1.35-1.138-1.254-2.61a9.774 9.774 0 0 1 2.857-2.294c.11-4.556.689-11.128 2.986-14.11 1.378-1.793 9.399.501 7.494 3.79-1.814 3.14-2.139 7.122-2.077 9.985a11.66 11.66 0 0 1 3.733 2.338c3.12 2.91 4.905 7.772 5.092 13.484l-6.322.1ZM44.405 13.82c.301-1.128-4.082-2.294-4.379-1.19-.32 1.204 4.077 2.323 4.379 1.19ZM11.265 26.89c-1.374-1.798 2.914-8.939 5.608-6.253a14.054 14.054 0 0 0 3.04 2.266c-1.082 3.824-.288 7.787.042 9.14-3.503-1.296-7.073-3.045-8.69-5.153Zm23.253 12.667 3.924 8.838 1.11-.43 2.91-9.89 2.393 5.062 8.088.038a37.384 37.384 0 0 1-2.01 9.87c-11.998 3.347-23.656-2.6-27.805-10.037l10.05-.091 1.34-3.36Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgEthic;
