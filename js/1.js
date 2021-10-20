/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/

let auto={
    color:'negro',
    marca:'Peugeot',
    modelo:'207',
    encendido: true,
    turnOn:(estado)=> {if (estado=='on'|| estado=='ON'){
        document.write(estado+'= Auto encendido')
    } else{
        if (estado=='off'|| estado=='OFF')
        {document.write(estado+'= Auto apagado')}
        else
     {alert('Ingrese ON o OFF')}}
    }}


let estado= prompt('On or off?')

auto.turnOn(estado)
