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
            d="M12.992 5.978c-.654 2.12-2.126 3.467-4.521 3.467-2.454 0-3.927-1.395-4.542-3.604L3 5.061l.623-.956c-.03-.356-.046-.724-.046-1.105l9.816.01c0 .373-.016.734-.047 1.084l.654.998-1.008.886Zm-7.12-1.909-.807 1.056.827.992.758-1.018-.777-1.03Zm2.666 0-.921 1.132.958 1.149.879-1.182-.916-1.099Zm2.725 0-.8 1.056.818.992.758-1.018-.776-1.03Zm-3.581 7.918.198-1.844h1.212l.25 1.838c3.994.76 3.899 2.019-.734 2.019-5.08 0-5.18-1.098-.926-2.013Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgCups;
