
const inputText=document.querySelector('.text');
const words=document.querySelector('#words');
const characters=document.querySelector('#characters');
const readingTime=document.querySelector('#reading-time');
const copyBtn=document.querySelector('#copy');
const clearBtn=document.querySelector('#clear');
const message=document.querySelector('#message');
const tweetBtn=document.querySelector('#tweet');


inputText.addEventListener('keyup',(e)=>{
    // console.log(e.target.value);
    let text=e.target.value;
    countWords(text);
    let tweet=`https://twitter.com/intent/tweet?text=${text}`
    tweetBtn.setAttribute('href',tweet);

});

// count total words without spaces
function countWords(text){
    //characters with spaces
    characters.innerText=text.length;
    
    displayMessage(text);

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

function displayMessage(text){
    if(text.length>280){

        message.innerHTML="Oops ! reached max limit for tweet";
        setTimeout(()=>{ 
            message.innerHTML="";
        },2000) 
        
        tweetBtn.classList.add('hide');
    
    } else{  
            message.innerHTML="";
            tweetBtn.classList.remove('hide');
          }
 
    }

