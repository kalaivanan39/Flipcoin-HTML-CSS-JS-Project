let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipbtn = document.querySelector("#flip-button");
let resetbtn = document.querySelector("#reset-button");

flipbtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";

    if(i)
    {
        setTimeout(function() {
            coin.style.animation = "spin-heads 3s forwards";
        },100);
        heads++;
    }
    else
    {
        setTimeout(function() {
            coin.style.animation = "spin-tails 3s forwards";
        },100);
        tails++;
    }
    setTimeout(updatestats, 3000);
    disablebutton();
});

function updatestats()
{
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

function disablebutton(){
    flipbtn.disabled = true;
    setTimeout(function() {
        flipbtn.disabled = false;
    },3000);
}

resetbtn.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updatestats();
})