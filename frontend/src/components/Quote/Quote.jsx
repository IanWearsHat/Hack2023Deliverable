import './quote.css';

function Quote({name, quote, date}) {
    return (
      <div className="quote">
        <p className="quote-text">"{quote}"</p>
        <p className="quote-details">-{name} {date}</p>
      </div>
    );
}

export default Quote;


// import * as React from "react";

// import "./styles.css";
// import { motion } from "framer-motion";

// function TextComponent() {
//   return <p>me</p>;
// }

// export default function App() {
//   const container = {
//     hidden: { opacity: 1 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08
//       }
//     }
//   };

//   const item = {
//     hidden: {
//       opacity: 0,
//       y: 60
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.9,
//         ease: [0, 0.7, 0.2, 1]
//       }
//     }
//   };

//   return (
//     <motion.ol variants={container} initial="hidden" animate="show">
//       <motion.li variants={item} />
//       <motion.li variants={item} />
//       <motion.li variants={item} />
//       <motion.li variants={item} />
//       <motion.li variants={item} />
//       <motion.li variants={item} />
//     </motion.ol>
//   );
// }
