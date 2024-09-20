function reverseString (s){
    try{
        s = s.split('').reverse().join('') 
    }catch (error){
        console.log(`Error ${Error.message}`);
        
    }finally{
        console.log(s);
        
    }
}
reverseString("hello");
reverseString(1234);