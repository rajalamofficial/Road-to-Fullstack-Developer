const sayButton = document.getElementById('sayButton');
sayButton.addEventListener('click', function(){
    const name = document.getElementById('name').value;
    
    import("./module.mjs").then(function (module) {
        module.alertHello(name);
    })
});