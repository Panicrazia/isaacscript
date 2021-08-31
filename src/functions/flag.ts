/**
 * Helper function to add a bit flag to an existing set of bit flags.
 * This is a variadic function, so pass as many flags as you want to add.
 *
 * Example 1:
 * ```
 * // Give the player spectral tears
 * const player = Isaac.GetPlayer();
 * player.TearFlags = addFlag(player.TearFlags, TearFlags.TEAR_SPECTRAL);
 * ```
 *
 * Example 2:
 * ```
 * // Give the player spectral and homing tears
 * const player = Isaac.GetPlayer();
 * player.TearFlags = addFlag(player.TearFlags, TearFlags.TEAR_SPECTRAL, TearFlags.TEAR_HOMING);
 * ```
 *
 * @param flags The existing set of bit flags.
 * @param flag One or more bit flags to add, each as a separate argument.
 * @returns The combined bit flags.
 */
export function addFlag(flags: int, ...flag: int[]): int {
  for (const f of flag) {
    flags |= f;
  }

  return flags;
}

/**
 * Helper function to check to see if a particular bit flag is set to true.
 * This is a variadic function, so pass as many flags as you want to check for.
 * If passed multiple flags, it will only return true if all of the flags are set.
 *
 * Example:
 * ```
 * const player = Isaac.GetPlayer();
 * if (hasFlag(player.TearFlags, TearFlags.TEAR_SPECTRAL) {
 *   // The player currently has spectral tears
 * }
 * ```
 *
 * @param flags The existing set of bit flags.
 * @param flag One or more bit flags to check for, each as a separate argument.
 */
export function hasFlag(flags: int, ...flag: int[]): boolean {
  for (const f of flag) {
    if (!((flags & f) === f)) {
      return false;
    }
  }

  return true;
}

/**
 * Helper function to remove a bit flag from an existing set of bit flags.
 * This is a variadic function, so pass as many flags as you want to remove.
 *
 * Example:
 * ```
 * // Remove spectral tears from the player, if present
 * const player = Isaac.GetPlayer();
 * player.TearFlags = removeFlag(player.TearFlags, TearFlags.TEAR_SPECTRAL);
 * ```
 *
 * @param flags The existing set of bit flags.
 * @param flag One or more bit flags to remove, each as a separate argument.
 * @returns The combined bit flags.
 */
export function removeFlag(flags: int, ...flag: int[]): int {
  for (const f of flag) {
    flags &= ~f;
  }

  return flags;
}
