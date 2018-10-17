
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
        bindEvents();
}

const bindEvents = () => {
        // $(domString).append("#available");
        $(".add").on('click', (e) => {
            // what is the dive that has the fish
            const fishToMove = $(e.target).closest('.fish');
            // move it to the 'snagged' div
            $("#snagged").append(fishToMove);
            // button text => Remove from Basket | change class - 'add' + 'remove'
            $(e.target).text('Remove from Basket').addClass('remove').removeClass('add');
            
        });
        $(".remove").on('click', (e) => {
            const fishToMove2 = $(e.target).closest('.fish');
            $("#available").append(fishToMove);
            $(e.target).text('Add To Basket').addClass('add').removeClass('remove');

        })
        
}

// Dynamically listen for events that happen on buttons with a class .add
// $('body').on('click', 'button.add', () => {

// })

// Load Fish
$.get('../db/fishes.json')
    .done((data) => {
        console.log(data);
        writeFishes(data.fishes);
    })
    .fail((error) => {
        console.error(error);
    });    // only simicolon you have should be here


    


        



