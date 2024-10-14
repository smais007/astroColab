import { getCurrent } from "@/features/auth/queries";
import { getWorkspace } from "@/features/workspaces/queries";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";
import { redirect } from "next/navigation";
import React from "react";

interface WorkspaceIdSettingPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdSettingPage = async ({
  params,
}: WorkspaceIdSettingPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspace({ workspaceId: params.workspaceId });

  return (
    <div className="w-full lg:max-w-lg ">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdSettingPage;
