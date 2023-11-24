
// @ts-ignore
import img from '@/img/login.png'
import {reactive, ref, toRefs} from "vue";
import axios from "@/api/axiosRequest";
import router from '@/router/router'

import {ElNotification} from "element-plus";


let use_id = ref('');
let nickname1 = ref('');
let imageUrl =ref(img)
let msg:string = "";
let loginList;
let username:string = '';
function blurUsername(use_id:string){
   

}


const add = () => {
    router.push('enroll');
}

const sub = () => {
    let user_id = use_id.value;
    let nickname = nickname1.value;
    console.log(user_id + "===="+nickname)
    axios({
        url:"/login",
        params:{user_id,nickname},
        method:"post"
    }).then(res =>{
        msg = res.data.msg;
        loginList = res.data.data;

        for (const loginListKey in loginList) {
            username = loginList[loginListKey].nickname;
        }
        console.log(loginList)
        if (msg === '登录成功'){
            // alert(msg);
            openSou(msg)
            seeDetail(username);
        }

        if (loginList==null){
            // alert('账号或密码错误!')
            open();
        }

    }).catch(Error =>{
        error()
        console.log(Error);
    })
}
function seeDetail(username:string) {
    router.push(
        {
            path:"index",query:{username: username}
        }
    );

}
const openSou = (msg:string)=>{
    ElNotification({
        title: '提示',
        type:"success",
        dangerouslyUseHTMLString: true,
        message: msg,
    })
}
const open = () =>
    ElNotification({
        type:"error",
        dangerouslyUseHTMLString: true,
        message: '<div style="position: absolute;width: 100%;color: red">账户或密码错误</div>',
    })
const error = () =>
    ElNotification({
        type:"error",
        dangerouslyUseHTMLString: true,
        message: '<div style="position: absolute;width: 100%;color: red">服务器未响应</div>',
    })


export default {
    imageUrl,blurUsername,add,sub,
    use_id,nickname1
}
