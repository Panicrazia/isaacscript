import { PoopState } from "../../enums/collections/gridEntityState";
import { PoopGridEntityVariant } from "../../enums/collections/gridEntityVariants";

declare global {
  /**
   * Grid entities of type `GridEntityType.POOP` (14) can be converted to this class with the
   * `GridEntity.ToPoop` method.
   */
  interface GridEntityPoop extends GridEntity {
    GetVariant(): PoopGridEntityVariant;
    ReduceSpawnRate(): void;
    RespawnRedPoop(): void;

    ReducedSpawnRate: boolean;
    ReviveTimer: int;
    State: PoopState;
    StateAnimation: string;
    UnderPlayer: boolean;
  }
}
