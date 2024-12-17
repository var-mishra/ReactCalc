
import { useState } from "react";
function App() {
    const [input, setInput] = useState("0");
  
    const handleClick = (value) => {
      if (value === "AC") {
        setInput("0");
      } else if (value === "Del") {
        setInput(input.slice(0, -1) || "0");
      } else if (value === "=") {
        try {
          setInput(eval(input).toString());
        } catch (error) {
          setInput("Error");
        }
      } else {
        setInput(input === "0" ? value : input + value);
      }
    };
  
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-[#0a0a0a] to-[#3a4452]">
        <div className="border border-[#757575] p-5 rounded-[16px] bg-transparent shadow-[0px_3px_15px_rgba(113,_115,_119,_0.5)]">
          <input
            type="text"
            value={input}
            onChange={() => {}}
            className="w-[320px] p-6 m-2 border-none bg-transparent text-4xl text-right shadow-[0px_3px_15px_rgba(84,_84,_84,_0.1)] cursor-pointer text-white placeholder-white"
            placeholder="0"
          />
          <div className="grid grid-cols-4 gap-4">
            <button
              onClick={() => handleClick("AC")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              AC
            </button>
            <button
              onClick={() => handleClick("Del")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              Del
            </button>
            <button
              onClick={() => handleClick("%")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              %
            </button>
            <button
              onClick={() => handleClick("/")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer text-[#6dee0a]"
            >
              /
            </button>
  
            <button
              onClick={() => handleClick("7")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              7
            </button>
            <button
              onClick={() => handleClick("8")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              8
            </button>
            <button
              onClick={() => handleClick("9")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              9
            </button>
            <button
              onClick={() => handleClick("*")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer text-[#6dee0a]"
            >
              *
            </button>
  
            <button
              onClick={() => handleClick("6")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              6
            </button>
            <button
              onClick={() => handleClick("5")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              5
            </button>
            <button
              onClick={() => handleClick("4")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              4
            </button>
            <button
              onClick={() => handleClick("+")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer text-[#6dee0a]"
            >
              +
            </button>
  
            <button
              onClick={() => handleClick("3")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              3
            </button>
            <button
              onClick={() => handleClick("2")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              2
            </button>
            <button
              onClick={() => handleClick("1")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              1
            </button>
            <button
              onClick={() => handleClick("-")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer text-[#6dee0a]"
            >
              -
            </button>
  
            <button
              onClick={() => handleClick("00")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              00
            </button>
            <button
              onClick={() => handleClick("0")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              0
            </button>
            <button
              onClick={() => handleClick(".")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-transparent text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              .
            </button>
            <button
              onClick={() => handleClick("=")}
              className="w-[60px] h-[60px] m-2 border-none rounded-full bg-[#fb7c14] text-white text-[20px] shadow-[-2px_-2px_10px_rgba(255,_255,_255,_0.4)] cursor-pointer"
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
export default App;
