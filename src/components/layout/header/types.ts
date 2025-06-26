
export interface MenuItem {
  title: string;
  href: string;
  submenu?: { title: string; href: string }[];
}
