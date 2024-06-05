class TrieNode {
    constructor(){
        this.value = null;
        this.children = Array(26);
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode();
    }

    insert(key, value){
        let node = this.root
        for(let i = 0; i < key.length; i++){
            const alphabetIndex = key[i].charCodeAt() - 97;
            if(!node.children[alphabetIndex]){
                node.children[alphabetIndex] = new TrieNode();
            } 
            node = node.children[alphabetIndex];
        }
        node.isEndOfWord = true;
        node.value = value;
    }

    find(key){
        let node = this.root
        for(let i = 0; i < key.length; i++){
            const alphabetIndex = key[i].charCodeAt() - 97;
            if(!node.children[alphabetIndex]){
                return false;
            } 
            node = node.children[alphabetIndex];
        }
        if(node.value === null && !node.isEndOfWord){
            return false;
        }
        return node;
    }

    remove(key){
        const node = this.find(key);
        node.value = null;
        node.isEndOfWord = false;
    }

    startsWith(prefix){
        let node = this.root
        for(let i = 0; i < prefix.length; i++){
            const alphabetIndex = prefix[i].charCodeAt() - 97;
            if(!node.children[alphabetIndex]){
                return false;
            } 
            node = node.children[alphabetIndex];
        }
        return true;
    }
}

const trie = new Trie();
trie.insert('age', 31);
trie.insert('name', "Arun");
trie.insert('names', ["Arun", "Chintu"]);

trie.remove('name');

console.log(trie);
console.log(trie.find('age'));
console.log(trie.find('name'));
console.log(trie.find('names'));
console.log(trie.find('hobby'));