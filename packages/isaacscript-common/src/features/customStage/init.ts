import {
  DoorSlotFlag,
  GridEntityType,
  LevelCurse,
  ModCallback,
  RoomShape,
  RoomType,
} from "isaac-typescript-definitions";
import { ModUpgraded } from "../../classes/ModUpgraded";
import { ModCallbackCustom } from "../../enums/ModCallbackCustom";
import { isArray } from "../../functions/array";
import { hasFlag, removeFlag } from "../../functions/flag";
import {
  CustomStageLua,
  CustomStageRoomMetadata,
} from "../../interfaces/CustomStageLua";
import { CustomStage, RoomTypeMap } from "../../interfaces/private/CustomStage";
import { saveDataManager } from "../saveDataManager/exports";
import { setCustomStageBackdrop } from "./backdrop";
import {
  convertVanillaTrapdoors,
  removeUrnRewards,
  setCustomDecorationGraphics,
  setCustomDoorGraphics,
  setCustomPitGraphics,
  setCustomRockGraphics,
} from "./customStageGridEntities";
import * as metadataJSON from "./metadata.json"; // This will correspond to "metadata.lua" at run-time.
import { setShadows } from "./shadows";
import { streakTextGetShaderParams, streakTextPostRender } from "./streakText";
import v, { customStagesMap } from "./v";
import {
  playVersusScreenAnimation,
  versusScreenInit,
  versusScreenPostRender,
} from "./versusScreen";

export function customStageInit(mod: ModUpgraded): void {
  initRoomTypeMaps();
  if (customStagesMap.size === 0) {
    // If the end-user has no custom stages, we don't have to initialize any of the callbacks.
    return;
  }

  saveDataManager("customStage", v);
  versusScreenInit();

  mod.AddCallback(ModCallback.POST_RENDER, postRender); // 2
  mod.AddCallback(ModCallback.POST_CURSE_EVAL, postCurseEval); // 12
  mod.AddCallback(ModCallback.GET_SHADER_PARAMS, getShaderParams); // 21
  mod.AddCallbackCustom(
    ModCallbackCustom.POST_GRID_ENTITY_BROKEN,
    postGridEntityBrokenRockAlt,
    GridEntityType.ROCK_ALT,
  );
  mod.AddCallbackCustom(
    ModCallbackCustom.POST_GRID_ENTITY_INIT,
    postGridEntityInit,
  );
  mod.AddCallbackCustom(
    ModCallbackCustom.POST_NEW_ROOM_REORDERED,
    postNewRoomReordered,
  );
}

function initRoomTypeMaps() {
  if (!isArray(metadataJSON)) {
    error(
      'The IsaacScript standard library attempted to read the custom stage metadata from the "metadata.lua" file, but it was not an array.',
    );
  }
  const customStagesLua = metadataJSON as CustomStageLua[];

  for (const customStageLua of customStagesLua) {
    const roomTypeMap = getRoomTypeMap(customStageLua);
    const customStage: CustomStage = {
      ...customStageLua,
      roomTypeMap,
    };
    customStagesMap.set(customStage.name, customStage);
  }
}

function getRoomTypeMap(customStageLua: CustomStageLua): RoomTypeMap {
  const roomTypeMap = new Map<
    RoomType,
    Map<RoomShape, Map<DoorSlotFlag, CustomStageRoomMetadata[]>>
  >();

  for (const roomMetadata of customStageLua.roomsMetadata) {
    const roomType = roomMetadata.type as RoomType;

    let roomShapeMap = roomTypeMap.get(roomType);
    if (roomShapeMap === undefined) {
      roomShapeMap = new Map<
        RoomShape,
        Map<DoorSlotFlag, CustomStageRoomMetadata[]>
      >();
      roomTypeMap.set(roomType, roomShapeMap);
    }

    const roomShape = roomMetadata.shape as RoomShape;

    let roomDoorSlotFlagMap = roomShapeMap.get(roomShape);
    if (roomDoorSlotFlagMap === undefined) {
      roomDoorSlotFlagMap = new Map<
        BitFlags<DoorSlotFlag>,
        CustomStageRoomMetadata[]
      >();
      roomShapeMap.set(roomShape, roomDoorSlotFlagMap);
    }

    const doorSlotFlags = roomMetadata.doorSlotFlags as BitFlags<DoorSlotFlag>;
    let rooms = roomDoorSlotFlagMap.get(doorSlotFlags);
    if (rooms === undefined) {
      rooms = [];
      roomDoorSlotFlagMap.set(doorSlotFlags, rooms);
    }

    rooms.push(roomMetadata);
  }

  return roomTypeMap;
}

// ModCallback.POST_RENDER (2)
function postRender() {
  const customStage = v.run.currentCustomStage;
  if (customStage === null) {
    return;
  }

  streakTextPostRender();
  versusScreenPostRender();
}

// ModCallback.POST_CURSE_EVAL (12)
function postCurseEval(
  curses: BitFlags<LevelCurse>,
): BitFlags<LevelCurse> | undefined {
  const customStage = v.run.currentCustomStage;
  if (customStage === null) {
    return undefined;
  }

  // Prevent XL floors on custom stages, since the streak text will not work properly.
  if (hasFlag(curses, LevelCurse.LABYRINTH)) {
    return removeFlag(curses, LevelCurse.LABYRINTH);
  }

  return undefined;
}

// ModCallback.GET_SHADER_PARAMS (22)
function getShaderParams(
  shaderName: string,
): Record<string, unknown> | undefined {
  const customStage = v.run.currentCustomStage;
  if (customStage === null) {
    return;
  }

  streakTextGetShaderParams(customStage, shaderName);
  return undefined;
}

// ModCallbackCustom.POST_GRID_ENTITY_BROKEN
// GridEntityType.ROCK_ALT
function postGridEntityBrokenRockAlt(gridEntity: GridEntity) {
  const customStage = v.run.currentCustomStage;
  if (customStage === null) {
    return;
  }

  removeUrnRewards(customStage, gridEntity);
}

// ModCallbackCustom.POST_GRID_ENTITY_INIT
function postGridEntityInit(gridEntity: GridEntity) {
  const customStage = v.run.currentCustomStage;
  if (customStage === null) {
    return;
  }

  setCustomDecorationGraphics(customStage, gridEntity);
  setCustomRockGraphics(customStage, gridEntity);
  setCustomPitGraphics(customStage, gridEntity);
  setCustomDoorGraphics(customStage, gridEntity);
  convertVanillaTrapdoors(customStage, gridEntity);
}

// ModCallbackCustom.POST_NEW_ROOM_REORDERED
function postNewRoomReordered() {
  const customStage = v.run.currentCustomStage;
  if (customStage === null) {
    return;
  }

  setCustomStageBackdrop(customStage);
  setShadows(customStage);
  playVersusScreenAnimation(customStage);
}
