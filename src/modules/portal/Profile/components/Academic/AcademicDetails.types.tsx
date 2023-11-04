export enum BRANCH_ENUM {
  dsai = "DATA SCIENCE AND ARTIFICIAL INTELLIGENCE",
  cse = "COMPUTER SCIENCE ENGINEERING",
  ece = "ELECTRONICS AND COMMUNICATION ENGINEERING",
}
export enum CATEGORY_ENUM {
  general = "General",
  obc = "OBC",
  sc = "Scheduled Caste",
}

export type AcademicDetails = {
  programme: string;
  academicYear: string;
  regNo: string;
  branch: BRANCH_ENUM;
  category: CATEGORY_ENUM;
  dateOfAdmission: string;
  cpi: number;
};

export const defaultAcademicFields: AcademicDetails = {
  programme: "",
  academicYear: "",
  regNo: "",
  branch: BRANCH_ENUM.cse,
  category: CATEGORY_ENUM.general,
  dateOfAdmission: "",
  cpi: 10,
};
