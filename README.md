## Skeleton

### Usage

- Wrap your components inside `<Skeleton />`
- Place `<Shape />` where you want to show the loader

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



