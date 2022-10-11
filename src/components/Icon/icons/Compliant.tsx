import * as React from 'react';
import { SVGProps } from 'react';

const SvgCompliant = (props: SVGProps<SVGSVGElement>) => (
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
            d="M40.204 27.997c-4.66 4.76-11.336 5.04-16.093-.126-1.891 1.67-4.31 2.896-6.988 2.798A9.688 9.688 0 0 1 16 26.473c.233-22.411 32.278-21.395 31.998-.36a10.998 10.998 0 0 1-1.211 4.574 11.346 11.346 0 0 1-6.583-2.69ZM23.99 31.07c4.599 4.345 12.384 3.757 16.488.21a11.48 11.48 0 0 0 5.097 1.524c-3.522 5.394-9.69 9.986-10.184 11.357l-6.942.438c-.466-1.282-6.472-6.266-9.961-11.557a11.346 11.346 0 0 0 5.502-1.973Zm11.867 16.61.713 4.462c-1.244 2.448-7.567 2.522-9.062-.047l.568-4.89 7.78.476Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgCompliant;
