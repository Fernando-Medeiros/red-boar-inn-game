<script setup lang="ts">
import { ref, reactive } from 'vue'
import Helpers from 'core/helpers/Helpers'
import useLogin from 'composable/useLogin'
import SetupLogin from 'setup/page.login.json'
import BannerTitle from 'comp/global/banners/BannerTitle.vue'
import BannerSprites from 'comp/global/banners/BannerSprites.vue'
import InputComp from 'comp/global/inputs/InputComp.vue'
import InputSubmit from 'comp/global/inputs/InputSubmit.vue'
import InputCheckBox from 'comp/global/inputs/InputCheckBox.vue'

const [{ titleTips: tips, form: inputs }, submitForm, form] = [
    SetupLogin[Helpers.translate()],
    ref(false),
    reactive({
        email: '',
        password: '',
        remember: false
    })
]

async function login() {
    submitForm.value = true

    await useLogin(form)

    submitForm.value = false
}
</script>

<template>
    <div>
        <BannerTitle :title="Helpers.random(tips)" />

        <BannerSprites :sprite-left="'peasant'" :sprite-right="'peasant'" />

        <div class="main-background">
            <div class="main-container">
                <div class="background">
                    <form class="form-login" @submit.prevent="login">
                        <InputComp
                            :type="'email'"
                            :regex="'email'"
                            :label="inputs.email.label"
                            :placeholder="inputs.email.placeholder"
                            :description="inputs.email.description"
                            @emit-content="(email) => (form.email = email)"
                        />

                        <InputComp
                            :type="'password'"
                            :regex="'password'"
                            :label="inputs.password.label"
                            :placeholder="inputs.password.placeholder"
                            :description="inputs.password.description"
                            @emit-content="(password) => (form.password = password)"
                        />

                        <div class="form-options">
                            <InputCheckBox
                                :label="inputs.checkbox.label"
                                @click="() => (form.remember = !form.remember)"
                            />
                            <router-link :to="inputs.recover.route">
                                {{ inputs.recover.label }}
                            </router-link>
                        </div>

                        <InputSubmit :label="inputs.submit.label" :is-disabled="submitForm" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    padding-block: 1rem;
    border-radius: 5px;
    margin-top: 1rem;
    background-color: var(--cor-background-color);
}
.form-login {
    z-index: 1;
    display: grid;
    width: 100%;
    gap: 2rem;
    justify-content: center;
}
.form-options {
    display: flex;
    justify-content: space-between;
}
.form-options a {
    color: var(--cor-font-color);
    text-decoration: none;
}
.form-options a:hover {
    color: burlywood;
}

@media (max-width: 780px) {
    .form-login {
        justify-content: unset;
    }
    .form-options {
        padding-inline: 10px;
    }
}
</style>
