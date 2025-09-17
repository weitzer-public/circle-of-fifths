import React from 'react';
import { circleOfFifthsKeys, keyData } from './data';
import './CircleOfFifths.css';

interface CircleOfFifthsProps {
  onKeySelect: (keyName: string) => void;
  selectedKey: string;
}

const SVG_SIZE = 440;
const SVG_CENTER = SVG_SIZE / 2;
const CIRCLE_RADIUS = SVG_SIZE / 2.2;
const INNER_RADIUS = CIRCLE_RADIUS * 0.5;
const MAJOR_KEY_RADIUS = CIRCLE_RADIUS * 0.8;
const MINOR_KEY_RADIUS = CIRCLE_RADIUS * 0.6;

const CircleOfFifths: React.FC<CircleOfFifthsProps> = ({ onKeySelect, selectedKey }) => {
  const numKeys = circleOfFifthsKeys.length;
  const angleStep = (2 * Math.PI) / numKeys;

  const getCoords = (angle: number, r: number) => {
    return {
      x: SVG_CENTER + r * Math.cos(angle),
      y: SVG_CENTER + r * Math.sin(angle),
    };
  };

  return (
    <svg width={SVG_SIZE} height={SVG_SIZE} viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}>
      <g>
        {circleOfFifthsKeys.map((key, index) => {
          const startAngle = angleStep * index - angleStep / 2 - Math.PI / 2;
          const endAngle = angleStep * (index + 1) - angleStep / 2 - Math.PI / 2;

          const outerStart = getCoords(startAngle, CIRCLE_RADIUS);
          const outerEnd = getCoords(endAngle, CIRCLE_RADIUS);
          const innerStart = getCoords(startAngle, INNER_RADIUS);
          const innerEnd = getCoords(endAngle, INNER_RADIUS);

          const largeArcFlag = angleStep > Math.PI ? 1 : 0;

          const pathData = [
            `M ${innerStart.x} ${innerStart.y}`,
            `L ${outerStart.x} ${outerStart.y}`,
            `A ${CIRCLE_RADIUS} ${CIRCLE_RADIUS} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
            `L ${innerEnd.x} ${innerEnd.y}`,
            `A ${INNER_RADIUS} ${INNER_RADIUS} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
            'Z'
          ].join(' ');

          const textAngle = angleStep * index - Math.PI / 2;
          const majorKeyCoords = getCoords(textAngle, MAJOR_KEY_RADIUS);
          const minorKeyCoords = getCoords(textAngle, MINOR_KEY_RADIUS);

          return (
            <g key={key} onClick={() => onKeySelect(key)} className={`key-segment ${selectedKey === key ? 'selected' : ''}`}>
              <path d={pathData} />
              <text x={majorKeyCoords.x} y={majorKeyCoords.y} textAnchor="middle" dy="0.3em" className="major-key">
                {keyData[key].major}
              </text>
              <text x={minorKeyCoords.x} y={minorKeyCoords.y} textAnchor="middle" dy="0.3em" className="minor-key">
                {keyData[key].minor}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default CircleOfFifths;
