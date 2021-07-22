import "./App.scss";
import Shape from "./components/Shape";
import TextSkeleton from "./components/TextSkeleton";
import Skeleton from './components/Skeleton';

function App() {
  return (
    <div className="container">
      <h1>Loaders</h1>
      <div>
        <Skeleton>
          <Shape width={300} />
          <Shape width={200} height={70} center />
          <Shape width={100} rounded height={100} />
          <TextSkeleton width={'90%'} />
          <TextSkeleton width={'90%'} height={20} />
          <TextSkeleton width={'70%'} height={20} />
          <TextSkeleton width={'30%'} lines={3} />
        </Skeleton>
      </div>
    </div>
  );
}

export default App;

