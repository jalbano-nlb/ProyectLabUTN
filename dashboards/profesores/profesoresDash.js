const userInfo = {
    username: sessionStorage.getItem('usr'),
    type: sessionStorage.getItem('type')
    // sessionStorage.setItem('pwd', _pw);
};
document.getElementById('nombreUser').innerHTML = userInfo.username;