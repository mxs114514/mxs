// 第一个参数填链接，后面没有参数的话默认是发起 get 请求
fetch("https://jsonplaceholder.typicode.com/todos/1")
    // fetch 返回的是一个 Response，我们可以通过 Response 的 json 方法来获取服务端返回的 json 数据
    .then((response) => response.json())
    // 这里是 console 出来，你也可以用这个数据做其他操作
    .then((json) => console.log(json));


fetch("https://jsonplaceholder.typicode.com/posts",
    // 第二个参数是一个对象，可以配置请求的方法，请求头，请求体等
    {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json;",
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
