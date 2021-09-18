const SearchInput = document.getElementById('search-input');
// var ctxCt = document.getElementById('myChartCt').getContext('2d');

//Hàm tìm kiếm
SearchInput.addEventListener('change', async (e) => {
    try{
        const resp =await fetch (`https://coronavirus-tracker-api.herokuapp.com/v2/locations?country=${e.target.value}`);
        const data = await resp.json();
    
        // const resp2 =await fetch (`https://api.covid19api.com/total/country/${e.target.value}`);
        // const data2 = await resp2.json();
        
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
        $('#total-tl').text(((parseInt(Deaths)/parseInt(Confirmed))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits:2} ) + ' %');
    





        
        // let cn = "";
        // let ngay =  "";
        // let tv ="";
    
        // data2.forEach((covid) => {
        //     cn += covid.Confirmed + ', ';
        //     tv += covid.Deaths + ', ';
        //     ngay += moment(covid.Date).format('DD/MM/YYYY') + ', ';
        // });
        // let arraycn = cn.split(', ');
        // let arraytv = tv.split(', ');
        // let arrayngay = ngay.split(', ');
        
        // let array30day = arrayngay.slice(arrayngay.length - 30);
        // let array30cn = arraycn.slice(arrayngay.length - 30);
        // let array30tv = arraytv.slice(arrayngay.length - 30);
       
        // var myChartCt = new Chart(ctxCt, {
        //     type: 'bar',
        //     data: {
        //         labels: array30day ,
        //         datasets: [{
        //             label: 'Ca lây nhiễm',
        //             data: array30cn,
        //             borderColor: 'rgb(75, 192, 192)',
        //             borderWidth: 3,
        //             tension: 0.1,
        //             fill: false
        //         },
        //         {
        //             label: 'Ca tử vong',
        //             data: array30tv,
        //             borderColor: 'rgb(255, 0, 0)',
        //             borderWidth: 3,
        //             tension: 0.1,
        //             fill: false
        //     }]
        //     },
        //     options: {
        //         scales: {
        //             y: {
        //                 beginAtZero: true
        //             }
        //         }
        //     }
        // });
    
    }
    catch{
         alert(`Không có dữ liệu về quốc gia ${e.target.value}`)
    }
})