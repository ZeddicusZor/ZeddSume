export interface ISkill {
  name: string;
  numYears?: number;
  tags?: string[];
  versions?: string[];
  shortHand?: string;
}

export interface ISkillGroup {
  name: string;
  skills: ISkill[];
}
