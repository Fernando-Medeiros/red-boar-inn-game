import type { AccessoryProps } from '../items/accessory-props'
import type { ArmorProps } from '../items/armor-props'
import type { ConsumableProps } from '../items/consumable-props'
import type { MaterialProps } from '../items/material-props'
import type { WeaponProps } from '../items/weapon-props'

export type OpponentStatusProps = {
    name: string
    level: number
    loot: AccessoryProps[] | ArmorProps[] | ConsumableProps[] | MaterialProps[] | WeaponProps[]
    points: number
    experience: number
    strength: number
    intelligence: number
    dexterity: number
    vitality: number
    health: number
    energy: number
    currentHealth: number
    currentEnergy: number
}
