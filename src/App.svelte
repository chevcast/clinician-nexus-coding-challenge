<script>
  import tasksData from './data/tasks.json';

  // State
  let tasks = [...tasksData];
  let statusFilter = 'all'; // 'all' | 'todo' | 'in-progress' | 'done'
  let priorityFilter = 'all'; // 'all' | 'low' | 'medium' | 'high'
  let sortField = 'dueDate'; // 'dueDate' | 'priority'
  let sortOrder = 'asc'; // 'asc' | 'desc'

  // TODO: Implement filtered/sorted tasks using $: reactive declaration

  // TODO: Implement task counts (todo, in-progress, done)

  // TODO: Implement toggleStatus function
</script>

<main>
  <h1>Task Dashboard</h1>

  <!-- TODO: Task Summary (counts) -->

  <!-- TODO: Status Filter Buttons -->

  <!-- TODO: Priority Filter -->

  <!-- TODO: Sort Controls -->

  <!-- TODO: Task List -->
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