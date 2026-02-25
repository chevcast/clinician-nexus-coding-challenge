# Svelte Coding Challenge: Task Dashboard

**Time Limit:** 45 minutes  
**Level:** Senior Front-end Engineer

---

## Overview

Build a task management dashboard that displays tasks from provided mock data with filtering, sorting, and status toggle functionality.

---

## Requirements

### Core Features (Must Complete)

1. **Display Tasks**
   - Render all tasks in a clean, readable list/card layout
   - Show: title, status, priority, assignee, due date

2. **Filter by Status**
   - Filter buttons/tabs: All | Todo | In Progress | Done
   - Active filter should be visually indicated

3. **Filter by Priority**
   - Dropdown or buttons: All | Low | Medium | High

4. **Sort Tasks**
   - Sort by due date (ascending/descending)
   - Sort by priority (High → Low or Low → High)

5. **Toggle Task Status**
   - Clicking a task's status cycles: `todo` → `in-progress` → `done` → `todo`
   - Update should feel instant (optimistic UI)

6. **Task Summary**
   - Display counts: "3 Todo | 2 In Progress | 5 Done"

---

### Bonus (If Time Permits)

- Debounced search by task title
- Keyboard accessibility (tab navigation, enter to toggle)
- Persist filters to URL query params
- Add visual priority indicators (color/icons)

---

## Evaluation Criteria

| Area | What We're Looking For |
|------|------------------------|
| **State Management** | Appropriate use of stores, derived state, local state |
| **Reactivity** | Correct use of `$:`, subscriptions, no unnecessary re-renders |
| **Component Design** | Clean separation, props/events, reusability |
| **Code Quality** | Readable, minimal duplication, clear naming |
| **UX Polish** | Loading states, empty states, visual feedback |

---

## Getting Started

```bash
npm install
npm run dev
```

Mock data is available at `src/data/tasks.json` — import it directly.

---

## Data Structure

Each task has the following shape:

```js
{
  id: "1",
  title: "Design new landing page",
  status: "todo" | "in-progress" | "done",
  priority: "low" | "medium" | "high",
  assignee: "Alice Chen",
  dueDate: "2026-03-01"
}
```

---

## Constraints

- Single-page app (no routing required)
- Use only Svelte (no external state libraries)
- You may use basic CSS (already included)
- JavaScript only (no TypeScript required)

---

## Submission

Ensure the app runs without errors.

Good luck!