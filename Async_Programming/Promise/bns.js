const getTodos = (resource) => { //callback function

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
    
        request.addEventListener("readystatechange", () =>{
           // console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200) //status code
            {
                const data = JSON.parse(request.responseText);  //Json parse etme
                resolve(data);
                // console.log(request.responseText);
        
                //callback(undefined,request.responseText);
                //callback(undefined,data);
            }
            else if (request.readyState === 4)
            {
                reject("Başarılı cevap alamadık!");
                // console.log("Başarılı cevap alamadık!");
                
                //callback("Başarılı cevap alamadık!", undefined);
            }
        });
        
        request.open("GET", resource);
        request.send();

    });

   
    
    };
    
    getTodos("example/bensu.json")
    .then((data) => {
        console.log("Promise 1",data);
        return getTodos("example/vlkn.json");
        
    }).then((data) => {
        console.log("Promise 2",data);
        return getTodos("example/sln.json");
    })
    .then((data) => {
        console.log("Promise 3",data);
    })
    .catch((err) =>{
        console.log(err);
     });
  
    // const getIt = () => {
    //     return new Promise((resolve, reject) => {
    //        // resolve("Başarılı Data");
    //         reject("Başarısız Data");
    //     });
    // };

    // getIt().then(data => {
    //     console.log("Başarılı", data);
    // }, err => {
    //     console.log("Başarısız", err);
    // });

    // const getIt = () => {
    //     return new Promise((resolve, reject) => {
    //        // resolve("Başarılı Data");
    //         reject("Başarısız Data");
    //     });
    // };

    // getIt().then(
    //     data => {
    //     console.log("Başarılı", data);
    // }).catch(err =>{
    //     console.log("Başarısız", err);
    // });