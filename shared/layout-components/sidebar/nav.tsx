import React from "react";
import Image from "next/image";
const EyeIcon = <i className="fe fe-eye side-menu__icon"></i>;
const StarIcon = <i className="fe fe-star side-menu__icon"></i>;
const LayersIcon = <i className="fe fe-layers side-menu__icon"></i>;
const MapPinIcon = <i className="fe fe-map-pin side-menu__icon"></i>;
const MapIcon = <i className="fe fe-map side-menu__icon"></i>;
const FileTextIcon = <i className="fe fe-file-text side-menu__icon"></i>;
const UsersIcon = <i className="fe fe-users side-menu__icon"></i>;
const TruckIcon = <i className="fe fe-truck side-menu__icon"></i>;
const TripIcon = <i className="bx bx-trip side-menu__icon"></i>;
const UserGroupIcon = <i className="las la-users side-menu__icon"></i>;
const CpuIcon = <i className="ti ti-cpu side-menu__icon"></i>;
const FileDownloadIcon = (
  <i className="ti ti-file-download side-menu__icon"></i>
);
const SettingsIcon = <i className="fe fe-settings side-menu__icon"></i>;
const FileChartIcon = <i className="ri-file-chart-line side-menu__icon"></i>;
const AlertIcon = <i className="fe fe-alert-triangle side-menu__icon"></i>;

const DashboardIcon = <i className="bx bx-home side-menu__icon"></i>;

const badge = (
  <span className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-1">
    12
  </span>
);

export const MenuItems: any = [
  {
    path: "/components/icons/icon",
    icon: EyeIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Recently Visited",
  },
  {
    path: "/components/icons/icon",
    icon: StarIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Favourites",
  },
  {
    path: "/components/icons/icon",
    icon: LayersIcon,
    type: "link",
    active: false,
    selected: false,
    title: "All",
  },
  {
    menutitle: "   ",
  },
  {
    icon: DashboardIcon,
    badgetxt: badge,
    title: "Dashboards",
    type: "sub",
    active: false,
    selected: false,
    children: [
      {
        path: "/dashboards/activity",
        type: "link",
        active: false,
        selected: false,
        dirchange: false,
        title: "Activity",
      },
      {
        path: "/app/dashboard",
        type: "link",
        active: false,
        selected: false,
        title: "Summary ",
        view: "dashboard",
      },
      {
        path: "/app/dashboard",
        type: "link",
        active: false,
        selected: false,
        title: "Vehicle ",
        view: "dashboard",
      },
      {
        path: "/app/dashboard",
        type: "link",
        active: false,
        selected: false,
        title: "Driver ",
        view: "dashboard",
      },
    ],
  },
  {
    path: "/components/icons/icon",
    icon: MapPinIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Current Status",
    view: "current-status",
  },
  {
    path: "/map",
    icon: MapIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Map",
    view: "map",
  },
  {
    path: "/components/icons/icon",
    icon: FileTextIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Reports",
    view: "report",
  },
  {
    path: "/users",
    icon: UsersIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Users",
    view: "user-list",
  },
  {
    icon: TruckIcon,
    type: "sub",
    active: false,
    selected: false,
    title: "Assets",
    children: [
      {
        path: "/assets",
        type: "link",
        active: false,
        selected: false,
        title: "Assets",
        view: "asset-list",
      },
      {
        path: "/assets/asset-groups",
        type: "link",
        active: false,
        selected: false,
        title: "Asset Groups",
        view: "asset-group-list",
      },
    ],
  },
  {
    path: "/trip",
    icon: TripIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Trip",
    view: "trip",
  },
  {
    icon: UserGroupIcon,
    type: "sub",
    active: false,
    selected: false,
    title: "Drivers",
    children: [
      {
        path: "/driver",
        type: "link",
        active: false,
        selected: false,
        title: "Drivers",
        view: "driver-list",
      },
      {
        path: "/driver/driver-groups",
        type: "link",
        active: false,
        selected: false,
        title: "Driver Groups",
        view: "driver-group-list",
      },
    ],
  },
  {
    path: "/devices",
    icon: CpuIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Devices",
    view: "device-list",
  },
  {
    path: "/alerts",
    icon: AlertIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Alerts",
    view: "alert-list",
  },
  {
    menutitle: "   ",
  },
  {
    path: "/components/icons/icon",
    icon: FileChartIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Device Raw Data",
  },
  {
    path: "/components/icons/icon",
    icon: SettingsIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Automated Tasks",
  },
  {
    path: "/components/icons/icon",
    icon: FileDownloadIcon,
    type: "link",
    active: false,
    selected: false,
    title: "Downloads",
  },
];
