let pokeInfo;

const $input = $('input[type="text"]'); 

const $pokeName = $('#pokeName');
const $pokeAbility1 = $('#pokeAbility1');
const $pokeAbility2 = $('#pokeAbility2');
const $pokeImg = $('#pokeImg');

function handleGetData(event){
    event.preventDefault();
    console.log("Form Submitted")
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${$input.val()}`
    }).then(
        function(data){
         console.log(data); 
         pokeInfo = data;
         render(); 
         $input.val("") 
        },
        function(error){
         console.log('bad request', error);
        }
      );
}

function render(){
    $pokeName.text(pokeInfo.name);
    $pokeAbility1.text(pokeInfo.abilities[0].ability.name)
    $pokeAbility2.text(pokeInfo.abilities[1].ability.name)
    $pokeImg.attr("src", pokeInfo.sprites.other.dream_world.front_default)
}

$('#form').on('submit', handleGetData)
