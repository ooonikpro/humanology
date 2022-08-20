import * as React from 'react';
import { SVGProps } from 'react';

const SvgOven = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.994 8.546c.23-1.884.671-3.449 1.322-4.693.823-1.574 1.828-2.34 2.982-2.34.737 0 1.347.278 1.832.832.476.544.718 1.227.718 2.053 0 .783-.24 1.626-.728 2.527a.204.204 0 0 1-.18.107h-.991a.205.205 0 0 1-.179-.305c.462-.822.696-1.576.696-2.264 0-.528-.108-.956-.337-1.28-.207-.296-.481-.446-.824-.446-.386 0-.752.228-1.112.658-.398.474-.778 1.186-1.147 2.134-.381.983-.7 2.257-.96 3.821-.261 1.569-.392 3.009-.392 4.321v.61a.205.205 0 0 1-.205.206h-.972a.205.205 0 0 1-.205-.205v-.65c0-1.234-.124-2.606-.371-4.118-.247-1.508-.548-2.738-.903-3.692C5.582 4.604 5.11 3.748 4.61 3.26c-.298-.29-.6-.444-.915-.444-.336 0-.607.15-.819.444-.232.321-.342.74-.342 1.256 0 .71.233 1.445.693 2.206a.205.205 0 0 1-.176.31h-.985a.205.205 0 0 1-.18-.106c-.491-.892-.734-1.73-.734-2.509 0-.824.242-1.511.72-2.062.488-.561 1.1-.842 1.836-.842 1.15 0 2.146.755 2.953 2.304.64 1.229 1.086 2.805 1.333 4.73Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgOven;
