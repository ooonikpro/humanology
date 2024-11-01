import * as React from 'react';
import { SVGProps } from 'react';

const SvgResult = (props: SVGProps<SVGSVGElement>) => (
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
            d="m47.38 22.035-4.52-.739-7.204 7.041c1.245 3.053-.264 7.343-4.484 7.343-7.165 0-6.842-10.34-.115-10.34a5.075 5.075 0 0 1 2.715.724l3.672-3.641a9.731 9.731 0 0 0-6.327-2.112c-13.279 0-13.922 20.398.224 20.398 8.022.005 11.116-7.85 9.123-13.81l2.342-2.012c3.243 7.755-.588 18.754-11.346 18.754-18.196 0-17.369-26.242-.294-26.242 3.528-.005 6.308 1.136 8.391 2.962l1.34-1.333-.303-3.38a17.09 17.09 0 0 0-9.383-2.57c-22.735 0-23.831 34.923.384 34.923 13.269 0 18.625-12.573 15.9-22.631l2.062-2.776c2.646 7.096 1.59 15.72-3.114 21.56l1.68 8.464-2.318.382-3.562-5.074a19.261 19.261 0 0 1-10.548 2.896 22.303 22.303 0 0 1-10.882-2.575L17.474 53l-2.49-.463 1.624-7.428C5.546 33.94 11.067 10.217 31.245 10.217a19.889 19.889 0 0 1 10.962 3.018L47.938 9l.762 4.627 4.3 1.056-5.62 7.352Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgResult;
