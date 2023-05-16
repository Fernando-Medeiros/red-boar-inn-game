import type { StatusProps } from "./props/character/status-props";
import type { OpponentStatusProps } from "./props/opponent/opponent-props";

export default class {
  constructor(private props: StatusProps | OpponentStatusProps) {}

  isAlive(): boolean {
    return this.props.currentHealth > 0;
  }
}
