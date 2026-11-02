import React, { useMemo } from "react";

const CTU = 128;
const COLS = 12;
const ROWS = 8;
const MIN_BLOCK = 16;

// Small seeded PRNG so the pattern is identical on every load.
const mulberry32 = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), seed | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Splits a block the way a VVC coding tree does: quad, binary or ternary
// splits, recursing until the block is left whole or hits the minimum size.
const partition = (x, y, w, h, depth, rand, leaves) => {
  const splitChance = depth === 0 ? 0.9 : 0.62 - depth * 0.12;
  if (Math.min(w, h) <= MIN_BLOCK || rand() > splitChance) {
    leaves.push({ x, y, w, h });
    return;
  }

  const kind = rand();
  const vertical = w > h || (w === h && rand() < 0.5);

  if (w === h && kind < 0.5) {
    const hw = w / 2;
    const hh = h / 2;
    partition(x, y, hw, hh, depth + 1, rand, leaves);
    partition(x + hw, y, hw, hh, depth + 1, rand, leaves);
    partition(x, y + hh, hw, hh, depth + 1, rand, leaves);
    partition(x + hw, y + hh, hw, hh, depth + 1, rand, leaves);
  } else if (kind < 0.82 || (vertical ? w : h) < MIN_BLOCK * 4) {
    if (vertical) {
      partition(x, y, w / 2, h, depth + 1, rand, leaves);
      partition(x + w / 2, y, w / 2, h, depth + 1, rand, leaves);
    } else {
      partition(x, y, w, h / 2, depth + 1, rand, leaves);
      partition(x, y + h / 2, w, h / 2, depth + 1, rand, leaves);
    }
  } else if (vertical) {
    const q = w / 4;
    partition(x, y, q, h, depth + 1, rand, leaves);
    partition(x + q, y, q * 2, h, depth + 1, rand, leaves);
    partition(x + q * 3, y, q, h, depth + 1, rand, leaves);
  } else {
    const q = h / 4;
    partition(x, y, w, q, depth + 1, rand, leaves);
    partition(x, y + q, w, q * 2, depth + 1, rand, leaves);
    partition(x, y + q * 3, w, q, depth + 1, rand, leaves);
  }
};

const buildBlocks = () => {
  const rand = mulberry32(20240701);
  const leaves = [];
  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      partition(col * CTU, row * CTU, CTU, CTU, 0, rand, leaves);
    }
  }
  return leaves.map((block) => {
    const lit = rand() < 0.07;
    return {
      ...block,
      lit,
      fillOpacity: 0.08 + rand() * 0.22,
      delay: -rand() * 7,
      duration: 5 + rand() * 5,
    };
  });
};

// Decorative backdrop for the hero: a coding-tree-unit partition map, the
// block structure that intra prediction and in-loop filters operate on.
const QuadtreeBackdrop = ({ className = "" }) => {
  const blocks = useMemo(buildBlocks, []);

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        maskImage: "radial-gradient(ellipse 70% 75% at 72% 38%, #000 15%, transparent 72%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 75% at 72% 38%, #000 15%, transparent 72%)",
      }}
    >
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${COLS * CTU} ${ROWS * CTU}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="rgba(148, 163, 184, 0.14)" strokeWidth="1">
          {blocks.map((b, i) => (
            <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} vectorEffect="non-scaling-stroke" />
          ))}
        </g>
        <g fill="#4fd2f0">
          {blocks
            .filter((b) => b.lit)
            .map((b, i) => (
              <rect
                key={i}
                className="block-pulse"
                x={b.x + 1}
                y={b.y + 1}
                width={b.w - 2}
                height={b.h - 2}
                fillOpacity={b.fillOpacity}
                style={{ animationDelay: `${b.delay}s`, animationDuration: `${b.duration}s` }}
              />
            ))}
        </g>
      </svg>
    </div>
  );
};

export default QuadtreeBackdrop;
