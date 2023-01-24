class proceedingData {
    /*  */

    constructor() {
        //Buttons
        this.useButton = jQuery("#use");
        this.useLocationButton = jQuery("#location");
        this.useSearchButton = jQuery("#serach");

        //Elemente
        this.wrapper = jQuery("#wrapper");
        this.bgDistance = jQuery("#bg-distance");
        this.wrapperSerachResults = jQuery("#wrapper-serach-results");
        this.wrapperLocationResults = jQuery("#wrapper-location-results");
        this.wrapperUseResults = jQuery("#wrapper-use-results");

        this.lottieview = jQuery("#lottieview");
        this.openCloseButton = jQuery("#open-close-button");

        this.useFilter = jQuery(".use-filter");
        this.locatFilter = jQuery(".location-filter");
        this.serachFilter = jQuery(".serach-filter");
        this.filterMain = jQuery(".filter-main");
        this.filterBody = jQuery(".filter-body");

        this.events();
        //this.lottie()
        this.getDataResults();
        this.getDataUse();
    }

    events() {
        this.useSearchButton.on("click", this.activeSerachResults.bind(this));
        this.useLocationButton.on("click", this.activeLocationResults.bind(this));
        this.useButton.on("click", this.activeUseResults.bind(this));
        this.openCloseButton.on("click", this.close.bind(this));
    }

    typingLogic() {}

    //Gib mir die freie Suche
    getDataSearch() {}

    //Gib mir alle Kategorien von Verfahren
    getDataUse() {
        const that = this;
        jQuery.getJSON(
            proceedingsData.root_url + "/wp-json/proceedingsdatarestapi/v1/data/",
            function (data) {
                //console.log('got data in getDataUse:', data)
                var cat = data.categorie;

                var partyHTML = "";
                var valHTML = "";
                jQuery.each(cat, function (i, object) {
                    if (object.name !== undefined) {
                        var nam = i;
                        if (valHTML !== "") {
                            partyHTML += "<ul>" + valHTML + "</ul>" + "</li>";
                            valHTML = "";
                        }
                        partyHTML += '<li class="item first-child">' + object.name;
                    } else if (object.title !== undefined) {
                        valHTML += "<li>" + object.title + "</li>";
                    }
                });

                jQuery("#wrapper-ur").append(partyHTML);
            }
        );
    }

    //Gib mir die Standorte nach Verfahren
    getDataLocations() {}

    //Zeig mir alle Ergebnisse an.
    getDataResults() {
        jQuery.getJSON(proceedingsData.root_url + "/wp-json/proceedingsdata/v1/data/", function (data) {
            var proceedings = data.proceedingsresults;
            jQuery.each(proceedings, function (key, val) {
                jQuery("#wrapper-results").append(`
                    <div class="col-lg-6">
                        <div class="procedures_box">
                            <div class="procedures_box-top_bar">
                                <a href="${val.permalink}" class="procedures_box-main-title">${val.title}</a>
                                <a href="${val.permalink}" class="procedures_box-main-time">${val.date}</a>
                           </div>
                            ${
                                val.thumbnail
                                    ? `<a class="procedures_box-img" href="${val.permalink}" title="${val.title}" style="background-image: url('${val.thumbnail}')"></a>`
                                    : `<a class="procedures_box-img" href="${val.permalink}" title="${val.title}" style="background-image: url('https://via.placeholder.com/640x360')"></a>`
                            }
                            <div class="procedures_box-content">
                                <h5 class="procedures_box-sub_title">Lorem, ipsum dolor.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsum illum iusto porro consequatur eum, amet repellendus eligendi fugiat laborum, repudiandae illo quaerat perferendis. Provident enim debitis cupiditate odio suscipit!</p>
                                <a href='${val.permalink}' class="procedures_box-read_more" title="Read More">
                                    <span>Read More </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="48" height="48" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m51.93 33-50.93-.041a1 1 0 0 1 0-2l50.931.041a1 1 0 0 1 0 2z" fill="#717170" data-original="#717170"></path><path d="m64 32.012c-5.681 2.1-12.731 5.692-17.1 9.5l3.446-9.512-3.433-9.513c4.365 3.813 11.409 7.413 17.087 9.525z" fill="#717170" data-original="#717170"></path></g></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                `);
            });
        });
    }

    //Activierung
    activeUseResults() {
        if (!this.wrapper.hasClass("active")) {
            //this.runLottie()
            setTimeout(() => this.openUseOverlay(), 100);
            this.wrapperActive();
        } else {
            //this.runLottie()
            this.wrapperActive();
            this.openUseOverlay();
        }
    }

    activeLocationResults() {
        if (!this.wrapper.hasClass("active")) {
            //this.runLottie()
            setTimeout(() => this.openLocationOverlay(), 100);
            this.wrapperActive();
        } else {
            //this.runLottie()
            this.wrapperActive();
            this.openLocationOverlay();
        }
    }

    activeSerachResults() {
        if (!this.wrapper.hasClass("active")) {
            //this.runLottie()
            setTimeout(() => this.openSearchOverlay(), 100);
            this.wrapperActive();
        } else {
            //this.runLottie()
            this.wrapperActive();
            this.openSearchOverlay();
        }
    }

    wrapperActive() {
        if (this.wrapper.hasClass("active")) {
            if (this.wrapperSerachResults.hasClass("results-display")) {
                this.removeUseResults();
                this.removeLocationResults();
                this.removeSerachResults();
            }
            if (this.wrapperLocationResults.hasClass("results-display")) {
                this.removeUseResults();
                this.removeLocationResults();
                this.removeSerachResults();
            }
            if (this.wrapperUseResults.hasClass("results-display")) {
                this.removeUseResults();
                this.removeLocationResults();
                this.removeSerachResults();
            }
        }
    }

    //Deaktivierung
    removeUseResults() {
        this.wrapperUseResults.addClass("results-none");
        this.wrapperUseResults.removeClass("results-display");
        this.locatFilter.removeClass("active");
        this.serachFilter.removeClass("active");
    }

    removeLocationResults() {
        this.wrapperLocationResults.addClass("results-none");
        this.wrapperLocationResults.removeClass("results-display");
        this.useFilter.removeClass("active");
        this.serachFilter.removeClass("active");
    }

    removeSerachResults() {
        this.wrapperSerachResults.addClass("results-none");
        this.wrapperSerachResults.removeClass("results-display");
        this.useFilter.removeClass("active");
        this.locatFilter.removeClass("active");
    }

    //Overlay Open Filter
    openSearchOverlay() {
        this.overlay();
        this.wrapperSerachResults.removeClass("results-none");
        this.wrapperSerachResults.addClass("results-display");
        this.serachFilter.addClass("active");
    }

    openLocationOverlay() {
        this.overlay();
        this.wrapperLocationResults.removeClass("results-none");
        this.wrapperLocationResults.addClass("results-display");
        this.locatFilter.addClass("active");
    }

    openUseOverlay() {
        this.overlay();
        this.wrapperUseResults.removeClass("results-none");
        this.wrapperUseResults.addClass("results-display");
        this.useFilter.addClass("active");
    }

    //Basic
    overlay() {
        this.wrapper.addClass("wrapper-filter-style");
        this.bgDistance.addClass("bg-distance");
        this.openCloseButton.addClass("close-button-display");
        this.wrapper.addClass("active");
        this.filterMain.addClass("active-main");
        this.filterBody.addClass("active-main");
    }

    // runLottie(){
    //     if (!this.wrapper.hasClass('active')){
    //         console.log('Lotti')
    //         this.lottieview.css('display', 'block')
    //         this.wrapper.css('display', 'none')
    //         setTimeout(() =>
    //             this.lottieview.css('display', 'none'),
    //         2500)
    //     }

    // }

    close() {
        this.removeUseResults();
        this.removeLocationResults();
        this.removeSerachResults();
        this.wrapper.removeClass("wrapper-filter-style");
        this.bgDistance.removeClass("bg-distance");
        this.openCloseButton.removeClass("close-button-display");
        this.filterMain.removeClass("active-main");
        this.filterBody.removeClass("active-main");
    }

    // lottie(){
    //     let iconSkipForward = document.querySelector('.lottie');
    //     let animationSkipForward = bodymovin.loadAnimation({
    //             container: iconSkipForward,
    //             renderer: 'svg',
    //             loop: true,
    //             autoplay: true,
    //             path: "/wp-content/themes/haertha/images/HG_Logo_Animation_LA2.json"
    //     });
    //     animationSkipForward.playSegments([0,60], true);
    // }
}

export default proceedingData;

// getDataUse(){
//     jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedingsdatarestapi/v1/data/', function(data){
//         //var cat = data.categorie;

//         // var catDate = {};
//         // jQuery.each(data, function() {
//         //     var r = catDate[this.results] = [];
//         //     r.push(this);
//         // });

//         //console.log(catDate)

//         var mandrill_events = data.categorie;

//         console.log(mandrill_events)

//         var result = mandrill_events[0];
//         var result = mandrill_events[4];
//         var result = mandrill_events[9];
//         var result = mandrill_events[13];
//         var result = mandrill_events[16];
//         var result = mandrill_events[21];

//         jQuery.each(result, function(i, object){
//             //console.log(i +'('+object.length+')')
//             //console.log(object);
//         //    console.log(object)
//            //console.log(object)
//             // jQuery.each(object, function (index, obj) {
//             //     //console.log(index)
//             //     //console.log(obj[index]);
//             //     //console.log(obj)
//             //     //console.log(obj[i])
//             //     // jQuery.each(obj, function (i, varr) {

//             //     //     // console.log(varr)
//             //     //     // console.log(varr.permalink)

//             //     //     // console.log(varr.title)

//             //     //     jQuery("#wrapper-use-results").append(`
//             //     //     <ul id="wrapper-ur">
//             //     //         <li> ${varr[0]} </li>
//             //     //         <li> ${varr.title} </li>

//             //     //     </ul>
//             //     //     `)

//             //     // });

//             //     //console.log(obj );
//             //     // console.log(obj[index]);
//             //     //console.log(obj.permalink);

//             // });
//         });

//         // jQuery.each(data, function(i, e) {
//         //     jQuery.each(e, function(key, arr) {
//         //         console.log(arr)
//         //         // jQuery.each(arr, function(index, value){
//         //         //     //console.log(value)
//         //         // })
//         //     });
//         // })

//         // jQuery.each(cat, function(i, item) {

//         //     jQuery("#wrapper-use-results").append(`
//         //     <ul id="wrapper-ur">

//         //         ${ jQuery.each(item, function(key, arry){
//         //             `<li> ${arry.permalink}  ${arry.title}</li>`
//         //         }) }

//         //     </ul>
//         //     `)

//         // });

//     //     data.categorie.map( item => console.log(item))
//     //    //data.categorie.map( item => console.log(item + item.permalink + item.titel))

//     //     jQuery("#wrapper-use-results").append(`
//     //     <ul id="wrapper-ur">
//     //     ${data.categorie.map( item => item ) }
//     //     </ul>
//     //     `)

//         // var results = data.results;
//         // console.log(data);

//         // var catResults = data.categorie;

//         // jQuery.each(catResults, function(i, item) {
//         //     //console.log(item);
//         //     console.log(i);
//         //     console.log(item.title);
//         //     console.log(item.permalink);
//         //     item.results.map( item => item.permalink)

//         // });

//         //let catResults = numberArray.map((num) => num.title)

//         // jQuery.each(data,function(){

//         //     console.log( this.title ,this.permalink);

//         //     })

//         ///df.categorieresults.map(item_ => console.log(item_.id))

//         // jQuery.each(catResults.concat(results), function(i, item) {
//         //     //console.log(item.cat);

//         // });

//         // jQuery.each(data, function(i, e) {
//         //     jQuery.each(e, function(key, arr) {

//         //         console.log(arr.categorie);
//         //     console.log("...",arr.categorie, arr.name);

//         //     });
//         // })

//         // jQuery.each(data, function(i, e) {
//         //     jQuery.each(e, function(key, arr) {
//         //         jQuery.each(arr, function(index, obj) {
//         //             console.log("...", index, obj.value);
//         //         });
//         //     });
//         // })

//         //var cat = data;
//         // jQuery.each(data, function(kay, val){

//         //     // console.log(data.results.permalink)
//         //     //val.map(item => `<li><a href="${item}">${item.title}</a></li>`).join("")
//         //     //val.categorie.map( item => console.log(item))

//         //     //console.log(val.id)
//         //     //console.log(val)

//         //     // console.log(keys);
//         //     // if(rusalts.id == cat.id){
//         //     //     //console.log(rusalts.title)
//         //     // }
//         // })
//     })
// }
