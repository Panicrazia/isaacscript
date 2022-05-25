/* eslint-disable isaacscript/strict-enums */
/* cspell:disable */

import { TrinketType } from "isaac-typescript-definitions";

export const DEFAULT_TRINKET_DESCRIPTION = "Unknown";

// This is a temporary map due to missing features in the vanilla API. (Otherwise, this would be
// converted to a type-safe object.)
export const TRINKET_DESCRIPTION_MAP: ReadonlyMap<TrinketType, string> =
  new Map([
    [1, "Gulp!"],
    [2, "It feels lucky?"],
    [3, "Trickle charge"],
    [4, "It's broken"],
    [5, "Challenge up"],
    [6, "It kinda works"],
    [7, "Faith up"],
    [8, "I remember these"],
    [9, "Wub wub!"],
    [10, "Wiggle waggle!"],
    [11, "Woop woop!"],
    [12, "Blub blub!"],
    [13, "YES!"],
    [14, "Your feet feel stronger"],
    [15, "There's something inside it"],
    [16, "???"],
    [17, "Evil up"],
    [18, "Faith up"],
    [19, "Master of lockpicking"],
    [20, "Wish granted"],
    [21, "???"],
    [22, "Evil up"],
    [23, "???"],
    [24, "Wealth of gas"],
    [25, "Uh-oh!"],
    [26, "Zip zoop!"],
    [27, "Wooosh!"],
    [28, "Eternal life?"],
    [29, "It stinks"],
    [30, "Poison shots"],
    [31, "Piercing shots"],
    [32, "Touch fuzzy, get dizzy"],
    [33, "Fetal protection"],
    [34, "It calls out to its brothers"],
    [35, "DMG up"],
    [36, "It feels lucky?"],
    [37, "Speed up"],
    [38, "It emanates purity "],
    [39, "Yay, cancer!"],
    [40, "Your rage grows"],
    [41, "Tastes like burning"],
    [42, "Luck up!"],
    [43, "Cursed?"],
    [44, "Don't swallow it"],
    [45, "Luck of the draw"],
    [46, "Consume thy enemy"],
    [48, "It glows with power"],
    [49, "Wealth of health"],
    [50, "Wealth of chaos"],
    [51, "Wealth of answers"],
    [52, "Wealth of wealth"],
    [53, "Well, that's not coming off"],
    [54, "Dead friend"],
    [55, "Faith's reward"],
    [56, "Payment received "],
    [57, "Imaginary friend"],
    [58, "Your rage grows"],
    [59, "May you see your destination"],
    [60, "Revenge from beyond"],
    [61, "The left-hand path reaps dark rewards"],
    [62, "It shines for its brothers"],
    [63, "Fuse cutter"],
    [64, "Bleep bloop blop"],
    [65, "Floooooooooop!"],
    [66, "Pft"],
    [67, "You feel cursed... kinda."],
    [68, "It pulls"],
    [69, "You feel faded"],
    [70, "Itchy, tasty..."],
    [71, "Creepy bombs"],
    [72, "Lil charge"],
    [73, "Pop! Pop!"],
    [74, "The ground below feels hollow..."],
    [75, "Effect not found?"],
    [76, "It's double down time!"],
    [77, "Bounce back!"],
    [78, "Extended stat effect time!"],
    [79, "I'm stuck in a loop..."],
    [80, "With darkness comes power"],
    [81, "Blind to damage"],
    [82, "Feel lucky?"],
    [83, "Stores are open"],
    [84, "Feels greedy"],
    [85, "Karma up"],
    [86, "The poop is moving..."],
    [87, "You feel her love"],
    [88, "Never again!"],
    [89, "Keep your friends close..."],
    [90, "Fartoom!"],
    [91, "Eww"],
    [92, "Stat booster"],
    [93, "You stink"],
    [94, "It also stinks!"],
    [95, "It looks dead"],
    [96, "Foop foop!"],
    [97, "Sick..."],
    [98, "Seems magic..."],
    [99, "Boing!"],
    [100, "It needs power"],
    [101, "I think it's broken"],
    [102, "Double moon"],
    [103, "="],
    [104, "Make a wish"],
    [105, "I wonder what it is"],
    [106, "Uncorked"],
    [107, "Drain me"],
    [108, "That's a hard nut to crack!"],
    [109, "Stuck!"],
    [110, "Feels lucky..."],
    [111, "Drips with blood..."],
    [112, "..."],
    [113, "I bring War"],
    [114, "I bring Pestilence"],
    [115, "I bring Famine"],
    [116, "I bring Death"],
    [117, "I bring Conquest"],
    [118, "They are growing..."],
    [119, "Regen!"],
    [120, "Danger charge"],
    [121, "My faith protects me"],
    [122, "Can't hold it!"],
    [123, "Angelic spoils"],
    [124, "Hold the door"],
    [125, "Charged friends"],
    [126, "Wealth of flies"],
    [127, "Feed them magic!"],
    [128, "It looks brittle"],
    [129, "Don't chew on it"],
    [130, "It's leaking"],
    [131, "Wealth of purity"],
    [132, "Mystery medicine"],
    [133, "Faster explosions"],
    [134, "Mega farts"],
    [135, "Watch the world burn"],
    [136, "Bombs are key"],
    [137, "Forget me not..."],
    [138, "t's broken9Reroll your dest       "],
    [139, "It feels lucky"],
    [140, "It feels empty"],
    [141, "Sing for your friends"],
    [142, "My faith protects me"],
    [143, "Voltage starving"],
    [144, "Ding!"],
    [145, "Luck way up. Don't lose it!"],
    [146, "His special customer"],
    [147, "Wealth of power"],
    [148, "Gather round"],
    [149, "Push in case of emergency"],
    [150, "Look between the rooms"],
    [151, "No more spikes"],
    [152, "Seek the stars"],
    [153, "A piece of her love"],
    [154, "Bonus roll"],
    [155, "Walk the path of the saint"],
    [156, "HP up"],
    [157, "Death awaits"],
    [158, "A hole in your pocket"],
    [159, "Less is more"],
    [160, "Free goodies!"],
    [161, "Walk the path of the wicked"],
    [162, "Unleash your inner demon"],
    [163, "Oops!"],
    [164, "Twice the bang!"],
    [165, "Don't want!"],
    [166, "???"],
    [167, "Friends from beyond"],
    [168, "A brittle blessing"],
    [169, "Looks familiar..."],
    [170, "Call to the other side"],
    [171, "Money talks"],
    [172, "Wealth of misery"],
    [173, "Give it to me"],
    [174, "6"],
    [175, "What could it open?"],
    [176, "Mini friend"],
    [177, "You feel braver"],
    [178, "Bang!"],
    [179, "Controllable buddies!"],
    [180, "Finally!"],
    [181, "Fun extras"],
    [182, "Virtue's reward"],
    [183, "I'm seeing double..."],
    [184, "Give them a home"],
    [185, "Infested"],
    [186, "Attack buddy"],
    [187, "Double vision?"],
    [188, "Stay frosty"],
    [189, "Revel in death"],
  ]);
