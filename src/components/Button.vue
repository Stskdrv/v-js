<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            default: 'default title'
        },
    },
    setup() {
        const handleClick = () => console.log('click'); //how to deal with click
        return { handleClick };
    },
};
</script>

<template>
    <button class="btn" @click="handleClick">{{ title }}</button>
</template>

<style scoped>
.btn {
    width: 230px;
    height: 57px;
    background-color: #F65261;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 23px;
}

.btn:hover {
    background-color: #b82935;
}
.btn:active {
    background-color: #691118;
}

</style>