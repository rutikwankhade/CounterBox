
const inputText=document.querySelector('.text');
const words=document.querySelector('#words');
const characters=document.querySelector('#characters');
const readingTime=document.querySelector('#reading-time');
const copyBtn=document.querySelector('#copy');
const clearBtn=document.querySelector('#clear');
const message=document.querySelector('#message');


inputText.addEventListener('keyup',(e)=>{
    // console.log(e.target.value);
    let text=e.target.value;
    countWords(text);

});

// function to count total words without spaces
function countWords(text){
    characters.innerText=text.length;

    text=text.split(' ');
    let wordCount=0;

    for(let i=0;i<text.length;i++){
        if(text[i]!=' ' && isWord(text[i])){
            wordCount++;
        }
    }
    
    words.innerText=wordCount;
    calculateReadingTime(wordCount);
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

function calculateReadingTime(wordcount){
    let Time=wordcount/200;
    readingTime.textContent=Time.toFixed(2);
}

copyBtn.addEventListener('click',()=>{
   document.execCommand('copy',inputText.value);
   message.innerText=" copied."
   setTimeout(()=>{    
    message.innerText="";
},1000)
});

clearBtn.addEventListener('click', ()=>{
    inputText.value=" ";
    message.innerText="All clear !"

    setTimeout(()=>{    
        message.innerText="";
},1000)

})

