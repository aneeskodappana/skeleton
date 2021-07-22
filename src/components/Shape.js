export default function Shape({
  rounded = false,
  width = "100%",
  height = 16,
  background = "rgb(247 247 247)",
  center = false,
  my = 20,
  lines = 1,
}) {
  const Item = () => {
    return (
      <span
        style={{
          display: 'block',
          width,
          height,
          background,
          marginTop: my / 2,
          marginBottom: my / 2,
          borderRadius: rounded ? "50%" : "0px",
          marginLeft: center ? "auto" : 0,
          marginRight: center ? "auto" : 0,
        }}
      ></span>
    );
  };

  return (
    <>
      {lines === 1 ? (
        <Item />
      ) : (
        <>
          {Array(lines)
            .fill(null)
            .map((_, index) => (
              <Item key={index} />
            ))}
        </>
      )}
    </>
  );
}
