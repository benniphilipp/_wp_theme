import { registerBlockType } from "@wordpress/blocks";
import block from "./block.json";

registerBlockType(block.name, {
    edit: function(){
        return wp.element.createElement("div", { className: "our-placeholder-block" }, "Archive Placeholder")
    },
    save: function(){
        return null
    }
})