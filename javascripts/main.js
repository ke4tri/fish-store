
const writeFishes = (arrayOfFishes) => {
    let domString = '';
    arrayOfFishes.forEach((fish) =>{
      domString += `
      <div class="${fish.onSale ? 'on-sale' : '' } fish card col-md-6 col-md-offset-3">
      <div class="thumbnail">
                <img src="${fish.imageSoure}"
        " alt="" width="40%">
                <div class="caption">
                    <h3 id="thumbnail-label">Fish 4</h3>
                    <p>$
                        <span class="price">19</span>
                    </p>
                </div>
                <div class="caption card-footer">
                    <button class="add btn btn-danger">Add To Basket</button>
                </div>
            </div>
        </div>
        ` 
    })
        $("#available").append(domString);
        $(domString).append("#available");
}

// Load Fish
$.get('../db/fishes.json')
    .done((data) => {
        console.log(data);
        writeFishes(data.fishes);
    })
    .fail((error) => {
        console.error(error);
    });    // only simicolon you have should be here



        



