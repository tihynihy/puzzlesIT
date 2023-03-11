<template>
    <div id="header-con">
        <div id="img-con">
            <img src="../assets/mainLogo.png" alt="">
        </div>
        <h1>Welcome to OLX</h1>
        <p>Login or register to continue</p>
    </div>

    <div id="login-field">
        <input type="text" v-model="username" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">
        <div id="button-row">
            <button>LOGIN</button>
           <button>REGISTER</button>
        </div>
    </div>
</template>
<script>


export default {
    name: 'LoginView',

    data() {
        return {
            username: '',
            password: ''
        }
    },
}
</script>
<style>
::placeholder {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
}

h1,
p {
    font-family: sans-serif;
}

#img-con img {
    max-width: 100%;
    max-height: 100%;
}

#img-con {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 150px;
}

#header-con {
    text-align: center;
}

#login-field {
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
}

#login-field input {
    display: flex;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    padding-left: 35px;
    padding-right: 35px;
    height: 30px;
}

#login-field button {
    width: 150px;
    height: 30px;
    background-color: #FCFF35;
    border-style: none;
    border-radius: 10px;
    box-shadow: 0 9px #999;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
}

#login-field button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

#login-field p {
    text-align: center;
}
</style>