<script lang="ts">
	import type { Task, TaskPriority, TaskStatus } from "../types";

	export let task: Task;

	const statusLabel: Record<TaskStatus, string> = {
		todo: "To Do",
		"in-progress": "In Progress",
		done: "Done",
	};

	const statusClass: Record<TaskStatus, string> = {
		todo: "border border-slate-200 bg-slate-50 text-slate-700",
		"in-progress": "border border-blue-200 bg-blue-50 text-blue-700",
		done: "border border-emerald-200 bg-emerald-50 text-emerald-700",
	};

	const priorityClass: Record<TaskPriority, string> = {
		low: "border border-slate-200 bg-slate-50 text-slate-700",
		medium: "border border-amber-200 bg-amber-50 text-amber-700",
		high: "border border-rose-200 bg-rose-50 text-rose-700",
	};

	const formatDate = (dateString: string) => {
		return new Intl.DateTimeFormat("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		}).format(new Date(dateString));
	};

	const isOverdue = (dateString: string) => {
		const dueDate = new Date(dateString);
		const today = new Date();
		dueDate.setHours(0, 0, 0, 0);
		today.setHours(0, 0, 0, 0);
		return dueDate < today;
	};

	$: formattedDueDate = formatDate(task.dueDate);
	$: overdue = task.status !== "done" && isOverdue(task.dueDate);
</script>

<li
	class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
>
	<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
		<div class="min-w-0">
			<p class="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
				Task #{task.id}
			</p>
			<h2 class="mt-1 text-lg font-semibold text-slate-900">{task.title}</h2>
			<p class="mt-2 text-sm text-slate-500">
				Assigned to <span class="font-medium text-slate-700">{task.assignee}</span>
			</p>
		</div>

		<div class="flex shrink-0 items-center gap-2">
			<span class={`rounded-full px-3 py-1 text-xs font-medium ${statusClass[task.status]}`}>
				{statusLabel[task.status]}
			</span>
			<span class={`rounded-full px-3 py-1 text-xs font-medium ${priorityClass[task.priority]}`}>
				{task.priority} priority
			</span>
		</div>
	</div>

	<div class="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
		<p class="text-sm text-slate-500">
			Due date:
			<span class={`ml-1 font-medium ${overdue ? "text-rose-600" : "text-slate-700"}`}>
				{formattedDueDate}
			</span>
		</p>
		<p class="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
			{overdue ? "Overdue" : "On schedule"}
		</p>
	</div>
</li>
