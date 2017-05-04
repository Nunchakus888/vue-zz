<template>
    <div class="mdzz">
        <h1>name: {{name}}</h1>
        <h2>gender: {{gender}}</h2>
    </div>
</template>

<script>
    export default {
        el: '#root',
        data() {
            return {
                name: 'mdzz~~',
                gender: 'girl~fsadf~'
            }
        }
    }
</script>

<style lang="css">
    .mdzz {
        width:300px;
        margin: 0 auto;
        background: gold;
    }

    h1 {
        background: yellowgreen;
        color: red;
    }
</style>
