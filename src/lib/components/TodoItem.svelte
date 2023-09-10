<script>
	import TodoList from "./TodoList.svelte";
    import {todos} from '../stores.js'
	import TodoItemAdd from "./TodoItemAdd.svelte";

    const deleteItem = (ItemToDelete) => { 
        todos.update(items => items.filter(item => item !== ItemToDelete));    }
</script>
<TodoItemAdd/>
{#each $todos as todo }
<div>
    <p>{todo.name} - {todo.is_complete ? 'Complete' : 'Incomplete'}</p>
    <input type="checkbox" bind:checked={todo.is_complete} />
    <button on:click={deleteItem(todo)}>delete</button>
</div>
{/each}
