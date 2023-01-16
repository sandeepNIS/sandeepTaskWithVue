<template>
    <div id="employee-details">
      <p v-if="users.length < 1">
        No users
      </p>
      <table v-else>
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
              <button @click="editEmployee(user)">Save</button>
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
          this.cachedEmployee = Object.assign({}, users)
          this.editing = users.id
        },
        cancelEdit(employee) {
          Object.assign(employee, this.cachedEmployee)
          this.editing = null
        },
        editEmployee(employee){
          if(employee.username === '' || employee.email === '') return
          this.$emit('edit:employee', employee.id, employee)
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