<template>
  <div>
    <select v-model="selectedValue" @change="changeSelected">
        <option value="사미라">사미라</option>
        <option value="트위치">트위치</option>
        <option value="이즈리얼">이즈리얼</option>
    </select>
  </div>
</template>

<script>
export default {
    data(){
        return{
            selectedValue : '',
        }
    },
    methods:{
       changeSelected(){
           alert(this.selectedValue);
       }
    }
}
</script>

<style>

</style>