export class ISkillGroup {
  name: string;
  skills?: Skill[];
}

export class Skill {
  name: string;
  tags?: string[];
  version?: string[];
  shortHand?: string;

}
