const $gifArea = $("#gifArea");
const $searchInput = $("#search");

function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
      let randomIdx = Math.floor(Math.random() * numResults);
      let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
      let $newGif = $("<img>", {
        src: res.data[randomIdx].images.original.url,
        class: "w-100"
      });
      $newCol.append($newGif);
      $gifArea.append($newCol);
    }
}

$("form").on("submit", async function(e) {
    e.preventDefault();

    let searchValue = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchValue,
            api_key: "aeLJsRPjrsrjzdyd75vFxXwPx22ofB7K"
        }
    });
    addGif(response.data);
});

$("#removeGifs").on("click", function() {
    $gifArea.empty();
});