var nameArray = [];
var surnameArray = [];
var noArray = [];
var cityArray = [];
var id = 0;
var durum = false;
var indexArray = [];

var btnAdd = document.querySelector('#btnAdd');

/*Add Buton*/

btnAdd.addEventListener('click', function () {

    var nameValue = document.querySelector('#name').value;
    var surnameValue = document.querySelector('#surname').value;
    var numberValue = document.querySelector('#number').value;
    var cityValue = document.querySelector('#city').value;

    if (nameValue == "" || surnameValue == "" || numberValue == "" || cityValue == "-1") {

        console.log("Bos Bırakmayınız.");

        var errorMessage = document.querySelector('.error');
        errorMessage.style.display = 'inherit';
        var successMessage = document.querySelector('.success');
        successMessage.style.display = 'none';
        var sameMessage = document.querySelector('.same');
        sameMessage.style.display = 'none';
        var deleteMessage = document.querySelector('.delete');
        deleteMessage.style.display = 'none';



    } else {

        for (var i = 0; i < nameArray.length + 1; i++) {

            if (nameValue == nameArray[i] && surnameValue == surnameArray[i] && numberValue == noArray[i] && cityValue == cityArray[i]) {
                durum = false;
                break;
            } else {
                durum = true;
            }
        }

        if (durum) {

            id++;

            /*tabloya Ekleme*/

            var entryTable = document.querySelector('.entry-user');
            var tr = document.createElement('tr');


            var td = document.createElement('td');
            var textId = document.createTextNode(id);
            td.appendChild(textId);
            tr.appendChild(td);

            var td = document.createElement('td');
            var textName = document.createTextNode(nameValue);
            td.appendChild(textName);
            tr.appendChild(td);

            var td = document.createElement('td');
            var textSurname = document.createTextNode(surnameValue);
            td.appendChild(textSurname);
            tr.appendChild(td);

            var td = document.createElement('td');
            var textNumber = document.createTextNode(numberValue);
            td.appendChild(textNumber);
            tr.appendChild(td);

            var td = document.createElement('td');
            var textCity = document.createTextNode(cityValue);
            td.appendChild(textCity);
            tr.appendChild(td);

            var td = document.createElement('td');
            var span = document.createElement('span');
            var img = document.createElement('img');
            img.src = 'https://img.icons8.com/ios/24/000000/cancel.png';
            img.className = 'img-close';
            span.appendChild(img);
            td.appendChild(span);
            tr.appendChild(td);
            entryTable.appendChild(tr);

            /*Dizilere ekleme*/

            nameArray.push(nameValue);
            surnameArray.push(surnameValue);
            noArray.push(numberValue);
            cityArray.push(cityValue);

            var errorMessage = document.querySelector('.error');
            errorMessage.style.display = 'none';
            var successMessage = document.querySelector('.success');
            successMessage.style.display = 'inherit';
            var sameMessage = document.querySelector('.same');
            sameMessage.style.display = 'none';
            var deleteMessage = document.querySelector('.delete');
            deleteMessage.style.display = 'none';

            span.onclick = function () {

                var parentTd = this.parentElement;
                var parentTr = parentTd.parentElement;
                parentTr.style.display = 'none';

                var tdName = parentTr.childNodes[1].innerHTML;
                var tdSurname = parentTr.childNodes[2].innerHTML;
                var tdNumber = parentTr.childNodes[3].innerHTML;
                var tdCity = parentTr.childNodes[4].innerHTML;

                var delName = nameArray.indexOf(tdName);
                nameArray.splice(delName, 1);
                var delSurname = surnameArray.indexOf(tdSurname);
                surnameArray.splice(delSurname, 1);
                var delNumber = noArray.indexOf(tdNumber);
                noArray.splice(delNumber, 1);
                var delCity = cityArray.indexOf(tdCity);
                cityArray.splice(delCity, 1);

                var errorMessage = document.querySelector('.error');
                errorMessage.style.display = 'none';
                var successMessage = document.querySelector('.success');
                successMessage.style.display = 'none';
                var sameMessage = document.querySelector('.same');
                sameMessage.style.display = 'none';
                var deleteMessage = document.querySelector('.delete');
                deleteMessage.style.display = 'inherit';


            }


        } else {

            var errorMessage = document.querySelector('.error');
            errorMessage.style.display = 'none';
            var successMessage = document.querySelector('.success');
            successMessage.style.display = 'none';
            var sameMessage = document.querySelector('.same');
            sameMessage.style.display = 'inherit';
            var deleteMessage = document.querySelector('.delete');
            deleteMessage.style.display = 'none';
        }


    }



});

//searchAll

/*Search Section*/

var searchNameArray = [];
var searchSurnameArray = [];
var searchNumberArray = [];
var searchDurum = false;


var btnSearch = document.querySelector('#btnSearch');
console.log(btnSearch);

btnSearch.addEventListener('click', function () {


    var searchValue = document.querySelector('#searchname').value;
    console.log(searchValue);

    var sayac = 0;
    searchNameArray = [];
    searchSurnameArray = [];
    searchSurnameArray = [];


    for (var i = 0; i < nameArray.length; i++) {

        if (cityArray[i] == searchValue) {
            console.log("bulundu . .");
            //searchNameArray.push(searchValue);
            searchNameArray.push(nameArray[i]);
            searchSurnameArray.push(surnameArray[i]);
            searchNumberArray.push(noArray[i]);
            indexArray.push(i);
            sayac++;

        } else {

            console.log("bulunamadı.");
        }
    }

    if (sayac > 0) {

        console.log(searchNameArray);

        var search1 = document.querySelector('.searchBox');
        var deneme = search1.childNodes[0];
        search1.removeChild(deneme);
        console.log(search1);

        var ul = document.createElement('ul');
        search1.appendChild(ul);
        ul.className = 'searchAll';



        var ul = document.querySelector('.searchAll');
        var li = document.createElement('li');

        for (var i = 0; i < searchNameArray.length; i++) {

            var li = document.createElement('li');
            var textLi = document.createTextNode(searchNameArray[i] + ' ' + searchSurnameArray[i] + ' ' + searchNumberArray[i]);
            li.appendChild(textLi);
            ul.appendChild(li);



        }


    } else {



        var search1 = document.querySelector('.searchBox');
        var deneme = search1.childNodes[0];
        search1.removeChild(deneme);
        console.log(search1);

        var ul = document.createElement('ul');
        search1.appendChild(ul);
        ul.className = 'searchAll';


        var ul = document.querySelector('.searchAll');
        var li = document.createElement('li');
        var text = "Aradıgınız kisiye ait veri bulunamadı.";
        var text2 = document.createTextNode(text);
        li.appendChild(text2);
        ul.appendChild(li);
        searchNameArray = [];
        searchSurnameArray = [];
        searchSurnameArray = [];
        sayac = 0;


    }


});


var kapatab = document.querySelector('.kapaTab');

kapatab.addEventListener('click', function () {

    var altMenu = document.querySelector('.altmenu');
    altMenu.style.display = 'none';

});


var acTab = document.querySelector('.acTab');

acTab.addEventListener('click', function () {

    var altMenu = document.querySelector('.altmenu');
    altMenu.style.display = 'inherit';

});
