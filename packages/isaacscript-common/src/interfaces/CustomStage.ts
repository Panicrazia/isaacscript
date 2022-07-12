/**
 * This is the format of a custom stage in the "isaacscript" section of the "tsconfig.json" file.
 *
 * The contents of this interface are used to create a "tsconfig-isaacscript-section-schema.json"
 * schema with the "ts-json-schema-generator" library.
 *
 * The contents of this interface are validated at run-time against the schema using the Ajv
 * library.
 *
 * The `CustomStage` interface extends this, adding room metadata.
 */
// ts-prune-ignore-next
export interface CustomStageTSConfig {
  /** The name of the custom stage. */
  name: string;

  /**
   * Path to the XML file that contains the rooms for the custom stage (created with Basement
   * Renovator).
   */
  xmlPath: string;

  /** An arbitrarily chosen prefix in the range of 101-999. */
  roomVariantPrefix: number;

  /**
   * An integer between 1 and 13, corresponding to the `LevelStage` enum. This is the number of the
   * stage that will be warped to and used as a basis for the stage by the level generation
   * algorithm.
   */
  baseStage: number;

  /**
   * An integer between 0 and 5, corresponding to the `StageType` enum. This is the number of the
   * stage type that will be warped to and used as a basis for the stage by the level generation
   * algorithm.
   */
  baseStageType: number;
}

/**
 * An object that represents a custom stage. The "metadata.lua" file contains an array of these
 * objects. Besides the room metadata, the data is the same as what is specified inside the
 * "tsconfig.json" file.
 */
export interface CustomStage extends CustomStageTSConfig {
  roomsMetadata: CustomStageRoomMetadata[];
}

/**
 * Metadata about a custom stage room. Each custom stage object contains an array with metadata for
 * each room.
 */
// ts-prune-ignore-next
export interface CustomStageRoomMetadata {
  variant: number;
  shape: number;
  weight: number;
}
