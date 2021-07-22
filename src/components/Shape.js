export default function Shape({
  rounded = false,
  width = 100,
  height = 100,
  background = "rgb(247 247 247)",
  center = false,
  my = 20,
}) {
  return (
    <div
      style={{
        width,
        height,
        background,
        marginTop: my / 2,
        marginBottom: my / 2,
        borderRadius: rounded ? "50%" : "0px",
        marginLeft: center ? "auto" : 0,
        marginRight: center ? "auto" : 0,
      }}
    ></div>
  );
}
