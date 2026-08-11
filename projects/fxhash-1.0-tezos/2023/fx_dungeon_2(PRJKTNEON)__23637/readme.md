Welcome to fx_dungeon_2 PRJKTNEON edition, a little roguelike experiment living on the Tezos blockchain. Will you be able to get out of the dungeon's depths alive? As in the 1st iteration, each token features a randomly generated dungeon with limited resources. The layout is the same everytime (on the same token), but you'll need to master each level perfectly if you want to beat the game - it's very difficult! And if you die, you need to start over ;) To beat the game, you need to go up in the dungeon until you find the final upward stairs!

While the base code is the same as fx_dungeon_2, some improvements have been applied (check below), and the game features completely new characters, sprites, textures, sounds, and game console designs.

## Controls
[W,A,S,D] or [↑ ↓ → ←] to move
[SPACE] to interact with stairs you are on
[I] to bring up / exit the character screen
[P] to toggle sound
[R] to restart the game

## Characters
- The game features different character classes, with different strength, resistance and hunger stats
- The stronger a character is, the more damage it will do to creatures around the dungeon
- The more resistant a character is, the less damage it will receive from enemies and structures

### Netrunner
- Netrunners have average strength and defense stats. They have an average attack speed

### Street kid
- Street kids are less strong but more resistant than Netrunners. They are slow to attack

### Samurai
- Samurais are very strong, but are not very resistant and they take damage very easily. They have a superior attack speed

## Exploration
- There are different floors to explore, from 2 (very common) up to 7 (very rare)
- On each floor you'll find obstacles to break, potions and enemies to fight
- Will you manage your resources correctly? If you die, you'll need to restart the game!
- The map will reveal itself as you explore it

## Potions
- There are potions of various sizes scattered around each level. Use [SPACE] on them to drink them and refill some of your HPs

## Combat
- To attack an enemy, you must need to be in a tile next to it
- To attack an enemy, just press the key to move towards it
- Combat happens in real time. Smash that keyboard!

### Enemies
- There are different types of enemies, some are weaker and some are stronger
- Radioactive blobs are very fast, but also very weak and easily killed. They are the most common in the dungeon
- Failed clones are slow, but they do more damage than a rat. They are also less common
- Grunts are fast and strong enemies with high defense stats. If you spot one, prepare to smash that keyboard to kill it! They are a rare type of enemy
- There's no UI indications of the current enemy status, approach new fights carefully! You'll know when an enemy is dead when, well, it's dead
- Enemies might look the same, but some are stronger and some are weaker than others, while maintaining their general feel

## Console conditions
- In the 1st iteration of fx_dungeon_2, the game used to run on consoles of different ages and conditions. This time, since we live in the future, each console is brand new, but comes in three different design, each more rare than the previous one. Can you get them all?

## Improved from the fx_dungeon_2
- Fixed a bug where the death dialog wouldn't display upon restart
- Fixed doors' health not resetting upon restart
- Upon restart, enemies near the player weren't cleared, leading to hurtful deaths
- Fixed a couple of sprites animations