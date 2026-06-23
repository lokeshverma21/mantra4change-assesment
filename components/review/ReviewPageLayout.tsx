import type { ReactNode } from "react";
import SectionHeader from "@/components/dashboard/SectionHeader";
import AchievementList from "./AchievementList";
import RiskList from "./RiskList";
import PriorityAreasCard from "./PriorityAreasCard";
import DiscussionPointsCard from "./DiscussionPointsCard";

type ReviewPageLayoutProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  achievements: string[];
  risks: string[];
  priorityDistricts: string[];
  discussionPoints: string[];
};

export default function ReviewPageLayout({
  title,
  subtitle,
  action,
  achievements,
  risks,
  priorityDistricts,
  discussionPoints,
}: ReviewPageLayoutProps) {
  return (
    <div className="space-y-6">
      <SectionHeader title={title} subtitle={subtitle} action={action} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AchievementList items={achievements} />
        <RiskList items={risks} />
      </div>

      <PriorityAreasCard districts={priorityDistricts} />

      <DiscussionPointsCard points={discussionPoints} />
    </div>
  );
}
