var ctx = document.getElementById('myChart').getContext('2d');
var ctxCt = document.getElementById('myChartCt').getContext('2d');

async function chartCovidCountryDf (){
    const resp =await fetch ('https://api.covid19api.com/total/country/vietnam');
    const data = await resp.json();
    
    

    let cn = "";
    let ngay =  "";
    let tv ="";

    data.forEach((covid) => {
        cn += covid.Confirmed + ', ';
        tv += covid.Deaths + ', ';
        ngay += moment(covid.Date).format('DD/MM/YYYY') + ', ';
    });
    let arraycn = cn.split(', ');
    let arraytv = tv.split(', ');
    let arrayngay = ngay.split(', ');
    
    let array30day = arrayngay.slice(arrayngay.length - 30);
    let array30cn = arraycn.slice(arrayngay.length - 30);
    let array30tv = arraytv.slice(arrayngay.length - 30);
   
    var myChartCt = new Chart(ctxCt, {
        type: 'bar',
        data: {
            labels: array30day ,
            datasets: [{
                label: 'Ca lây nhiễm',
                data: array30cn,
                backgroundColor: 'rgb(235, 157, 14)',
                borderColor: 'rgb(235, 157, 14)',
                borderWidth: 3,
                tension: 0.1,
                fill: false
            },
            {
                label: 'Ca tử vong',
                data: array30tv,
                backgroundColor: 'rgb(255, 0, 0)',
                borderColor: 'rgb(255, 0, 0)',
                borderWidth: 3,
                tension: 0.1,
                fill: false
        }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

async function chartCovidWorld (){
    const resp =await fetch ('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
    const data = await resp.json();

    let quocgia = "";
    let canhiem = "";
   

    data.locations.forEach((covid) => {
        quocgia += covid.country + ', ';
        canhiem += covid.latest.deaths + ', ';
            
    });
    let arrayquocgia = quocgia.split(', ');
    let arraycanhiem = canhiem.split(', ');


 

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrayquocgia,
            datasets: [{
                label: '# of Votes',
                data: arraycanhiem,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
   

};








chartCovidCountryDf();
chartCovidWorld();
