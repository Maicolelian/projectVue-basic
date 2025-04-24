<template>
    <div class="my-component">
        <!-- <h1 v-if="isVisible"> {{ message }}</h1> -->
        <h1 v-bind:class="{ highlighted: ishighlighted }"> {{ title }}</h1>
        <button v-on:click="toggleHighlight">Visible</button>
        <input v-model="message">

        <ul>
            <li v-for="item in list" v-bind:key="item.id">{{ item.text }}</li>
        </ul>
    </div>
</template>

<style scoped>
.highlighted {
    color: goldenrod;
}
</style>

<script>
export default {
    name: 'MyComponent',
    data() {
        return {
            message: 'Hola mundo!  Esta es la pagina de inicio!',
            title: 'Hola!  Esta es el titulo!',
            ishighlighted: false,
            isVisible: true,
            list: [
                { id: 1, text: 'Item 1' },
                { id: 2, text: 'Item 2' },
                { id: 3, text: 'Item 3' }
            ]
        };
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        sayHello() {
            alert(this.message);
        },toggleHighlight() {
            this.ishighlighted = !this.ishighlighted;
        }
    },
}
</script>