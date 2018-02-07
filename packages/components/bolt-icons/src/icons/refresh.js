// import { Preact, h } from '@bolt/core';
const Refresh = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...otherProps}>
      <title>Icon/utility/White/24px/Refresh</title>
      <g fill="currentColor" fill-rule="evenodd">
        <path
          d="M0,64a64,64 0 1,0 128,0a64,64 0 1,0 -128,0"
          class="c-bolt-icon--background c-bolt-icon--circle-background"
          fill="none"
        />
        <g fill-rule="nonzero" fill="currentColor">
          <path d="M24 4.5c0-.55-.45-1-1-1s-1 .45-1 1v3.687l-2.944-2.769a9.939 9.939 0 0 0-7.062-2.919 9.9 9.9 0 0 0-5.806 1.863 10.09 10.09 0 0 0-3.619 4.8 1 1 0 0 0 1.881.681 8.164 8.164 0 0 1 2.9-3.85 7.923 7.923 0 0 1 4.644-1.494c2.138 0 4.15.831 5.656 2.344a.094.094 0 0 0 .025.019l2.8 2.631H17c-.55 0-1 .45-1 1s.45 1 1 1h6.099a.86.86 0 0 0 .262-.063.969.969 0 0 0 .369-.25.984.984 0 0 0 .206-.331c0-.006 0-.006.006-.012v-.006-.006-.006-.006c0-.006 0-.006.006-.012.025-.075.044-.162.05-.244v-.006-.006-.012-.012-.012-.006-6L24 4.5zM20.813 14.625a1 1 0 0 0-1.281.6 8.035 8.035 0 0 1-7.525 5.275 7.93 7.93 0 0 1-5.656-2.344c-.006-.006-.012-.012-.025-.019l-2.8-2.637h3.475c.55 0 1-.45 1-1s-.45-1-1-1h-6a.975.975 0 0 0-.425.094s-.006 0-.006.006c0 0-.006 0-.006.006-.006 0-.006.006-.012.006a1.16 1.16 0 0 0-.225.156l-.006.006s-.006 0-.006.006l-.006.006-.006.006-.006.006c-.025.025-.044.05-.069.075a.866.866 0 0 0-.125.206c0 .006 0 .006-.006.012 0 0 0 .006-.006.006v.012s0 .006-.006.006c-.038.1-.063.213-.069.325v6.042c0 .55.45 1 1 1s1-.45 1-1v-3.687l2.944 2.769a9.939 9.939 0 0 0 7.062 2.919c4.194 0 7.975-2.65 9.406-6.594a1.008 1.008 0 0 0-.612-1.269l-.003.005z" />
        </g>
      </g>
    </svg>
  );
};
export default Refresh;