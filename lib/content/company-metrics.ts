export interface CompanyMetric {
  label: string;
  sublabel: string;
  value: string;
  countUp?: number;
}

export const companyMetrics: CompanyMetric[] = [
  { label: "MAU", sublabel: "Monthly active users", value: "244,324" },
  { label: "Total customers", sublabel: "Total customers", value: "79,577" },
  { label: "Teammates", sublabel: "Across 15 countries", value: "73", countUp: 73 },
  { label: "ARR", sublabel: "Annual recurring revenue", value: "$26.1M" },
];
