
const inputText=document.querySelector('.text');
const words=document.querySelector('#words');

inputText.addEventListener('keyup',(e)=>{
    // console.log(e.target.value);
    let text=e.target.value;
    countWords(text);

});

// function to count total words without spaces
function countWords(text){
    text=text.split(' ');
    let wordCount=0;
    
    for(let i=0;i<text.length;i++){
        if(text[i]!=' ' && isWord(text[i])){
            wordCount++;
        }
    }
    
    words.innerText=wordCount;
}

function isWord(text){
    var checkWord=false;
    for(let j=0;j<text.length;j++){
         let code=text.charCodeAt(j);
            if(
              (code>47 && code<58) ||
              (code>64 && code<91) ||
              (code>96 && code<123) 
             ){
                  checkWord=true;
                  return checkWord;
              }
        }

        return checkWord;
}

