"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for touch devices to prevent rendering custom cursor on mobile
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    let isHovering = false;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e: MouseEvent) => {
      currentX = e.clientX;
      currentY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${isHovering ? 1.15 : 1})`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Identify interactive elements
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${isHovering ? 1.15 : 1})`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}} />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] origin-top-left transition-transform duration-150 ease-out will-change-transform flex items-center justify-center"
        style={{ imageRendering: "pixelated", transform: "translate3d(-100px, -100px, 0)" }}
      >
        {/* Hotspot adjustment: Shift image so tip aligns with 0,0 */}
        <img 
          src="/cursor.svg" 
          alt="" 
          width={28}
          height={28}
          className="transform -translate-x-[2px] -translate-y-[2px]" 
          style={{ imageRendering: "pixelated" }}
        />
      </div>
    </>
  );
}
