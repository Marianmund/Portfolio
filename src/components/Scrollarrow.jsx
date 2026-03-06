import { useEffect, useState } from "react";

export default function ScrollArrow() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 80); // hide after 80px
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollDown}
      className={`
        fixed bottom-10 left-1/2 -translate-x-1/2
        text-3xl cursor-pointer select-none
        transition-all text-gray-200 duration-300 ease-out
        ${visible
          ? "opacity-100 translate-y-0 animate-bounce"
          : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      ↓
    </div>
  );
}
