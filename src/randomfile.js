
(function(){

    console.log('js file is ready!!')

    let arrayNumbers = [1,3,5];

    let bulkNumbers = [];

    function getrandomNumber(){

        for (var i = 0; i < 3; i++){

            let mathnumber = false;
            let currentNum = choiseRandom(arrayNumbers);
            bulkNumbers.length === 0 ? bulkNumbers.push(currentNum): console.log('nothing');
            console.log(currentNum);
            for(var e = 0; e < bulkNumbers.length; e++){
                if(!mathnumber){
                    if(currentNum !== bulkNumbers[e] ){
                        mathnumber = true;
                        bulkNumbers.push(currentNum);
                    }
                }
                if(e === bulkNumbers.length){
                    console.log('xxxx:',e);
                }
            }
        }
        console.log('bulk is :', bulkNumbers);
    }
    function choiseRandom(array){
        const randomnum = Math.floor(Math.random() * array.length);
        return randomnum;
    }
    getrandomNumber();
    console.log('js file is closed!!')

}('init'))