export default function TextSkeleton({
  lines = 1,
  width = 100,
  height = 40,
  background = "rgb(247 247 247)",
  my = 20,
}) {
  return (
    <>
      {lines === 1 ? (
        <div
          style={{
            height,
            width,
            background,
            marginTop: my / 2,
            marginBottom: my / 2,
          }}
        ></div>
      ) : (
        <>
          {Array(lines).fill(null).map((_, index) => (
            <div
              key={index}
              style={{
                height,
                width,
                background,
                marginTop: my / 2,
                marginBottom: my / 2,
              }}
            ></div>
          ))}
        </>
      )}
    </>
  );
}
