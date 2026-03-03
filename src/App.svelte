<script lang="ts">
	import TaskCard from "./components/TaskCard.svelte";
	import tasksData from "./data/tasks.json";
	import type {
		// TaskStatus,
		// TaskPriority,
		SortField,
		SortOrder,
		Task,
		StatusFilter,
		PriorityFilter,
	} from "./types";

	// State
	$: tasks = [...tasksData] as Task[];
	$: statusFilter = "all" as StatusFilter;
	$: priorityFilter = "all" as PriorityFilter;
	$: sortField = "dueDate" as SortField;
	$: sortOrder = "asc" as SortOrder;
	const priorityRank: Record<Task["priority"], number> = { low: 1, medium: 2, high: 3 };

	$: sortedTasks = [...tasks].sort((a, b) => {
		if (sortField === "priority") {
			const priorityDiff = priorityRank[a.priority] - priorityRank[b.priority];
			return sortOrder === "desc" ? -priorityDiff : priorityDiff;
		}

		const aTime = new Date(a.dueDate).getTime();
		const bTime = new Date(b.dueDate).getTime();

		const aValid = Number.isFinite(aTime);
		const bValid = Number.isFinite(bTime);

		if (!aValid && !bValid) return 0;
		if (!aValid) return 1;
		if (!bValid) return -1;

		return sortOrder === "desc" ? bTime - aTime : aTime - bTime;
	});

	// TODO: Implement filtered/sorted tasks using $: reactive declaration

	// TODO: Implement task counts (todo, in-progress, done)

	// TODO: Implement toggleStatus function
</script>

<main>
	<h1>Task Dashboard</h1>

	<!-- TODO: Task Summary (counts) -->

	<div class="mb-6 space-y-4">
		<div class="flex flex-wrap items-center gap-2">
			<span class="text-sm font-medium text-slate-600">Sort By</span>
			<label class="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm">
				<input
					class="h-4 w-4 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-200"
					type="radio"
					name="sortby"
					value="dueDate"
					bind:group={sortField}
				/>
				Due Date
			</label>
			<label class="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm">
				<input
					class="h-4 w-4 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-200"
					type="radio"
					name="sortby"
					value="priority"
					bind:group={sortField}
				/>
				Priority
			</label>
		</div>

		<div class="flex flex-wrap items-center gap-2">
			<span class="text-sm font-medium text-slate-600">Sort Order</span>
			<label class="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm">
				<input
					class="h-4 w-4 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-200"
					type="radio"
					name="sortorder"
					value="asc"
					bind:group={sortOrder}
				/>
				Ascending
			</label>
			<label class="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm">
				<input
					class="h-4 w-4 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-200"
					type="radio"
					name="sortorder"
					value="desc"
					bind:group={sortOrder}
				/>
				Descending
			</label>
		</div>
	</div>

	<!-- TODO: Status Filter Buttons -->

	<!-- TODO: Priority Filter -->

	<!-- TODO: Sort Controls -->

	<ul class="m-0 list-none space-y-4 p-0">
		{#each sortedTasks as task}
			<TaskCard {task} />
		{/each}
	</ul>
</main>

<style>
	main {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, sans-serif;
	}

	h1 {
		margin-bottom: 1.5rem;
	}
</style>
