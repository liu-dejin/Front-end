/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */

const creator = '播仔'

axios({
    url:'http://hmajax.itheima.net/api/settings',
    params: {
        creator
    }
}).then(res=>{
    const userObj = res.data.data
    Object.keys(userObj).forEach(key=>{
        if (key==='avatar'){
            //赋予默认图片
            document.querySelector('.prew').src = userObj[key]
        }else if  (key==='gender'){
            //获取单选框     [男radio元素,女radio元素]
            const gRadiolist = document.querySelectorAll('.gender')
            //0男,女1
            const gNum = userObj[key]
            //性别数字作为下标,找到对应性别单选框
            gRadiolist[gNum].checked = true
        }else {
            document.querySelector(`.${key}`).value=userObj[key]
        }
    })
})

/**
目标2.修改头像
获取头像文件
提交服务器并更新头像
 */

//文件选择元素change事件
document.querySelector('.upload').addEventListener('change',e=>{
    // console.log(e.target.files[0])
    const fd = new FormData()
    // 获取头像文件
    fd.append('avatar',e.target.files[0])
    fd.append('creator',creator)
    //提交数据到服务器
    axios({
        url : 'http://hmajax.itheima.net/api/avatar',
        method: 'put',
        data:fd
    }).then(res=>{
        const imgUrl = res.data.data.avatar
        //新的头像回显到页面
        document.querySelector('.prew').src = imgUrl
    })
})

/**
 * 3.提交表单
 * 收集表单数据
 * 提交到服务器保存
 */

document.querySelector('.submit').addEventListener('click',()=>{
    //收集表单
    const userForm = document.querySelector('.user-form')
    const userObj = serialize(userForm,{hash:true,empty:true})
    userObj.creator =creator
    userObj.gender = +userObj.gender
    console.log(userObj)
    // 提交到服务器并保存
    axios({
        url : 'http://hmajax.itheima.net/api/settings',
        method: 'put',
        data: userObj
    }).then(res=>{
        // 创建toast对象
        const toastDom = document.querySelector('.my-toast')
        const toast = new bootstrap.Toast(toastDom)
        //调用show方法显示提示框
        toast.show()
    })
})
