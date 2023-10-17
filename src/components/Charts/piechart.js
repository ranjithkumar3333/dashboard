import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts";

export default function DoughnutChart({ data }) {
  return (
    <Stack direction="row">
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 40,
            outerRadius: 80,
            data,
          },
        ]}
        margin={{ right: 5 }}
        colors={["#9400D3", "#FE4EDA"]}
        width={200}
        height={200}
        legend={{ hidden: true }}
      />
    </Stack>
  );
}