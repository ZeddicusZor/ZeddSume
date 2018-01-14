import { Skill, ISkillGroup } from './ISkill';
import { IEducation } from './IEducation';
import { JobComponent } from './IJob';

export interface IPerson {
  firstName: string;
  lastName: string;
  middleInit?: string;
  email: string;
  phone: string;
  displayTitle?: string;
  skillGroups: ISkillGroup[];
  educationGroups: IEducation[];
  workHistory: JobComponent[];
}


