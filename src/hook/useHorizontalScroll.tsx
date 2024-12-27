import { useCallback, useRef, useState } from "react";

const useHorizontalScroll = <RefElement extends HTMLElement>() => {
  const containerRef = useRef<RefElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [totalX, setTotalX] = useState(0);

  const preventSideEffect = useCallback((e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDragStart: React.MouseEventHandler<RefElement> = e => {
    preventSideEffect(e.nativeEvent);

    setIsDragging(true);
    const x = e.clientX;
    setStartX(x);
    if (containerRef.current && "scrollLeft" in containerRef.current)
      setTotalX(x + containerRef.current.scrollLeft);
  };
  const onDragMove: React.MouseEventHandler<RefElement> = e => {
    preventSideEffect(e.nativeEvent);

    if (!isDragging) return;

    const scrollLeft = totalX - e.clientX;

    if (containerRef.current && "scrollLeft" in containerRef.current)
      containerRef.current.scrollLeft = scrollLeft;
  };
  const onDragEnd: React.MouseEventHandler<RefElement> = e => {
    if (!isDragging) return;
    if (!containerRef.current) return;

    const endX = e.clientX;
    const dragDiff = Math.abs(startX - endX);

    if (dragDiff > 10) preventSideEffect(e.nativeEvent);

    setIsDragging(false);
  };

  return {
    containerRef,
    onDragStart,
    onDragMove,
    onDragEnd,
  };
};

export default useHorizontalScroll;
