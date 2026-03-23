# Minecraft Bedrock Server Optimizer (MCBSO)

A Minecraft Bedrock Edition server optimization addon built with the Script API. MCBSO reduces server lag through entity management, AI throttling, and performance monitoring — all configurable at runtime via an in-game UI.

---

## Features

### TPS Monitor
Measures server TPS via a rolling average of tick deltas. Players can toggle a live TPS readout in the action bar using `/mcbso:tps`.

### ClearLag
Automatically removes all dropped items and XP orbs across every dimension on a configurable interval (default: 20 minutes). Sends countdown warnings at 1 minute, 30 seconds, and 10 seconds before each clear.

### AFK Detection
Detects idle players based on position change and tags them with `afk`. Configurable threshold and movement sensitivity.

### Spawn Limiter
Enforces per-type entity caps within a 16-block radius. When a limit is exceeded the newly spawned entity is removed immediately. Sends actionbar notifications to nearby players and operators. Limits are fully editable at runtime through the settings UI — add, modify, or remove mob types without restarting the server.

### AI-LOD System
Distance-based AI throttling across all dimensions. Entities are sorted into three tiers every check interval:

| Tier | Distance | Behavior |
|------|----------|----------|
| 1 | 0 – 16 blocks | Full AI, no restrictions |
| 2 | 16 – 48 blocks | `clearVelocity()` when moving away from all players |
| 3 | 48+ blocks | Frozen via `clearVelocity()` every interval, `ai_frozen` tag set |

Entities with the `ai_exempt` tag or a custom name tag are always skipped. Combine with the included Behavior Pack overrides to filter expensive AI goals (pathfinding, target search) at the C++ engine level using the `ai_frozen` tag.

### Villager Trade Exempt
Villagers currently being traded with receive the `ai_exempt` tag for 30 seconds, keeping their AI fully active during and after a trade. Uses a combined `playerInteractWithEntity` event and component polling approach for reliability.

### Mob Cap Warning
Periodically counts all non-player, non-item entities in the Overworld and notifies operators if the count exceeds a configurable threshold.

---

## In-Game Settings UI

All values are configurable at runtime via `/mcbso:settings` (OP only). Changes are saved persistently using `world.setDynamicProperty()` and take effect immediately without a server restart.

**Categories:**
- ClearLag — interval, mob cap warning threshold and check interval
- AFK Detection — idle threshold, movement sensitivity
- Spawn Limiter — warning threshold, message duration, notification cooldown and radius, per-type mob limits (add / edit / delete)
- AI-LOD System — enable toggle, tier distances, check interval
- TPS Monitor — sample size for rolling average
- Language — switch between `en_US` and `de_DE`
- Reset All — restore all values to config.js defaults

---

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/mcbso:tps` | Any | Toggle live TPS display in action bar |
| `/mcbso:cleartime` | Any | Show time until next ClearLag |
| `/mcbso:entities` | Any | Count entities across all dimensions |
| `/mcbso:help` | Any | Show all commands |
| `/mcbso:tpsinfo` | OP | Detailed TPS statistics |
| `/mcbso:clearnow` | OP | Run ClearLag immediately |
| `/mcbso:afklist` | OP | List AFK players with duration |
| `/mcbso:lodinfo` | OP | AI-LOD tier distribution statistics |
| `/mcbso:settings` | OP | Open settings UI |
| `/mcbso:lang` | OP | Change language (`en_US` / `de_DE`) |

---


## Installation

1. Copy the entire pack folder into your world's `behavior_packs/` directory.
2. Activate the pack on the world.

Or

1. Download the .mcaddon file and doubleklick
2. Activate the pack on the world.

**Requirements:**
- Minecraft Bedrock `1.21.50+`
- `@minecraft/server` `2.5.0`
- `@minecraft/server-ui` `2.0.0`

---

## Cross-Addon Compatibility

MCBSO exposes its actionbar manager via `globalThis` so other addons can write to action bar slots without conflicts:

```js
const set   = globalThis.__lagopt_setActionbarSlot;
const clear = globalThis.__lagopt_clearActionbarSlot;

if (set) set(playerId, "combat", "Combat: 28s", 560);
else     player.onScreenDisplay.setActionBar("Combat: 28s");
```

---

## Project Structure

```
scripts/
  main.js              Entry point – orchestration only
  config.js            All default configuration values + CONFIG_META
  state.js             Shared global state (tick counter, AFK maps, etc.)
  core/
    actionbar.js       Slot-based action bar manager + globalThis bridge
    commands.js        Command registration + player events
    settings.js        Runtime config store (DynamicProperty backed)
    ui.js              In-game settings UI + mob limit management
    util.js            Stateless helpers (formatTime, fail, success)
  features/
    tps.js             TPS monitor
    clearlag.js        ClearLag timer and execution
    afk.js             AFK detection
    spawnlimiter.js    Spawn limiter + mob cap warning
    ailod.js           AI-LOD system
    villager.js        Villager trade-exempt logic
  lang/
    i18n.js            Language manager (t(), setLang(), getLang())
    en_US.js           English strings
    de_DE.js           German strings
entities/
  mob.json          }  Work in progress - bigger mob ai changes might come in the future
  
manifest.json          Combined script + data module manifest
```
