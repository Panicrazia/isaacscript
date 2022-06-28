/**
 * Corresponds to `LevelCurse`.
 *
 * This is represented as an object instead of an enum due to limitations with TypeScript enums. (We
 * want this type to be a child of the `BitFlag` type.)
 *
 * @enum
 * @notExported
 */
const LevelCurseInternal = {
  NONE: 0,

  /** 1 << 0 */
  DARKNESS: 1 << 0,

  /** 1 << 1 */
  LABYRINTH: 1 << 1,

  /** 1 << 2 */
  LOST: 1 << 2,

  /** 1 << 3 */
  UNKNOWN: 1 << 3,

  /** 1 << 4 */
  CURSED: 1 << 4,

  /** 1 << 5 */
  MAZE: 1 << 5,

  /** 1 << 6 */
  BLIND: 1 << 6,

  /** 1 << 7 */
  GIANT: 1 << 7,
} as const;

type LevelCurseValue = BitFlag & {
  readonly __levelCurseBrand: unique symbol;
};
type LevelCurseType = {
  [K in keyof typeof LevelCurseInternal]: LevelCurseValue;
};

export const LevelCurse = LevelCurseInternal as LevelCurseType;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type LevelCurse = LevelCurseType[keyof LevelCurseType];

export const LevelCurseZero = 0 as BitFlags<LevelCurse>;
