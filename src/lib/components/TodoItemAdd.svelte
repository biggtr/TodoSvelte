<script>
    import {todos} from '../stores'
    let newItemName = ''
const addItem = () =>{
     
    if(newItemName.trim() === '') return
    
    const newItem = {
        name : newItemName,
        is_complete : false
    }
    todos.update(items => [...items, newItem]);
    newItemName = ''
}
</script>

<form on:submit|preventDefault={addItem}>
    <input type="text" bind:value={newItemName} placeholder="Enter a new item" />
    <button type="submit">Add</button>
</form>