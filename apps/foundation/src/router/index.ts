import { lazy } from "react";

export const router = [
  {
    path: "/micro-react",
    component: lazy(() => import("../pages/index")),
    children: [],
  },
];
