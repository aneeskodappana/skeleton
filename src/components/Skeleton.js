export default function Skeleton({ children, untilLoaded = false }) {
  return (
    <div style={{ position: "relative", display: "block" }}>
      {children}
      {!untilLoaded && <div className="skeleton-loading"></div>}
    </div>
  );
}
