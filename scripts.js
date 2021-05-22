function calcular() {
    const txtName = document.querySelector("input#name");
    const nmbHeight = document.querySelector("input#height");
    const nmbWeight = document.querySelector("input#weight");
    var res = document.querySelector("p#text");
    
    if(txtName.value.length === 0 || nmbHeight.value.length === 0 || nmbWeight.value.length === 0) {
        alert('Complete todos os dados!')
    } else {
        var name = String(txtName.value);
        var height = (nmbHeight.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        var weight = Number(nmbWeight.value);

        
        var imc = Math.round(weight / (height * height));
        res.innerText = (`
            ${ name }, você tem ${ height } de altura e ${ weight } de peso, então seu IMC é de ${ imc }.
            O IMC ideal fica entre 18,5 e 24,9.
        `);
    }
}