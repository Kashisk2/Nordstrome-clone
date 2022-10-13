import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./FirstImageDIv.module.css";

function AnimatatedImage({ imageData }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      return;
    }

    setStarted(true);
    const id = setInterval(() => {
      setCount((pre) => pre + 1);
      // console.log("first")
    }, 3000);
  }, []);

  if (count == imageData.length) {
    setCount(0);
  }

  return (
    <Box width={"100%"}>
      <Image className={styles.fadeIn} width={"100%"} src={imageData[count]} />
      <Box mt={'20px'} width={"100%"}>
        <Image src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" />
      </Box>
    </Box>
    
  );
}

export default AnimatatedImage;
