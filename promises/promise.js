const posts = [
    {title : 'post one', body: 'this is the body one'},
    {title : 'post two', body: 'this is the body two'}
];


function runtest(){
    setTimeout(()=>{
        let output = '';
        posts.forEach(function(post){
            output+=`<li>${post.title}</li>`;
            document.body.innerHTML = output;
        })
    },2000)
}

function createPost(post){
    return new Promise(res, rej,()=>{
        setTimeout(()=>{
            posts.push(post);

            const error  = false;
            if(!error){
                res();
            }else{
                rej(error+': something went wrong!!')
            }
        })
    })
}

// createPost({title: 'post three', body:'this is the post three'})
// .then(runtest);



function download(url){
    console.log(`downloading ${url}`);
    setTimeout(()=>{
        return  new Promise((resolve, reject)=>{
        const error = false;
        if(!error){
            resolve();
           console.log(`downlod and save ${url.split('/').pop()}`);
        }else{
            reject('error: something went wrong!!!')
        }
        })
    },3000)
}

function compress(filePath){
    console.log(`compressing ${filePath}`);
    setTimeout(()=>{
        return  new Promise((resolve, reject)=>{
            const error = false;
            if(!error){
                resolve();
                console.log(` file compressed ${filePath.split('.')[0] + '.zip'}`);
            }else{
                reject('error : something went wrong!!');
            }
        },2000);
    })

}

function upload(server, file){
    console.log(`uploading ${file} to ${server}`);
    setTimeout(()=>{
        return new Promise((resolve, reject)=>{
            const error = false;
            if(!error){
                resolve();
                console.log(`uploaded to ${server}/${file}`);
            }else{
                reject();
            }
        })
    },2000);
};


download('https://newfolk.com/image.png')
    .then((file)=>{
        console.log(file)
    })



