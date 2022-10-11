import * as React from 'react';
import { SVGProps } from 'react';

const SvgDynamic = (props: SVGProps<SVGSVGElement>) => (
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
            d="m43.775 31.812-6.288 5.099s-9.253.24-16.026.24c-14.231 0-13.588-20.887-.227-20.887a9.691 9.691 0 0 1 6.181 2.021C28.938 14.73 32.21 12 37.177 12c11.298 0 13.403 14.315 6.598 19.812Zm-22.638-7.669c-3.27 0-3.433 5.127.056 5.127 3.187 0 3.206-5.127-.056-5.127Zm15.943-3.752c-3.275 0-3.433 5.122.056 5.122 3.187.005 3.206-5.112-.056-5.112v-.01ZM39.31 52l-19.376-.352-.055-7.369-4.668.08-.097-4.564 24.136-.675.06 12.88Zm13.417-.52-11.344-4.611v-5.225L53 36.189l-.273 15.29Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgDynamic;
