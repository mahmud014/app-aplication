import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Rechart = ({ ratings }) => {
  if (!ratings || ratings.length === 0) return <p>No ratings available</p>;

  return (
    <div
      style={{
        width: "100%",
        height: 300,
      }}
    >
      <ResponsiveContainer>
        <BarChart
          data={ratings}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" reversed={true} />
          <Tooltip />
          <Bar dataKey="count" fill="#39bcf6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
