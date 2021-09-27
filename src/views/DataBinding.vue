<template>
    <div>
        <h1>Hello, {{title}}</h1>
        <div v-html="htmlStr"></div>
        <form>
            <input type="text" v-model="valueModel">
            <input type="number" v-model.number="numberModel">,
            <textarea v-model="txtMessage"></textarea>
        </form>
    </div>
    
</template>

<script>
export default {
    data() {
        return{
            title : 'World',
            htmlStr : '<p style="color:red;">THIS IS RED</p>',
            valueModel : 'test',
            numberModel : 2,
            txtMessage : '여기는 textarea 입니다'
        }
    }
}
</script>

<style scoped>
input {display: block;}

</style>