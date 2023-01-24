class contactPerson{
    constructor(){
        //function
        this.getData()        
    }

    getData(){
        this.dataId = jQuery("#dataIdContact").val()
        //console.log(this.dataId)
        // jQuery.getJSON( '' + this.dataId, function($data){
        //     console.log(this.dataId)
        // })
    }

}

export default contactPerson