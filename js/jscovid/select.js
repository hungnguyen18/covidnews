const Default1 = "--";

function SelectCf(obj){
    fetch(`https://coronavirus-tracker-api.herokuapp.com/v2/locations?country=${$("#quocgia").text()}`)
    .then(async res => {    
        const data = await res.json();
        let covidselect="";
        var value = obj.value;
        if(value == 1){
            data.locations.sort(function(a, b){return b.latest.confirmed - a.latest.confirmed});
            data.locations.forEach((covid) => {
                const CounTry = covid.country;
                const Province = covid.province;
                const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
                const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
                const Update = (covid.last_updated).substring(0,10);
                const ratio =
                ((Number(covid.latest.deaths)/Number(covid.latest.confirmed))*100)
                .toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );
                covidselect +=`
                <tr>
                    <td id="quocgia" hidden>${CounTry}</td>
                    <td>${Province || Default1}</td>
                    <td id="tong_canhiem">${Confirmed}</td>
                    <td id="tong_tuvong">${Deaths}</td>
                    <td>${Update}</td>
                    <td>${ratio || Default1} %</td>
                </tr>`;
            });
            $('#data-covid').html(covidselect);
        }
        else if(value == 2){
            data.locations.sort(function(a, b){return a.latest.confirmed - b.latest.confirmed});
            data.locations.forEach((covid) => {
                const CounTry = covid.country;
                const Province = covid.province;
                const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
                const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
                const Update = (covid.last_updated).substring(0,10);
                const ratio =
                ((Number(covid.latest.deaths)/Number(covid.latest.confirmed))*100)
                .toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );
                covidselect +=`
                <tr>
                    <td id="quocgia" hidden>${CounTry}</td>
                    <td>${Province || Default1}</td>
                    <td id="tong_canhiem">${Confirmed}</td>
                    <td id="tong_tuvong">${Deaths}</td>
                    <td>${Update}</td>
                    <td>${ratio || Default1} %</td>
                </tr>`;
            });
            $('#data-covid').html(covidselect);
        }
        else{
            data.locations.forEach((covid) => {
                const CounTry = covid.country;
                const Province = covid.province;
                const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
                const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
                const Update = (covid.last_updated).substring(0,10);
                const ratio =
                ((Number(covid.latest.deaths)/Number(covid.latest.confirmed))*100)
                .toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );
                covidselect +=`
                <tr>
                    <td id="quocgia" hidden>${CounTry}</td>
                    <td>${Province || Default1}</td>
                    <td id="tong_canhiem">${Confirmed}</td>
                    <td id="tong_tuvong">${Deaths}</td>
                    <td>${Update}</td>
                    <td>${ratio || Default1} %</td>
                </tr>`;
            });
            $('#data-covid').html(covidselect);
        }
    });
};
function SelectDea(obj){
    fetch(`https://coronavirus-tracker-api.herokuapp.com/v2/locations?country=${$("#quocgia").text()}`)
    .then(async res => {    
        const data = await res.json();
        let covidselect="";
        var value = obj.value;
        if(value == 1){
            data.locations.sort(function(a, b){return b.latest.deaths - a.latest.deaths});
            data.locations.forEach((covid) => {
                const CounTry = covid.country;
                const Province = covid.province;
                const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
                const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
                const Update = (covid.last_updated).substring(0,10);
                const ratio =
                ((Number(covid.latest.deaths)/Number(covid.latest.confirmed))*100)
                .toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );
                covidselect +=`
                <tr>
                    <td id="quocgia" hidden>${CounTry}</td>
                    <td>${Province || Default1}</td>
                    <td id="tong_canhiem">${Confirmed}</td>
                    <td id="tong_tuvong">${Deaths}</td>
                    <td>${Update}</td>
                    <td>${ratio || Default1} %</td>
                </tr>`;
            });
            $('#data-covid').html(covidselect);
        }
        else if(value == 2){
            data.locations.sort(function(a, b){return a.latest.deaths - b.latest.deaths});
            data.locations.forEach((covid) => {
                const CounTry = covid.country;
                const Province = covid.province;
                const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
                const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
                const Update = (covid.last_updated).substring(0,10);
                const ratio =
                ((Number(covid.latest.deaths)/Number(covid.latest.confirmed))*100)
                .toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );
                covidselect +=`
                <tr>
                    <td id="quocgia" hidden>${CounTry}</td>
                    <td>${Province || Default1}</td>
                    <td id="tong_canhiem">${Confirmed}</td>
                    <td id="tong_tuvong">${Deaths}</td>
                    <td>${Update}</td>
                    <td>${ratio || Default1} %</td>
                </tr>`;
            });
            $('#data-covid').html(covidselect);
        }
        else{
            data.locations.forEach((covid) => {
                const CounTry = covid.country;
                const Province = covid.province;
                const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
                const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
                const Update = (covid.last_updated).substring(0,10);
                const ratio =
                ((Number(covid.latest.deaths)/Number(covid.latest.confirmed))*100)
                .toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );
                covidselect +=`
                <tr>
                    <td id="quocgia" hidden>${CounTry}</td>
                    <td>${Province || Default1}</td>
                    <td id="tong_canhiem">${Confirmed}</td>
                    <td id="tong_tuvong">${Deaths}</td>
                    <td>${Update}</td>
                    <td>${ratio || Default1} %</td>
                </tr>`;
            });
            $('#data-covid').html(covidselect);
        }
    });
};
function SelectConfirmed(obj){
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    .then(async res => {    
        const data = await res.json();
        let covidselect="";
        var value = obj.value;
        if(value == 1){
            data.locations.sort(function(a, b){return b.latest.confirmed - a.latest.confirmed});
            data.locations.forEach((covid) => {
                const CounTry = covid.country;
                const Province = covid.province;
                const Population =new Intl.NumberFormat().format(covid.country_population);
                const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
                const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
                const Recovered =new Intl.NumberFormat().format(covid.latest.recovered);
                const Update = (covid.last_updated).substring(0,10);
               
                covidselect +=`
                <div class="col-lg-3 col-md-6 col-sm-6" >
                        <div class="country">
                        <ul>
                            <li><h3>${CounTry}</h3></li>
                            <li>Dân số: <span>${Population}</span></li>
                            <li>Tỉnh/Thành phố: <span>${Province || Default1}</span></li>
                            <li>Ca nhiễm: <span id="tong_canhiem">${Confirmed}</span></li>
                            <li>Tử vong: <span id="tong_tuvong">${Deaths}</span></li>
                            <li>Hồi phục: <span id="tong_phuchoi">${Recovered}</span></li>
                            <li>Cập nhập: <span>${Update}</span></li>
                        </ul>
                        </div>
                    </div>`;
            });
           $('#world').html(covidselect);
        }
        else if(value == 2){
            data.locations.sort(function(a, b){return a.latest.confirmed - b.latest.confirmed});
            data.locations.forEach((covid) => {
                const CounTry = covid.country;
                const Province = covid.province;
                const Population =new Intl.NumberFormat().format(covid.country_population);
                const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
                const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
                const Recovered =new Intl.NumberFormat().format(covid.latest.recovered);
                const Update = (covid.last_updated).substring(0,10);
               
                covidselect +=`
                <div class="col-lg-3 col-md-6 col-sm-6" >
                        <div class="country">
                        <ul>
                            <li><h3>${CounTry}</h3></li>
                            <li>Dân số: <span>${Population}</span></li>
                            <li>Tỉnh/Thành phố: <span>${Province || Default1}</span></li>
                            <li>Ca nhiễm: <span id="tong_canhiem">${Confirmed}</span></li>
                            <li>Tử vong: <span id="tong_tuvong">${Deaths}</span></li>
                            <li>Hồi phục: <span id="tong_phuchoi">${Recovered}</span></li>
                            <li>Cập nhập: <span>${Update}</span></li>
                        </ul>
                        </div>
                    </div>`;
            });
           $('#world').html(covidselect);
        }
        else{
            $('#world').text('Xin vui lòng chọn lại')
        }
    });
};
function SelectDeaths(obj){
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    .then(async res => {    
        const data = await res.json();
        let covidselect="";
        var value = obj.value;
        if(value == 1){
            data.locations.sort(function(a, b){return b.latest.deaths - a.latest.deaths});
            data.locations.forEach((covid) => {
                const CounTry = covid.country;
                const Province = covid.province;
                const Population =new Intl.NumberFormat().format(covid.country_population);
                const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
                const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
                const Recovered =new Intl.NumberFormat().format(covid.latest.recovered);
                const Update = (covid.last_updated).substring(0,10);
               
                covidselect +=`
                <div class="col-lg-3 col-md-6 col-sm-6" >
                        <div class="country">
                        <ul>
                            <li><h3>${CounTry}</h3></li>
                            <li>Dân số: <span>${Population}</span></li>
                            <li>Tỉnh/Thành phố: <span>${Province || Default1}</span></li>
                            <li>Ca nhiễm: <span id="tong_canhiem">${Confirmed}</span></li>
                            <li>Tử vong: <span id="tong_tuvong">${Deaths}</span></li>
                            <li>Hồi phục: <span id="tong_phuchoi">${Recovered}</span></li>
                            <li>Cập nhập: <span>${Update}</span></li>
                        </ul>
                        </div>
                    </div>`;
            });
           $('#world').html(covidselect);
        }
        else if(value == 2){
            data.locations.sort(function(a, b){return a.latest.deaths - b.latest.deaths});
            data.locations.forEach((covid) => {
                const CounTry = covid.country;
                const Province = covid.province;
                const Population =new Intl.NumberFormat().format(covid.country_population);
                const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
                const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
                const Recovered =new Intl.NumberFormat().format(covid.latest.recovered);
                const Update = (covid.last_updated).substring(0,10);
               
                covidselect +=`
                <div class="col-lg-3 col-md-6 col-sm-6" >
                        <div class="country">
                        <ul>
                            <li><h3>${CounTry}</h3></li>
                            <li>Dân số: <span>${Population}</span></li>
                            <li>Tỉnh/Thành phố: <span>${Province || Default}</span></li>
                            <li>Ca nhiễm: <span id="tong_canhiem">${Confirmed}</span></li>
                            <li>Tử vong: <span id="tong_tuvong">${Deaths}</span></li>
                            <li>Hồi phục: <span id="tong_phuchoi">${Recovered}</span></li>
                            <li>Cập nhập: <span>${Update}</span></li>
                        </ul>
                        </div>
                    </div>`;
            });
           $('#world').html(covidselect);
        }
        else{
            $('#world').text('Xin vui lòng chọn lại')
        }
    });
};
