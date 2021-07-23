export default function Skeleton({ children, untilLoaded = false }) {
  const styles = {
    position: "relative",
    display: "block",
    overflow: !untilLoaded ? "hidden" : "inherit",
  };
  return (
    <div style={styles}>
      {children}
      {!untilLoaded && <div className="skeleton-loading"></div>}
    </div>
  );
}
