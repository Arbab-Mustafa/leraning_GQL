import { FC } from "react";

const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return <h2 className="text-xl font-bold mt-6 mb-4 text-blue-600">{title}</h2>;
};

export default SectionTitle;
