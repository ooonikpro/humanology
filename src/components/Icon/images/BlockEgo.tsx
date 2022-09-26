import * as React from 'react';
import { SVGProps } from 'react';

const SvgBlockEgo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 344 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g opacity={0.75}>
            <mask
                id="block-ego_svg__b"
                style={{
                    maskType: 'alpha',
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={344}
                height={48}
            >
                <path
                    d="M0 2a2 2 0 0 1 2-2h340a2 2 0 0 1 2 2v44a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Z"
                    fill="url(#block-ego_svg__a)"
                />
            </mask>
            <g mask="url(#block-ego_svg__b)">
                <path
                    d="M2 .5h340a1.5 1.5 0 0 1 1.5 1.5v44a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 46V2A1.5 1.5 0 0 1 2 .5Z"
                    stroke="#6B360D"
                />
            </g>
        </g>
        <g clipPath="url(#block-ego_svg__c)">
            <rect x={4} y={4} width={164} height={96} rx={2} fill="#6B360D" />
            <path
                opacity={0.05}
                d="m4 72 164-26.747V25.751L4 52.498V72Z"
                fill="#fff"
            />
            <path
                opacity={0.1}
                d="m4 47.623 164-26.747V16L4 42.747v4.876Z"
                fill="#fff"
            />
            <path
                opacity={0.75}
                d="m42.068 14.308-2.064 3.744 2.052 3.768V22H40.88l-1.92-3.48h-1.092V22H36.74v-3.48h-1.104L33.716 22h-1.188v-.18l2.076-3.768-2.088-3.744v-.18h1.188l1.884 3.372h1.152v-3.372h1.128V17.5h1.14l1.872-3.372h1.188v.18Zm2.221 1.74v4.236l2.808-4.236h.996V22h-1.056v-4.236L44.241 22h-.996v-5.952h1.044Zm9.47 2.916c.32.12.564.296.732.528.176.232.264.504.264.816v.168c0 .48-.176.856-.528 1.128-.352.264-.872.396-1.56.396h-2.988v-5.952h2.844c.696 0 1.216.132 1.56.396.344.256.516.628.516 1.116v.156c0 .296-.072.552-.216.768a1.367 1.367 0 0 1-.624.48Zm-3-2.04v1.644h1.836c.288 0 .512-.068.672-.204a.707.707 0 0 0 .252-.564v-.132a.64.64 0 0 0-.252-.54c-.16-.136-.388-.204-.684-.204h-1.824Zm2.916 3.276c0-.248-.084-.436-.252-.564-.168-.136-.404-.204-.708-.204h-1.956v1.692h1.968c.288 0 .516-.068.684-.204a.706.706 0 0 0 .264-.576V20.2Zm7.565-4.152v.168l-2.484 6.48c-.184.48-.42.824-.708 1.032-.28.208-.668.312-1.164.312h-.948v-.984h.852c.248 0 .44-.044.576-.132.144-.088.268-.272.372-.552l.108-.3-2.34-5.856v-.168h1.104l1.8 4.62 1.728-4.62h1.104Z"
                fill="#fff"
            />
            <g opacity={0.75} fill="#fff">
                <path d="M27 14h-2v8h2zM23 16h-2v6h2zM19 18h-2v4h2zM15 20h-2v2h2z" />
            </g>
            <path
                opacity={0.5}
                d="M155.032 90h-.864v-6.372c-.296.16-.676.24-1.14.24h-.924v-.792h.888c.384 0 .676-.08.876-.24.2-.168.3-.404.3-.708h.864V90Z"
                fill="#fff"
            />
            <path
                d="M154 13a.5.5 0 0 0-.5.5v4h-4a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4h4a.5.5 0 0 0 0-1h-4v-4a.5.5 0 0 0-.5-.5Z"
                fill="#fff"
                opacity={0.75}
            />
            <path
                d="M24.096 78.192v1.602h-8.64v3.312h5.274c1.356 0 2.406.294 3.15.882.756.576 1.134 1.392 1.134 2.448v.234c0 1.044-.378 1.86-1.134 2.448-.756.588-1.806.882-3.15.882h-7.074V78.192h10.44Zm-3.384 10.206c.768 0 1.374-.156 1.818-.468.456-.312.684-.732.684-1.26v-.234c0-.54-.222-.96-.666-1.26-.444-.312-1.056-.468-1.836-.468h-5.256v3.69h5.256Zm18.219.072V90h-1.188c-.588 0-1.08-.114-1.476-.342a1.827 1.827 0 0 1-.828-.972c-.48.516-1.056.9-1.728 1.152-.672.252-1.464.378-2.376.378-1.284 0-2.274-.222-2.97-.666-.696-.456-1.044-1.104-1.044-1.944 0-.72.27-1.296.81-1.728.54-.432 1.332-.702 2.376-.81l4.806-.504c-.036-.672-.318-1.182-.846-1.53-.528-.348-1.284-.522-2.268-.522-.948 0-1.704.162-2.268.486-.564.324-.846.756-.846 1.296v.072h-1.71v-.072c0-.672.198-1.266.594-1.782.408-.528.978-.93 1.71-1.206.732-.288 1.578-.432 2.538-.432 1.524 0 2.706.336 3.546 1.008.84.672 1.26 1.614 1.26 2.826v2.772c0 .312.096.558.288.738.192.168.468.252.828.252h.792Zm-7.632.216c.972 0 1.806-.15 2.502-.45.696-.312 1.2-.75 1.512-1.314v-.954l-4.428.468c-.624.06-1.092.186-1.404.378-.3.192-.45.456-.45.792 0 .72.756 1.08 2.268 1.08Zm17.475-3.222c.492.204.87.474 1.134.81.276.324.414.69.414 1.098v.126c0 .888-.426 1.566-1.278 2.034-.852.456-2.1.684-3.744.684-3.552 0-5.328-1.236-5.328-3.708v-.126h1.71v.126c0 .744.294 1.296.882 1.656.6.348 1.524.522 2.772.522 2.136 0 3.204-.42 3.204-1.26V87.3c0-.684-.642-1.026-1.926-1.026h-2.988v-1.512h2.79c1.26 0 1.89-.354 1.89-1.062v-.126c0-.384-.27-.672-.81-.864-.528-.204-1.314-.306-2.358-.306-1.2 0-2.076.174-2.628.522-.552.348-.828.906-.828 1.674v.126h-1.71V84.6c0-1.224.444-2.148 1.332-2.772.888-.636 2.196-.954 3.924-.954 1.56 0 2.754.234 3.582.702.84.456 1.26 1.11 1.26 1.962v.126c0 .372-.114.714-.342 1.026-.228.3-.546.558-.954.774Zm8.74 4.752c-1.092 0-2.04-.18-2.844-.54-.804-.372-1.422-.894-1.854-1.566-.432-.684-.648-1.482-.648-2.394v-.306c0-.924.216-1.728.648-2.412.432-.684 1.05-1.206 1.854-1.566.804-.372 1.752-.558 2.844-.558 1.08 0 2.016.186 2.808.558.804.36 1.416.882 1.836 1.566.432.684.648 1.488.648 2.412v.306c0 .912-.216 1.71-.648 2.394-.42.672-1.032 1.194-1.836 1.566-.792.36-1.728.54-2.808.54Zm-.018-1.584c1.104 0 1.968-.258 2.592-.774.624-.516.936-1.23.936-2.142v-.306c0-.924-.312-1.644-.936-2.16-.624-.528-1.488-.792-2.592-.792-1.128 0-2.004.258-2.628.774-.612.516-.918 1.242-.918 2.178v.306c0 .912.312 1.626.936 2.142.636.516 1.506.774 2.61.774Zm16.408-3.15c.493.156.865.396 1.117.72.263.312.395.696.395 1.152v.18c0 .78-.305 1.386-.917 1.818-.6.432-1.453.648-2.556.648h-6.769v-8.91h6.534c1.105 0 1.957.21 2.556.63.612.408.919.996.919 1.764v.18c0 .828-.427 1.434-1.279 1.818Zm-7.001-3.06v2.412h4.733c.565 0 .996-.096 1.297-.288a.975.975 0 0 0 .467-.864v-.18a.869.869 0 0 0-.45-.792c-.3-.192-.737-.288-1.314-.288h-4.733Zm6.731 4.896c0-.36-.15-.636-.45-.828-.3-.192-.731-.288-1.296-.288h-4.986v2.448h4.986c.564 0 .996-.096 1.296-.288.3-.204.45-.492.45-.864v-.18Zm15.588 1.152V90h-1.188c-.588 0-1.08-.114-1.476-.342a1.827 1.827 0 0 1-.828-.972c-.48.516-1.056.9-1.728 1.152-.672.252-1.464.378-2.376.378-1.284 0-2.274-.222-2.97-.666-.696-.456-1.044-1.104-1.044-1.944 0-.72.27-1.296.81-1.728.54-.432 1.332-.702 2.376-.81l4.806-.504c-.036-.672-.318-1.182-.846-1.53-.528-.348-1.284-.522-2.268-.522-.948 0-1.704.162-2.268.486-.564.324-.846.756-.846 1.296v.072h-1.71v-.072c0-.672.198-1.266.594-1.782.408-.528.978-.93 1.71-1.206.732-.288 1.578-.432 2.538-.432 1.524 0 2.706.336 3.546 1.008.84.672 1.26 1.614 1.26 2.826v2.772c0 .312.096.558.288.738.192.168.468.252.828.252h.792Zm-7.632.216c.972 0 1.806-.15 2.502-.45.696-.312 1.2-.75 1.512-1.314v-.954l-4.428.468c-.624.06-1.092.186-1.404.378-.3.192-.45.456-.45.792 0 .72.756 1.08 2.268 1.08Zm19.059 1.296h-1.728v-2.916h-2.664L92.693 90H90.46v-.216l3.312-2.718c-1.068-.048-1.896-.318-2.484-.81-.588-.504-.882-1.188-.882-2.052v-.198c0-.924.318-1.638.954-2.142.648-.516 1.548-.774 2.7-.774h6.588v8.892Zm-1.728-4.392v-2.988h-4.734c-1.332 0-1.998.468-1.998 1.404v.198c0 .924.666 1.386 1.998 1.386h4.734Z"
                fill="#fff"
            />
        </g>
        <g clipPath="url(#block-ego_svg__d)">
            <rect x={172} y={4} width={168} height={96} rx={2} fill="#6B360D" />
            <path
                opacity={0.75}
                d="M194.132 15.149v-1.02h5.616v1.02h-2.244V22h-1.116V15.15h-2.256Zm9.814 3.816c.32.12.564.296.732.527.176.232.264.505.264.816v.169c0 .48-.176.855-.528 1.128-.352.264-.872.395-1.56.395h-2.988V16.05h2.844c.696 0 1.216.131 1.56.396.344.256.516.628.516 1.116v.155c0 .296-.072.552-.216.768a1.367 1.367 0 0 1-.624.48Zm-3-2.04v1.643h1.836c.288 0 .512-.068.672-.204a.707.707 0 0 0 .252-.564v-.131a.64.64 0 0 0-.252-.54c-.16-.137-.388-.205-.684-.205h-1.824Zm2.916 3.276c0-.248-.084-.436-.252-.564-.168-.137-.404-.204-.708-.204h-1.956v1.692h1.968c.288 0 .516-.069.684-.204a.706.706 0 0 0 .264-.576V20.2Zm4.695 1.944c-.76 0-1.368-.22-1.824-.66-.456-.44-.684-1.024-.684-1.752v-1.405c0-.735.228-1.323.684-1.764.456-.44 1.064-.66 1.824-.66.768 0 1.38.22 1.836.66.464.44.696 1.029.696 1.764v1.405c0 .727-.232 1.311-.696 1.752-.456.44-1.068.66-1.836.66Zm.012-1.02c.44 0 .788-.128 1.044-.384.264-.256.396-.6.396-1.032v-1.345c0-.448-.128-.8-.384-1.056s-.608-.384-1.056-.384c-.44 0-.792.128-1.056.384-.256.256-.384.608-.384 1.056v1.345c0 .44.128.788.384 1.044.264.247.616.372 1.056.372Zm6.607-5.22c.696 0 1.252.216 1.668.647.416.425.624.992.624 1.704v1.537c0 .712-.208 1.284-.624 1.716-.416.424-.972.636-1.668.636-.664 0-1.208-.2-1.632-.6v2.495h-1.08V16.05h.972l.048.503c.432-.431.996-.647 1.692-.647Zm1.2 2.4c0-.424-.128-.76-.384-1.008-.248-.248-.588-.373-1.02-.373-.312 0-.596.073-.852.216-.248.136-.44.328-.576.576v2.628c.136.24.328.432.576.576.248.136.532.204.852.204.432 0 .772-.123 1.02-.371.256-.248.384-.584.384-1.009v-1.44Zm7.035-2.4c.736 0 1.328.223 1.776.671.448.44.672 1.024.672 1.752v1.405c0 .727-.224 1.311-.672 1.752-.448.44-1.04.66-1.776.66-.744 0-1.34-.22-1.788-.66-.448-.44-.672-1.024-.672-1.752v-.216h-1.032V22h-1.08V16.05h1.08v2.471h1.032v-.192c0-.735.224-1.323.672-1.764.448-.44 1.044-.66 1.788-.66Zm1.356 2.46c0-.448-.124-.8-.372-1.056-.24-.257-.568-.385-.984-.385-.424 0-.76.128-1.008.384s-.372.608-.372 1.056v1.345c0 .431.124.776.372 1.032s.584.384 1.008.384c.416 0 .744-.128.984-.384.248-.256.372-.6.372-1.032v-1.345Z"
                fill="#fff"
            />
            <g opacity={0.75} fill="#fff">
                <path d="M190 16h-2v6h2zM186 18h-2v4h2zM182 20h-2v2h2z" />
            </g>
            <path
                d="M180.216 79.794v-1.602h12.006v1.603h-5.112V90h-1.782V79.793h-5.112Zm21.065 5.689c.492.155.864.395 1.116.72.264.311.396.695.396 1.151v.18c0 .78-.306 1.386-.918 1.819-.6.431-1.452.648-2.556.648h-6.768v-8.91h6.534c1.104 0 1.956.21 2.556.63.612.407.918.995.918 1.763v.18c0 .829-.426 1.434-1.278 1.819Zm-7.002-3.06v2.412h4.734c.564 0 .996-.096 1.296-.288a.975.975 0 0 0 .468-.864v-.18a.869.869 0 0 0-.45-.793c-.3-.191-.738-.287-1.314-.287h-4.734Zm6.732 4.895c0-.36-.15-.635-.45-.828-.3-.191-.732-.287-1.296-.287h-4.986v2.447h4.986c.564 0 .996-.096 1.296-.288.3-.203.45-.491.45-.863v-.18Zm8.982 2.898c-1.092 0-2.04-.18-2.844-.54-.804-.371-1.422-.894-1.854-1.566-.432-.683-.648-1.481-.648-2.394v-.305c0-.924.216-1.728.648-2.412.432-.684 1.05-1.206 1.854-1.566.804-.373 1.752-.559 2.844-.559 1.08 0 2.016.187 2.808.559.804.36 1.416.881 1.836 1.566.432.684.648 1.488.648 2.412v.305c0 .913-.216 1.71-.648 2.395-.42.671-1.032 1.194-1.836 1.566-.792.36-1.728.54-2.808.54Zm-.018-1.584c1.104 0 1.968-.258 2.592-.773.624-.516.936-1.23.936-2.142v-.306c0-.924-.312-1.645-.936-2.16-.624-.529-1.488-.793-2.592-.793-1.128 0-2.004.258-2.628.775-.612.516-.918 1.242-.918 2.177v.306c0 .913.312 1.627.936 2.143.636.516 1.506.773 2.61.773Zm12.772-7.758c1.068 0 2.004.187 2.808.559.804.371 1.422.9 1.854 1.583.432.672.648 1.465.648 2.376v.288c0 .912-.216 1.71-.648 2.394-.432.684-1.05 1.213-1.854 1.585-.804.371-1.74.557-2.808.557-.66 0-1.278-.101-1.854-.305a4.52 4.52 0 0 1-1.512-.883v4.032h-1.728V81.09h1.602l.072 1.026c.444-.395.96-.701 1.548-.918a5.386 5.386 0 0 1 1.872-.323Zm3.528 4.519c0-.912-.318-1.627-.954-2.142-.624-.529-1.488-.793-2.592-.793-.708 0-1.362.127-1.962.379-.588.251-1.05.593-1.386 1.025v3.349c.336.431.798.78 1.386 1.043.6.252 1.254.378 1.962.378 1.104 0 1.968-.264 2.592-.791.636-.528.954-1.248.954-2.16v-.288Zm12.738-4.302V90h-1.728v-3.079c-1.26.216-2.472.325-3.636.325-1.404 0-2.466-.288-3.186-.865-.708-.576-1.062-1.428-1.062-2.556v-2.735h1.728v2.574c0 1.367.9 2.051 2.7 2.051 1.008 0 2.16-.107 3.456-.323V81.09h1.728Zm12.758 5.022h-8.586c.06.78.396 1.397 1.008 1.853.612.445 1.428.666 2.448.666.948 0 1.716-.156 2.304-.468.6-.323.924-.75.972-1.278h1.854c-.096 1.044-.6 1.86-1.512 2.449-.9.588-2.106.882-3.618.882-1.068 0-1.998-.18-2.79-.54-.792-.373-1.404-.895-1.836-1.567-.42-.671-.63-1.457-.63-2.358v-.377c0-.912.21-1.704.63-2.376.432-.684 1.044-1.206 1.836-1.566.792-.373 1.722-.559 2.79-.559 1.596 0 2.85.397 3.762 1.189.912.78 1.368 1.86 1.368 3.24v.81Zm-5.13-3.654c-.96 0-1.74.197-2.34.593a2.39 2.39 0 0 0-1.08 1.62h6.714c-.108-.695-.45-1.236-1.026-1.62-.576-.396-1.332-.594-2.268-.594Zm12.13 7.757c-1.068 0-2.004-.18-2.808-.54-.804-.371-1.422-.894-1.854-1.566-.432-.683-.648-1.475-.648-2.376v-.323c0-.924.216-1.728.648-2.412.432-.684 1.044-1.206 1.836-1.566.804-.373 1.746-.559 2.826-.559.972 0 1.848.169 2.628.505.78.323 1.386.78 1.818 1.367a3.13 3.13 0 0 1 .666 1.963v.072h-1.782v-.073a1.72 1.72 0 0 0-.432-1.151c-.276-.349-.672-.618-1.188-.81-.504-.192-1.074-.288-1.71-.288-1.104 0-1.968.263-2.592.791-.624.516-.936 1.243-.936 2.178v.288c0 .913.312 1.627.936 2.143.624.516 1.488.773 2.592.773.648 0 1.224-.096 1.728-.288.504-.191.894-.456 1.17-.791a1.72 1.72 0 0 0 .432-1.153v-.072h1.782v.072c0 .744-.216 1.404-.648 1.98-.432.577-1.038 1.026-1.818 1.35-.768.325-1.65.486-2.646.486Zm17.675-.467V90h-1.962l-3.924-3.745h-2.628v3.745h-1.728v-8.91h1.728v3.654h2.574l3.708-3.654h1.998v.252l-4.122 4.121 4.356 4.285Zm12.856-1.278V90h-1.188c-.588 0-1.08-.115-1.476-.343a1.827 1.827 0 0 1-.828-.972c-.48.516-1.056.9-1.728 1.152-.672.253-1.464.379-2.376.379-1.284 0-2.274-.222-2.97-.666-.696-.457-1.044-1.105-1.044-1.945 0-.72.27-1.295.81-1.727.54-.433 1.332-.703 2.376-.81l4.806-.505c-.036-.671-.318-1.181-.846-1.53-.528-.348-1.284-.522-2.268-.522-.948 0-1.704.162-2.268.487-.564.324-.846.755-.846 1.296v.072h-1.71v-.073c0-.671.198-1.266.594-1.781.408-.529.978-.93 1.71-1.207.732-.287 1.578-.431 2.538-.431 1.524 0 2.706.335 3.546 1.007.84.672 1.26 1.614 1.26 2.826v2.773c0 .312.096.558.288.738.192.168.468.252.828.252h.792Zm-7.632.215c.972 0 1.806-.15 2.502-.45.696-.312 1.2-.75 1.512-1.314v-.953l-4.428.468c-.624.06-1.092.186-1.404.377-.3.193-.45.457-.45.793 0 .72.756 1.08 2.268 1.08Zm19.059 1.296h-1.728v-2.915h-2.664L292.773 90h-2.232v-.217l3.312-2.718c-1.068-.047-1.896-.317-2.484-.81-.588-.504-.882-1.188-.882-2.052v-.197c0-.925.318-1.639.954-2.142.648-.516 1.548-.774 2.7-.774h6.588v8.892Zm-1.728-4.391v-2.988h-4.734c-1.332 0-1.998.468-1.998 1.404v.197c0 .925.666 1.387 1.998 1.387h4.734Z"
                fill="#fff"
            />
            <path
                opacity={0.5}
                d="M328.59 89.22V90h-5.016v-.767l2.172-2.136c.48-.472.844-.856 1.092-1.152.248-.304.42-.58.516-.828.104-.249.156-.513.156-.793v-.12c0-.447-.14-.795-.42-1.043-.272-.249-.656-.373-1.152-.373-.496 0-.884.133-1.164.397-.272.255-.408.615-.408 1.08v.251h-.852v-.264c0-.703.216-1.255.648-1.655.432-.4 1.024-.6 1.776-.6.76 0 1.352.195 1.776.588.432.392.648.931.648 1.62v.12c0 .504-.14.992-.42 1.463-.28.465-.788 1.06-1.524 1.788l-1.668 1.645h3.84Z"
                fill="#fff"
            />
            <path
                d="M329.07 14.207h-4.999a.5.5 0 0 0 0 1h3.793l-5.511 5.51a.5.5 0 0 0 .708.708l5.51-5.51v3.793a.5.5 0 0 0 1 0v-5.002a.501.501 0 0 0-.493-.498"
                fill="#fff"
                opacity={0.75}
            />
        </g>
        <defs>
            <clipPath id="block-ego_svg__c">
                <path fill="#fff" transform="translate(4 4)" d="M0 0h164v96H0z" />
            </clipPath>
            <clipPath id="block-ego_svg__d">
                <path fill="#fff" transform="translate(172 4)" d="M0 0h168v96H0z" />
            </clipPath>
            <linearGradient
                id="block-ego_svg__a"
                x1={172}
                y1={0}
                x2={172}
                y2={48}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
        </defs>
    </svg>
);

export default SvgBlockEgo;