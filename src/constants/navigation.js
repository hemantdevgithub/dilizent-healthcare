export const NavigationURls = [
  { id: 3534, label: "Home", redirect: "/" },
  {
    id: 4234,
    label: "Solutions",
    redirect: "/solutions",
    submenu: [
      {id:1, label: "All Solutions", redirect: "solutions"},
      {id:1, label: "Provider Data Management", redirect: "/solutions/provider-data-management"},
      {id:1, label: "Workforce Management", redirect: "/solutions/workforce-management"},
      {id:1, label: "Talent Management", redirect: "/solutions/talent-management"},
      {id:1, label: "Access Management", redirect: "/solutions/access-management"},
      {id:1, label: "Spend Management", redirect: "/solutions/spend-management"},
      {id:1, label: "Contract Management", redirect: "/solutions/contract-management"},
      {id:1, label: "Compliance Quality & Safety", redirect: "/solutions/compliance-quality-safety"},
    ]
  },
  { id: 6456, label: "About Us", redirect: "/about" },
  { id: 34234, label: "Case Study & Testimonials", redirect: "/testimonials" },
  // { id: 2345, label: "Contact", redirect: "/contact" },
  // { id: 2376, label: "Find Talent", redirect: "/freelancers" },
  // { id: 2349, label: "Find Agencies", redirect: "/agencies" },
  // { id: 2346, label: "Contact", redirect: "/profile/update" },
]
