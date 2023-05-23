import type { StatusProps } from './props/character/status-props'
import type { OpponentStatusProps } from './props/opponent/opponent-props'
import BattleActions from './BattleActions'
import BattleStatus from './BattleStatus'

export default class {
    points = 1
    experience = 1
    strength = 1
    intelligence = 1
    dexterity = 1
    vitality = 1
    health = 1
    energy = 1
    currentHealth = 1
    currentEnergy = 1

    Actions: BattleActions
    Status: BattleStatus

    constructor(props?: StatusProps | OpponentStatusProps) {
        Object.assign(this, { ...props })

        this.Actions = new BattleActions(this)

        this.Status = new BattleStatus(this)
    }

    loadStatus(props: StatusProps | OpponentStatusProps) {
        Object.assign(
            this,
            { ...props },
            { Actions: new BattleActions(this) },
            { Status: new BattleStatus(this) }
        )
    }

    toJson(): StatusProps {
        return {
            points: this.points,
            experience: this.experience,
            strength: this.strength,
            intelligence: this.intelligence,
            dexterity: this.dexterity,
            vitality: this.vitality,
            health: this.health,
            energy: this.energy,
            currentHealth: this.currentHealth,
            currentEnergy: this.currentEnergy
        }
    }
}
