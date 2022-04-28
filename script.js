function getGalao(galao, garrafas) {
    let aGarrafas = new Array(garrafas);
    let novoGalao = 0;
    let novasGarrafas = [];
    //ler as garrafas
    //hardcoded
    aGarrafas = [1, 3, 4.5, 1.5, 3.5];
    aGarrafas.sort(function (a,b) {
        if (a < b)
            return 1;
        else
            return -1;
    });

    for (let x = 0; x < aGarrafas.length; x++) {
        if (x != 0) {
            if((novoGalao + aGarrafas[x] ) <= galao){
                novoGalao = novoGalao + aGarrafas[x];
                novasGarrafas.push(aGarrafas[x].toString()+"L");
                
            }
        }else{
            novoGalao = aGarrafas[0];
            novasGarrafas.push(aGarrafas[0].toString()+"L");
        }
    
    }

    console.log("Resultado: ",novasGarrafas, ", sobra ",(novoGalao-galao).toString(),"L");

    return 'Fim';
} 