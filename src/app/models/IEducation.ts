export interface IEducation {
  location?: string;
  displayName: string;
  displayDateString: string;
}

export interface IEducationGroups {
  name: string;
  groups: IEducation[];
}
