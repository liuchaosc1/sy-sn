<template>
    <div>
        <div class="select-item " v-for="(item,index) in list" :key="index" :class="{sign:index == index00}" @click="changeBackground(index)">
		    {{item.name}}
	    </div>
    </div>
</template>

<script>
export default {
    props:["msg"],
    data(){
        return{
            list:this.msg,
            index00:0,
        }
    },
    methods:{
         changeBackground(index){
            this.index00=index;
        }
    }
    
}
</script>

<style scoped>
.sign{
    background-color:#ffeda2!important;
    border: .02rem solid #fc0
}
.select-item{
    display: inline-block;
    background: #f6f6f6;
    margin: .24rem .24rem 0 0;
    padding: .2rem 1em;
    text-align: center;
    border-radius: .24rem;
    box-sizing: border-box;
    border: .04rem solid #f6f6f6;
}
</style>
