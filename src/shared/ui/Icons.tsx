import { CookingPot } from "lucide-react";

export const icons = {
  breakfast: CookingPot,
} as const;

export type IconType = keyof typeof icons;

type Props = {
  icon: IconType;
  size?: number;
  color?: string;
};

export const Icon = ({ icon, size = 24, color = "currentColor" }: Props) => {
  const LucideIcon = icons[icon];
  return <LucideIcon size={size} color={color} />;
};
