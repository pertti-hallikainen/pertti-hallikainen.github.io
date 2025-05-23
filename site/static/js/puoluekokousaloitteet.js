var aloitteetDiv=$("#aloitteet");

var decisionTextToIndex = {
    "Hyväksytty":"1", //, Constants.Decisions.HYVÄKSYTTY },
    "Hyväksytty osittain tai muuteltuna":"2", // Constants.Decisions.HYVÄKSYTTY_OSITTAIN_TAI_MUUNNELTUNA },
    "Hyväksytään ja puoluekokous kehottaa":"3", //Constants.Decisions.HYVÄKSYTÄÄN_JA_PUOLUEKOKOUS_KEHOTTAA },
    "Aloite on jo olemassaolevien kantojen mukainen ja/tai toteutettu":"4", //Constants.Decisions.ALOITE_ON_JO_OLEMASSAOLEVIEN_KANTOJEN_MUKAINEN },
    "Puoluekokous tukee, kehottaa ja kannustaa":"5", //Constants.Decisions.PUOLUEKOKOUS_TUKEE_KEHOTTAA_JA_KANNUSTAA },
    "Hylätty":"6", //Constants.Decisions.HYLÄTTY },
    "Puoluekokous hylkää, mutta kehottaa":"7", //Constants.Decisions.PUOLUEKOKOUS_HYLKÄÄ_MUTTA_KEHOTTAA },
    "Merkitään tiedoksi":"8", //Constants.Decisions.MERKITÄÄN_TIEDOKSI },
    "Tieto puuttuu":"9", //Constants.Decisions.PÄÄTÖSTÄ_EI_OLE_VIELÄ_TEHTY }
}

var yearToRecord = {
    "2025":"https://drive.google.com/file/d/1jjLAomFp1EBNPj66eJ2IO9aM0X3XhUUu/view?usp=drive_link",
    "2024":"https://drive.google.com/file/d/1v5h4Y_Mbu6t9_C-MgIVG0nx-dahJYZYs/view?usp=drive_link",
    "2023":"https://drive.google.com/file/d/1QJDyjbsYcGfGqf-OEzwGxNhgTnJYGvID/view?usp=drive_link",
    "2022":"https://drive.google.com/file/d/1yciIe4UWU4OkLX9xp1USawIsCKZlvu5O/view?usp=drive_link",
    "2021":"https://drive.google.com/file/d/1Ib1Bu3sWgCNGF_e1ZZwEqQKZce7A61zF/view?usp=drive_link",
    "2020":"https://drive.google.com/file/d/1C5uzlID_h74l3XC67XytEOmv4mHLJKvZ/view?usp=drive_link",
    "2019":"https://drive.google.com/file/d/1iwsL8uPm5pMpXJz8jYNzvkqU6YVCcse0/view?usp=drive_link",
    "2018":"https://drive.google.com/file/d/1DV7daHzMMNBC7bLqOPVG9o4H-g7s2NTX/view?usp=drive_link",
    "2017":"https://drive.google.com/file/d/1vdXL5Qe0yCjdvZMfe32LJceISOIDxgFd/view?usp=drive_link",
    "2016":"https://drive.google.com/file/d/1y0YhqqISKIKkXJGJJ3wJWo8EzEyjKKdr/view?usp=drive_link",
    "2015":"https://drive.google.com/file/d/1Om-na0pRdl9H4l5l3owqIFaLyTh2qp4b/view?usp=drive_link",
    "2014":"https://drive.google.com/file/d/1SZHdvU8sqVf4WQwf5YHCrHpncZfphnGk/view?usp=drive_link",
    "2013":"https://drive.google.com/file/d/1XssTcLxsl9fFuqZXAo4oc5Isiqmwzd0M/view?usp=drive_link",
    "2012":"https://drive.google.com/file/d/1imOrfZBBXj8jZX1FQM40su0JunZ4z8AN/view?usp=drive_link",
    "2011":"https://drive.google.com/file/d/1SmkaQfbqgf7x0rVC8pxAeDYIKV2nK3XQ/view?usp=drive_link",
    "2010":"https://drive.google.com/file/d/1dGPcPscCjHysiWzgbz9PpNSSsWu4ts0Y/view?usp=drive_link",
    "2009":"https://drive.google.com/file/d/1yK4KUFP6ziwg8j_xV4tdggSv8wPOHdMO/view?usp=drive_link",
    "2008":"https://drive.google.com/file/d/1EvQCEZMEtDxkuvXc3vUOSlkjL7drzQWz/view?usp=drive_link",
    "2007":"https://drive.google.com/file/d/1cinuxMtnvE069Lk_uGHo0Ca1O0ffdR6c/view?usp=drive_link",
    "2006":"https://drive.google.com/file/d/1mvgwndhu3dMsKFPequT4914mYqENXRP3/view?usp=drive_link",
    "2005":"https://drive.google.com/file/d/1X4ocQEZseng0ddsj_YZLrAWkv-8i0AYL/view?usp=drive_link",
    "2004":"https://docs.google.com/document/d/1IlxQUCJ3YoqJ7D_1R8d75HqFRcTbiyYD/edit?usp=drive_link&ouid=118432720880880800002&rtpof=true&sd=true"
}

var aiheetJson = {
    "groups": [
    {
        "nimi":"Luonto",
        "aiheet":[
            "eläinpolitiikka",
            "luonnonsuojelu",
            "ympäristöpolitiikka",
            "ilmastonmuutos",
            "luontokato",
            "metsät",
            "vesi"
        ]
    },
    {
        "nimi":"Hyvinvointi",
        "aiheet":[
            "terveydenhuolto",
            "terveys",
            "mielenterveys",
            "sosiaalipalvelut",
            "sosiaaliturva",
            "perustulo",
            "hyvinvointi",
            "liikunta",
            "omaishoito"
        ]
    },
    {
        "nimi":"Ihmiset",
        "aiheet":[
            "yhdenvertaisuus",
            "vähemmistöt",
            "lapset",
            "nuoret",
            "ikääntyneet",
            "perhe",
            "humanitaarinen oikeus",
            "ihmisoikeudet",
            "uskonto",
            "sukupuoli",
            "anti-rasismi",
            "demokratia"
        ]
    },
    {
        "nimi":"Talous",
        "aiheet":[
            "talouspolitiikka",
            "verotus",
            "työelämä",
            "työllisyys",
            "yrittäjyys",
            "elinkeinopolitiikka",
            "aluepolitiikka",
            "maatalous",
            "rahapelijärjestelmä",
            "talousjärjestelmä",
            "kiertotalous",      
            "kestävä kehitys",
            "kulutuspolitiikka"            
        ]
    },
    {
        "nimi":"Politiikka-alueita",
        "aiheet":[
            "ulko- ja turvallisuuspolitiikka",
            "puolustus",
            "turvallisuus",
            "rikoslaki",
            "oikeuspolitiikka",
            "sosiaalipolitiikka",
            "kulttuuri",
            "päihdepolitiikka",
            "energia",
            "liikenne",
            "varhaiskasvatus",
            "koulutus",
            "tiede",
            "teknologia",
            "kansainvälisyys",
            "kielipolitiikka",
            "maahanmuutto",
            "turvapaikanhakijat",
            "mittarit" 
        ]
    },
    {
        "nimi":"Sektori",
        "aiheet":[
            "valtio",
            "hyvinvointialueet",
            "kunnat",
            "EU",
            "kolmas sektori"
        ]
    },
    {
        "nimi":"Järjestö",
        "aiheet":[
            "viestintä",
            "ohjelmatyö",
            "järjestökulttuuri",
            "yhdistysdemokratia",
            "vapaaehtoistyö",
            "sääntömuutos",
            "jäsenmaksu",
            "puolue",
            "puoluejohto",
            "puoluehallitus",
            "puoluevaltuusto",
            "puoluetoimisto",
            "puoluekokous",
            "periaateohjelma",
            "tavoiteohjelma",
            "strategia",
            "resurssipula"
        ]
    }
    ]
};

fetch("/data/aloitteet.json")
  .then((res) => res.text())
  .then((text) => {
    const obj = JSON.parse(text);
    var aloitteet = "";

    var allCategories = getAllCategories();
    var missingTopics = [];

    for(var key in obj){
        var aloite = obj[key];
        //console.log(aloite);

        // Generate Aloite-html
        var category = "pol";
        if(aloite.Category!="Poliittiset aloitteet") category = "org";
        var aloiteDiv = $(`<div class="aloite ${aloite.Year} ${category}">`);

        var decisionDiv = $("<div class='decision my-tooltip' hidden></div>");
        var decisionIndex = decisionTextToIndex[aloite.Decision];
        var decisionTooltip = $("<span class='tooltip-text'></span>");
        decisionTooltip.append(aloite.Decision);
        decisionDiv.text(decisionIndex);
        decisionDiv.addClass("decision-"+decisionIndex);
        decisionDiv.append(decisionTooltip);
        aloiteDiv.append(decisionDiv);
        var year = aloite.Year;
        var record = yearToRecord[year];
        aloiteDiv.append(`${aloite.Title} (<a class='silent-link' href='${record}' target="_blank">${aloite.Year}</a>)`);
        
        var topicDiv = $("<div></div>");
        for(var topicKey in aloite.Topics){
            var topic = aloite.Topics[topicKey];
            topicDiv.append(`<span class="topic">${topic}</span>`);

            if(allCategories.includes(topic)==false && missingTopics.includes(topic)==false){
                missingTopics.push(topic);
            }
        }

        aloiteDiv.append(topicDiv);
        aloitteetDiv.append(aloiteDiv);
    }
    //console.log(aloitteet);
    if(missingTopics.length >0){
        console.error("puuttuvat/virheelliset kategoriat", missingTopics);
    }

    $(".on-change-filter").on("change", function() {
        filter();
    });


    $("#hideTopics").on("change", function() {
        $(".topic").toggle();
    });
   
  }); // end fetch

// generate topic-filters
var aiheetDiv = $("#aiheet");

for(var key in aiheetJson.groups){
    var aiheGroup = aiheetJson.groups[key];
    var groupDiv = $("<div class='topicFilter'></div>");
    var headerDiv = $("<div></div>");
    var groupCheckbox = $(`<input type='checkbox' data-category="${aiheGroup.nimi}" id="${aiheGroup.nimi}" />`);
    headerDiv.append(groupCheckbox);
    var groupLabel = $(`<label for="${aiheGroup.nimi}">${aiheGroup.nimi}</label>`);
    headerDiv.append(groupLabel);
    var closeLink = $(`<a class='collapse-category' data-category="${aiheGroup.nimi}"=>[avaa]</a>`);
    closeLink.data("category", aiheGroup.nimi);
    closeLink.click(function(){
        var c = $(this).data("category");
        var t = $(`.${c}.children`).toggle();
        if(t.is(":visible")){
            $(this).text("[sulje]");
        }
        else{
            $(this).text("[avaa]");
        }
    });

    groupCheckbox.on("change", function() {
        var c = $(this).data("category");
        var checked = $(this).prop("checked");
        var inputs = $(`.${c}.children`).find("input");
        inputs.prop("checked", checked );
        filter();
    });


    headerDiv.append(closeLink);
    groupDiv.append(headerDiv);

    var childrenDiv = $(`<div class='${aiheGroup.nimi} children'></div>`);
    // Aiheen perusteella filtteröinti
    for(var childKey in aiheGroup.aiheet){
        var aihe = aiheGroup.aiheet[childKey];
        var aiheDiv = $("<div class='topicFilter child'></div>");
        var aiheCheckbox = $(`<input type='checkbox' class="${aihe}" id="${aihe}" />`);
        aiheCheckbox.prop('checked', true);
        aiheCheckbox.on("change", function(){
            filter();
        });
        aiheDiv.append(aiheCheckbox);
        var aiheLabel = $(`<label for="${aihe}">${aihe}</label>`);
        aiheDiv.append(aiheLabel);
        childrenDiv.append(aiheDiv);
    }
    groupDiv.append(childrenDiv);

    groupCheckbox.prop('checked', true);
    childrenDiv.hide();

    aiheetDiv.append(groupDiv);
}

$("#toggle-decision-categories").on("click", function(){
    var t = $("#decision-categories-container");
    t.toggle();
    $(".decision").toggle();
    $("#instructions").toggle();
    if(t.is(":visible")){
        $(this).text("[sulje]");
    }
    else{
        $(this).text("[avaa]");
    }
});


$(document).on('click','.topic',function(){ // This way because dynamically added elements are not found by jquery.
    console.log('hello');
    var clickedTopic = $(this).text();  
    var inputs = $(`#aiheet`).find("input");
    inputs.prop("checked", false );
    $("."+clickedTopic).prop( "checked", true );
    filter();
});


$("#allDecisions").on("change", function() {
    var checked = $(this).prop("checked");
    var inputs = $(`#decision-categories`).find("input");
    inputs.prop("checked", checked );
    if(checked) filter();
});

$("#allTopics").on("change", function() {
    var checked = $(this).prop("checked");
    var inputs = $(`#aiheet`).find("input");
    inputs.prop("checked", checked );
    if(checked) filter();
    else{
        $(".aloite").hide();
    }
});

$("#requireAllCategories").on("change", function(){
    filter();
});

function makeDecisionMatrix(){
    var table = "<table></table><"
}

function getAllCategories(){
    var allCategories = [];
    for(var key in aiheetJson.groups){
        var aihe = aiheetJson.groups[key];
        allCategories.push(...aihe.aiheet);
    }
    //console.log(allCategories);
    return allCategories;
}

function getSelectedCategories(){
    var checkboxes = $("#aiheet").find("input");
    var selected = checkboxes.map(function(){
        var box = $(this);
        if(box.prop("checked")){
            return box.attr("class");
        }
    });
    return selected.toArray();
}

function getSelectedDecisions(){
    var checkboxes = $("#decision-categories").find("input");
    var selected = checkboxes.map(function(){
        var box = $(this);
        if(box.prop("checked")){
            return box.attr("id");
        }
    });
    return selected.toArray();
}

function getCategoriesFor(aloite){
    var jAloite = $(aloite);
    var spanElements = jAloite.find(".topic");
    if (!spanElements) return;
    return spanElements.map(function(){return $(this).text()}).toArray();
}


function hasAllAmongSelectedCategories(categories, selectedCategories){
    return categories.every(t => selectedCategories.includes(t));
}

function isAmongSelectedCategories(categories, selectedCategories){
    if(categories.length==0) return true;
    //console.log(selectedCategories);
    return categories.some(n => selectedCategories.some(h=> h===n));
}


function filter(){
    var minYear = $("#minYear").val();
    var maxYear = $("#maxYear").val();
    if(minYear>maxYear) return;

    var showPolitical = $("#categoryPolitical").prop("checked");
    var showOrganizational = $("#categoryOrganizational").prop("checked");
    if(!showPolitical && !showOrganizational){
        $(".aloite").hide();
        return;
    }

    var selectedCategories = getSelectedCategories();
    var selectedDecisions = getSelectedDecisions();

    if(selectedCategories.length == 0 || selectedDecisions.length == 0){
        $(".aloite").hide();
        return;
    }



    for(let i=2004; i<=2025; i++){
        var s = `.${i}`;
        var aloitteet = $(s);
        var requireAllCategories = $("#requireAllCategories").prop("checked");
        if(i>=minYear && i<=maxYear){    
            //console.log(aloitteet);
            // käy läpi kaikki tämän vuoden aloitteet yksitellen
            aloitteet.each(function(index, aloite){
                var isPolitical = $(aloite).hasClass("pol");
                if(!showPolitical && isPolitical){
                    $(aloite).hide();
                    return true;
                }
                else if(!showOrganizational && !isPolitical){
                    $(aloite).hide();
                    return true;
                }
               
                var categories = getCategoriesFor(aloite);
                
                var show = false;

                var decision = $(aloite).find(".decision");
                for(var i in selectedDecisions){
                    var dec = selectedDecisions[i];
                    if($(decision[0]).hasClass(dec)){
                        show=true;
                        break;
                    }
                }
                if(!show) {
                    $(aloite).hide();
                    return true;
                }
                if(requireAllCategories){
                    show = hasAllAmongSelectedCategories(categories, selectedCategories);
                }
                else{
                    show = isAmongSelectedCategories(categories, selectedCategories);
                }
                if(show) $(aloite).show();
                else $(aloite).hide();
            });
        }     
        else {
            aloitteet.hide();
        }
    }
}
