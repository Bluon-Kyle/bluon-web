import { managementList } from "./headshots/managementList";
import { salesList } from "./headshots/salesList";
import { technicianList } from "./headshots/technicianList";
import { opsList } from "./headshots/opsList";
import { softwareDevList } from "./headshots/softwareDevList";
import { platformList } from "./headshots/platformList";
import { boardList } from "./headshots/boardList";

export const teamGridList = [
  {
    title: "Management",
    description:
      "A truly unique group of innovators and critical thinkers with complimentary skills",
    headshots: managementList,
    columns: 2,
  },
  {
    title: "Sales & Marketing",
    description:
      "Redefining how a sales team operates with a collaborative culture and approach",
    headshots: salesList,
    columns: 2,
  },
  {
    title: "Technicians",
    description:
      "A truly amazing group of best-in-class technicians dedicated to serving their peers and helping the trade",
    headshots: technicianList,
    columns: 2,
  },
  {
    title: "Ops & Finance",
    description: "The group that makes everything and everyone work!",
    headshots: opsList,
    columns: 2,
  },
  {
    title: "Software Development",
    description:
      "A highly adaptable, innovative group of product managers, UX desigers and software engineers",
    headshots: softwareDevList,
    columns: 2,
  },
  {
    title: "Platform",
    description:
      "The front line of Bluon! There is no better group of Ambassadors to the Bluon product and brand!",
    headshots: platformList,
    columns: 2,
  },
  {
    title: "Board of Directors",
    description: "",
    headshots: boardList,
    columns: 2,
  },
];
