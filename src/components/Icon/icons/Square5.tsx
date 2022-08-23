import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquare5 = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
            stroke="currentColor"
            fill="none"
        />
        <path
            d="M12.122 10.79c.653 0 1.177.177 1.57.53.393.347.59.81.59 1.39v.39c0 .613-.203 1.103-.61 1.47-.4.367-.94.55-1.62.55-.686 0-1.23-.157-1.63-.47-.393-.313-.59-.743-.59-1.29v-.1h.92v.1c0 .28.114.5.34.66.227.153.537.23.93.23.413 0 .737-.097.97-.29.233-.2.35-.477.35-.83v-.39c0-.333-.12-.597-.36-.79-.233-.2-.553-.3-.96-.3-.353 0-.643.073-.87.22a.81.81 0 0 0-.39.59h-.89l.2-4.02h3.94v.87h-3.1l-.09 1.86c.347-.253.78-.38 1.3-.38Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgSquare5;
