var mobiles = {
    SamsungA10: {
       img : "https://i.ytimg.com/vi/RXM5RvZFXf4/mqdefault.jpg",
       name: "Samsung A10",
       ram: "4gb",
       rom: "64gb",
       camera: "13",
       price: "22,000 PKR"
    },
    SamsungA20: {
        img : "https://i.ytimg.com/vi/gy_o11rN02Q/maxresdefault.jpg",
        name: "Samsung A20",
        ram: "4gb",
        rom: "64gb",
        camera: "18",
        price: "28,000"
    },
    SamsungA30: {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohNLc5Cg-Sy_mKVmvKMQ17TZ_1MKrwl8cyg&usqp=CAU",
        name: "Samsung A30",
        ram: "4gb",
        rom: "64gb",
        camera: "25",
        price: "29,000"
    }
    ,
    IPhone11: {
        img : "https://smart.com.ph/Postpaid/images/default-source/default-album/iphone11-landing-mobilef472ed725fc66ebaa7efff0000748fea.jpg?sfvrsn=0",
        name: "IPhone11",
        ram: "4gb",
        rom: "64gb",
        camera: "12",
        price: "100,000"
    },
    IPhone12: {
        img : "https://i.ytimg.com/vi/3Dim4mXUX7Y/maxresdefault.jpg",
        name: "IPhone12",
        ram: "4gb",
        rom: "64gb",
        camera: "12",
        price: "150,000"
    },
    IPhone13: {
        img : "https://i.ytimg.com/vi/uNwgPihOYCA/maxresdefault.jpg",
        name: "IPhone13",
        ram: "6gb",
        rom: "128gb",
        camera: "24",
        price: "200,000"
    }
    ,
    OppoV20: {
        img : "https://fdn.gsmarena.com/imgroot/news/20/12/vivo-v20-pro-india/-1200/gsmarena_004.jpg",
        name: "OppoV20",
        ram: "8gb",
        rom: "128gb",
        camera: "64",
        price: "54,999"
    },
    OppoF19: {
        img : "https://androidmobile.pk/wp-content/uploads/2021/04/Oppo-F19-Pro-price-in-Pakistan.png",
        name: "OppoF19",
        ram: "6gb",
        rom: "128gb",
        camera: "48",
        price: "36,999"
    },
    OppoF11: {
        img : "https://i.ytimg.com/vi/Jvwp-Bnbs9w/maxresdefault.jpg",
        name: "OppoF11",
        ram: "4gb",
        rom: "64gb",
        camera: "48",
        price: "35,999"
    }
    ,
    VivoY20: {
        img : "https://i.ytimg.com/vi/nQfcV0TO5Z8/maxresdefault.jpg",
        name: "VivoY20",
        ram: "4gb",
        rom: "64gb",
        camera: "13",
        price: "26,999"
    },
    VivoY21: {
        img : "https://cdn-tech.tribune.com.pk/blogs/0JnjVoa94nVCRKayLQTBEGLuHMrckDPiFJpVoa9b.jpeg",
        name: "VivoY21",
        ram: "4gb",
        rom: "64gb",
        camera: "13",
        price: "43,999"
    },
    VivoY55: {
        
        img : "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1659520520885/cb00c0dd77a89f3d911e1e7b0f626fea.png",
        name: "VivoY55",
        ram: "8gb",
        rom: "128gb",
        camera: "50",
        price: "64,999"
    }
}
var inp = document.getElementById('inp');
var data = document.getElementById('data');
var h1 = document.getElementById('h1');

function find() {
    h1.innerHTML = inp.value
data.innerHTML = `<div class="card mx-auto mt-5 display-6" style="width: 15rem; ">
<img src="${mobiles[inp.value].img}" class="card-img-top" alt="..." height="150px">
<ul class="list-group list-group-flush">
  <li class="list-group-item">ram : ${mobiles[inp.value].ram}</li>
  <li class="list-group-item">rom : ${mobiles[inp.value].rom}</li>
  <li class="list-group-item">camera : ${mobiles[inp.value].camera}</li>
  <li class="list-group-item">price : ${mobiles[inp.value].price}</li>
</ul>

</div>`
inp.value = ""
}