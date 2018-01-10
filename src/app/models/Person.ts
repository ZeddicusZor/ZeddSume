import { ISkill } from './ISkill';
import { IJob } from './IJob';
import { IEducation } from './IEducation';
import { IPerson } from './IPerson';

export class Person {
  displayName: string;
  email: string;
  phoneNum: string;
  personDetails: IPerson;
  // skills: ISkill[];
  // workExperience: IJob[];
  currentWorkingStatus: number;


}
