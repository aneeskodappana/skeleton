export default function Skeleton({ children }) {
  return <div style={{ position: "relative", display: 'inline-block' }}>
    {children}
    <div className="skeleton-loading"></div>
  </div>;
}
