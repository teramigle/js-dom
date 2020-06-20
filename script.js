function createElement(tag, parent){
    const element = document.createElement(tag);
    parent.appendChild(element);
    return element;
}

const body = document.querySelector('body');
body.className = "body";

const headings = createElement('div', body);
headings.className = "headings";

const find = createElement('h2', headings);
find.innerHTML = "Find. Connect. Enjoy.";
find.className = "find";

const newWay = createElement('h4', headings);
newWay.innerHTML = "new way to meet people";
newWay.className = "grey";

const container = createElement('div', body);
container.className = "container";

const people = [
    {
        photo: 'images/51.jpg',
        name: 'Robert Langdon',
        address: '15 Eagle Way. AL10 8RD',
        about: 'Typical gamer. Friendly coffee practitioner. Alcohol buff. Extreme pop cultureaholic.'
    },
    {
        photo: 'images/16.jpg',
        name: 'Deanna I Martin',
        address: 'Worthington, Ohio(OH), 43085',
        about: 'Zombie ninja. Wannabe internet buff. Proud introvert. Bacon expert. Social media trailblazer.'
    },
    {
        photo: 'images/17.jpg',
        name: 'Sammy M Stoll',
        address: 'Wellsville, New York(NY), 14895',
        about: 'Social media junkie. Avid food nerd. Professional travel fan. Tv fanatic. Bacon geek. Web fanatic.'
    },
    {
        photo: 'images/46.jpg',
        name: 'James C Young',
        address: '2597 Meadowbrook Mall Road',
        about: 'Certified food specialist. Pop culture geek. Typical travel evangelist. Award-winning analyst. Zombie lover.'
    },
    {
        photo: 'images/34.jpg',
        name: 'Claudette G Hann',
        address: 'Philadelphia, Pennsylvania(PA), 19108',
        about: 'Twitter practitioner. Devoted thinker. Hipster-friendly problem solver. Social media expert.'
    },
    {
        photo: 'images/55.jpg',
        name: 'Bruce K Collins',
        address: 'Westhampton Beach, New York(NY), 11978',
        about: 'Wannabe social media aficionado. Thinker. Unapologetic beer guru. Internet lover. Avid food buff.'
    },
    {
        photo: 'images/21.jpg',
        name: 'Amber C Pantoja',
        address: 'Nashville, Tennessee(TN), 37209',
        about: 'Wannabe pop culture expert. Alcohol fanatic. Unapologetic introvert. Subtly charming communicator.'
    },
    {
        photo: 'images/23.jpg',
        name: 'Adriana E Hubert',
        address: 'Burlington, North Carolina(NC), 27215',
        about: 'Pop culture fanatic. Hardcore analyst. Infuriatingly humble reader. Incurable troublemaker.'
    }
];

for (person of people) {
    const box = createElement('div', container);
    box.className = "box";

    const image = createElement('img', box);
    image.className = "avatar";
    image.setAttribute('src', person.photo);

    const name = createElement('h4', box);
    name.className = "name";
    name.innerHTML = person.name;

    const icon = createElement('i', box);
    icon.className = "fas fa-map-marker-alt";

    const address = createElement('h6', box);
    address.className = "address";
    address.innerHTML = person.address;

    const about = createElement('p', box);
    about.className = "about";
    about.innerHTML = person.about;

    const connect = createElement('a', box);
    connect.className = "connect";
    connect.setAttribute('href', '#');
    connect.innerHTML = "Get Connected";

    const social = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-google', 'fab fa-instagram'];

    for (let ic of social) {
        const link = createElement('a', box);
        link.setAttribute('href', '#');
        link.className = 'link';
        const soc = createElement('i', link);
        soc.className = ic;
    }
}
