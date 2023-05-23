<script setup lang="ts">
import { ref, reactive } from 'vue'
import Helpers from 'core/helpers/Helpers'
import SetupPassword from 'setup/page.recover-password.json'
import SetupResponses from 'setup/global.responses.json'
import BannerTitle from 'comp/global/banners/BannerTitle.vue'
import BannerSprites from 'comp/global/banners/BannerSprites.vue'
import InputComp from 'comp/global/inputs/InputComp.vue'
import InputSubmit from 'comp/global/inputs/InputSubmit.vue'
import useRecoverPassword from 'composable/useRecoverPassword'

const [{ title, form: inputs }, { success }, submitForm, form] = [
    SetupPassword[Helpers.translate()],
    SetupResponses[Helpers.translate()].recoverPassword,
    ref(false),
    reactive({ email: '' })
]

async function recover() {
    submitForm.value = true

    await useRecoverPassword(form, success)

    submitForm.value = false
}
</script>

<template>
    <BannerTitle :title="title" />

    <BannerSprites :sprite-left="'thief'" :sprite-right="'thief'" />

    <div class="main-background">
        <div class="main-container">
            <div class="background">
                <form class="form-login" @submit.prevent="recover" autocomplete="on">
                    <InputComp
                        :type="'email'"
                        :regex="'email'"
                        :label="inputs.email.label"
                        :placeholder="inputs.email.placeholder"
                        :description="inputs.email.description"
                        @emit-content="(email) => (form.email = email)"
                    />

                    <InputSubmit :label="inputs.submit.label" :is-disabled="submitForm" />
                </form>
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
    gap: 1.4rem;
}
</style>
