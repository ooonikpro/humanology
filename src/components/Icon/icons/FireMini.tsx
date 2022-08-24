import * as React from 'react';
import { SVGProps } from 'react';

const SvgFireMini = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m26.435 15.04-.918.919c1.057 1.057 1.593 2.526 1.593 4.366h1.3c0-2.198-.664-3.977-1.975-5.285ZM6.906 10.867c0 1.616-.742 2.67-1.529 3.785-.757 1.076-1.54 2.188-1.54 3.752h1.3c0-1.153.603-2.01 1.303-3.004.828-1.174 1.766-2.506 1.766-4.533h-1.3Zm15.122 11.407-.923.924.92.919.924-.924-.92-.92ZM12.17 4.5h-1.3v1.305h1.3V4.501Zm10.046 0h-1.3v1.305h1.3V4.501ZM24.6 15.09l.92-.919-.924-.923-.919.92.923.922Zm-.005-7.075h-1.3v1.305h1.3V8.014ZM3.837 20.924h1.3v-1.306h-1.3v1.305Zm4.37-12.622h-1.3v1.305h1.3V8.302ZM16 30.7C7.894 30.7 1.3 24.106 1.3 16 1.3 7.893 7.894 1.3 16 1.3c8.106 0 14.7 6.594 14.7 14.7 0 8.106-6.594 14.7-14.7 14.7ZM16 0C7.178 0 0 7.177 0 16c0 8.822 7.178 16 16 16s16-7.178 16-16c0-8.823-7.178-16-16-16Zm.577 21.654c.266.267.405.754.4 1.41-.012 1.226.544 2.185 1.486 2.569.875.356 1.916.124 2.59-.58l-.938-.898c-.308.322-.773.43-1.162.274-.443-.18-.683-.66-.677-1.353.009-1.05-.265-1.85-.815-2.375-.645-.617-1.413-.6-1.496-.589l-.578.03-.035.58c-.001.012-.093 1.287-1.248 1.787-1.059.46-2.22-.049-2.23-.054l-.682-.313-.213.72c-.237.804-.089 1.67.396 2.318.374.502 1.12 1.1 2.542 1.1v-1.3c-.7 0-1.219-.2-1.502-.579a1.23 1.23 0 0 1-.219-.498c.632.13 1.53.185 2.424-.201 1.154-.499 1.654-1.447 1.869-2.124.03.022.06.047.088.076Zm-3.195 7.331c.47.116.96.204 1.458.263l.153-1.29a10.915 10.915 0 0 1-1.3-.235l-.31 1.262Zm-5.588-8.227c-.008-1.873.67-2.91 1.457-4.111.418-.639.846-1.292 1.188-2.096-.018.336-.114.793-.186 1.136-.13.614-.264 1.25-.217 1.832.114 1.43 1.184 2.468 2.542 2.468 1.719 0 2.618-1.269 2.618-2.52 0-1.34-.57-2.232-1.073-3.019-.505-.79-.94-1.472-.94-2.609 0-1.096.501-1.867.992-2.477l-1.013-.815c-.596.74-1.28 1.783-1.28 3.292 0 1.516.609 2.47 1.145 3.309.467.73.87 1.359.87 2.319 0 .607-.408 1.22-1.319 1.22-.787 0-1.197-.66-1.246-1.272-.032-.394.082-.936.193-1.46.197-.938.402-1.91-.102-2.587-.265-.358-.673-.563-1.212-.61l-.536-.046-.146.518c-.307 1.087-.82 1.873-1.366 2.705-.825 1.26-1.679 2.564-1.669 4.828.016 3.409 2.072 6.37 5.37 7.728l.495-1.2c-2.845-1.173-4.552-3.616-4.565-6.533Zm15.164-4.252-.791-.08.077.792c.018.183.137 1.797-1.195 2.04a1.515 1.515 0 0 1-1.391-.412c-.433-.428-.62-1.101-.5-1.798.12-.7.501-1.084 1.027-1.614.465-.468.994-.999 1.384-1.838.861-1.853.403-3.428-.312-4.285-.506-.606-1.143-.881-1.709-.731l-.541.142.06.556c.098.901-.115 1.75-.555 2.216-.25.267-.552.389-.922.368-.89-.044-1.024-.681-1.024-1.057 0-.55.276-.91.657-1.408.468-.614 1.052-1.377 1.132-2.663.134-2.15-.858-3.205-1.46-3.642-.664-.48-1.445-.65-1.989-.434l-.729.29.421.663c.282.443 1.075 2.035-.553 3.915l.983.85c1.252-1.445 1.482-2.937 1.21-4.148.595.502.886 1.362.82 2.425-.056.891-.45 1.408-.868 1.955-.433.566-.924 1.208-.924 2.197 0 1.117.699 2.279 2.26 2.355a2.412 2.412 0 0 0 1.931-.773c.492-.52.804-1.27.901-2.111.02.03.04.06.06.094.206.344.616 1.293-.028 2.678-.294.632-.699 1.04-1.127 1.471-.588.592-1.196 1.202-1.386 2.308-.192 1.114.131 2.215.867 2.942.668.662 1.592.941 2.539.768 1.442-.262 2.027-1.37 2.207-2.36.428.407.902 1.24.92 2.935.018 1.67-.7 3.362-1.968 4.645-1.032 1.043-2.905 2.286-5.966 2.286v1.3c3.51 0 5.684-1.453 6.89-2.672 1.51-1.527 2.366-3.558 2.344-5.571-.046-4.265-2.642-4.583-2.752-4.594Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgFireMini;