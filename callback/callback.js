// const posts = [
//     {title: 'post one', body : 'this is the body one'},
//     {title: 'post two', body : 'this is the body two'}

// ];


// function testFun(){
//      setTimeout(()=>{
//         let output = '';
//          posts.forEach(post =>{
//             output+=`<li>${post.title} and ${post.body}</li>`;
//          })
//         document.body.innerHTML = output;
//      },1000);
// }

// function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     },5000)
// }




// createPost({title:'post three', body:'this is the third body'}, testFun);




function download(url, callback1){
    console.log(`downloading from ${url}`);
    setTimeout(function(){
        console.log(`download and saved as ${url.split('/').pop()}`);
        callback1();
    },5000);
}

function comapress(filePath, callback2){
    console.log(`compressing ${filePath}`);
    setTimeout(()=>{
        console.log(`compressing and saving as ${filePath.split('.')[0] + '.zip'}`);
        callback2();
    },3000);
}

function upload(server, file, callback3){
    console.log(`uploading ${file} to the ${server} `);
    setTimeout(function(){
        console.log(`upload ${file} to the ${server}`);   
    },4000);
}

download('https://www.fileUpalodserver.com', function(){
    comapress('filepath.png', ()=>{
        upload('https://newserver.com', 'abcd.zip');
    })
})






// function download(url, downloaded){
//     console.log(`downloading from ${url}`);
//     setTimeout(()=>{
//         console.log(`download and saved as ${url.split('/').pop()}`)
//         downloaded();
//     },10000)
// }

// function compress(filePath, compressed){
//     console.log(`compressing ${filePath}`);
//     setTimeout(()=>{
//         console.log(`compressing and saving as ${filePath.split('.')[0] + '.zip'}`);
//         compressed();
//     },3000);
// }
 
// function upload(server, file, uploaded){
//     console.log(`uploading ${file} to ${server}`);
//     setTimeout(()=>{
//         console.log(`uploaded to ${server}/${file}`)
//         uploaded();
//     })
// }



// download('https://somesite.com/path/img.png' , ()=>{
//     compress('myfile.png', ()=>{
//         upload('https://newfile.com', 'abcd.zip', ()=>{

//         })
//     })
// });
