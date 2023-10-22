# PokemonAPI

## Executar el projecte

# `npm start`


### Exercici

Hem de sumar el preu del PremiumContent juntament amb el servei de Streaming o Download

class RegisteredUser{
    constructor(services = []){
        this.services = services;
    }

    getTotal(){
        let total = 0;

    this.service.forEach(service, index = {
        let multimediaContent = service.getMultimediaContent();

        if(service == SctreamingService){
            total += multimediaContent.streamingPrice;
        }else if(service == SctreamingService &&multimediaContent == PremiuContent){
            total += multimediaContent.streamingPrice += multimediaContent.additionalFee
        }

        if(service == DownloadService){
            total += multimediaContent.downloadPrice;
        }else if(service == DownloadService &&multimediaContent == PremiuContent){
            total += multimediaContent.downloadPrice += multimediaContent.additionalFee
        }
        
    })

    return total;
    }


}