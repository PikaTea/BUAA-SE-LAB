window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
    document.getElementById('top-right').addEventListener('click',function() {
        clickLogin();
    });

    window.addEventListener('keyup',function(event) {
        if(event.keyCode === 13) {
            search();
        }
    });
}

function search() {
    // TODO: 搜索触发后的行为
    if(document.getElementById('searchinput').value == '') {
        alert('请输入搜索内容');
        console.log('输入为空');
    }
    else {
        var input = document.getElementById('searchinput').value;
        window.location.href = ("http://www.baidu.com/s?wd=" + input);
        console.log('输入成功');
    }
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
  }

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">' + escapeHtml(username) + '</span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}