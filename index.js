document.getElementById('btn').addEventListener('click', async () =>{

    const word = document.getElementById('word').value;
    const err = document.getElementById('box');
    const mword = document.getElementById('mword');
    const oral = document.getElementById('phonetic');
    const pos = document.getElementById('pos');
    const meaning = document.getElementById('meaning');
    const example = document.getElementById('examples');
    const ex1 = document.getElementById('ex1');
    const pos1 = document.getElementById('pos1');

    if(word != ""){
       await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
       .then(res => res.json()).then(data => {
        console.log(data);
        mword.innerHTML = data[0].word;
        oral.innerHTML = data[0].phonetic;
        pos1.innerHTML = 'Part of Speech';
        ex1.innerHTML = 'Examples';

        for (let i = 0; i < data[0].meanings.length; i++) {
            const li = document.createElement('li');
            li.append(data[0].meanings[i].partOfSpeech);
            pos.appendChild(li);
            const definitions = data[0].meanings[i].definitions;
            for(let a = 0; a < definitions.length; a++){
                const span = document.createElement('li');
                span.append(definitions[a].definition);
                meaning.appendChild(span);

                
                const list = document.createElement('li');
                list.append(data[0].meanings[i].definitions[a].example);
                example.appendChild(list);
            }
        }
       });
       
    }else{
        err.innerHTML = "Input Word";
    }
    
    
});

