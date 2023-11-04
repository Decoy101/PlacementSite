export enum GENDER_ENUM {
  male = "Male",
  female = "Female",
}

export type PersonalDetails = {
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  fathersName: string;
  gender: GENDER_ENUM;
  email: string;
  phoneNo: number;
  parentsPhoneNo: number;
  address: string;
  city: string;
  pincode: number;
};

export const defaultPersonalDetailFields: PersonalDetails = {
  firstName: "",
  middleName: "",
  lastName: "",
  dob: "",
  fathersName: "",
  gender: GENDER_ENUM.male,
  email: "",
  phoneNo: 0,
  parentsPhoneNo: 0,
  address: "",
  city: "",
  pincode: 0,
};
