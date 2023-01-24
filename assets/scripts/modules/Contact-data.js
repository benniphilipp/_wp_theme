
class contactData {
    constructor(){
        this.getDataId()
        this.getProcedureLocation()

    }


    

    getProcedureLocation(){
        this.dataId = jQuery("#dataId").val()
        jQuery.getJSON(proceedingsData.root_url + '/wp-json/procedurelocation/v1/data/?term=' + this.dataId, function(data){
            let locationHtml = "";
            const country_data = [];
            jQuery.each(data, function(i, item) {
              
                if(!country_data.includes(item.country_code)){
                if(item.country_code == item.country_code){
                    locationHtml += "<li>" +  item.country_code + "</li>";
                    country_data.push(item.country_code);
                }
              }
            })
            
            const ul = jQuery('#procedurelocation')
            ul.append(locationHtml);
        })  
    }





    getSwiperJS(){
        //Contact Proceedings
        var swiperImage = new Swiper(".mySwiperImge", {
            direction: "vertical",
            observer: true,
            observeParents: true,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


        var swiperContact = new Swiper(".mySwiperContakt", {
            direction: 'horizontal',
            observer: true,
            observeParents: true,
            pagination: {
                el: '.wrapper-pagination > .swiper-pagination-new',
                clickable: true,
                renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';;
                },
            },

            navigation: {
                nextEl: ".wrapper-pagination > .swiper-button-next",
                prevEl: ".wrapper-pagination > .swiper-button-prev",
            },
        });

        swiperImage.controller.control = swiperContact;
        swiperContact.controller.control = swiperImage;
    }


    getDataId(){
        this.getSwiperJS()
        this.dataId = jQuery("#dataId").val()
        var img = '';
        jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedings/v1/data/?term=' + this.dataId, function(data){
            
        
            if (data.length == 0) {
           
                jQuery('.proceedings-contact').css("display", "none")
                jQuery('.no-data').html('<h1>Kein Standort ausgewählt</h1>')
                jQuery('.proceedings-contact').removeClass('toc')
                jQuery('.call-to-action').css("display", "none")

                jQuery('.proceedings-contact').removeAttr('data-toctitle')
            }else{
                //Array true
                jQuery('.no-data').css("display", "none")
                jQuery.each(data, function(key, val){
                    
                    jQuery("#wrapper-contact-js").after(`
                        <div class="swiper-slide">
                            <div class="wrapper-contact">
                                <div class="header-contact">
                                    <div class="code">
                                    <span>
                                       ${val.country_code}
                                    </span>   
                                    </div>
                                    <div class="country">
                                        ${val.name}
                                    </div>
                                </div>
                                <div class="body-contact">
                                    <div class="address">
                                        <ul>
                                            <li>${val.street_number}</li>
                                            <li>${val.postcode}</li>
                                            <li>${val.country}</li>
                                        </ul>
                                    </div>
                                    <div class="contact">
                                        <ul>
                                            <li class="email"><a href="">${val.email}</a></li>
                                            <li class="phone"><a href="">${val.phone}</a></li>
                                        </ul>
                                    </div>
                                    <div class="contact-cta">
                                        <span class="btn-decor-left"></span>
                                        <a href="${val.permalink}">Zum Standort</a>
                                        <span class="btn-decor-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)
                })
    
                jQuery.each(data, function(key, val){
    
                    // console.log(val.slider_image);
                    // console.log(val.thumbnail);
    
                    if(val.slider_image !== false){
                        img += `<img src="${val.slider_image}" alt="${val.name}" height="${val.slider_image_size.proceeding_header.width}" width="${val.slider_image_size.proceeding_header.height}">`;
                    }
    
    
                    //console.log(val.slider_image_size.proceeding_header);
                    // }else if(val.thumbnail !== false){
                    //     img += `<img src="${val.thumbnail}" alt="${val.name}">`;
                    // }else{
                    //     img += `<img src="https://dummyimage.com/640x360/fff/aaa" alt="">`;
                    // }
    
                    jQuery("#wrapper-image-js").after(`
                    <div class="swiper-slide">
                        <div class="main-image">
                        ${img}
                        </div>
                    </div>
                    `)
                 });
            }

        });
    }

}

export default contactData
