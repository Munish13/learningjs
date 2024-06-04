function isAnagram(a, b)
    {
        // code here
        a = a.replace(/\s/g, "".toLowerCase());
        b = b.replace(/\s/g, "".toLowerCase());
        
        if(a.length !== b.length){
            console.log("NO");
        }    
        
        // sort the characters in the given string
        
        a = a.split("").sort().join("");
        b = b.split("").sort().join("");
    
        if(a === b){
            console.log("Yes");
        }
        else{
            console.log("NO");
        }
        
    }

    isAnagram("geeksforgeeks","forgeekswweks");