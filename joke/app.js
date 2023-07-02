

const jokeE1 = document.getElementById('joke');
const get_joke = document.getElementById('get_joke')

get_joke.addEventListener('click', generateJoke);

async function generateJoke(){
    // call the icanhaz api 
    const jokeRes = await fetch('https://icanhazdadjoke.com/' ,
    
    {
        headers: {
            accept: 'application/json'
        }
    }
    );


    const joke =await jokeRes.json();
    console.log(joke);

    jokeE1.innerHTML =joke.joke;
   
}






const jokeE2 = document.getElementById('jk');
const get_jk = document.getElementById('get_jk');

get_jk.addEventListener('click', generateJoke1);

async function generateJoke1(){
    // call the icanhaz api 
    const jokeRes1 = await fetch('https://api.quotable.io/random' ,
    
    {
        headers: {
            accept: 'application/json'
        }
    }
    );


    const joke1 =await jokeRes1.json();
    console.log(joke1);

    jokeE1.innerHTML =joke1.jk;
   
}
