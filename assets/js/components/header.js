/*global $*/
const Header = () => {
    const header = $('<header></header'),
        img = $('<img src="assets/img/logo.png" />');

    header.append(img);
    return header;
};