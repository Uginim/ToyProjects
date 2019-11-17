module.exports.print = (str, ...args) => {
    for (var i = 0; i < args.length; i++) {
        let re = new RegExp("\\{" + i + "\\}", "gm");     
        console.log('re',re);   
        str = str.replace(re, args[i]);
        
    }
    
    return str;
    //var re = /{[0-9]*}/;
};
