/**
 * English: 
 * Can be replaced with a template string
 * Korean:
 * 템플릿 문자열로 대체 가능
 */
module.exports.print = (str, ...args) => {
    for (var i = 0; i < args.length; i++) {
        let re = new RegExp("\\{" + i + "\\}", "gm");     
        console.log('re',re);   
        str = str.replace(re, args[i]);
        
    }
    
    return str;    
};
/** 
 * 
 */
module.exports.stringFormat = (str, ...args)=> {
    
    return str;
}

module.exports.dateFormat = (str, ...args)=> {
    
    return str;
}