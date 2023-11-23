import tearoom from "@/components/pojo/Tearoom";
import { onMounted,ref} from "vue";
import router from "@/router/router";

import axios from "@/api/axiosRequest";

let tearooms=ref([tearoom]);
let pageIndex = 1;
let pageEnd = 10;
let total= ref(0);
// @ts-ignore
function getSize(sizes){
    pageEnd = sizes
}

// @ts-ignore
const onQuery = async ()=>
    await axios({
        url:'/query/limit',
        method:'get',
        params:{
            pageIndex,pageEnd
        }
    }).then(req=>{
        total.value = req.data.data.total;
        tearooms.value =req.data.data.records;
        console.log(total);

    }).catch(err=>{
        console.log(err);
    })
// @ts-ignore
function handleCurrentChange(val){

    pageIndex = val;
    onQuery();
    // console.log("pageIndex=============>"+pageIndex)
}
// @ts-ignore
function handleSizeChange(val) {

    pageEnd = val;
    onQuery();
}

const add = ()=>{
    router.push({path: '/emp/add'});
}
const update = (tearoom) =>{
    localStorage.setItem('tearoomOBJ',JSON.stringify(tearoom));
    router.push({
        path: '/emp/update',
    })
}

export default{
    onQuery,handleSizeChange,add,update,handleCurrentChange,tearooms,pageIndex,pageEnd,total
}
