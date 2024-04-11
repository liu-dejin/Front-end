/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */

//获取省份列表
axios({
    url: 'http://hmajax.itheima.net/api/province'
}).then(res => {
    console.log(res)
    const optionStr = res.data.list.map(pname => `<option value="${pname}">${pname}</option>`).join('')
    console.log(optionStr)
    document.querySelector('.province').innerHTML = `<option value="">省份</option>` + optionStr
})

//切换省份，设置城市下拉菜单数据，清空地区下拉菜单
document.querySelector('.province').addEventListener('change', async e => {
    //获取到用户选择的省份名字
    console.log(e.target.value)
    const res = await axios({url: 'http://hmajax.itheima.net/api/city', params: {pname: e.target.value}})
    console.log(res)
    const optionStr = res.data.list.map(cname => `<option value="${cname}">${cname}</option>`).join('')
    console.log(optionStr)
    document.querySelector('.city').innerHTML = `<option value="">城市</option>` + optionStr

    //清空地区数据
    document.querySelector('.area').innerHTML = `<option value="">地区</option>`
})

// 切换城市，设置地区下拉菜单数据
document.querySelector('.city').addEventListener('change',  async e => {
    console.log(e.target.value)
   const res = await axios({
        url: 'http://hmajax.itheima.net/api/area', params: {
            pname: document.querySelector('.province').value,
            cname: e.target.value
        }
    })
    console.log(res)
    const optionStr = res.data.list.map(aname=>`<option value="${aname}">${aname}</option>`).join('')
    console.log(optionStr)
    document.querySelector('.area').innerHTML=`<option value="">地区</option>`+optionStr
})

/**
 *     //清空地区数据 特别说明
 *     document.querySelector('.area').innerHTML = `<option value="">地区</option>`
 *
 *      省份选择->城市选择->地区选择
 *      所以是跟着变化的
 *      document.querySelector('.area').innerHTML = `<option value="">地区</option>`是省份变了没有点击城市变进而地区不会变,所以加的一个措施
 */


/**
 * 目标2：收集数据提交保存
 *  2.1 监听提交的点击事件
 *  2.2 依靠插件收集表单数据
 *  2.3 基于axios提交保存，显示结果
 */
//监听提交的点击事件
document.querySelector('.submit').addEventListener('click',async ()=>{
    const form = document.querySelector('.info-form')
    const data =serialize(form,{hash:true,empty:true})
    console.log(data)
    //axios提交保存
    try {
        const res = await axios({
            url:'http://hmajax.itheima.net/api/feedback',
            method:'POST',
            data
        })
        console.log(res)
        alert(res.data.message)
    } catch (err){
        console.dir(err)
        alert(err.response.data.message)
    }


})
