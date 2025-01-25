export interface IGetArm {
  mother_id: string;
  weight: string;
  blood_pressure: string;
  tests?: string;
  remark?: string;
}

export interface IGetImmunization {
  first_name: string;
  last_name: string;
  parent_email: string;
  parent_first_name: string;
  age: number;
  previous_date: Date;
  next_date: Date;
  weight: number;
  injections: string;
}
