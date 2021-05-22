import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
}

export const LogoIcon = ({ height, width }: Props): JSX.Element => {
  return (
    <Svg
      width={width || 154}
      height={height || 28}
      viewBox="0 0 154 28"
      fill="none"
    >
      <Path
        d="M53.228.223h5.231c1.212 0 2.286.227 3.224.683.938.456 1.665 1.102 2.18 1.94.517.836.775 1.817.775 2.94s-.258 2.103-.774 2.94c-.516.837-1.243 1.484-2.18 1.94-.939.455-2.013.683-3.225.683h-5.23V.223zm5.105 8.615c.948 0 1.707-.27 2.276-.811.579-.54.869-1.288.869-2.241 0-.954-.29-1.701-.87-2.241-.568-.54-1.327-.811-2.275-.811h-1.975v6.104h1.975zM75.73 8.917v2.432H66.85V.223h8.676v2.432h-5.579V4.53h4.915v2.353h-4.915v2.034h5.784zM82.867 8.393H81.16v2.956h-3.13V.223h5.058c1 0 1.87.17 2.607.508.738.329 1.307.806 1.707 1.43.4.615.6 1.341.6 2.178 0 .806-.19 1.51-.568 2.114-.37.594-.901 1.06-1.596 1.4l2.386 3.496h-3.35l-2.007-2.956zm1.975-4.054c0-.519-.163-.922-.49-1.208-.327-.286-.811-.429-1.454-.429H81.16v3.259h1.738c.643 0 1.127-.138 1.454-.414.327-.286.49-.688.49-1.208z"
        fill="#0D132F"
      />
      <Path
        d="M95.456.223h3.129v8.63h5.278v2.496h-8.407V.223zM111.074 11.571c-1.169 0-2.222-.249-3.16-.747a5.672 5.672 0 01-2.197-2.066c-.526-.88-.79-1.87-.79-2.972 0-1.102.264-2.093.79-2.973a5.672 5.672 0 012.197-2.066c.938-.498 1.991-.747 3.16-.747 1.17 0 2.218.249 3.145.747a5.524 5.524 0 012.197 2.066c.537.88.806 1.87.806 2.973 0 1.102-.269 2.093-.806 2.972a5.525 5.525 0 01-2.197 2.066c-.927.498-1.975.747-3.145.747zm0-2.606c.559 0 1.065-.133 1.518-.398a2.861 2.861 0 001.074-1.112c.264-.488.395-1.044.395-1.67 0-.624-.131-1.176-.395-1.652a2.834 2.834 0 00-1.074-1.129 2.951 2.951 0 00-1.518-.397 2.95 2.95 0 00-1.517.397 2.834 2.834 0 00-1.074 1.129c-.264.476-.395 1.028-.395 1.653s.131 1.181.395 1.669c.263.477.621.847 1.074 1.112a2.95 2.95 0 001.517.398zM123.692 7.312l-1.17 1.255v2.782h-3.097V.223h3.097v4.625l4.283-4.625h3.445l-4.52 4.927 4.757 6.199h-3.635l-3.16-4.037z"
        fill="#C8353E"
      />
      <Path
        d="M138.759 9.187h-4.677l-.87 2.162h-3.192L134.903.223h3.082l4.899 11.126h-3.256l-.869-2.162zm-.916-2.32l-1.423-3.56-1.422 3.56h2.845zM144.335.223h3.129v8.63h5.278v2.496h-8.407V.223z"
        fill="#C8353E"
      />
      <Path
        d="M61.022 18.991l-3.486 7.952h-.821l-3.487-7.952h.9l3.014 6.907 3.036-6.907h.844zM67.258 24.206H62.31c.045.62.281 1.124.709 1.51.427.379.967.568 1.619.568.367 0 .705-.064 1.012-.193.307-.136.573-.333.798-.59l.45.522c-.262.318-.592.56-.99.727-.39.167-.82.25-1.293.25-.607 0-1.147-.129-1.619-.386a2.862 2.862 0 01-1.09-1.09 3.117 3.117 0 01-.394-1.568c0-.584.123-1.106.37-1.568.256-.462.6-.822 1.035-1.08a2.896 2.896 0 011.485-.386c.547 0 1.038.13 1.473.387.435.257.776.617 1.023 1.079.248.454.371.977.371 1.568l-.01.25zm-2.856-2.59c-.57 0-1.05.185-1.44.556-.382.364-.6.84-.652 1.431h4.195c-.053-.59-.274-1.067-.664-1.43-.382-.372-.862-.557-1.44-.557zM72.47 20.922c.743 0 1.331.22 1.766.66.443.431.664 1.063.664 1.896v3.465H74.1v-3.385c0-.621-.153-1.094-.46-1.42-.308-.326-.747-.488-1.317-.488-.637 0-1.143.193-1.518.579-.367.379-.55.905-.55 1.579v3.135h-.8v-5.975h.766v1.102a2.2 2.2 0 01.9-.84c.39-.205.839-.308 1.349-.308zM83.05 18.514v8.43h-.765v-1.182c-.24.401-.559.708-.956.92-.39.212-.832.318-1.327.318a2.98 2.98 0 01-1.507-.386 2.747 2.747 0 01-1.057-1.08c-.255-.461-.382-.988-.382-1.578 0-.591.127-1.117.382-1.58a2.67 2.67 0 011.057-1.067 2.98 2.98 0 011.507-.387c.48 0 .911.103 1.293.307.39.197.709.489.956.875v-3.59h.799zm-2.98 7.77c.412 0 .783-.094 1.113-.284.337-.197.6-.473.787-.829a2.49 2.49 0 00.292-1.215c0-.455-.097-.86-.292-1.216a1.964 1.964 0 00-.787-.818 2.13 2.13 0 00-1.114-.295c-.42 0-.798.098-1.135.295-.33.19-.593.462-.787.818a2.57 2.57 0 00-.282 1.216c0 .454.094.86.282 1.215.194.356.457.632.787.83.337.189.716.283 1.136.283zM88.253 27c-.57 0-1.083-.129-1.54-.386a2.885 2.885 0 01-1.08-1.09 3.117 3.117 0 01-.393-1.568c0-.584.13-1.106.393-1.568a2.803 2.803 0 011.08-1.08c.457-.257.97-.386 1.54-.386.57 0 1.084.13 1.541.387.457.257.814.617 1.068 1.079.263.462.394.984.394 1.568 0 .583-.131 1.105-.394 1.567a2.804 2.804 0 01-1.068 1.09c-.457.258-.97.387-1.54.387zm0-.716c.42 0 .795-.094 1.125-.284.337-.197.6-.473.787-.829a2.57 2.57 0 00.281-1.215c0-.455-.093-.86-.28-1.216a1.963 1.963 0 00-.788-.818 2.152 2.152 0 00-1.125-.295c-.42 0-.798.098-1.135.295-.33.19-.593.462-.788.818a2.57 2.57 0 00-.28 1.216c0 .454.093.86.28 1.215.195.356.458.632.788.83.337.189.716.283 1.135.283zM94.213 22.138c.188-.401.465-.704.832-.909.375-.204.836-.306 1.383-.306v.783l-.19-.011c-.623 0-1.11.193-1.463.58-.352.386-.528.927-.528 1.624v3.044h-.799v-5.975h.765v1.17zM0 18.131c0-1.034.648-1.872 1.448-1.872h10.894c.8 0 1.448.838 1.448 1.872 0 1.034-.648 1.873-1.448 1.873H1.448c-.8 0-1.448-.839-1.448-1.873zM0 25.128a1.87 1.87 0 011.867-1.872H20.05a1.87 1.87 0 011.867 1.872A1.87 1.87 0 0120.05 27H1.867A1.87 1.87 0 010 25.128zM33.318 25.128a1.87 1.87 0 011.868-1.872h2.457a1.87 1.87 0 011.867 1.872A1.87 1.87 0 0137.643 27h-2.457a1.87 1.87 0 01-1.868-1.872z"
        fill="#0D132F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.266A2.263 2.263 0 012.26 0h36.365c1.084 0 1.99.765 2.21 1.786l.05-.012c0 .112 0 .227-.004.343a2.31 2.31 0 01-.024.51c-.21 3.294-1.585 7.813-3.886 9.967-2.507 2.347-5.907 3.665-9.452 3.665s-6.945-1.318-9.451-3.665a8.421 8.421 0 00-.809-.67H1.867A1.87 1.87 0 010 10.05a1.87 1.87 0 011.867-1.872h17.6c.641 0 1.224.328 1.563.847.15.08.31.193.476.349 1.595 1.493 3.758 2.332 6.013 2.332 2.256 0 4.419-.839 6.014-2.332 1.22-1.143 2.032-3.06 2.345-4.842H2.261A2.263 2.263 0 010 2.266z"
        fill="#0D132F"
      />
      <Path
        d="M36.342 26.936c1.744 0 3.85-1.705 2.79-3.092-.285-.372-.785-.744-1.666-1.568-3.485-1.747-6.43-2.33-9.953-2.33-3.522 0-6.9.894-9.391 3.263-2.491 2.368-3.89.378-3.89 3.727h4.646c0-2.131 1.075 1.027 2.66-.48 1.585-1.506 3.734-2.644 5.975-2.644 2.242 0 5.452.794 5.976 2.644.801.762 1.141.48 2.245.48h.608z"
        fill="#0D132F"
      />
    </Svg>
  );
};

export default LogoIcon;

LogoIcon.defaultProps = {
  width: null,
  height: null,
};