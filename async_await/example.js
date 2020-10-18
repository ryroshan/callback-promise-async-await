async function fetchUser(){
    const res = await fetch('https://api.github.com/users');
    const data = await res.json(); 

    document.body.innerHTML =  data;


    console.log(data)
}

fetchUser(); 