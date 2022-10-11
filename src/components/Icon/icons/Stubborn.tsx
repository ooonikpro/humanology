import * as React from 'react';
import { SVGProps } from 'react';

const SvgStubborn = (props: SVGProps<SVGSVGElement>) => (
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
            d="m44.94 28.128-.455 3.012-8.26.406-1 16.022a18.038 18.038 0 0 0 10.285-3.964l-1.445-2.87 7.935.22c-9.1 19.288-35.26 16.813-40-4.937l7.45 2.095-1.705 2.485c2.1 2.841 5.54 4.98 9.44 6.117l2.855-15.779-8.2-2.226.455-3.022 8.79-.356.5-2.93c-6.275-2.958-3.8-13.313 4.085-12.336 7.885.976 7.32 11.37 1.08 12.937l-.18 2.93 8.37 2.196ZM35.1 14.141c-3.285-.39-4.055 4.467-.56 4.882 3.195.39 3.84-4.486.56-4.882Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgStubborn;
