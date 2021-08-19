import "./App.css";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const tabs = ["PH News", "Crypto", "NFT", "Business"];
  const [current, setCurrent] = useState(tabs[0]);
  const previous = usePrevious(current);
  const direction = tabs.indexOf(current) < tabs.indexOf(previous);
  return (
    <div className="App">
      <div className="buttons">
        {tabs.map((tab) => (
          <button
            className={tab === current ? "active" : null}
            onClick={() => setCurrent(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <AnimatePresence custom={current}>
        <motion.div
          className="content"
          key={current}
          initial={{ x: direction ? -500 : 500, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          exit={(_current) => ({
            x: tabs.indexOf(_current) > tabs.indexOf(current) 
              ? -500 
              : 500,
            opacity: 0,
          })}
          transition={{
            type: "spring",
            damping: 50,
            stiffness: 400,
            opacity: {
              duration: 0.1,
            },
          }}
        >
          <h2>{current}</h2>
          <h3>{previous}</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus temporibus quidem aspernatur nobis ipsam, vero
            explicabo quis minima, dolores, quod quam voluptates incidunt eius
            nihil ut alias pariatur praesentium exercitationem iusto at fugiat.
            Sequi obcaecati cumque id reiciendis aut, iusto repudiandae
            voluptate praesentium fugit exercitationem asperiores, tenetur,
            numquam animi autem!
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function usePrevious(state) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = state;
  });
  return ref.current;
}

export default App;
