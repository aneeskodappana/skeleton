import Shape from "./components/Shape";
import Skeleton from "./components/Skeleton";
import { useEffect, useState } from "react";
import { mockPerson } from "./mock";
import "./App.scss";


function App() {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPerson(mockPerson);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container">
      <div className={"box"}>
        <Skeleton untilLoaded={person}>
          <h1>{person?.name ?? <Shape height={30} />}</h1>
          <div className="text-center">
            {person?.image ? (
              <img src={person?.image} alt="" className="example-img" />
            ) : (
              <Shape width={200} height={200} rounded center />
            )}
          </div>
          <p>
            {person?.bio ?? (
              <>
                <Shape lines={4} />
                <Shape width={"70%"} />
              </>
            )}
          </p>
        </Skeleton>
      </div>

      <div className={"box"}>
        <Skeleton untilLoaded={person}>
          <div>
            {person?.image ? (
              <img src={person?.image} alt="" className="example-img-2" />
            ) : (
              <Shape width={200} height={200} />
            )}
          </div>
          <p>
            {person?.bio ?? (
              <>
                <Shape lines={4} />
                <Shape width={"70%"} />
              </>
            )}
          </p>
        </Skeleton>
      </div>

      <div className={"box"}>
        <Skeleton untilLoaded={person}>
          {person ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur ipsam quae veniam facere quam repudiandae ab sint
              quas.
            </p>
          ) : (
            <div>
              <Shape width={"70%"} />
              <Shape width={"80%"} />
              <Shape width={"75%"} />
              <Shape width={"50%"} />
            </div>
          )}
        </Skeleton>
      </div>

      <div className={"box"}>
        <Skeleton untilLoaded={person}>
          {person ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur ipsam quae veniam facere quam repudiandae ab sint
              quas esse deserunt, similique rem reiciendis id earum saepe
              praesentium laboriosam molestias quaerat!
            </p>
          ) : (
            <div>
              <Shape width={"100%"} lines={6} />
            </div>
          )}
        </Skeleton>
      </div>

      <div className={"box"}>
        <Skeleton untilLoaded={person}>
          {person ? (
            <>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur ipsam quae veniam facere quam repudiandae ab sint
                quas esse deserunt.
              </p>
              <div className="flex space-between">
                <button>BUTTON</button>
                <button>BUTTON</button>
              </div>
            </>
          ) : (
            <div>
              <Shape lines={3} />
              <Shape height={30}>
                <Shape height={40} width={80} background={"#d5ead6"} />
                <Shape height={40} width={80} background={"rgb(234 213 213)"} />
              </Shape>
            </div>
          )}
        </Skeleton>
      </div>
    </div>
  );
}

export default App;
