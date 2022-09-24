import * as React from 'react';
import { SVGProps } from 'react';

const SvgVitalRing = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 344 167"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g opacity={0.25}>
            <mask
                id="vital-ring_svg__b"
                style={{
                    maskType: 'alpha',
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={143}
                width={344}
                height={24}
            >
                <path
                    d="M0 165a2 2 0 0 0 2 2h340a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v20Z"
                    fill="url(#vital-ring_svg__a)"
                />
            </mask>
            <g mask="url(#vital-ring_svg__b)">
                <path
                    d="M2 166.5h340a1.5 1.5 0 0 0 1.5-1.5v-20a1.5 1.5 0 0 0-1.5-1.5H2A1.5 1.5 0 0 0 .5 145v20a1.5 1.5 0 0 0 1.5 1.5Z"
                    stroke="#6B360D"
                />
            </g>
        </g>
        <g clipPath="url(#vital-ring_svg__c)">
            <rect
                opacity={0.75}
                width={128}
                height={60}
                rx={2}
                transform="matrix(-1 0 0 1 132 103)"
                fill="#6B360D"
            />
            <path
                opacity={0.75}
                d="M31.868 113.128v1.02h-3.9v2.34h1.956c.768 0 1.368.196 1.8.588.44.384.66.912.66 1.584v.18c0 .664-.22 1.192-.66 1.584-.44.384-1.04.576-1.8.576H26.84v-7.872h5.028ZM29.9 119.98c.448 0 .788-.096 1.02-.288.232-.2.348-.488.348-.864v-.18c0-.368-.116-.652-.348-.852-.232-.2-.572-.3-1.02-.3h-1.932v2.484H29.9Zm4.717-1.56v.288c0 .448.128.8.384 1.056.264.248.624.372 1.08.372.384 0 .704-.096.96-.288.264-.192.4-.428.408-.708h1.08a1.956 1.956 0 0 1-.72 1.452c-.448.368-1.024.552-1.728.552-.768 0-1.384-.216-1.848-.648-.464-.44-.696-1.024-.696-1.752v-1.428c0-.48.104-.9.312-1.26.208-.368.504-.652.888-.852.384-.2.824-.3 1.32-.3.752 0 1.352.22 1.8.66.448.44.672 1.02.672 1.74v1.116h-3.912Zm1.44-2.508c-.44 0-.792.132-1.056.396-.256.256-.384.604-.384 1.044v.168h2.832v-.168c0-.44-.128-.788-.384-1.044-.248-.264-.584-.396-1.008-.396Zm6.176 5.232c-.504 0-.948-.1-1.332-.3-.384-.2-.68-.48-.888-.84a2.54 2.54 0 0 1-.312-1.272v-1.416c0-.48.104-.9.312-1.26.208-.368.504-.652.888-.852.384-.2.828-.3 1.332-.3.472 0 .892.1 1.26.3.376.192.668.46.876.804.208.344.312.736.312 1.176v.132h-1.08v-.132c0-.368-.128-.668-.384-.9-.256-.24-.584-.36-.984-.36-.448 0-.8.128-1.056.384-.256.248-.384.592-.384 1.032v1.368c0 .44.128.788.384 1.044.256.248.608.372 1.056.372.4 0 .728-.112.984-.336.256-.232.384-.528.384-.888v-.132h1.08v.132c0 .672-.224 1.216-.672 1.632-.448.408-1.04.612-1.776.612Zm4.834-6.096v4.236l2.807-4.236h.996V121h-1.055v-4.236L47.019 121h-.996v-5.952h1.043Zm4.436.984v-.984h5.052v.984h-1.98V121h-1.092v-4.968h-1.98Z"
                fill="#fff"
            />
            <g opacity={0.75} fill="#fff">
                <path d="M114.5 113.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM117.5 113.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM121 113a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5Z" />
            </g>
            <path
                opacity={0.75}
                d="M120.357 145.128v.78c-1.632 2.6-2.448 4.868-2.448 6.804V153h-.864v-.288c0-.928.208-1.984.624-3.168.416-1.192 1.004-2.404 1.764-3.636h-4.02v-.78h4.944Z"
                fill="#fff"
            />
            <path
                d="M24.204 147.006c.636.24 1.122.57 1.458.99.336.42.504.906.504 1.458v.216c0 1.128-.546 2.004-1.638 2.628-1.08.612-2.622.918-4.626.918-2.172 0-3.828-.408-4.968-1.224-1.128-.828-1.692-2.034-1.692-3.618v-.162h1.818v.162c0 1.092.39 1.896 1.17 2.412.792.504 2.028.756 3.708.756 1.5 0 2.61-.156 3.33-.468.72-.312 1.08-.798 1.08-1.458v-.198c0-.552-.27-.942-.81-1.17-.54-.24-1.458-.36-2.754-.36h-3.15v-1.602h3.024c1.2 0 2.064-.126 2.592-.378.54-.252.81-.66.81-1.224v-.198c0-1.224-1.422-1.836-4.266-1.836-1.584 0-2.76.264-3.528.792-.768.528-1.152 1.326-1.152 2.394v.144h-1.8v-.144c0-1.572.558-2.772 1.674-3.6 1.128-.84 2.742-1.26 4.842-1.26 1.92 0 3.408.3 4.464.9 1.056.6 1.584 1.44 1.584 2.52v.234c0 1.068-.558 1.86-1.674 2.376Zm15.588 4.464V153h-1.188c-.588 0-1.08-.114-1.476-.342a1.827 1.827 0 0 1-.828-.972c-.48.516-1.056.9-1.728 1.152-.672.252-1.464.378-2.376.378-1.284 0-2.274-.222-2.97-.666-.696-.456-1.044-1.104-1.044-1.944 0-.72.27-1.296.81-1.728.54-.432 1.332-.702 2.376-.81l4.806-.504c-.036-.672-.318-1.182-.846-1.53-.528-.348-1.284-.522-2.268-.522-.948 0-1.704.162-2.268.486-.564.324-.846.756-.846 1.296v.072h-1.71v-.072c0-.672.198-1.266.594-1.782.408-.528.978-.93 1.71-1.206.732-.288 1.578-.432 2.538-.432 1.524 0 2.706.336 3.546 1.008.84.672 1.26 1.614 1.26 2.826v2.772c0 .312.096.558.288.738.192.168.468.252.828.252h.792Zm-7.632.216c.972 0 1.806-.15 2.502-.45.696-.312 1.2-.75 1.512-1.314v-.954l-4.428.468c-.624.06-1.092.186-1.404.378-.3.192-.45.456-.45.792 0 .72.756 1.08 2.268 1.08Zm26.673-.216v3.834h-1.728V153H41.409v-8.91h1.728v7.38h5.238v-7.38h1.728v7.38h5.22v-7.38h1.728v7.38h1.782Zm3.585-7.38v6.804l6.534-6.804h1.584V153H68.88v-6.804L62.346 153h-1.584v-8.91h1.656Zm9.335 1.548v-1.548H82.23v1.548h-4.338V153h-1.728v-7.362h-4.41Zm23.164 5.832V153H93.73c-.588 0-1.08-.114-1.476-.342a1.827 1.827 0 0 1-.828-.972c-.48.516-1.056.9-1.728 1.152-.672.252-1.464.378-2.376.378-1.284 0-2.274-.222-2.97-.666-.696-.456-1.044-1.104-1.044-1.944 0-.72.27-1.296.81-1.728.54-.432 1.332-.702 2.376-.81l4.806-.504c-.036-.672-.318-1.182-.846-1.53-.528-.348-1.284-.522-2.268-.522-.948 0-1.704.162-2.268.486-.564.324-.846.756-.846 1.296v.072h-1.71v-.072c0-.672.198-1.266.594-1.782.408-.528.978-.93 1.71-1.206.732-.288 1.578-.432 2.538-.432 1.524 0 2.706.336 3.546 1.008.84.672 1.26 1.614 1.26 2.826v2.772c0 .312.096.558.288.738.192.168.468.252.828.252h.792Zm-7.632.216c.972 0 1.806-.15 2.502-.45.696-.312 1.2-.75 1.512-1.314v-.954l-4.428.468c-.624.06-1.092.186-1.404.378-.3.192-.45.456-.45.792 0 .72.756 1.08 2.268 1.08Z"
                fill="#fff"
            />
            <g opacity={0.75} fill="#fff">
                <path d="M22 115h-2v6h2zM18 117h-2v4h2zM14 119h-2v2h2z" />
            </g>
        </g>
        <g clipPath="url(#vital-ring_svg__d)">
            <rect
                opacity={0.75}
                width={204}
                height={60}
                rx={2}
                transform="matrix(-1 0 0 1 340 103)"
                fill="#6B360D"
            />
            <path
                opacity={0.75}
                d="M171.392 119.98v2.652h-1.116V121h-4.944v1.632h-1.116v-2.652h.732c.208-.36.364-.776.468-1.248.104-.48.16-.984.168-1.512l.06-4.092h4.848v6.852h.9Zm-4.752-2.676c-.024 1.104-.212 1.996-.564 2.676h3.3v-5.832H166.7l-.06 3.156Zm6.622 1.116v.288c0 .448.128.8.384 1.056.264.248.624.372 1.08.372.384 0 .704-.096.96-.288.264-.192.4-.428.408-.708h1.08a1.956 1.956 0 0 1-.72 1.452c-.448.368-1.024.552-1.728.552-.768 0-1.384-.216-1.848-.648-.464-.44-.696-1.024-.696-1.752v-1.428c0-.48.104-.9.312-1.26.208-.368.504-.652.888-.852.384-.2.824-.3 1.32-.3.752 0 1.352.22 1.8.66.448.44.672 1.02.672 1.74v1.116h-3.912Zm1.44-2.508c-.44 0-.792.132-1.056.396-.256.256-.384.604-.384 1.044v.168h2.832v-.168c0-.44-.128-.788-.384-1.044-.248-.264-.584-.396-1.008-.396ZM183.34 121h-1.08v-4.968h-2.292l-.06 2.82c-.016.736-.168 1.28-.456 1.632-.28.344-.712.516-1.296.516h-.324v-.984h.192c.296 0 .508-.1.636-.3.136-.2.212-.524.228-.972l.084-3.696h4.368V121Zm7.06-.984V121h-.636c-.288 0-.54-.048-.756-.144a1.122 1.122 0 0 1-.48-.444c-.44.488-1.064.732-1.872.732-.64 0-1.148-.152-1.524-.456-.376-.304-.564-.724-.564-1.26 0-.488.16-.872.48-1.152.32-.28.812-.464 1.476-.552l1.788-.24v-.384c0-.384-.112-.676-.336-.876-.216-.2-.536-.3-.96-.3-.416 0-.74.1-.972.3-.224.192-.336.464-.336.816v.084h-1.092v-.084c0-.656.216-1.176.648-1.56.44-.384 1.036-.576 1.788-.576s1.332.196 1.74.588c.408.384.612.928.612 1.632v2.292c0 .4.192.6.576.6h.42Zm-3.672.192c.352 0 .664-.076.936-.228.28-.152.496-.36.648-.624v-1.02l-1.608.24c-.704.112-1.056.392-1.056.84 0 .248.096.444.288.588.2.136.464.204.792.204Zm9.097-5.304c.736 0 1.328.224 1.776.672.448.44.672 1.024.672 1.752v1.404c0 .728-.224 1.312-.672 1.752-.448.44-1.04.66-1.776.66-.744 0-1.34-.22-1.788-.66-.448-.44-.672-1.024-.672-1.752v-.216h-1.032V121h-1.08v-5.952h1.08v2.472h1.032v-.192c0-.736.224-1.324.672-1.764.448-.44 1.044-.66 1.788-.66Zm1.356 2.46c0-.448-.124-.8-.372-1.056-.24-.256-.568-.384-.984-.384-.424 0-.76.128-1.008.384s-.372.608-.372 1.056v1.344c0 .432.124.776.372 1.032s.584.384 1.008.384c.416 0 .744-.128.984-.384.248-.256.372-.6.372-1.032v-1.344Z"
                fill="#fff"
            />
            <circle cx={326} cy={117} r={2} fill="#fff" opacity={0.75} />
            <path
                opacity={0.75}
                d="M327.476 148.968c.392.168.696.404.912.708.224.296.336.64.336 1.032v.288c0 .424-.112.8-.336 1.128-.224.32-.544.568-.96.744-.408.176-.884.264-1.428.264-.824 0-1.484-.192-1.98-.576-.496-.392-.744-.912-.744-1.56v-.288c0-.392.108-.736.324-1.032.216-.304.52-.54.912-.708a1.903 1.903 0 0 1-.792-.684 1.81 1.81 0 0 1-.276-.996v-.228c0-.64.228-1.144.684-1.512.456-.368 1.08-.552 1.872-.552.784 0 1.404.188 1.86.564.456.368.684.868.684 1.5v.228c0 .376-.092.708-.276.996a1.903 1.903 0 0 1-.792.684Zm-3.18-1.704c0 .44.144.776.432 1.008.288.224.712.336 1.272.336s.984-.112 1.272-.336c.288-.232.432-.568.432-1.008v-.156c0-.432-.148-.76-.444-.984-.288-.232-.708-.348-1.26-.348-.56 0-.984.116-1.272.348-.288.224-.432.552-.432.984v.156Zm3.564 3.48c0-.424-.164-.752-.492-.984-.328-.24-.784-.36-1.368-.36-.584 0-1.044.12-1.38.36-.328.232-.492.56-.492.984v.264c0 .416.164.744.492.984.328.232.788.348 1.38.348.584 0 1.04-.116 1.368-.348.328-.232.492-.56.492-.984v-.264Z"
                fill="#fff"
            />
            <path
                d="M156.798 142.272c1.92 0 3.396.414 4.428 1.242 1.032.816 1.548 1.992 1.548 3.528v.126c0 1.524-.516 2.694-1.548 3.51-1.032.816-2.508 1.224-4.428 1.224h-2.034v1.314h-1.782v-1.314h-2.052c-1.932 0-3.414-.402-4.446-1.206-1.02-.816-1.53-1.992-1.53-3.528v-.126c0-1.536.51-2.712 1.53-3.528 1.032-.828 2.514-1.242 4.446-1.242h2.052v-1.296h1.782v1.296h2.034Zm-10.026 4.932c0 1.056.336 1.836 1.008 2.34.672.492 1.722.738 3.15.738h2.052v-6.39h-2.052c-1.428 0-2.478.252-3.15.756-.672.504-1.008 1.296-1.008 2.376v.18Zm14.184-.18c0-1.068-.342-1.854-1.026-2.358-.672-.516-1.716-.774-3.132-.774h-2.034v6.39h2.034c1.428 0 2.478-.246 3.15-.738.672-.504 1.008-1.284 1.008-2.34v-.18Zm8.959 6.192c-1.092 0-2.04-.18-2.844-.54-.804-.372-1.422-.894-1.854-1.566-.432-.684-.648-1.482-.648-2.394v-.306c0-.924.216-1.728.648-2.412.432-.684 1.05-1.206 1.854-1.566.804-.372 1.752-.558 2.844-.558 1.08 0 2.016.186 2.808.558.804.36 1.416.882 1.836 1.566.432.684.648 1.488.648 2.412v.306c0 .912-.216 1.71-.648 2.394-.42.672-1.032 1.194-1.836 1.566-.792.36-1.728.54-2.808.54Zm-.018-1.584c1.104 0 1.968-.258 2.592-.774.624-.516.936-1.23.936-2.142v-.306c0-.924-.312-1.644-.936-2.16-.624-.528-1.488-.792-2.592-.792-1.128 0-2.004.258-2.628.774-.612.516-.918 1.242-.918 2.178v.306c0 .912.312 1.626.936 2.142.636.516 1.506.774 2.61.774Zm9.406-7.542v3.672h6.408v-3.672h1.728V153h-1.728v-3.708h-6.408V153h-1.728v-8.91h1.728Zm15.854 9.126c-1.092 0-2.04-.18-2.844-.54-.804-.372-1.422-.894-1.854-1.566-.432-.684-.648-1.482-.648-2.394v-.306c0-.924.216-1.728.648-2.412.432-.684 1.05-1.206 1.854-1.566.804-.372 1.752-.558 2.844-.558 1.08 0 2.016.186 2.808.558.804.36 1.416.882 1.836 1.566.432.684.648 1.488.648 2.412v.306c0 .912-.216 1.71-.648 2.394-.42.672-1.032 1.194-1.836 1.566-.792.36-1.728.54-2.808.54Zm-.018-1.584c1.104 0 1.968-.258 2.592-.774.624-.516.936-1.23.936-2.142v-.306c0-.924-.312-1.644-.936-2.16-.624-.528-1.488-.792-2.592-.792-1.128 0-2.004.258-2.628.774-.612.516-.918 1.242-.918 2.178v.306c0 .912.312 1.626.936 2.142.636.516 1.506.774 2.61.774Zm16.408-3.15c.492.156.864.396 1.116.72.264.312.396.696.396 1.152v.18c0 .78-.306 1.386-.918 1.818-.6.432-1.452.648-2.556.648h-6.768v-8.91h6.534c1.104 0 1.956.21 2.556.63.612.408.918.996.918 1.764v.18c0 .828-.426 1.434-1.278 1.818Zm-7.002-3.06v2.412h4.734c.564 0 .996-.096 1.296-.288a.975.975 0 0 0 .468-.864v-.18a.869.869 0 0 0-.45-.792c-.3-.192-.738-.288-1.314-.288h-4.734Zm6.732 4.896c0-.36-.15-.636-.45-.828-.3-.192-.732-.288-1.296-.288h-4.986v2.448h4.986c.564 0 .996-.096 1.296-.288.3-.204.45-.492.45-.864v-.18Zm15.587 1.152V153h-1.188c-.588 0-1.08-.114-1.476-.342a1.827 1.827 0 0 1-.828-.972c-.48.516-1.056.9-1.728 1.152-.672.252-1.464.378-2.376.378-1.284 0-2.274-.222-2.97-.666-.696-.456-1.044-1.104-1.044-1.944 0-.72.27-1.296.81-1.728.54-.432 1.332-.702 2.376-.81l4.806-.504c-.036-.672-.318-1.182-.846-1.53-.528-.348-1.284-.522-2.268-.522-.948 0-1.704.162-2.268.486-.564.324-.846.756-.846 1.296v.072h-1.71v-.072c0-.672.198-1.266.594-1.782.408-.528.978-.93 1.71-1.206.732-.288 1.578-.432 2.538-.432 1.524 0 2.706.336 3.546 1.008.84.672 1.26 1.614 1.26 2.826v2.772c0 .312.096.558.288.738.192.168.468.252.828.252h.792Zm-7.632.216c.972 0 1.806-.15 2.502-.45.696-.312 1.2-.75 1.512-1.314v-.954l-4.428.468c-.624.06-1.092.186-1.404.378-.3.192-.45.456-.45.792 0 .72.756 1.08 2.268 1.08Zm19.059 1.296h-1.728v-2.916h-2.664L230.335 153h-2.232v-.216l3.312-2.718c-1.068-.048-1.896-.318-2.484-.81-.588-.504-.882-1.188-.882-2.052v-.198c0-.924.318-1.638.954-2.142.648-.516 1.548-.774 2.7-.774h6.588v8.892Zm-1.728-4.392v-2.988h-4.734c-1.332 0-1.998.468-1.998 1.404v.198c0 .924.666 1.386 1.998 1.386h4.734Z"
                fill="#fff"
            />
            <g opacity={0.75} fill="#fff">
                <path d="M159 113h-2v8h2zM155 115h-2v6h2zM151 117h-2v4h2zM147 119h-2v2h2z" />
            </g>
        </g>
        <g opacity={0.25}>
            <mask
                id="vital-ring_svg__f"
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
                    fill="url(#vital-ring_svg__e)"
                />
            </mask>
            <g mask="url(#vital-ring_svg__f)">
                <path
                    d="M2 .5h340a1.5 1.5 0 0 1 1.5 1.5v44a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 46V2A1.5 1.5 0 0 1 2 .5Z"
                    stroke="#6B360D"
                />
            </g>
        </g>
        <g clipPath="url(#vital-ring_svg__g)">
            <rect
                x={-0.5}
                y={0.5}
                width={175}
                height={95}
                rx={1.5}
                transform="matrix(-1 0 0 1 179 4)"
                fill="#fff"
                stroke="#6B360D"
            />
            <path
                opacity={0.05}
                d="M146 100 91.333 4H59l54.667 96H146Z"
                fill="#6B360D"
            />
            <path
                opacity={0.1}
                d="M109.333 4 164 100h-10L99.333 4h10Z"
                fill="#6B360D"
            />
            <path
                d="M23.052 83.952c.624.24 1.098.582 1.422 1.026.336.432.504.954.504 1.566v.198c0 .996-.384 1.788-1.152 2.376-.756.588-1.77.882-3.042.882h-7.128V78.192h6.75c1.32 0 2.346.264 3.078.792.744.516 1.116 1.248 1.116 2.196v.216c0 .564-.132 1.062-.396 1.494-.264.432-.648.786-1.152 1.062Zm-7.596-4.158v3.438h4.932c1.596 0 2.394-.54 2.394-1.62v-.216c0-.516-.204-.912-.612-1.188-.408-.276-.996-.414-1.764-.414h-4.95Zm7.704 6.696c0-1.092-.804-1.638-2.412-1.638h-5.292v3.546h5.292c.756 0 1.344-.15 1.764-.45.432-.312.648-.732.648-1.26v-.198Zm6.23-5.4v3.672H35.8V81.09h1.728V90h-1.728v-3.708H29.39V90h-1.728v-8.91h1.728Zm21.543 0v.252l-5.076 9.648c-.396.744-.858 1.272-1.386 1.584-.516.324-1.224.486-2.124.486h-1.8v-1.53h1.8c.504 0 .882-.078 1.134-.234.252-.144.492-.438.72-.882l.162-.288-4.644-8.784v-.252h1.836l3.78 7.344 3.762-7.344h1.836Zm3.928 0v7.38H60.1v-7.38h1.727v7.38h5.22v-7.38h1.728V90H53.133v-8.91h1.728Zm27.998 7.38V90H81.67c-.589 0-1.08-.114-1.477-.342a1.827 1.827 0 0 1-.828-.972c-.48.516-1.055.9-1.728 1.152-.672.252-1.464.378-2.376.378-1.284 0-2.273-.222-2.97-.666-.695-.456-1.043-1.104-1.043-1.944 0-.72.27-1.296.81-1.728.54-.432 1.332-.702 2.376-.81l4.805-.504c-.035-.672-.317-1.182-.846-1.53-.528-.348-1.284-.522-2.268-.522-.948 0-1.704.162-2.267.486-.564.324-.846.756-.846 1.296v.072h-1.71v-.072c0-.672.198-1.266.594-1.782.407-.528.977-.93 1.71-1.206.731-.288 1.578-.432 2.537-.432 1.524 0 2.706.336 3.546 1.008.84.672 1.26 1.614 1.26 2.826v2.772c0 .312.096.558.288.738.192.168.469.252.829.252h.792Zm-7.632.216c.971 0 1.805-.15 2.501-.45.697-.312 1.2-.75 1.513-1.314v-.954l-4.428.468c-.624.06-1.093.186-1.404.378-.3.192-.45.456-.45.792 0 .72.755 1.08 2.267 1.08Zm18.95-2.574h-8.586c.06.78.396 1.398 1.008 1.854.612.444 1.428.666 2.448.666.948 0 1.716-.156 2.304-.468.6-.324.924-.75.972-1.278h1.854c-.096 1.044-.6 1.86-1.512 2.448-.9.588-2.106.882-3.618.882-1.068 0-1.998-.18-2.79-.54-.792-.372-1.404-.894-1.836-1.566-.42-.672-.63-1.458-.63-2.358v-.378c0-.912.21-1.704.63-2.376.432-.684 1.044-1.206 1.836-1.566.792-.372 1.722-.558 2.79-.558 1.596 0 2.85.396 3.762 1.188.912.78 1.368 1.86 1.368 3.24v.81Zm-5.13-3.654c-.96 0-1.74.198-2.34.594a2.39 2.39 0 0 0-1.08 1.62h6.714c-.108-.696-.45-1.236-1.026-1.62-.576-.396-1.332-.594-2.268-.594Zm20.878-1.368V90h-1.656v-7.128l-.414.738-3.852 6.39h-1.53l-3.852-6.39-.413-.738V90h-1.656v-8.91h2.447l4.248 7.11 4.23-7.11h2.448Zm14.084 7.38V90h-1.188c-.588 0-1.08-.114-1.476-.342a1.827 1.827 0 0 1-.828-.972c-.48.516-1.056.9-1.728 1.152-.672.252-1.464.378-2.376.378-1.284 0-2.274-.222-2.97-.666-.696-.456-1.044-1.104-1.044-1.944 0-.72.27-1.296.81-1.728.54-.432 1.332-.702 2.376-.81l4.806-.504c-.036-.672-.318-1.182-.846-1.53-.528-.348-1.284-.522-2.268-.522-.948 0-1.704.162-2.268.486-.564.324-.846.756-.846 1.296v.072h-1.71v-.072c0-.672.198-1.266.594-1.782.408-.528.978-.93 1.71-1.206.732-.288 1.578-.432 2.538-.432 1.524 0 2.706.336 3.546 1.008.84.672 1.26 1.614 1.26 2.826v2.772c0 .312.096.558.288.738.192.168.468.252.828.252h.792Zm-7.632.216c.972 0 1.806-.15 2.502-.45.696-.312 1.2-.75 1.512-1.314v-.954l-4.428.468c-.624.06-1.092.186-1.404.378-.3.192-.45.456-.45.792 0 .72.756 1.08 2.268 1.08Zm19.059 1.296h-1.728v-2.916h-2.664L127.48 90h-2.232v-.216l3.312-2.718c-1.068-.048-1.896-.318-2.484-.81-.588-.504-.882-1.188-.882-2.052v-.198c0-.924.318-1.638.954-2.142.648-.516 1.548-.774 2.7-.774h6.588v8.892Zm-1.728-4.392v-2.988h-4.734c-1.332 0-1.998.468-1.998 1.404v.198c0 .924.666 1.386 1.998 1.386h4.734Z"
                fill="#6B360D"
            />
            <path
                d="M162.207 21.085V16.07a.5.5 0 0 1 1 0v3.793l5.51-5.51a.501.501 0 0 1 .708.707l-5.511 5.51h3.793a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.486ZM25.6 21.82V22h-1.188l-1.848-3.12L20.716 22h-1.2v-.18l2.304-3.78-2.28-3.732v-.18h1.188l1.836 3.072 1.824-3.072h1.188v.18l-2.268 3.732 2.292 3.78Zm2.976.324c-.76 0-1.367-.22-1.823-.66-.456-.44-.684-1.024-.684-1.752v-1.404c0-.736.228-1.324.684-1.764.456-.44 1.064-.66 1.823-.66.768 0 1.38.22 1.837.66.463.44.695 1.028.695 1.764v1.404c0 .728-.232 1.312-.695 1.752-.457.44-1.069.66-1.837.66Zm.012-1.02c.44 0 .788-.128 1.044-.384.264-.256.396-.6.396-1.032v-1.344c0-.448-.127-.8-.383-1.056s-.608-.384-1.056-.384c-.44 0-.792.128-1.056.384-.257.256-.385.608-.385 1.056v1.344c0 .44.128.788.384 1.044.265.248.616.372 1.056.372Zm8.319-5.076V22h-1.092v-2.04a7.482 7.482 0 0 1-1.5.168c-.688 0-1.232-.168-1.632-.504-.4-.344-.6-.808-.6-1.392v-2.184h1.08v2.064c0 .336.112.592.336.768.232.176.56.264.984.264.408 0 .852-.044 1.332-.132v-2.964h1.092Zm6.868 0v.168l-2.484 6.48c-.184.48-.42.824-.708 1.032-.28.208-.668.312-1.164.312h-.948v-.984h.852c.248 0 .44-.044.576-.132.144-.088.268-.272.372-.552l.108-.3-2.34-5.856v-.168h1.104l1.8 4.62 1.728-4.62h1.104ZM166.123 85.008c.768 0 1.38.204 1.836.612.464.408.696.952.696 1.632v.564c0 .704-.236 1.268-.708 1.692-.472.416-1.1.624-1.884.624-.792 0-1.42-.176-1.884-.528-.464-.36-.696-.852-.696-1.476v-.12h.852v.12c0 .376.152.672.456.888.304.216.716.324 1.236.324.544 0 .972-.132 1.284-.396.312-.272.468-.644.468-1.116v-.564c0-.448-.16-.8-.48-1.056-.312-.264-.736-.396-1.272-.396-.472 0-.86.108-1.164.324-.304.208-.468.484-.492.828h-.84l.252-4.836h4.56v.804h-3.78l-.132 2.64c.424-.376.988-.564 1.692-.564Z"
                fill="#6B360D"
                opacity={0.75}
            />
            <g opacity={0.75} fill="#6B360D">
                <path opacity={0.25} d="M13 14h2v8h-2z" />
                <path d="M13 20h2v2h-2z" />
            </g>
        </g>
        <rect
            opacity={0.75}
            x={-0.5}
            y={0.5}
            width={155}
            height={95}
            rx={1.5}
            transform="matrix(-1 0 0 1 339 4)"
            fill="#fff"
            stroke="#6B360D"
        />
        <path
            opacity={0.75}
            d="M204.968 14.128v3.432h3.216v-3.432h1.128V22h-1.128v-3.42h-3.216V22h-1.128v-7.872h1.128Zm8.684 1.776c.696 0 1.252.216 1.668.648.416.424.624.992.624 1.704v1.536c0 .712-.208 1.284-.624 1.716-.416.424-.972.636-1.668.636-.664 0-1.208-.2-1.632-.6v2.496h-1.08v-7.992h.972l.048.504c.432-.432.996-.648 1.692-.648Zm1.2 2.4c0-.424-.128-.76-.384-1.008-.248-.248-.588-.372-1.02-.372-.312 0-.596.072-.852.216-.248.136-.44.328-.576.576v2.628c.136.24.328.432.576.576.248.136.532.204.852.204.432 0 .772-.124 1.02-.372.256-.248.384-.584.384-1.008v-1.44Zm8.067 2.712V22h-.636c-.288 0-.54-.048-.756-.144a1.122 1.122 0 0 1-.48-.444c-.44.488-1.064.732-1.872.732-.64 0-1.148-.152-1.524-.456-.376-.304-.564-.724-.564-1.26 0-.488.16-.872.48-1.152.32-.28.812-.464 1.476-.552l1.788-.24V18.1c0-.384-.112-.676-.336-.876-.216-.2-.536-.3-.96-.3-.416 0-.74.1-.972.3-.224.192-.336.464-.336.816v.084h-1.092v-.084c0-.656.216-1.176.648-1.56.44-.384 1.036-.576 1.788-.576s1.332.196 1.74.588c.408.384.612.928.612 1.632v2.292c0 .4.192.6.576.6h.42Zm-3.672.192c.352 0 .664-.076.936-.228.28-.152.496-.36.648-.624v-1.02l-1.608.24c-.704.112-1.056.392-1.056.84 0 .248.096.444.288.588.2.136.464.204.792.204Zm8.605-2.244c.32.12.564.296.732.528.176.232.264.504.264.816v.168c0 .48-.176.856-.528 1.128-.352.264-.872.396-1.56.396h-2.988v-5.952h2.844c.696 0 1.216.132 1.56.396.344.256.516.628.516 1.116v.156c0 .296-.072.552-.216.768a1.367 1.367 0 0 1-.624.48Zm-3-2.04v1.644h1.836c.288 0 .512-.068.672-.204a.707.707 0 0 0 .252-.564v-.132a.64.64 0 0 0-.252-.54c-.16-.136-.388-.204-.684-.204h-1.824Zm2.916 3.276c0-.248-.084-.436-.252-.564-.168-.136-.404-.204-.708-.204h-1.956v1.692h1.968c.288 0 .516-.068.684-.204a.706.706 0 0 0 .264-.576V20.2Zm3.435-4.152v4.236l2.808-4.236h.996V22h-1.056v-4.236L231.155 22h-.996v-5.952h1.044Zm4.437.984v-.984h5.052v.984h-1.98V22h-1.092v-4.968h-1.98Zm8.121 5.112c-.504 0-.948-.1-1.332-.3-.384-.2-.68-.48-.888-.84a2.54 2.54 0 0 1-.312-1.272v-1.416c0-.48.104-.9.312-1.26.208-.368.504-.652.888-.852.384-.2.828-.3 1.332-.3.472 0 .892.1 1.26.3.376.192.668.46.876.804.208.344.312.736.312 1.176v.132h-1.08v-.132c0-.368-.128-.668-.384-.9-.256-.24-.584-.36-.984-.36-.448 0-.8.128-1.056.384-.256.248-.384.592-.384 1.032v1.368c0 .44.128.788.384 1.044.256.248.608.372 1.056.372.4 0 .728-.112.984-.336.256-.232.384-.528.384-.888v-.132h1.08v.132c0 .672-.224 1.216-.672 1.632-.448.408-1.04.612-1.776.612Zm8.613-.144h-1.092v-2.22h-.996l-1.8 2.22h-1.212v-.144l1.716-2.112c-.528-.08-.944-.268-1.248-.564-.296-.304-.444-.684-.444-1.14v-.168c0-.56.2-1.004.6-1.332.4-.328.932-.492 1.596-.492h2.88V22Zm-1.092-3.144V17.02h-1.776c-.344 0-.616.076-.816.228-.2.152-.3.364-.3.636v.144c0 .264.096.468.288.612.2.144.476.216.828.216h1.776Z"
            fill="#6B360D"
        />
        <path
            d="M205.5 89.73V90h-1.836l-1.404-2.988h-6.66L194.196 90h-1.836v-.27l5.58-11.538h1.98l5.58 11.538Zm-4.014-4.338-2.556-5.418-2.556 5.418h5.112Zm16.138 4.356V90h-1.962l-3.924-3.744h-2.628V90h-1.728v-8.91h1.728v3.654h2.574l3.708-3.654h1.998v.252l-4.122 4.122 4.356 4.284Zm.801-7.11V81.09h10.476v1.548h-4.338V90h-1.728v-7.362h-4.41Zm13.886-1.548v6.804l6.534-6.804h1.584V90h-1.656v-6.804L232.239 90h-1.584v-8.91h1.656Zm19.906 4.392c.492.156.864.396 1.116.72.264.312.396.696.396 1.152v.18c0 .78-.306 1.386-.918 1.818-.6.432-1.452.648-2.556.648h-6.768v-8.91h6.534c1.104 0 1.956.21 2.556.63.612.408.918.996.918 1.764v.18c0 .828-.426 1.434-1.278 1.818Zm-7.002-3.06v2.412h4.734c.564 0 .996-.096 1.296-.288a.975.975 0 0 0 .468-.864v-.18a.869.869 0 0 0-.45-.792c-.3-.192-.738-.288-1.314-.288h-4.734Zm6.732 4.896c0-.36-.15-.636-.45-.828-.3-.192-.732-.288-1.296-.288h-4.986v2.448h4.986c.564 0 .996-.096 1.296-.288.3-.204.45-.492.45-.864v-.18Zm15.587 1.152V90h-1.188c-.588 0-1.08-.114-1.476-.342a1.827 1.827 0 0 1-.828-.972c-.48.516-1.056.9-1.728 1.152-.672.252-1.464.378-2.376.378-1.284 0-2.274-.222-2.97-.666-.696-.456-1.044-1.104-1.044-1.944 0-.72.27-1.296.81-1.728.54-.432 1.332-.702 2.376-.81l4.806-.504c-.036-.672-.318-1.182-.846-1.53-.528-.348-1.284-.522-2.268-.522-.948 0-1.704.162-2.268.486-.564.324-.846.756-.846 1.296v.072h-1.71v-.072c0-.672.198-1.266.594-1.782.408-.528.978-.93 1.71-1.206.732-.288 1.578-.432 2.538-.432 1.524 0 2.706.336 3.546 1.008.84.672 1.26 1.614 1.26 2.826v2.772c0 .312.096.558.288.738.192.168.468.252.828.252h.792Zm-7.632.216c.972 0 1.806-.15 2.502-.45.696-.312 1.2-.75 1.512-1.314v-.954l-4.428.468c-.624.06-1.092.186-1.404.378-.3.192-.45.456-.45.792 0 .72.756 1.08 2.268 1.08Zm20.625-.216v3.834h-1.71V90h-9.666v-8.91h1.728v7.38h6.156v-7.38h1.71v7.38h1.782Zm3.499-7.38v6.804l6.534-6.804h1.584V90h-1.656v-6.804L283.954 90h-1.584v-8.91h1.656Zm20.74 8.892h-1.728v-2.916h-2.664L296.81 90h-2.232v-.216l3.312-2.718c-1.068-.048-1.896-.318-2.484-.81-.588-.504-.882-1.188-.882-2.052v-.198c0-.924.318-1.638.954-2.142.648-.516 1.548-.774 2.7-.774h6.588v8.892Zm-1.728-4.392v-2.988h-4.734c-1.332 0-1.998.468-1.998 1.404v.198c0 .924.666 1.386 1.998 1.386h4.734Z"
            fill="#6B360D"
        />
        <path
            opacity={0.75}
            d="M326.184 85.104c.504 0 .948.096 1.332.288.392.192.692.464.9.816.216.352.324.756.324 1.212v.384a2.218 2.218 0 0 1-1.26 2.04c-.392.192-.844.288-1.356.288-.528 0-.996-.104-1.404-.312a2.283 2.283 0 0 1-.948-.876 2.483 2.483 0 0 1-.336-1.296v-3.084c0-.512.112-.96.336-1.344.224-.392.536-.692.936-.9.408-.216.876-.324 1.404-.324.504 0 .952.088 1.344.264.392.176.696.424.912.744.216.32.324.688.324 1.104v.168h-.852v-.168c0-.392-.16-.708-.48-.948-.312-.248-.728-.372-1.248-.372-.552 0-.992.16-1.32.48-.328.312-.492.736-.492 1.272v1.224c.232-.208.508-.368.828-.48.328-.12.68-.18 1.056-.18Zm1.692 2.328c0-.488-.152-.864-.456-1.128-.304-.272-.736-.408-1.296-.408-.424 0-.796.08-1.116.24-.312.16-.548.38-.708.66v.84c0 .512.168.924.504 1.236.336.312.776.468 1.32.468.536 0 .96-.136 1.272-.408.32-.272.48-.644.48-1.116v-.384Z"
            fill="#6B360D"
        />
        <g opacity={0.75} fill="#6B360D">
            <path d="M199 18h-2v4h2zM195 20h-2v2h2z" />
        </g>
        <rect
            x={331}
            y={17.5}
            width={1}
            height={10}
            rx={0.5}
            transform="rotate(90 331 17.5)"
            fill="#6B360D"
            opacity={0.75}
        />
        <defs>
            <clipPath id="vital-ring_svg__c">
                <path fill="#fff" transform="translate(4 103)" d="M0 0h128v60H0z" />
            </clipPath>
            <clipPath id="vital-ring_svg__d">
                <path fill="#fff" transform="translate(136 103)" d="M0 0h204v60H0z" />
            </clipPath>
            <clipPath id="vital-ring_svg__g">
                <path fill="#fff" transform="translate(4 4)" d="M0 0h176v96H0z" />
            </clipPath>
            <linearGradient
                id="vital-ring_svg__a"
                x1={172}
                y1={167}
                x2={172}
                y2={143}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <linearGradient
                id="vital-ring_svg__e"
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

export default SvgVitalRing;
