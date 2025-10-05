import React from "react";
import { GridMapProps } from "@/types/student/companyDetails";
import DetailsCard from "@/components/common/ui/DetailCard";



const GridMap: React.FC<GridMapProps> = ({ data = [], className }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 ${className ?? ""}`}>
      {data.map((col) => (
        <DetailsCard key={col.id} item={col} />
      ))}
    </div>
  );
};

export default GridMap;
