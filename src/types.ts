type TaskStatus = "todo" | "in-progress" | "done";

type TaskPriority = "low" | "medium" | "high";

type SortField = "dueDate" | "priority";

type SortOrder = "asc" | "desc";

type StatusFilter = "all" | TaskStatus;

type PriorityFilter = "all" | TaskPriority;


type Task = {
	id: string;
	title: string;
	status: TaskStatus;
	priority: TaskPriority;
	assignee: string;
	dueDate: string;
};

export type {
	PriorityFilter,
	SortField,
	SortOrder,
	StatusFilter,
	TaskStatus,
	TaskPriority,
	Task
}
