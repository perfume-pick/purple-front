export const scrollRef = (ref: React.RefObject<HTMLElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};
