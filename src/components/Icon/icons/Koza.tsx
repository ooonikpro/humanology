import * as React from 'react';
import { SVGProps } from 'react';

const SvgKoza = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5.611 2.026c-2.429-.53-2.273 1.37-2.273 1.37l-.903.997s-.779-1.62.53-2.616c1.307-.997 2.646.249 2.646.249Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.802 6.635s.654 1.806-.717 2.18c0 0 1.557 5.543 1.028 5.48-.377-.043-.649-.896-.894-1.661-.1-.31-.194-.607-.29-.83-.056-.133-.194-.115-.57-.067a12.7 12.7 0 0 1-1.049.099c-1.214.062-2.553-.717-2.553-.717s1.676 3.813.934 3.426c-.44-.23-1.06-1.19-1.665-2.13-.587-.909-1.16-1.797-1.543-1.98-.324-.157.147.85.644 1.915.506 1.084 1.04 2.226.789 2.257-.85.107-3.332-3.394-3.8-6.913 0 0-1.37 1.37-2.086 1.245-.716-.124.156-3.394 1.775-5.387 1.62-1.993 4.329-1.62 5.481.124 1.152 1.744.623 3.39-1.277 3.328-1.9-.062-2.024-1.864-1.183-2.424 0 0-.306 1.187.552 1.465.957.31 1.784-.25 1.348-1.497-.379-1.08-2.048-2.283-2.99-.996-1.277 1.744.25 3.768 2.74 4.39 2.492.624 4.173.686 4.173.686s-.093-1.65 1.153-1.993ZM3.338 6.464a.327.327 0 1 0 .654 0 .327.327 0 0 0-.654 0Z"
            fill="currentColor"
        />
        <path
            d="M11.922 13.048c-.264-.81-.136-.89.021-.933.158-.043.396.207.55.78l.064.232c.138.5.27.975.134 1.012-.158.043-.585-.526-.769-1.09Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgKoza;
