

async function autoSearch (){
    const resp =await fetch ('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
    const data = await resp.json();

    let tam = "";

    data.locations.forEach((covid) => {
           tam += covid.country + ', ';
    });
    let arraytam = tam.split(', ');
  

    $("#search-input").autocomplete({
        source : arraytam
        
    });

};
autoSearch();