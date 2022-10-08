import React, { FC } from 'react';
import theme from '../../../theme';

interface NotFoundIconProps {
  width?: string;
  color?: string;
}

const NotFoundIcon: FC<NotFoundIconProps> = ({ width, color }) => {
  const DEFAULT_WIDTH = '18';
  const DEFAULT_COLOR = theme.colors.general.link;

  return (
    <svg
      width={width || DEFAULT_WIDTH}
      fill={color || DEFAULT_COLOR}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M86.071 441.452a18.896 18.896 0 0 1 4.213 15.326l-6.891 41.43a8.091 8.091 0 0 1-9.304 6.659c-4.404-.736-7.379-4.91-6.645-9.323l6.891-41.431a2.673 2.673 0 0 0-.601-2.189 2.66 2.66 0 0 0-2.057-.955H32.452a2.66 2.66 0 0 0-2.057.955 2.675 2.675 0 0 0-.603 2.189l6.891 41.431c.734 4.414-2.241 8.587-6.645 9.323-4.401.734-8.569-2.246-9.303-6.659l-6.891-41.431a18.9 18.9 0 0 1 4.215-15.327 18.814 18.814 0 0 1 14.393-6.684H45.81v-83.172c0-4.474 3.62-8.101 8.084-8.101h118.568c4.465 0 8.084 3.627 8.084 8.101s-3.62 8.101-8.084 8.101H61.979v75.071h9.699a18.811 18.811 0 0 1 14.393 6.686zm245.382 39.221H180.547c-4.465 0-8.084 3.627-8.084 8.101 0 4.474 3.62 8.101 8.084 8.101h150.905c4.465 0 8.084-3.627 8.084-8.101.001-4.474-3.619-8.101-8.083-8.101z"
        fill="#84a7b7"
      />
      <path
        d="M378.65 300.935l-28.255 113.257c-4.799 19.234-22.044 32.727-41.829 32.727H203.431c-19.785 0-37.03-13.493-41.829-32.727l-28.255-113.257c-3.402-13.635 6.889-26.843 20.914-26.843h203.473c14.028 0 24.318 13.209 20.916 26.843z"
        fill="#547d87"
      />
      <path
        d="M481.302 356.408a8.081 8.081 0 0 1-7.028 4.097H319.97c-10.419 25.812-35.553 43.206-63.97 43.206-31.674 0-59.284-21.602-66.966-52.395l-5.872-23.538c-6.804-27.27 13.779-53.686 41.829-53.686h117.242l-17.516 70.211h135.338L385.263 218.39a42.827 42.827 0 0 1-21.473 5.746H148.212c-23.812 0-43.116-19.344-43.116-43.206v-21.603c0-83.519 67.562-151.223 150.905-151.223s150.905 67.705 150.905 151.223v21.603a43.069 43.069 0 0 1-9.224 26.691l83.539 140.642a8.116 8.116 0 0 1 .081 8.145z"
        fill="#6b95a0"
      />
      <path
        d="M503.916 328.1c0 17.896-14.477 32.405-32.337 32.405-17.86 0-32.337-14.508-32.337-32.405 0-17.896 14.477-32.405 32.337-32.405 17.86 0 32.337 14.509 32.337 32.405zM40.421 295.695c-17.86 0-32.337 14.508-32.337 32.405s14.477 32.405 32.337 32.405 32.337-14.508 32.337-32.405c0-17.896-14.477-32.405-32.337-32.405z"
        fill="#547d87"
      />
      <path
        d="M51.2 328.1c0 5.966-4.826 10.802-10.779 10.802s-10.779-4.835-10.779-10.802 4.826-10.802 10.779-10.802S51.2 322.135 51.2 328.1zm420.379-10.801c-5.953 0-10.779 4.835-10.779 10.802s4.826 10.802 10.779 10.802 10.779-4.835 10.779-10.802c0-5.966-4.826-10.802-10.779-10.802z"
        fill="#6b95a0"
      />
      <path
        d="M199.411 381.029v1.08c0 4.474-3.62 8.101-8.084 8.101-4.465 0-8.084-3.627-8.084-8.101v-1.08c0-4.474 3.62-8.101 8.084-8.101 4.464 0 8.084 3.627 8.084 8.101z"
        fill="#fc8059"
      />
      <path
        d="M231.747 381.029v1.08c0 4.474-3.62 8.101-8.084 8.101-4.465 0-8.084-3.627-8.084-8.101v-1.08c0-4.474 3.62-8.101 8.084-8.101 4.465 0 8.084 3.627 8.084 8.101z"
        fill="#ffd880"
      />
      <path
        d="M317.979 381.029v1.08c0 4.474-3.62 8.101-8.084 8.101-4.465 0-8.084-3.627-8.084-8.101v-1.08c0-4.474 3.62-8.101 8.084-8.101 4.464 0 8.084 3.627 8.084 8.101z"
        fill="#b5e5bc"
      />
      <path
        d="M212.884 349.703h-21.558c-5.953 0-10.779-4.826-10.779-10.779v-21.648c0-5.953 4.826-10.779 10.779-10.779h21.558c5.953 0 10.779 4.826 10.779 10.779v21.648c0 5.954-4.826 10.779-10.779 10.779z"
        fill="#cfdfe2"
      />
      <path
        d="M158.989 121.519c0-29.827 24.13-54.008 53.895-54.008s53.895 24.18 53.895 54.008-24.13 54.008-53.895 54.008-53.895-24.18-53.895-54.008z"
        fill="#547d87"
      />
      <path
        d="M180.547 121.519c0-17.896 14.477-32.405 32.337-32.405s32.337 14.508 32.337 32.405-14.477 32.405-32.337 32.405-32.337-14.508-32.337-32.405z"
        fill="#cfdfe2"
      />
      <path
        d="M212.884 121.519c0-8.949 7.239-16.203 16.168-16.203s16.168 7.254 16.168 16.203-7.239 16.203-16.168 16.203-16.168-7.254-16.168-16.203z"
        fill="#fff"
      />
      <path
        d="M427.65 41.321c44.199 44.292 44.199 116.104 0 160.396s-115.86 44.292-160.059 0-44.199-116.104 0-160.396 115.86-44.292 160.059 0z"
        fill="#84a7b7"
      />
      <path
        d="M423.074 121.519c0 41.759-33.781 75.611-75.453 75.611s-75.453-33.852-75.453-75.611 33.781-75.611 75.453-75.611 75.453 33.853 75.453 75.611z"
        fill="#c3e4ed"
      />
      <path
        d="M392.807 60.962a75.77 75.77 0 0 1 25.89 35.159l-96.422 96.625c-14.102-5.04-26.274-14.155-35.084-25.945L392.807 60.962zm-116.262 85.956a75.226 75.226 0 0 0 4.534 10.256L383.201 54.836a74.936 74.936 0 0 0-10.235-4.542l-96.421 96.624z"
        fill="#dcf3f9"
      />
      <path
        d="M347.957 64.98c11.906 0 21.558 9.672 21.558 21.603s-9.651 21.603-21.558 21.603c-11.906 0-21.558-9.672-21.558-21.603s9.653-21.603 21.558-21.603z"
        fill="#fff"
      />
      <path
        d="M339.537 500.928c0 4.474-3.618 8.101-8.084 8.101H180.547c-4.466 0-8.084-3.627-8.084-8.101 0-4.474 3.618-8.101 8.084-8.101h150.905c4.466-.001 8.085 3.626 8.085 8.101zM512 328.101c0 22.335-18.132 40.506-40.421 40.506-15.48 0-28.955-8.765-35.743-21.603H369.36a10.21 10.21 0 0 1-.35 0h-91.452c-4.466 0-8.084-3.626-8.084-8.101s3.618-8.101 8.084-8.101h85.31l7.94-31.831a13.442 13.442 0 0 0-2.45-11.583 13.38 13.38 0 0 0-10.62-5.193H154.263a13.38 13.38 0 0 0-10.62 5.193 13.436 13.436 0 0 0-2.45 11.583l28.255 113.255c3.905 15.658 17.881 26.592 33.985 26.592h105.135c16.104 0 30.08-10.934 33.985-26.592l13.394-53.686a8.09 8.09 0 0 1 9.805-5.895c4.332 1.085 6.965 5.484 5.882 9.825l-13.394 53.686c-5.709 22.882-26.134 38.863-49.672 38.863H203.432c-23.538 0-43.963-15.982-49.672-38.865l-16.51-66.182H76.164c-5.574 10.541-15.659 18.338-27.659 20.79v71.024h11.528a18.815 18.815 0 0 1 14.393 6.685 18.894 18.894 0 0 1 4.215 15.324l-6.892 41.432a8.09 8.09 0 0 1-7.965 6.77c-.441 0-.888-.036-1.339-.112-4.403-.735-7.379-4.909-6.645-9.323l6.891-41.431a2.673 2.673 0 0 0-.601-2.189 2.66 2.66 0 0 0-2.057-.955H20.809a2.66 2.66 0 0 0-2.057.955 2.673 2.673 0 0 0-.601 2.19l6.891 41.43c.734 4.414-2.242 8.588-6.645 9.323-4.42.739-8.569-2.245-9.303-6.658l-6.892-41.431a18.895 18.895 0 0 1 4.215-15.326 18.812 18.812 0 0 1 14.393-6.685h11.528v-71.023C13.909 366.999 0 350.632 0 331.072c0-22.335 18.132-40.506 40.421-40.506s40.421 18.17 40.421 40.506c0 .909-.029 1.807-.088 2.7h52.455l-7.703-30.871c-2.229-8.936-.264-18.225 5.393-25.485 5.657-7.26 14.172-11.424 23.364-11.424h203.474c9.191 0 17.708 4.165 23.364 11.424 5.657 7.261 7.622 16.55 5.393 25.485l-6.961 27.9h51.714a40.969 40.969 0 0 1-.088-2.7c0-13.215 6.348-24.973 16.148-32.37l-40.478-68.148c-33.636 18.839-74.394 20.393-109.202 4.653H148.211c-28.231 0-51.2-23.016-51.2-51.308v-21.603C97.011 71.473 168.333.001 256 .001c16.758 0 33.244 2.602 49.054 7.738 43.144-16.134 93.68-6.852 128.314 27.853 47.28 47.381 47.28 124.473 0 171.854a121.792 121.792 0 0 1-12.977 11.291l41.585 70.013a40.22 40.22 0 0 1 9.603-1.155c22.289 0 40.421 18.171 40.421 40.506zM271.391 216.034a122.731 122.731 0 0 1-9.517-8.588c-15.088-15.122-25.712-33.525-31.204-53.605a40.302 40.302 0 0 1-17.786 4.134c-22.289 0-40.421-18.171-40.421-40.506s18.132-40.506 40.421-40.506a40.408 40.408 0 0 1 19.918 5.276c5.901-17.371 15.745-33.29 29.073-46.647a121.31 121.31 0 0 1 21.024-16.852A143.114 143.114 0 0 0 256 16.203c-78.752 0-142.821 64.205-142.821 143.122v21.603c0 19.358 15.715 35.105 35.032 35.105h123.18v.001zm-45.033-94.515c0-7.695.709-15.282 2.097-22.684-4.351-3.676-9.779-5.67-15.57-5.67-13.372 0-24.253 10.903-24.253 24.303s10.88 24.303 24.253 24.303a24.175 24.175 0 0 0 14.441-4.784 123.37 123.37 0 0 1-.968-15.468zm195.575 74.47c19.851-19.891 30.783-46.339 30.783-74.47s-10.932-54.578-30.783-74.47c-19.849-19.893-46.241-30.847-74.312-30.847-13.492 0-26.594 2.531-38.769 7.367-.401.202-.818.37-1.247.504-12.676 5.227-24.313 12.97-34.296 22.975-19.85 19.891-30.783 46.339-30.783 74.47s10.932 54.578 30.783 74.47c40.974 41.063 107.65 41.063 148.624.001zM64.674 331.072c0-13.4-10.88-24.303-24.253-24.303s-24.253 10.902-24.253 24.303c0 13.4 10.88 24.303 24.253 24.303s24.253-10.903 24.253-24.303zm431.158-2.971c0-13.4-10.88-24.303-24.253-24.303a24.078 24.078 0 0 0-10.018 2.17c-8.388 3.828-14.235 12.308-14.235 22.132a24.293 24.293 0 0 0 1.434 8.24c3.376 9.357 12.33 16.064 22.818 16.064 13.373.001 24.254-10.902 24.254-24.303zm-64.674-206.582c0 22.361-8.69 43.383-24.467 59.194-15.778 15.812-36.756 24.519-59.07 24.519s-43.291-8.708-59.07-24.519c-15.777-15.811-24.467-36.833-24.467-59.194s8.69-43.383 24.467-59.194 36.756-24.519 59.07-24.519 43.291 8.708 59.07 24.519 24.467 36.834 24.467 59.194zm-16.169 0c0-18.032-7.007-34.986-19.733-47.736-12.722-12.753-29.641-19.775-47.635-19.775s-34.913 7.022-47.635 19.774c-12.726 12.75-19.733 29.704-19.733 47.737s7.007 34.986 19.733 47.736c12.723 12.753 29.641 19.774 47.635 19.774s34.913-7.022 47.635-19.774c12.726-12.749 19.733-29.703 19.733-47.736zM212.884 298.397c10.401 0 18.863 8.48 18.863 18.903v21.603c0 10.423-8.463 18.903-18.863 18.903h-21.558c-10.401 0-18.863-8.48-18.863-18.903V317.3c0-10.423 8.463-18.903 18.863-18.903h21.558zm0 16.201h-21.558a2.7 2.7 0 0 0-2.695 2.7v21.603a2.7 2.7 0 0 0 2.695 2.7h21.558a2.7 2.7 0 0 0 2.695-2.7v-21.603a2.7 2.7 0 0 0-2.695-2.7z"
        fill="#4c4c4c"
      />
    </svg>
  );
};

export default NotFoundIcon;
