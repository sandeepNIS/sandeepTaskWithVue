<template>
  <div id="app" class="small-container">
    <!-- <img id="image" src="./assets/logo.png" alt="VueJS" /> -->
    <h1>Employee Details</h1>
    <user-form  @add:user="addUser" />

    <user-details v-bind:users ="users"
    @edit:employee="editEmployee"
                      @delete:employee="deleteEmployee"
    />
  </div>
</template>

<script>
import userForm from './components/userForm.vue';
import userDetails from './components/userDetails.vue';
export default {
  name: 'app',
  components: {
    userDetails,
    userForm,
  },
  data() {
    return {
      users: [],
    }
  },
  methods: {
    async addUser(employee) {
      try {
        const response = await fetch('http://localhost:3080/account/addaccount', {
          method: 'POST',
          body: JSON.stringify(employee),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        const data = await response.json()
        this.users = [...this.users, data]
      } catch (error) {
        console.error('Error occured while adding employee: ' +error)
      }
    },
    async getEmployees() {
      try {
        const response = await fetch(`http://localhost:3080/account/list`)
        const data = await response.json()
        this.users = data
      } catch (error) {
        console.error('Error occured while retrieving employees: ' +error);
      }
    },
    async editEmployee(id, updatedEmployee) {
      try {
        const response = await fetch (`http://localhost:3080/account/:${id}`, {
          method: 'PUT',
          body: JSON.stringify(updatedEmployee),
          headers: { "Content-type": "application/json; charset=UTF-8" } 
        });
        const data = await response.json()
        this.users = this.users.map(employee => (employee.id === id ? data : employee))
      } catch (error) {
        console.error('Error while editing: ', +error)
      }
    },
    async deleteEmployee(id) {
      try {
        await fetch (`http://localhost:3080/account/delete/:${id}`, {
          method: 'DELETE'
        });
        this.users = this.users.filter(employee => employee.id !== id);
      } catch (error) {
        console.error('Error while deleting: ', +error)
      }
    },
    
  },
  mounted() {
    this.getEmployees()
  }
  
  }
</script>

<style>
#employee-details {
  width: 100%;
}
button {
  background: #41b883;
  border: 1px solid #41b883;
}
.delete-button {
  background:#d11a2a;
  border: 1px solid #d11a2a;
}
.small-container {
  max-width: 720px;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 10px;
}
</style>