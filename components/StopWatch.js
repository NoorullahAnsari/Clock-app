import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const startTimeRef = useRef(0);
  const requestRef = useRef();

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - timeElapsed;
      requestRef.current = requestAnimationFrame(updateTime);
    } else {
      cancelAnimationFrame(requestRef.current);
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);

  const updateTime = () => {
    const currentTime = Date.now();
    setTimeElapsed(currentTime - startTimeRef.current);
    requestRef.current = requestAnimationFrame(updateTime);
  };

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeElapsed(0);
  };

  const formatTime = (totalMilliseconds) => {
    const minutes = Math.floor(totalMilliseconds / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const smallSeconds = Math.floor((totalMilliseconds % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${smallSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <hr />
      <div className="bg-white p-3 mt-10">
        <div className="text-2xl flex items-center justify-center">
          <div class="bg-white p-8 rounded shadow">
            <h1 class="text-2xl font-bold text-center">
              <p class="text-center mt-4">
                Stop Watch: {formatTime(timeElapsed)}
              </p>
            </h1>
          </div>
        </div>
        <div className="mt-6 item-center pl-20">
          <button
            className="p-3  text-center bg-blue-500 hover:bg-blue-700 text-white text-xl m-2 round rounded-full"
            onClick={handleStartStop}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
          <button
            className="p-3  text-center bg-blue-500 hover:bg-blue-700 text-white text-xl m-2 round rounded-full"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
