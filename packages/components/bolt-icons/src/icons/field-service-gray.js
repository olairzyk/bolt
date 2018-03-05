const FieldServiceGray = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...otherProps}>
      <path
        d="M30 20l-.812-4H22v2.125c.416-.084.75-.125 1-.125 1.625 0 2.959.666 4 2h3zm-8-6h6.813L28 10h-6v4zm4 9a2.89 2.89 0 0 0-.875-2.125A2.89 2.89 0 0 0 23 20a2.89 2.89 0 0 0-2.125.875A2.89 2.89 0 0 0 20 23c0 .834.291 1.541.875 2.125A2.89 2.89 0 0 0 23 26a2.89 2.89 0 0 0 2.125-.875A2.89 2.89 0 0 0 26 23zm-16 0a2.89 2.89 0 0 0-.875-2.125A2.89 2.89 0 0 0 7 20a2.89 2.89 0 0 0-2.125.875A2.89 2.89 0 0 0 4 23c0 .834.291 1.541.875 2.125A2.89 2.89 0 0 0 7 26a2.89 2.89 0 0 0 2.125-.875A2.89 2.89 0 0 0 10 23zm10-4V7c0-.25-.094-.479-.281-.688A.927.927 0 0 0 19 6H3a.927.927 0 0 0-.719.312A1.01 1.01 0 0 0 2 7v12c0 .666.334 1 1 1 1.041-1.334 2.375-2 4-2s2.959.666 4 2h8a5.634 5.634 0 0 1 1-1zm12 2c0 .25-.094.479-.281.687A.924.924 0 0 1 31 22h-3.125c.084.416.125.75.125 1 0 1.375-.49 2.553-1.469 3.531C25.553 27.51 24.375 28 23 28s-2.553-.49-3.531-1.469C18.49 25.553 18 24.375 18 23v-.187h-6V23c0 1.375-.49 2.553-1.469 3.531C9.553 27.51 8.375 28 7 28s-2.553-.49-3.531-1.469C2.49 25.553 2 24.375 2 23v-.187c-.541 0-1.01-.209-1.406-.625A2.098 2.098 0 0 1 0 20.687V6.062c0-.583.197-1.072.594-1.468A1.919 1.919 0 0 1 2 4h18c.541 0 1.01.197 1.406.594.397.396.594.885.594 1.468V8h7c.666 0 1 .334 1 1l2 12z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  );
};
export default FieldServiceGray;
