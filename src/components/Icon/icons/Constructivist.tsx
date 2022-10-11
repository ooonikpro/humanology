import * as React from 'react';
import { SVGProps } from 'react';

const SvgConstructivist = (props: SVGProps<SVGSVGElement>) => (
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
            d="m48.676 30.202-2.407-4.759L53 22.625l-.498 5.402-3.826 2.175Zm-1.666 2.33-12.16-1.153L18.557 49.57c-4.035 4.858-11.25-1.632-7.518-6.016l14.388-14.526-7.855-8.564-2.379-.125-3.11-5.537L15.358 12l4.936 3.916-.19 2.24 7.772 8.38 3.343-3.378 4.015-10.2 12.662-.903 1.826 3.242-8.263 4.225 5.552 13.01ZM17.159 43.923c-2.488-2.085-5.757 1.591-3.12 3.81 2.403 2.026 5.577-1.735 3.115-3.81h.005Zm22.204-9.552s5.886 6.065 9.304 9.333c4.219 4.04-4.274 11.173-8.2 7.058-2.985-3.108-8.955-10.974-8.955-10.974l4.403-5.293 3.448-.124Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgConstructivist;
