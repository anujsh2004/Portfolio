export interface EducationInfo {
  label: string;
  degree: string;
  specialization: string;
  institution: string;
  batch: string;
  focusAreas: string[];
}

export const education: EducationInfo = {
  label: "Education",
  degree: "B.Tech, Computer Science",
  specialization: "Data Science specialization",
  institution: "Vellore Institute of Technology",
  batch: "2023 – 2027",
  focusAreas: ["DSA", "ML", "AI", "Data Science"],
};
