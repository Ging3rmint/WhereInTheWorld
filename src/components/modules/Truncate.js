

 const Truncate = (str, length, ending)=> {
     
    if (length === undefined){
        length = 12;
    }
    if (ending === undefined){
        ending = "...";
    }
    console.log(length)
    if (str.length > length){
        console.log("truncate!");
        return str.substring(0,length - ending.length) + ending;

    }else{
        return str;
    }

}

export default Truncate;