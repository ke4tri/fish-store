// Filter fish that are "on sale"



// Add fish to "Basket"

// Load Fish
$.get('../db/fishes.json')
    .done((data) => {
        console.log(data);
    })
    .fail((error) => {
        console.error(error);
    });    // only simicolon you have should be here
    
