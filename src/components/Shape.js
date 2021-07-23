export default function Shape({
  rounded = false,
  width = "100%",
  height = 16,
  background = "rgb(247 247 247)",
  center = false,
  my = 20,
  lines = 1,
  children
}) {
  const Item = ({children}) => {
    return (
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width,
          height,
          background : children ? "transparent" : background,
          marginTop: my / 2,
          marginBottom: my / 2,
          borderRadius: rounded ? "50%" : "0px",
          marginLeft: center ? "auto" : 0,
          marginRight: center ? "auto" : 0,
        }}
      >{children}</span>
    );
  };

  return (
    <>
      {lines === 1 ? (
        <Item>{children}</Item>
      ) : (
        <>
          {Array(lines)
            .fill(null)
            .map((_, index) => (
              <Item key={index}>{children}</Item>
            ))}
        </>
      )}
    </>
  );
}
