import React from 'react';
import { circleOfFifthsKeys, keyData } from './data';
import { Selection } from './App';
import './CircleOfFifths.css';
import { playNote } from './audio';

interface CircleOfFifthsProps {
  onKeySelect: (key: string, type: 'major' | 'minor') => void;
  selection: Selection;
}

const SVG_SIZE = 440;
const SVG_CENTER = SVG_SIZE / 2;
const MAJOR_RING_OUTER_RADIUS = SVG_SIZE / 2.2;
const MAJOR_RING_INNER_RADIUS = MAJOR_RING_OUTER_RADIUS * 0.7;
const MINOR_RING_OUTER_RADIUS = MAJOR_RING_INNER_RADIUS;
const MINOR_RING_INNER_RADIUS = MINOR_RING_OUTER_RADIUS * 0.6;

const CircleOfFifths: React.FC<CircleOfFifthsProps> = ({ onKeySelect, selection }) => {
  const numKeys = circleOfFifthsKeys.length;
  const angleStep = (2 * Math.PI) / numKeys;

  const getCoords = (angle: number, r: number) => {
    return {
      x: SVG_CENTER + r * Math.cos(angle),
      y: SVG_CENTER + r * Math.sin(angle),
    };
  };

  const getPathData = (startAngle: number, endAngle: number, outerRadius: number, innerRadius: number) => {
    const outerStart = getCoords(startAngle, outerRadius);
    const outerEnd = getCoords(endAngle, outerRadius);
    const innerStart = getCoords(startAngle, innerRadius);
    const innerEnd = getCoords(endAngle, innerRadius);
    const largeArcFlag = angleStep > Math.PI ? 1 : 0;

    return [
      `M ${innerStart.x} ${innerStart.y}`,
      `L ${outerStart.x} ${outerStart.y}`,
      `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
      `L ${innerEnd.x} ${innerEnd.y}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
      'Z'
    ].join(' ');
  };

  const handleKeySelection = (key: string, type: 'major' | 'minor') => {
    onKeySelect(key, type);
    if (type === 'major') {
      playNote(`${key}3`);
    } else {
      const minorKeyName = keyData[key].minor;
      const rootNote = minorKeyName.length > 1 && (minorKeyName[1] === '#' || minorKeyName[1] === 'b')
        ? minorKeyName.substring(0, 2)
        : minorKeyName.substring(0, 1);
      playNote(`${rootNote}3`);
    }
  };

  return (
    <svg width={SVG_SIZE} height={SVG_SIZE} viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}>
      <g>
        {/* Major Keys Ring */}
        {circleOfFifthsKeys.map((key, index) => {
          const startAngle = angleStep * index - angleStep / 2 - Math.PI / 2;
          const endAngle = angleStep * (index + 1) - angleStep / 2 - Math.PI / 2;
          const pathData = getPathData(startAngle, endAngle, MAJOR_RING_OUTER_RADIUS, MAJOR_RING_INNER_RADIUS);
          const textAngle = angleStep * index - Math.PI / 2;
          const textCoords = getCoords(textAngle, (MAJOR_RING_OUTER_RADIUS + MAJOR_RING_INNER_RADIUS) / 2);
          const isSelected = selection.key === key && selection.type === 'major';

          return (
            <g key={`${key}-major`} onClick={() => handleKeySelection(key, 'major')} className={`key-segment ${isSelected ? 'selected' : ''}`}>
              <path d={pathData} />
              <text x={textCoords.x} y={textCoords.y} textAnchor="middle" dy="0.3em" className="major-key">
                {keyData[key].major}
              </text>
            </g>
          );
        })}
        {/* Minor Keys Ring */}
        {circleOfFifthsKeys.map((key, index) => {
          const startAngle = angleStep * index - angleStep / 2 - Math.PI / 2;
          const endAngle = angleStep * (index + 1) - angleStep / 2 - Math.PI / 2;
          const pathData = getPathData(startAngle, endAngle, MINOR_RING_OUTER_RADIUS, MINOR_RING_INNER_RADIUS);
          const textAngle = angleStep * index - Math.PI / 2;
          const textCoords = getCoords(textAngle, (MINOR_RING_OUTER_RADIUS + MINOR_RING_INNER_RADIUS) / 2);
          const isSelected = selection.key === key && selection.type === 'minor';

          return (
            <g key={`${key}-minor`} onClick={() => handleKeySelection(key, 'minor')} className={`key-segment ${isSelected ? 'selected' : ''}`}>
              <path d={pathData} />
              <text x={textCoords.x} y={textCoords.y} textAnchor="middle" dy="0.3em" className="minor-key">
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
