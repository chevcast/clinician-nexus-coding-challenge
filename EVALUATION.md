# Evaluation Rubric (For Interviewer)

## Scoring Guide

| Score | Description |
|-------|-------------|
| **5** | All core features complete, clean architecture, reactive statements used effectively, polished UX |
| **4** | All core features work, good state management, minor rough edges |
| **3** | Most features work, acceptable code structure, some reactivity issues |
| **2** | Partial implementation, disorganized state, missing features |
| **1** | Minimal progress, fundamental misunderstandings |

---

## Feature Checklist

- [ ] Tasks displayed with all fields (title, status, priority, assignee, due date)
- [ ] Status filter works (All / Todo / In Progress / Done)
- [ ] Priority filter works (All / Low / Medium / High)
- [ ] Sorting by due date works
- [ ] Sorting by priority works
- [ ] Toggle status cycles correctly
- [ ] Task summary counts displayed

---

## What to Look For

### State Management
- Uses `$:` reactive declarations for derived data
- Doesn't duplicate state unnecessarily
- Filters and sorts in a single reactive chain

### Reactivity
- Understands when Svelte re-renders
- Avoids mutating arrays in place without reassignment
- Uses reactive statements correctly

### Code Quality
- Clear variable/function naming
- Logical organization
- No unnecessary complexity

### UX Considerations
- Visual indication of active filters
- Smooth status toggle feedback
- Empty state handling (if filters return no results)

---

## Sample Questions for Debrief

1. "Walk me through how your filtering logic works."
2. "Why did you choose to structure state this way?"
3. "How would you refactor this if the task list came from an API?"
4. "What would you change if you had more time?"
