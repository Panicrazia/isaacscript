import { ISCFeature } from "../../enums/ISCFeature";
import { ModCallbackCustom } from "../../enums/ModCallbackCustom";
import { shouldFireCollectibleType } from "../../shouldFire";
import { CustomCallback } from "../private/CustomCallback";

export class PostPlayerCollectibleRemoved extends CustomCallback<ModCallbackCustom.POST_PLAYER_COLLECTIBLE_REMOVED> {
  constructor() {
    super();

    this.featuresUsed = [ISCFeature.PLAYER_COLLECTIBLE_DETECTION];
  }

  protected override shouldFire = shouldFireCollectibleType;
}
