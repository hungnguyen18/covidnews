const DataCovid = document.getElementById('data-covid');

const TongNhiem = document.getElementById('tong_canhiem');
const TongChet = document.getElementById('tong_tuvong');
const HoiPhuc = document.getElementById('tong_phuchoi');
const Default = '--';
// Hàm mặc đinh khi vào web
function CovidDefault(){
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=VN')
    .then(async res => {
        const data = await res.json();
        

        
        const CounTry = data.locations[0].country;
        const Province = data.province;
        const Confirmed =new Intl.NumberFormat().format(data.locations[0].latest.confirmed);
        const Deaths =new Intl.NumberFormat().format(data.locations[0].latest.deaths);
        const Update = (data.locations[0].last_updated).substring(0,10);
        const ratio =((Number(data.locations[0].latest.deaths)/Number(data.locations[0].latest.confirmed))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );
        DataCovid.innerHTML=`
            <tr>
                <td id="quocgia" hidden>${CounTry}</td>
                <td>${Province || Default}</td>
                <td id="tong_canhiem">${Confirmed}</td>
                <td id="tong_tuvong">${Deaths}</td>
                <td>${Update}</td>
                <td>${ratio} %</td>
            </tr>
        `;

        $('#title-country').text(CounTry.toUpperCase());
        $('#total-cf').text(Confirmed );
        $('#total-dea').text(Deaths);
        $('#total-tl').text(Default);
    });
};
//Hàm xuất dữ liệu covid toàn thế giới
async function CovidWorld(){
    const resp =await fetch ('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
    const data = await resp.json();
    
    let nguoinhiem =new Intl.NumberFormat().format( data.latest.confirmed);
    let chet = new Intl.NumberFormat().format( data.latest.deaths);
    let phuchoi = new Intl.NumberFormat().format(data.latest.recovered);
    const World = document.getElementById('world');
    let coviddata="";

    TongNhiem.innerHTML = nguoinhiem;
    TongChet.innerHTML = chet;
    HoiPhuc.innerHTML = phuchoi;

    data.locations.forEach((covid) => {
       
        const CounTry = covid.country;
        const Province = covid.province;
        const Population =new Intl.NumberFormat().format(covid.country_population);
        const Confirmed =new Intl.NumberFormat().format(covid.latest.confirmed);
        const Deaths =new Intl.NumberFormat().format(covid.latest.deaths);
        const Recovered =new Intl.NumberFormat().format(covid.latest.recovered);
        const Update = (covid.last_updated).substring(0,10);
       
        coviddata +=`
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
   $('#world').html(coviddata);  
};


CovidDefault();
CovidWorld();