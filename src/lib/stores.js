import { writable } from "svelte/store";


export const todos = writable([
    { name: 'Task 1', is_complete: false },
    { name: 'Task 2', is_complete: true },
    // Add more todo items as needed
  ]);