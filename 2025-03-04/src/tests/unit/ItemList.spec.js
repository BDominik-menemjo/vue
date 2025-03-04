import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ItemList from "../../components/ItemList.vue";

describe("ItemList", ()=>{
    test("ItemList length is ok.", ()=>{
        const wrapper = mount(ItemList);
        const items=wrapper.findAll(".items li");
        expect(items.length).toBe(3);
    });
    
    test("ItemList renders all items.", ()=>{
        const wrapper = mount(ItemList);
        const items=wrapper.findAll(".items li");
        expect(items[0].text()).toBe("Apple");
    });

    test("ItemList renders all items with loop.", ()=>{
        const wrapper = mount(ItemList);
        const items=wrapper.findAll(".items li");
        const list=["Apple", "Banana", "Oragne"];
        for(let i=0; i<items.length; i++){
            expect(items[i].text()).toBe(list[i]);
        }
    });
})