import * as React from 'react';
import { SVGProps } from 'react';

const SvgNegativist = (props: SVGProps<SVGSVGElement>) => (
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
            d="M52.966 17.652c-.472 3.389-2.248 19.433-2.983 25.528.964 6.613-.682 9.126-9.32 8.124-5.157.13-8.27.484-15.77.692-7.31.184-6.768-6.202-2.735-8.191 2.984-1.453 5.406-2.329 7.703-3.312 2.298-.983 3.307-3.306 2.934-6.07-.567-4.193-1.278-13.072-1.865-16.655-1.248-7.61 23.096-7.731 22.036-.116ZM42.27 20.775c10.021 0 10.086-5.96-.174-5.96s-10.796 5.96.174 5.96ZM19.393 42.498c-3.173 1.568-3.526 4.299-2.66 6.584h-.07c-7.316 0-6.769-6.197-2.73-8.192 2.983-1.452 5.4-2.328 7.698-3.311 2.297-.983 3.307-3.302 2.934-6.071-.567-4.193-2.432-17.342-2.432-17.342l5.182-.653c.83 5.577 2.447 16.46 2.88 19.5.397 2.76-.264 4.236-2.487 5.326-2.223 1.09-5.361 2.672-8.33 4.134l.015.025Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgNegativist;
