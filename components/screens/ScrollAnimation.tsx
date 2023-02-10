import {
  AnimatePresence,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
const ITEM_SIZE = 312;

const BACKDROPS = [
  "https://images.unsplash.com/photo-1640499900704-b00dd6a1103a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1640499900704-b00dd6a1103a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

const PLAYER_CARD = [
  "https://i.pinimg.com/736x/8b/b6/97/8bb697876599fa66410e00db919b143e.jpg",
  "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  "https://i.pinimg.com/736x/8b/b6/97/8bb697876599fa66410e00db919b143e.jpg",
  "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
];
//[(index - 1) * ITEM_SIZE, index * ITEM_SIZE],
//  [0, width]
const Backdrop = ({
  img,
  scrollX,
  index,
  width,
}: {
  index: number;
  img: string;
  scrollX: MotionValue<number>;
  width: number;
}) => {
  const transformedWidth = useTransform(
    scrollX,
    [(index - 1) * ITEM_SIZE, index * ITEM_SIZE],
    [0, width],
    {
      clamp: true,
    }
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{ width: transformedWidth }}
    >
      <Image
        loader={() => img}
        src={img}
        alt="kuch"
        fill
        unoptimized
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
};

const MusicCard = ({
  index,
  scrollX,
  scrollProgress,
  img,
}: {
  scrollX: MotionValue<number>;
  index: number;
  scrollProgress: MotionValue<number>;
  img: string;
}) => {
  const opacity = useTransform(
    scrollX,
    [(index - 1) * ITEM_SIZE, index * ITEM_SIZE, (index + 1) * ITEM_SIZE],
    [0.3, 1, 0.3],
    {
      clamp: true,
    }
  );

  //   const scale = useTransform(
  //     scrollProgress,
  //     [(index - 1) * 0.33, index * 0.33, (index + 1) * 0.33],
  //     [400 * 0.8, 400, 400 * 0.8],
  //     {
  //       clamp: true,
  //     }
  //   );
  //   const width = useTransform(
  //     scrollX,
  //     [(index - 1) * ITEM_SIZE, index * ITEM_SIZE, (index + 1) * ITEM_SIZE],
  //     [450, 300, 450],
  //     {
  //       clamp: true,
  //     }
  //   );
  //   const height = useTransform(
  //     scrollX,
  //     [(index - 1) * ITEM_SIZE, index * ITEM_SIZE, (index + 1) * ITEM_SIZE],
  //     [600, 400, 600],
  //     {
  //       clamp: true,
  //     }
  //   );
  return (
    <motion.div
      style={{
        opacity,
      }}
      className={`w-[300px] h-[400px] bg-red-700  flex-grow-0 flex-shrink-0 basis-auto rounded-lg snap-start z-10 overflow-hidden`}
    >
      <Image
        loader={() => img}
        src={img}
        alt="kuch"
        width={300}
        height={400}
        unoptimized
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
};

function ScrollAnimation() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const { scrollXProgress, scrollX } = useScroll({
    container: carouselRef,
  });

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  scrollXProgress.on("change", (scrollPValue) => console.log({ scrollPValue }));
  return (
    <div className="relative flex items-center justify-end w-screen h-screen">
      {BACKDROPS.map((backdrop, index) => (
        <Backdrop
          img={backdrop}
          scrollX={scrollX}
          index={index}
          width={width}
        />
      ))}

      <div
        ref={carouselRef}
        className="w-[450px] h-[450px] pr-[150px] space-x-3 flex overflow-x-scroll snap-x snap-mandatory"
      >
        {PLAYER_CARD.map((img, index) => (
          <AnimatePresence>
            <MusicCard
              img={img}
              key={index}
              index={index}
              scrollX={scrollX}
              scrollProgress={scrollXProgress}
            />
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}

export default ScrollAnimation;
