import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState(
    localStorage.getItem("selectedColor") || "from-purple-700 to-blue-500"
  );

  useEffect(() => {
    localStorage.setItem("selectedColor", color);
  }, [color]);

  return (
    <div
      className="w-full h-screen duration-200  flex flex-col justify-center items-center "
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center text-5xl p-5">Choose Your Favorite Color!</h1>
      <p className="mb-4 text-lg">Express yourself with vibrant colors!</p>
      <p className="mb-4">Customize your experience.</p>
      <p className="mb-4">Create a colorful environment.</p>
      <p>Explore endless possibilities.</p>
      <div className=""></div>

      <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-5">
        <div className="flex flex-wrap gap-2 justify-center bg-white shadow-lg px-3 py-3 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 text-white rounded-full shadow-xl"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 text-white rounded-full shadow-xl"
            style={{ backgroundColor: "Blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 text-white rounded-full shadow-xl"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-2 text-white rounded-full shadow-xl"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-2 text-white rounded-full shadow-xl"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-2 text-white rounded-full shadow-xl"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-2 text-white rounded-full shadow-xl"
            style={{ backgroundColor: "gray" }}
          >
            gray
          </button>
          {/* </div>
    </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
