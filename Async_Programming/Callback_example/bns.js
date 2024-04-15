const getTodos = (resource,callback) => { //callback function

    const request = new XMLHttpRequest();
    
    request.addEventListener("readystatechange", () =>{
       // console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200) //status code
        {
            const data = JSON.parse(request.responseText);  //Json parse etme
            // console.log(request.responseText);
    
            //callback(undefined,request.responseText);
            callback(undefined,data);
        }
        else if (request.readyState === 4)
        {
            // console.log("Başarılı cevap alamadık!");
            callback("Başarılı cevap alamadık!", undefined);
        }
    })
    
    request.open("GET", resource);
    request.send();
    
    }
    
    getTodos("example/bensu.json", (err,data) => {
        console.log(data);
        getTodos("example/vlkn.json", (err,data) => {
            console.log(data);           
        });
        getTodos("example/sln.json", (err,data) => {
            console.log(data);           
        });
        
    });
  