import { SaveDataKey } from "../../../../enums/SaveDataKey";
import { SerializationType } from "../../../../enums/SerializationType";
import { deepCopy } from "../../../../functions/deepCopy";
import { jsonEncode } from "../../../../functions/jsonHelpers";
import { log } from "../../../../functions/log";
import { isTableEmpty, iterateTableInOrder } from "../../../../functions/table";
import { isTable } from "../../../../functions/types";
import { SaveData } from "../../../../interfaces/SaveData";
import { SAVE_DATA_MANAGER_DEBUG } from "./constants";

export function saveToDisk(
  mod: Mod,
  saveDataMap: LuaMap<string, SaveData>,
  saveDataDefaultsMap: LuaMap<string, SaveData>,
  saveDataConditionalFuncMap: LuaMap<string, () => boolean>,
): void {
  const allSaveData = getAllSaveDataToWriteToDisk(
    saveDataMap,
    saveDataDefaultsMap,
    saveDataConditionalFuncMap,
  );
  const jsonString = jsonEncode(allSaveData);
  mod.SaveData(jsonString); // Write it to the "save#.dat" file
  log('The save data manager wrote data to the "save#.dat" file.');
}

function getAllSaveDataToWriteToDisk(
  saveDataMap: LuaMap<string, SaveData>,
  saveDataDefaultsMap: LuaMap<string, SaveData>,
  saveDataConditionalFuncMap: LuaMap<string, () => boolean>,
): LuaMap<AnyNotNil, unknown> {
  const allSaveData = new LuaMap<AnyNotNil, unknown>();

  iterateTableInOrder(
    saveDataMap,
    (subscriberName, saveData) => {
      // Handle the feature of the save data manager where certain mod features can conditionally
      // write their data to disk.
      const conditionalFunc = saveDataConditionalFuncMap.get(subscriberName);
      if (conditionalFunc !== undefined) {
        const shouldSave = conditionalFunc();
        if (!shouldSave) {
          return;
        }
      }

      // Strip out the room part of the save data (and any other arbitrary fields that they might
      // have added).
      const saveDataWithoutRoom: SaveData = {
        persistent: saveData.persistent,
        run: saveData.run,
        level: saveData.level,
      };

      // If there is no data on any savable fields, then we can move on to the next feature.
      if (isTableEmpty(saveDataWithoutRoom as LuaTable<AnyNotNil, unknown>)) {
        return;
      }

      // If we encode TypeScriptToLua Maps into JSON, it will result in a lot of extraneous data
      // that is unnecessary. Make a copy of the data and recursively convert all TypeScriptToLua
      // Maps into Lua tables.
      const saveDataCopy = deepCopy(
        saveDataWithoutRoom,
        SerializationType.SERIALIZE,
        subscriberName,
      );

      // Strip out default values.
      const saveDataDefaults = saveDataDefaultsMap.get(subscriberName) ?? {};
      for (const saveDataKey of [SaveDataKey.RUN, SaveDataKey.LEVEL]) {
        const saveDataTable = saveDataWithoutRoom[saveDataKey];
        if (saveDataTable === undefined) {
          continue;
        }

        const defaultSaveDataTable = saveDataDefaults[saveDataKey] ?? {};
        deleteDefaultValues(saveDataTable, defaultSaveDataTable);

        if (isTableEmpty(saveDataTable as LuaMap<AnyNotNil, unknown>)) {
          saveDataWithoutRoom[saveDataKey] = undefined;
        }
      }

      // If there is no data after pruning, then we can move on to the next feature.
      if (isTableEmpty(saveDataWithoutRoom as LuaTable<AnyNotNil, unknown>)) {
        return;
      }

      allSaveData.set(subscriberName, saveDataCopy);
    },
    SAVE_DATA_MANAGER_DEBUG,
  );

  return allSaveData;
}

/**
 * We can minimize the amount of data that we have to write to disk by pruning out all of the
 * default values (since merging them would have no effect).
 */
function deleteDefaultValues(
  saveDataTable: unknown,
  defaultSaveDataTable: unknown,
) {
  if (!isTable(saveDataTable)) {
    error(
      `Failed to delete the default values from a table, since the type of the save data table was: ${typeof saveDataTable}`,
    );
  }

  if (!isTable(defaultSaveDataTable)) {
    error(
      `Failed to delete the default values from a table, since the type of the default save data table was: ${typeof defaultSaveDataTable}`,
    );
  }
}
