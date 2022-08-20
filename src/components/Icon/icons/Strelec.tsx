import * as React from 'react';
import { SVGProps } from 'react';

const SvgStrelec = (props: SVGProps<SVGSVGElement>) => (
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
            d="m10.824 4.16-3.398-.48a.206.206 0 0 1-.175-.237l.165-1.047a.206.206 0 0 1 .233-.172l5.227.731a.206.206 0 0 1 .176.176l.731 5.228a.206.206 0 0 1-.172.232l-1.047.165a.207.207 0 0 1-.236-.175l-.48-3.398-4.345 4.351L9.61 11.64a.206.206 0 0 1 0 .293l-.754.745c-.08.08-.21.08-.291 0l-2.106-2.106-3.16 3.146a.206.206 0 0 1-.291 0l-.732-.732a.207.207 0 0 1 0-.292l3.16-3.145L3.33 7.443a.206.206 0 0 1-.001-.29l.746-.754a.207.207 0 0 1 .292 0l2.106 2.105 4.351-4.344Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgStrelec;
