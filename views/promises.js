 islogged =true
 var xyz= new promise((resolve,reject) => {
    setTimeout(() => {
        if(islogged){
        resolve()
        }else{reject}
        },1000);
    })


    xyz.then(()=>{console.log("then");})
    .catch(()=>{console.log("err");})
    .finally(()=>{console.log("finally");})

    