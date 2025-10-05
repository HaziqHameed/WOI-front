export type LinksType = {
  id: string | number;
  label: string;
  variant?: "accent" | "default";
};

export interface LinkProps {
  items: LinksType[];
}