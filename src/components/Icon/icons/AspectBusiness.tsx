import * as React from 'react';
import { SVGProps } from 'react';

const SvgAspectBusiness = (props: SVGProps<SVGSVGElement>) => (
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
            d="M44.623 46c-1.819 0-23.691-.347-26.022-.39-2.656-.054-3.794-1.56-3.575-3.969.07-.78.337-3.996.626-7.52l13.296-.126.31 2.012 5.154-.491.043-1.56 13.089-.125c.207 3.755.391 7.35.45 8.34.105 2.585-1.115 3.829-3.371 3.829Zm-10.09-15.412-6.046.495.149.974-12.847.39c.371-4.561.735-9.076.735-9.076l30.433.39s.212 3.657.438 7.716l-12.905.39.043-1.28Zm3.09-9.806-11.995-.398-.496 1.458-2.738-.058s.254-1.279.485-2.144c.442-1.685 1.056-2.64 3.062-2.64.954 0 9.202.39 10.395.39 2.159 0 3.637.834 3.91 2.261.15.757.49 2.538.49 2.538l-2.625-.054-.488-1.353Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgAspectBusiness;
