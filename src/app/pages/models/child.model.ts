export interface Child {
  first_name: string;
  last_name: string;
  // parent_id: string;
  blood_group: string;
  genotype: string;
  weight: number;
  parent_email: string;
  nationality: string;
  age: number;
  // dateAdded: Date;
  // dateUpdated: Date;
}

export interface IGetMother {
  hospital_id: string;
  password: string;
  first_name: string;
  last_name: string;
  age: number;
  genotype: string;
  blood_group: string;
  nationality: string;
  email: string;
}

export interface IGetMotherEdit {
  id: string;
  first_name?: string;
  last_name?: string;
  age?: number;
  genotype?: string;
  blood_group?: string;
  nationality?: string;
  email?: string;
}
