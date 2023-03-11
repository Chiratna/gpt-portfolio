import {
  AnimatePresence,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
const ITEM_SIZE = 412;

const BACKDROPS = [
  "https://images.unsplash.com/photo-1640499900704-b00dd6a1103a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1640499900704-b00dd6a1103a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1636572481914-a07d36917486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

const SMALL_CARDS = [
  "https://i.pinimg.com/736x/8b/b6/97/8bb697876599fa66410e00db919b143e.jpg",
  "https://e0.pxfuel.com/wallpapers/571/889/desktop-wallpaper-baby-groot-cool-groot.jpg",
  "https://i.pinimg.com/736x/8b/b6/97/8bb697876599fa66410e00db919b143e.jpg",
  "https://e0.pxfuel.com/wallpapers/571/889/desktop-wallpaper-baby-groot-cool-groot.jpg",
];

const SONG_LIST = [
  {
    song: "Kanaa Yaari",
    singer: "Kaifi Khalil, Eva B, Wahab Bugati",
  },
  {
    song: "Barish Ka Asar",
    singer: "Twing Strings",
  },
  {
    song: "Kanaa Yaari",
    singer: "Kaifi Khalil, Eva B, Wahab Bugati",
  },
  {
    song: "Barish Ka Asar",
    singer: "Twing Strings",
  },
];

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
  const opacity = useTransform(
    scrollX,
    [(index - 1) * ITEM_SIZE, index * ITEM_SIZE],
    [0, 1],
    {
      clamp: true,
    }
  );

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <Image
        loader={() => img}
        src={img}
        alt="kuch"
        fill
        unoptimized
        style={{ objectFit: "cover" }}
      />
      <div className="absolute left-8 max-w-[40%] top-[50%]  p-2">
        <div className="text-[6rem] font-bold text-white font-montserat overflow-hidden whitespace-nowrap text-ellipsis">
          {SONG_LIST[index].song.toUpperCase()}
        </div>
        <div className="text-[1.5rem] font-semibold text-white font-montserat leading-4 ml-2">
          {SONG_LIST[index].singer}
        </div>
      </div>
    </motion.div>
  );
};

const SmallCard = ({
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

  const scale = useTransform(
    scrollX,
    [(index - 1) * ITEM_SIZE, index * ITEM_SIZE, (index + 1) * ITEM_SIZE],
    [0.7, 1, 0.7],
    {
      clamp: true,
    }
  );

  return (
    <motion.div
      style={{
        scale,
      }}
      className={`relative w-[400px] h-[500px] flex-grow-0 flex-shrink-0 basis-auto rounded-lg z-10 overflow-hidden`}
    >
      <Image
        loader={() => img}
        src={img}
        alt="kuch"
        width={400}
        height={500}
        unoptimized
        style={{ objectFit: "cover" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      <div className="absolute left-4 max-w-[90%] bottom-4 ">
        <div className="text-[2rem] font-semibold text-white font-montserat ml-2">
          {SONG_LIST[index].song}
        </div>
      </div>
    </motion.div>
  );
};

function ScrollAnimation() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const { scrollXProgress, scrollX } = useScroll({
    container: carouselRef,
  });

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleClick = (type: "prev" | "next") => {
    const currentScrollPosition = scrollX.get();
    const scrollOffset =
      type === "next"
        ? currentScrollPosition + ITEM_SIZE
        : currentScrollPosition - ITEM_SIZE;
    carouselRef?.current?.scrollTo({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

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
        className="w-[600px] items-center pr-[200px] space-x-3 flex overflow-x-scroll snap-x snap-mandatory"
      >
        {SMALL_CARDS.map((img, index) => (
          <SmallCard
            img={img}
            key={index}
            index={index}
            scrollX={scrollX}
            scrollProgress={scrollXProgress}
          />
        ))}
      </div>
      <div className="absolute flex bottom-20 left-4 w-[40%] items-center">
        <p className="mx-2 text-white font-montserat">1:28</p>
        <div className="flex-1 h-[2px] bg-[rgba(255,255,255,0.3)]"></div>
        <p className="mx-2 text-white font-montserat">3:28</p>
        <div
          onClick={() => handleClick("prev")}
          className="bg-[rgba(255,255,255,0.3)] w-[60px] h-[60px] rounded-full flex items-center justify-center font-montserat text-white mx-4"
        >
          Prev
        </div>

        <div
          onClick={() => handleClick("next")}
          className="bg-[rgba(255,255,255,0.3)] w-[60px] h-[60px] rounded-full flex items-center justify-center font-montserat text-white mx-4"
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default ScrollAnimation;
