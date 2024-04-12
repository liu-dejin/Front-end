/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
//获取并渲染图书列表

const creator = '刘金'

function getBookList() {
    //1.1获取数据
    axios({
        url: 'http://hmajax.itheima.net/api/books', params: {
            //外号,获取对应数据
            creator
        }
    }).then(res => {
        console.log(res)
        const bookList = res.data.data
        console.log(bookList)
        //1.2渲染数据
        const htmlStr = bookList.map((item, index) => {
            return `
  <tr>
          <td>${index + 1}</td>
          <td>${item.bookname}</td>
          <td>${item.author}</td>
          <td>${item.publisher}</td>
          <td data-id=${item.id}>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
        </tr>
            `
        }).join('')
        console.log(htmlStr)
        document.querySelector('.list').innerHTML = htmlStr
    })
}

getBookList()

/**
 * 目标2,新增图书
 * 弹框 显示/隐藏
 * 收集表单数据,并提交给服务器
 * 刷新图书列表
 */
//2.1创建弹框对象
const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)

document.querySelector('.add-btn').addEventListener('click', () => {
    //获取表单数组
    const addForm = document.querySelector('.add-form')
    const bookObj = serialize(addForm, {hash: true, empty: true})
    console.log(bookObj)
    axios({
        url: 'http://hmajax.itheima.net/api/books', method: 'post', data: {
            ...bookObj, creator
        }
    }).then(res => {

        // console.log(res)

        //2.3添加成功后重新渲染
        getBookList()
        //重置表单
        addForm.reset()
        //隐藏弹框
        addModal.hide()
    })


})

//目标3.删除图书


//3.1动态创建,事件委托
document.querySelector('.list').addEventListener('click', e => {
    //获取出发时间的目标元素
    // console.log(e.target)
    //判断点击的是删除元素
    if (e.target.classList.contains('del')) {
        // console.log('点击删除元素')
        const theId = e.target.parentNode.dataset.id
        console.log(theId)
        //3.2调用接口
        axios({
            url: `http://hmajax.itheima.net/api/books/${theId}`, method: 'delete'
        }).then(() => {
            //刷新图书列表
            getBookList()
        })
    }
})

//4.编辑图书信息
//4.1弹框的显示与隐藏
const editDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editDom)
//点击编辑按钮    事件委托
document.querySelector('.list').addEventListener('click', e => {
    console.log(e.target.parentNode)
    if (e.target.classList.contains('edit')) {
        //4.2获取给钱点编辑图书的数据,渲染到编辑表单中
        const theId = e.target.parentNode.dataset.id
        axios({
            url: `http://hmajax.itheima.net/api/books/${theId}`
        }).then(res => {
            // console.log(res.data)
            const bookObj = res.data.data
            // document.querySelector('.edit-form .bookname').value = bookObj.bookname
            // document.querySelector('.edit-form .author').value=bookObj.author

            //数据对象的属性和标签类名一致
            //遍历数据对象,使用属性去获取对应的标签,快速赋值
            const keys = Object.keys(bookObj)  //获取对象的属性名转为字符串类型的数组  //['id', 'bookname', 'author', 'publisher']
            keys.forEach(key => {
                document.querySelector(`.edit-form .${key}`).value = bookObj[key]
            })

        })
        editModal.show()
    }
})
//点击修改按钮
//4.3提交数据刷新列表
document.querySelector('.edit-btn').addEventListener('click', () => {
    const editForm = document.querySelector('.edit-form')
    const {id, bookname, author, publisher} = serialize(editForm, {hash: true, empty: true})
    //id是正在编辑的的图书id.隐藏起来,防止用户修改
    //{id: '376523', bookname: '前端开发入门', author: '黑马程序员', publisher: '北京出版社'}
    axios({
        url: `http://hmajax.itheima.net/api/books/${id}`, method: 'put', data: {
            bookname, author, publisher, creator
        }
    }).then(() => {
        //重新渲染
        getBookList()
        //隐藏弹框
        editModal.hide()
    })


})
