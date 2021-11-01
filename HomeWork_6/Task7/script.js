let main = document.createElement('main');
main.classList = 'mainClass check item';

let div = document.createElement('div');
div.id = 'myDiv';

let p = document.createElement('p');
p.innerHTML = 'First paragraph';

div.append(p);
main.append(div);
document.body.append(main);