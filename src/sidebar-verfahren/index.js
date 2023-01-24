import { registerBlockType } from "@wordpress/blocks";
import block from "./block.json";

registerBlockType(block.name, {
    edit: function(){
        return wp.element.createElement("div", { className: "placeholder-block" }, "Sidebar Verfahren")
    },
    save: function(){
        return null
    }
})