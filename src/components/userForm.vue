<template>
    <div id="user-form">
       <center>
        <form @submit.prevent="handleSubmit" >
            
            <label>User Name</label>
            <input 
                ref="first"
                type="text"
                :class="{ 'has-error': submitting && isNameValid }"
                v-model="user.username"
                @focus="clearStatus"
                @keypress="clearStatus" 
                required
            />
            <br/>
            <label>User Email</label>
            <input 
                type="text"
                :class="{ 'has-error': submitting && isEmailValid }"
                v-model="user.email"
                @focus="clearStatus"
                required
            />
            <br/>
            <label>Password</label>
            <input 
                type="password"
                :class="{ 'has-error': submitting && isPasswordValid }"
                v-model="user.password"
                @focus="clearStatus"
                required
            />
            <p v-if="error && submitting" class="error-message">
                ❗Please fill out all required fields and valid email address
            </p>
            <p v-if="success" class="success-message">
                ✅ User successfully added
            </p>
            <br/><br/>
            <button>Add User</button>
            
        </form>
    </center>
    </div>
</template>

<script>
export default {
    name: 'user-form',
    data() {
        return{
            submitting: false,
            error: false,
            success: false,
            user: {
                username: '',
                email: '',
                password:''
                // reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
            },
        }
    },
    methods: {
        handleSubmit() {
            this.submitting = true
            this.clearStatus()
            if(this.isNameValid || this.isEmailValid || this.isPasswordValid){
                this.error = true
                return
            }
            this.$emit('add:user', this.user)
            this.$refs.first.focus()
            this.user = {
                username: '',
                email: '',
                password:''
                // reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
            }
            this.error = false
            this.success = true
            this.submitting = false
        },
        clearStatus() {
            this.success = false
            this.error = false
        },
    },
    computed: {
        isNameValid() {
            return this.user.username === '';
        },
        isEmailValid () {
            return this.user.email === '';
        },
        isPasswordValid () {
            return this.user.password === '';
        }
    },
}
</script>

<style scoped>
  
    form {
    width: 300px;
    border: 1px solid;
    padding: 20px;
  }
  
  @media only screen and (max-width: 360px) {
    form {
        width: 220px;
        border: 2px solid;
        padding: 20px;
    }
  }
    [class*='-message'] {
        font-weight: 500;
    }
    .error-message {
        color:#d33c40;
    }
    .success-message {
        color: #32a95d;
    }
</style>