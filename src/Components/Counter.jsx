// import { motion, useMotionValue, animate } from "framer-motion";
// import { useEffect, useState } from "react";

// const Counter = ({ value }) => {
//   const [suffix, setSuffix] = useState("");
//   const [endValue, setEndValue] = useState(0);
//   const [displayValue, setDisplayValue] = useState(0);

//   useEffect(() => {
//     if (value.includes("M")) {
//       setSuffix("M");
//       setEndValue(parseInt(value.replace("M", ""), 10));
//     } else if (value.includes("%")) {
//       setSuffix("%");
//       setEndValue(parseInt(value.replace("%", ""), 10));
//     } else {
//       setEndValue(parseInt(value, 10));
//     }
//   }, [value]);

//   const count = useMotionValue(0);

//   useEffect(() => {
//     const controls = animate(count, endValue, {
//       duration: 2,
//       ease: "easeOut",
//       onUpdate: (latest) => {
//         setDisplayValue(Math.floor(latest));
//       },
//     });

//     return () => controls.stop();
//   }, [endValue]);

//   return (
//     <motion.span>
//       {displayValue}
//       <span className="text-5xl">{suffix}</span>
//     </motion.span>
//   );
// };
// export default Counter;

import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const Counter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);

  // Motion value created at the top level of the component
  const count = useMotionValue(0);

  useEffect(() => {
    // Extract numeric part
    const numberMatch = value.match(/\d+(\.\d+)?/); // works for decimals
    const number = numberMatch ? parseFloat(numberMatch[0]) : 0;

    // Keep the suffix exactly as in original value
    const suffix = value.replace(numberMatch ? numberMatch[0] : "", "");

    const controls = animate(count, number, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(`${latest.toFixed(0)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [value, count]);

  return <motion.span>{displayValue}</motion.span>;
};

export default Counter;
