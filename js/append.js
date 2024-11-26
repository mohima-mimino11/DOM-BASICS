const placesList = document.getElementById('places-list');
// console.log(placesList);
const li = document.createElement('li');
li.innerText = 'Pahartoli';

placesList.appendChild(li);

const mainSection = document.getElementById('main-container');
// console.log(mainSection);

const newSection = document.createElement('section');

const h1 = document.createElement('h1');

h1.innerText = 'My Food List';
const ul = document.createElement('ul');


const li1 = document.createElement('li');
li1.innerText = 'Biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Pizza';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Pasta';
ul.appendChild(li3);


mainSection.appendChild(newSection);
newSection.appendChild(h1);
newSection.appendChild(ul);


const sectionDress =  document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
  <li>Gown</li>
  <li>Saree</li>
  <li>Floral Dress</li>
</ul>
`
mainSection.appendChild(sectionDress)