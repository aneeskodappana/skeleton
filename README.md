## Skeleton

### Usage

- Wrap your components inside `<Skeleton />`
- Place `<Shape />` where you want show the loader

### Example

```jsx
import { useState } from "react";
import Shape from "./components/Shape";
import Skeleton from "./components/Skeleton";

function App() {
	const [person, setPerson] = useState(null)
  return (
    <Skeleton untilLoaded={person}>
      <h1>{person?.name ?? <Shape height={30} />}</h1>
    </Skeleton>
  );
}
```

## Supported props 
```
<Skeleton untilLoaded />
```



| name      | type | description      | 
| ----------- | ----------- | ------- |
| untilLoaded      | boolean       | control how to stop loading |

```jsx
<Shape rounded width={100} height={100} background={'white'} center my={1} lines={1} />
```



| name      | type | description      | default 
| ----------- | ----------- | ------- | ------ |
| rounded      | boolean       | get circle shape | false
| width      | number,string       | width of the shape | 100% 
| height      | number,string       | height of the shape | 16 
| background      | string       | background of the shape | 16 |
| center      | boolean       | align center | 16 |
| my      | number       | y axis gap | 20 |
| lines | number       | number of shape | 1 |


- ## Nested Shapes  ```<Shape />```

`<Shape />` is a generic component with nested shape support.
```jsx
<Skeleton>
  <Shape lines={3} />
    <Shape width={"100%"} height={30}>
    <Shape height={40} width={80} background={'#d5ead6'} />
    <Shape height={40} width={80} background={'rgb(234 213 213)'} />
  </Shape>
</Skeleton>
```