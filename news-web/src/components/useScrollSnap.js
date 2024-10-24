import { useRef, useEffect } from 'react';

const useScrollSnap = (isSmallScreen) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isSmallScreen) {
      const container = containerRef.current;
      container.style.scrollSnapType = 'y mandatory';
      container.style.overflowY = 'scroll';
      container.style.scrollBehavior = 'smooth';

      const handleScroll = () => {
        const items = container.querySelectorAll('.news-card');
        const offset = container.scrollTop;
        let closest = items[0];

        items.forEach((item) => {
          if (
            Math.abs(item.offsetTop - offset) <
            Math.abs(closest.offsetTop - offset)
          ) {
            closest = item;
          }
        });

        container.scrollTo({
          top: closest.offsetTop,
          behavior: 'smooth',
        });
      };

      container.addEventListener('scroll', handleScroll);

      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isSmallScreen]);

  return containerRef;
};

export default useScrollSnap;
