import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export interface Project {
  id: number;
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

export enum Status {
  ToDo = "To Do",
  WorkInProgress = "Work In Progress",
  UnderReview = "Under Review",
  Completed = "Completed",
}

export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
  Urgent = "Urgent",
  Backlog = "Backlog",
}

export interface User {
  userId: number;
  username: string;
  email: string;
  password: string;
  profilePictureUrl?: string;
  cognitoId?: string;
  teamId?: number;
}

export interface Attachment {
  id: number;
  fileUrl: string;
  fileName: string;
  taskId: number;
  uploadedById: number;
}

export interface Task {
  id: number;
  title?: string;
  description?: string;
  status?: Priority;
  priority?: string;
  tags?: string;
  startDate?: string;
  dueDate?: string;
  points?: number;
  projectId: number;
  authorUserId?: number;
  assignedUserId?: number;

  author?: User;
  assignee?: User;
  comment?: Comment[];
  attachment?: Attachment[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["Project", "Tasks", "Attachment", "User"],
  endpoints: (build) => ({
    getProjects: build.query<Project[], void>({
      query: () => "projects",
      providesTags: ["Project"],
    }),
    createProject: build.mutation<Project, Partial<Project>>({
      query: (project) => ({
        url: "projects",
        method: "POST",
        body: project,
      }),
      invalidatesTags: ["Project"],
    }),
    updateProject: build.mutation<Project, Partial<Project>>({
      query: (project) => ({
        url: `projects/${project.id}`,
        method: "PATCH",
        body: project,
      }),
    }),
    deleteProject: build.mutation<void, number>({
      query: (projectId) => ({
        url: `projects/${projectId}`,
        method: "DELETE",
      }),
    }),
    getTasks: build.query<Task[], void>({
      query: (projectId) => `tasks?/projectId=${projectId}`,
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: "Tasks" as const, id }))
          : [{ type: "Tasks" as const }],
    }),
    getTask: build.query<Task, number>({
      query: (taskId) => `tasks/${taskId}`,
    }),
    createTask: build.mutation<Task, Partial<Task>>({
      query: (task) => ({
        url: "tasks",
        method: "POST",
        body: task,
      }),
    }),
    updateTask: build.mutation<Task, Partial<Task>>({
      query: (task) => ({
        url: `tasks/${task.id}`,
        method: "PATCH",
        body: task,
      }),
    }),
    deleteTask: build.mutation<void, number>({
      query: (taskId) => ({
        url: `tasks/${taskId}`,
        method: "DELETE",
      }),
    }),
    getAttachments: build.query<Attachment[], void>({
      query: () => "attachments",
    }),
    getAttachment: build.query<Attachment, number>({
      query: (attachmentId) => `attachments/${attachmentId}`,
    }),
    createAttachment: build.mutation<Attachment, Partial<Attachment>>({
      query: (attachment) => ({
        url: "attachments",
        method: "POST",
        body: attachment,
      }),
    }),
    deleteAttachment: build.mutation<void, number>({
      query: (attachmentId) => ({
        url: `attachments/${attachmentId}`,
        method: "DELETE",
      }),
    }),
    getUsers: build.query<User[], void>({
      query: () => "users",
    }),
    getUser: build.query<User, number>({
      query: (userId) => `users/${userId}`,
    }),
  }),
});

export const { useGetProjectsQuery, useCreateProjectMutation } = api;
