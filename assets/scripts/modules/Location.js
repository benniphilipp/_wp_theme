class locationData{
    
    constructor(){
        this.getLoacationData()
    }

    getLoacationData(){
        //console.log('getLoacationData in location.js');
        this.dataId = jQuery("#dataIdLoacation").val();
        const catid = this.dataId?this.dataId:'';
        const url = proceedingsData.root_url + '/wp-json/locationresult/v1/data/?term=' + catid;
        jQuery.getJSON(url, function(data){
            //console.log('getLoacationData data:', data);
            var results = data.results;
            //grouping by category first

            let allCats = {};

            jQuery.each(results, function(i, item) {

                if(!item.cat){
                    return true;
                }
                if (!(item.cat in allCats)){
                    allCats[item.cat] = [];
                }
                allCats[item.cat].push(item.name)
                return true;
            });

            //console.log('getLoacationData allCats:', allCats);
            let locationHtml = "";

            jQuery.each(allCats, function(cat, locs) {
                //console.log(item.name);
                locationHtml += "<li>" + cat + '<ul>';
                jQuery.each(locs, function(j, loc) {
                    locationHtml += "<li>" + loc + "</li>";
                });
                locationHtml += "</ul>";
            });

            const ul = jQuery('#wrapper-location>ul');
            // remove its children
            ul.children().remove();
            ul.append(locationHtml);

        })
    }
}

export default locationData