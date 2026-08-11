class DEBUG
{
    constructor(isDEBUG)
    {
        this.isDEBUG = isDEBUG;
        this.text    = document.createElement('p');
        this.hash_   = document.createElement('input');
    }

    
    
    //--Enlace para analizar siempre el mismo hash
    URL_hash()
    {
        console.log(`<a href="${window.location+"?fxhash="+fxhash}">${fxhash}</a>`);
        document.addEventListener('keydown', (event)=> this.isDEBUG && event.key === 'd' || event.key === 'D' ? window.open(`${window.location}?fxhash=${fxhash}`, '_blank'):null);
    }

    //--Muestra un elemento en le body con el random de prueba
    interfaz()
    {
        if(this.isDEBUG)
        {
            const form = document.createElement('form');

            let text = this.text;
            text.style.fontSize = "10px";

            let hash_ = this.hash_;
            hash_.setAttribute("type","text");
            hash_.setAttribute("value",fxhash);
            hash_.style.fontSize = "6px";
            hash_.style.outline = "none";
            hash_.style.width = "190px"
            hash_.style.textAlign = "center";
            

            const newHash = document.createElement("button");
            newHash.innerHTML = "newHash";
            newHash.style.fontSize = "8px";
            newHash.style.cursor = "pointer";



            const sameHash = document.createElement("input");
            sameHash.setAttribute("type","submit");
            sameHash.innerHTML = "sameHash";
            sameHash.style.fontSize = "8px";
            sameHash.style.cursor = "pointer";

            
            const dropHash = document.createElement('input');
            const submit = document.createElement('input');

            submit.setAttribute("type","submit");
            submit.setAttribute("value","submit");
            dropHash.setAttribute("type","text");
            dropHash.setAttribute("placeholder","Enter hash")

            dropHash.style.fontSize = "6px";
            dropHash.style.cursor = "pointer";
            dropHash.style.outline = "none";
            dropHash.style.textAlignLast = "center";
            dropHash.style.width = "190px"
            dropHash.required = true;

           
            submit.style.fontSize = "8px";
            submit.style.cursor = "pointer";
            submit.style.textAlign = "center";

        
            const box = document.createElement("div");

            form.appendChild(text);
            form.appendChild(hash_);
            box.appendChild(newHash);
            //box.appendChild(sameHash);
            form.appendChild(box);
            form.appendChild(dropHash);
            form.appendChild(submit);

    
            document.body.appendChild(form)

            //box.style.display = "flex";
            //box.style.justifyContent = "space-between";

            form.style.position = "absolute";
            form.style.top = "0";
            form.style.left = "0";
            form.style.padding = "0.4em";
            form.style.gap = "7px"


            form.addEventListener("submit",(e)=>{
                e.preventDefault();
                history.pushState({}, '', window.location.pathname);
                location.href = `${window.location+"?fxhash="+dropHash.value}`;
            })

            newHash.addEventListener("click",()=> {
                history.pushState({}, '', window.location.pathname);
                location.reload()
            })

            sameHash.addEventListener("submit",(e)=> {
                e.preventDefault();
                history.pushState({}, '', window.location.pathname);
                location.href = `${window.location+"?fxhash="+this.hash_.value}`;
            })


            document.addEventListener('keydown', (event)=> this.isDEBUG && event.key === "q" || event.key === "Q" ? form.classList.toggle("fix"):null);
            
        
        }
        
    }


    restartInterfaz()
    {
        this.text.innerHTML = `randomTest: ${random().toFixed(8)}`;
        this.hash_.setAttribute("value",fxhash);

    }


}