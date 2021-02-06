# Enemies
This folder contains all the logic necessary to handle randomization of enemy information. For now it only handles shuffling of enemy souls and drops, but can further be extended to randomize stats, resistances, and maybe even positions.

## Enemies
This file returns a function that provides a fresh list of enemy data.

## EnemyProcessor
To ensure that multiple enemy randomization settings don't step on each other's toes, this class handles the actual execution of the randomization functions, and will require a caller to specify which transformations they want before applying them all in one go.

## randomizeEnemySouls
Shuffles all enemy souls among the enemies such that every soul is assigned to at least one enemy.

## shuffleEnemyDrops
Shuffles all enemy drops among the enemies.
