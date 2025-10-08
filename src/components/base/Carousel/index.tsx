import { useCallback, useEffect, useMemo, useState } from 'react';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';

interface CarouselProps {
  imgArray: string[];
  color?: 'orange' | 'white';
}

export const Carousel = ({ imgArray, color }: CarouselProps) => {
  const totalCount = imgArray.length;
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [carouselTransition, setCarouselTransition] = useState('');

  const resetIndexAndTransition = useCallback(() => {
    setTimeout(() => {
      setCarouselIndex(0);
      setCarouselTransition('none');
    }, 0);
  }, []);

  const controlTime = useMemo(() => {
    return carouselTransition === 'none' ? 500 : 2000;
  }, [carouselTransition]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (carouselIndex === totalCount - 1) {
        resetIndexAndTransition();
      }
      setCarouselIndex((prev) => (prev + 1) % totalCount);
      setCarouselTransition('transform 0.5s ease-in-out');
    }, controlTime);

    return () => clearInterval(timer);
  }, [carouselIndex, carouselTransition, controlTime, totalCount, resetIndexAndTransition]);

  return (
    <div
      className={sprinkles({
        justifyContent: 'center',
        alignItems: 'center',
      })}
      style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%', // 보는 영역
          transform: `translateX(-${carouselIndex * 100}%)`,
          transition: carouselTransition,
        }}
      >
        {imgArray.map((img, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 100%',
              minWidth: '100%',
            }}
          >
            <img key={`img-${index}`} src={img} alt={img} style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
      <div
        style={{ position: 'absolute', width: '100%', height: '40px', bottom: '0', gap: '8px' }}
        className={sprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'center' })}
      >
        {Array.from({ length: totalCount }).map((_, index) => (
          <div
            key={`circle-${index}`}
            className={sprinkles({
              backgroundColor: carouselIndex === index ? (color === 'orange' ? 'primary' : 'white') : 'transparent',
            })}
            style={{
              width: '8px',
              aspectRatio: '1/1',
              borderRadius: '50%',
              border:
                carouselIndex === index
                  ? 'none'
                  : color === 'orange'
                    ? `1px solid ${paletteTheme.palette.gray300}`
                    : `1px solid ${paletteTheme.palette.white}`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
