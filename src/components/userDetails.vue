
<template>
    <div id="user-details" className="table-wrapper table-responsive table-responsive{-sm|-md|-lg|-xl}   overflow-x:auto;">
      <p v-if="users.length < 1">
        No users
      </p>
      <table v-else className="table striped bordered hover"  responsive size="sm" w-auto="true">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
            <td v-if="editing === user.id">
              <input type="text" v-model="user.username" />
            </td>
            <td v-else>{{ user.username }}</td>
  
            <td v-if="editing === user.id">
              <input type="text" v-model="user.email" />
            </td>
            <td v-else>{{ user.email }}</td>
  
            <td v-if="editing === user.id">
              <button @click="editUser(user)">Save</button>
              <button @click="cancelEdit(user)" class="muted-button">Cancel</button>
            </td>
  
            <td v-else>
              <button @click="editMode(user)">Edit</button>
              <button @click="$emit('delete:user', user.id)" class="delete-button">Delete</button>
            </td>
  
          </tr>
        </tbody>
      </table>
    </div>
  </template>
    
  <script>
import 'bootstrap/dist/css/bootstrap.css';
    export default {
      name: 'user-details',
      props: {
        users: Array,
      },
      data() {
        return {
          editing: null,
        }
      },
      methods: {
        editMode(users) {
          this.cachedUser = Object.assign({}, users)
          this.editing = users.id
        },
        cancelEdit(user) {
          Object.assign(user, this.cachedUser)
          this.editing = null
        },
        editUser(user){
          if(user.username === '' || user.email === '') return
          this.$emit('edit:user', user.id, user)
          this.editing = null        
        },
      }
    }
  </script>
  
  <style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }
  input {
    margin: 0;
  }
  .empty-table {
    text-align: center;
  }
  </style>