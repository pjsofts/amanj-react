function IsAnagram(word1, word2){
    const obj1 = {}
    const obj2 = {}
    
    if (word1.length != word2.length){
        return false;
    }

    for (let letter of word1){
        if (obj1[letter]){
            obj1[letter]++
        } else {
            obj1[letter] = 1
        }
    }
    
    for (let letter of word2){
        if (obj2[letter]){
            obj2[letter]++
        } else {
            obj2[letter] = 1
        }
    }

    console.log(obj1)
    console.log(obj2)

    for (let letter of Object.keys(obj1)){
        if (obj2[letter]){
            if (obj2[letter] != obj1[letter]){
                return false;
            }
        }else {
            return false;
        }
    }
    return true;
}

console.log(IsAnagram("stops", "stopp"))
