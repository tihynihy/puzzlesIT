<template>
    <div id="main-con">
        <div id="header-con">
            <div id="title-con">
                <h1>Registration</h1>
            </div>
        </div>
        <div id="login">
            <div id="img-side">
                <img src="../assets/poster.png" alt="">
            </div>
            <div id="login-field">
                <input type="text" placeholder="Name">
                <input type="text" placeholder="Surname">
                <input type="text" placeholder="Email">
                <input type="text" placeholder="Confirm Email">
                <input type="password" placeholder="Password">
                <input type="password" placeholder="Confirm password">
                <div id="button-row">
                    <button>CONTINUE</button>
                    <button>CANCEL</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RegisterView'
}
</script>
<style>
#title-con h1 {
    font-family: sans-serif;
}

#header-con {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    margin-top: 30px;
}

#logo-con img {
    max-height: 100%;
    max-width: 100%;
}

#logo-con {
    width: 100px;
    display: flex;
    justify-content: center;
}

#main-con {
    height: 100%;
}

#login {
    margin-top: 50px;
    border: 1px solid black;
    border-radius: 25px;
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
}

#img-side {
    height: 400px;
    width: 50%;
    border: 1px solid red;
    border-radius: 25px;
}

#img-side img {
    max-height: 100%;
    max-height: 100%;
    border-radius: 25px;
}

#login-field {
    gap: 10px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

#login-field input {
    width: 300px;
    border-radius: 10px;
    height: 30px;
}

#button-row {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

#button-row button {
    width: 150px;
    height: 30px;
    background-color: #FCFF35;
    border-style: none;
    border-radius: 10px;
    box-shadow: 0 9px #999;
}

#button-row button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

#button-row button:hover {
    background-color: #CACD1A;
}
</style>