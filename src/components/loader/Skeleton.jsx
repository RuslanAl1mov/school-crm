import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = ({
  width = '100%',       // Ширина по умолчанию — на 100% от родителя
  height = '20',      // Высота по умолчанию — на 100% от родителя
  speed = 2,            // Скорость анимации
  backgroundColor = '#f3f3f3',  // Цвет фона
  foregroundColor = '#ecebeb',  // Цвет переднего плана
  rx = 10,              // Радиус закругления углов
  ry = 10               // Радиус закругления углов
}) => (
  <ContentLoader
    speed={speed}
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    viewBox={`0 0 ${width} ${height}`}
  >
    <rect x="0" y="0" rx={rx} ry={ry} width={width} height={height} />
  </ContentLoader>
);

export default Skeleton;
