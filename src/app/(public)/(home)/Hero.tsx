'use client';
import useScrollSnap, { forceScrollTo } from "@/hooks/useScrollSnap";
import useKeyScroll from "@/hooks/useKeyScroll";
import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  const hero = useRef<HTMLElement | null>(null);
  const elemInfo = useRef<{ elemAbsTop: number; elemAbsBottom: number; elemCtr: number } | null>(null);

  useScrollSnap(hero);
<<<<<<< HEAD

  const onKeyPress = useCallback((isUp: boolean) => {
    const currHero = hero.current;
    if (!currHero) return;

    if (!elemInfo.current) {
      const elemRect = currHero.getBoundingClientRect();
      const elemAbsTop = elemRect.top - window['exports']['main']?.getBoundingClientRect().top;
      const elemAbsBottom = elemAbsTop + elemRect.height;
      const elemCtr = elemAbsTop + elemRect.height / 2;
      elemInfo.current = {
        elemAbsTop,
        elemAbsBottom,
        elemCtr,
      };
    }

    const info = elemInfo.current;
    const scrollCtr = window.scrollY + window.innerHeight / 2;

    if (
      (scrollCtr > info.elemAbsTop && scrollCtr < info.elemAbsBottom) ||
      (scrollCtr >= info.elemCtr && scrollCtr <= info.elemCtr + window.innerHeight && isUp) ||
      (scrollCtr <= info.elemCtr && scrollCtr >= info.elemCtr - window.innerHeight && !isUp)
    ) {
      const to = isUp ? currHero.previousSibling : currHero.nextSibling;
      if (to) forceScrollTo(to as Element);
    } else {
      forceScrollTo(currHero);
    }
  }, []);

  useKeyPress('ArrowUp', () => onKeyPress(true));
  useKeyPress('ArrowDown', () => onKeyPress(false));
  useKeyPress('w', () => onKeyPress(true));
  useKeyPress('s', () => onKeyPress(false));

  const handleArrowClick = () => forceScrollTo(hero.current?.nextSibling as Element);

=======
  useKeyScroll(hero);
  
>>>>>>> origin/main
  return (
    <section ref={hero} id="hero" className="relative flex flex-col gap-8 items-center">
      <div className="absolute inset-0 h-full w-full justify-center bg-grad-filter" style={{ zIndex: 0 }}></div>

      <span className="w-fit flex flex-col items-center justify-center my-auto font-bold scale-75 sm:scale-95 md:scale-110">
        <h2 className="whitespace-nowrap uppercase text-neutral text-center">
          Expertise.<br />Innovation.<br />Client Focus.<br />Quality of Work.
        </h2>

        <span className="ml-3 flex flex-nowrap items-center justify-start logo-rainbow p-0">
          <h1>Pink</h1>
          <h1 className="flex flex-nowrap items-center justify-center">
            Cl<div id="cloudMask" className="mx-0.5 mt-1" />ud.
          </h1>
        </span>
      </span>

      <div className="absolute inset-0 h-full w-full flex flex-col items-center justify-end arrow">
        <IoIosArrowDown
          onClick={handleArrowClick}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-5 text-gray-300 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Hero;
