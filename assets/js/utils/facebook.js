/*global window, FB, state, user*/
/*window.fbAsyncInit = function () {
    "use strict";
    FB.init({
        appId: '1290698544371737',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.9'
    });
    FB.AppEvents.logPageView();
};*/

window.fbAsyncInit = function () {
    FB.init({
        appId: '1290698544371737',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
    });
    FB.AppEvents.logPageView();
};

function loginHandler(response) {
    "use strict";
    if (response.status === 'connected') {
        state.status = "Conectado";
        FB.api('/me?fields=email,name', user => {
            state.user = user;
            state.doRender();
        });
    } else if (response.status === 'not_authorized') {
        state.user = null;
        state.status = 'Aplicación no autorizada';
        state.doRender();
    }
}

function doLogin() {
    FB.login(loginHandler, {
        scope: 'email'
    });
}