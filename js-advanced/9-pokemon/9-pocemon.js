'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function() {
    const { abilities } = JSON.parse(this.responseText);
    console.log(abilities);

    const request = new XMLHttpRequest();
        request.open('GET', abilities[0].ability.url);
        request.send();

    request.addEventListener('load', function() {
        const { effect_entries } = JSON.parse(this.responseText);
        console.log(effect_entries[1])
    }); 
}); 
