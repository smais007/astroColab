"use client";

import { Analytics } from "@/components/analytics";
import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { Button } from "@/components/ui/button";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { useGetProjectAnalytics } from "@/features/projects/api/use-get-project-analytics";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { useProjectId } from "@/features/projects/hooks/use-project-id";
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";
import { DraftingCompass, FileText, PencilIcon } from "lucide-react";
import Link from "next/link";

export const ProjectIdClient = () => {
  const projectId = useProjectId();

  const { data: analytics, isLoading: isLoadingAnalytics } =
    useGetProjectAnalytics({ projectId });
  const { data: project, isLoading: isLoadingProject } = useGetProject({
    projectId,
  });

  const isLoading = isLoadingProject || isLoadingAnalytics;

  if (isLoading) {
    return <PageLoader />;
  }

  if (!project) {
    return <PageError message="Project Data not dound" />;
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            image={project.imageUrl}
            name={project.name}
            className="size-8"
          />
          <p className="text-lg font-semibold">{project.name}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="">
            <Button size="sm" variant="secondary" asChild>
              <Link
                href={`/workspaces/${project.workspaceId}/projects/${project.$id}/whiteboard`}
              >
                <DraftingCompass className="size-4 mr-2" />
                White Board
              </Link>
            </Button>
          </div>
          <div className="">
            <Button size="sm" variant="secondary" asChild>
              <Link
                href={`/workspaces/${project.workspaceId}/projects/${project.$id}/documents`}
              >
                <FileText className="size-4 mr-2" />
                Documents
              </Link>
            </Button>
          </div>
          <div className="">
            <Button size="sm" variant="secondary" asChild>
              <Link
                href={`/workspaces/${project.workspaceId}/projects/${project.$id}/settings`}
              >
                <PencilIcon className="size-4 mr-2" />
                Edit Project
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {analytics ? <Analytics data={analytics} /> : null}

      <TaskViewSwitcher hideProjectFilter />
    </div>
  );
};