<template>
    <div class="mylogin surface-card p-4 shadow-2 border-round w-full lg:w-6">

        <div class="login-panel-1">
            <img src="../assets/principal.png" class="image-login">
        </div>

        <div class="login-panel-2">
            <div class="text-center mb-5">
                <div class="text-900 text-3xl font-medium mb-3 text-b">
                    <p>Welcome Back</p>
                </div>
            </div>

            <div>
                <span class="p-float-label button-complete user-data">
                    <InputText id="value" type="text" aria-describedby="text-error" class="user-data-input"/>
                    <label for="value">User Name</label>
                </span>
                <span class="p-float-label button-complete user-data">
                    <InputText id="value" type="text" aria-describedby="text-error" class="user-data-input"/>
                    <label for="value">Password</label>
                </span>

                <div class="flex align-items-center justify-content-between mb-6">
                    <div class="flex align-items-center">
                        <Checkbox id="rememberme1" :binary="true" class="mr-2"></Checkbox>
                        <label for="rememberme1">Remember me</label>
                    </div>
                    <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
                </div>

                <Button label="Sign In" icon="pi pi-user" class="w-full button"></Button>

                <br>
                <br>
                <span class="text-600 font-medium line-height-3">Don't have an account?</span>
                <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
            </div>
        </div>


    </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.mylogin {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
    overflow: hidden;
    padding: 0;
}

.login-panel-1 {
    width: 50%;
    padding: 0rem;
    margin: 0;
    border-radius: 15px;
}
.login-panel-2 {
    width: 50%;
    padding: 1rem;
    margin: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
}

.image-login {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.text-b p {
    font-family: 'Roboto Mono';
    color: #FF2273;
    margin: 3rem 0 1rem 0;
    font-size: 2.5rem;
}

.logo-Login {
    margin-left: 0.5rem;
    width: 30%;
    height: 30%;
}

.user-data {
    width: 100%;
    margin-bottom: 1rem;
    margin: 3rem 2rem;
}
.user-data label {
    font-family: 'Roboto Mono';
    color: #2A1E25;
    font-size: .75rem;
}
.user-data-input {
    border-radius: 30px;
    border: 1px solid #2A1E25;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 250;
    line-height: 1.5;
    width: 75%;
    color: #2A1E25;
    transition: all 0.2s ease-in-out;

}

:deep(.button) {
    background-color: #FFD33B;
    color: #2A1E25;
    border: none;
    border-radius: 30px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;
    width: 75%;
    transition: all 0.2s ease-in-out;
}
</style>