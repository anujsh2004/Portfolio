export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

// Projects / Technologies / Certifications are counted directly from the resume.
// "Years of Coding" is still a placeholder — Anuj hasn't confirmed that number yet.
export const stats: Stat[] = [
  { label: "Projects Shipped", value: 5 },
  { label: "Technologies Used", value: 25, suffix: "+" },
  { label: "Certifications", value: 1 },
  { label: "Years of Coding", value: 0, suffix: "+" }, // TODO: confirm real value
];
