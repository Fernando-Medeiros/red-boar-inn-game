import type { ArmorProps } from '../items/armor-props'
import type { WeaponProps } from '../items/weapon-props'
import type { AccessoryProps } from '../items/accessory-props'

export type EquipmentProps = {
    head: ArmorProps | object
    body: ArmorProps | object
    leg: ArmorProps | object
    handLeft: WeaponProps | object
    handRight: WeaponProps | object
    accessoryLeft: AccessoryProps | object
    accessoryRight: AccessoryProps | object
}
