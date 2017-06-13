/*global $, doLogin, alert*/
const Login = () => {
    const login = $('<div class="login"></div>'),
        title = $('<h1>Log into Laboratoria</h1>'),
        email = $('<input type="email" class="username placeholder="Correo Electrónico" />'),
        password = $('<input type="password" class="password" placeholder="Contraseña" />'),
        loginButton = $('<button>Ingresar</button>'),
        faceButton = $('<button>Ingresar con Facebook</button>');

    login.append(title);
    login.append(email);
    login.append(password);
    login.append(loginButton);
    login.append(faceButton);

    loginButton.on('click', (e) => {
        e.preventDefault();
        alert('Not implemented yet');
    });

    faceButton.on('click', (e) => {
        e.preventDefault();
        doLogin();
    });

    return login;
};