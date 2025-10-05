"use client"
import { usePathname } from "next/navigation";
import MainLayout from "./MainLayout";
import StudentLayout from "./StudentLayout";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Check if the current route is a student route
  const isStudentRoute = pathname.startsWith('/student');
  
  
  if (isStudentRoute) {
    return <StudentLayout>{children}</StudentLayout>;
  }
  
  // Default to admin layout for all other routes (including root and admin routes)
  return <MainLayout>{children}</MainLayout>;
}
