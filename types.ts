import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  imageUrl: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: LucideIcon;
}