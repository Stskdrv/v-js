<template>
    <input
        class="text-input"
        :type="type"
        :placeholder="placeholder" />
</template>

<script lang="ts">
export default {
    props: {
        value:String,
        type: {
            type: String,
            default: 'text',
        },
        placeholder: String,
    },
};
</script>

<style scoped>
.text-input {
    min-width: 600px;
    height: 57px;
    background: #424242;
    opacity: 40%;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 23px;
}
.input-error {
    border-color: red;
}

.error-message {
    color: red;
    font-size: 0.85em;
    margin-top: 0.25em;
}
</style>
