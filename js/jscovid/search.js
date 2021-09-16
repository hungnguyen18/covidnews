const SearchInput = document.getElementById('search-input');


//Hàm tìm kiếm
SearchInput.addEventListener('change', async (e) => {
    try{
        const resp =await fetch (`https://coronavirus-tracker-api.herokuapp.com/v2/locations?country=${e.target.value}`);
        const data = await resp.json();
    
        
        let covidcountry="";
        const CounTry = data.locations[0].country;
        const Confirmed =new Intl.NumberFormat().format(data.latest.confirmed);
        const Deaths =new Intl.NumberFormat().format(data.latest.deaths);

        data.locations.forEach((covid) => {
            const CounTry = covid.country;
            const Province = covid.province;
            const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
            const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
            const Update = (covid.last_updated).substring(0,10);
            const ratio =
            ((Number(covid.latest.deaths)/Number(covid.latest.confirmed))*100)
            .toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );
            covidcountry +=`
            <tr>
                <td id="quocgia" hidden>${CounTry}</td>
                <td>${Province || Default}</td>
                <td id="tong_canhiem">${Confirmed}</td>
                <td id="tong_tuvong">${Deaths}</td>
                <td>${Update}</td>
                <td>${ratio || Default} %</td>
            </tr>`;
        });
        $('#data-covid').html(covidcountry);
        $('#title-country').text(CounTry.toUpperCase());
        $('#total-cf').text(Confirmed );
        $('#total-dea').text(Deaths);
        $('#total-tl').text((Math.round(parseInt(Deaths)/parseInt(Confirmed))*100) .toLocaleString("en", {minimumFractionDigits: 0, maximumFractionDigits:0} ) + ' %');
    }
    catch{
         alert(`Không có dữ liệu về quốc gia ${e.target.value}`)
    }
})