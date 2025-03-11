import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { defineEmits } from "vue";
import ItemList from "../../components/ItemList.vue";

describe("ItemList",()=>{
    test("ItemList emits item-selected event", async ()=>{
        const items=[
            {id: 1, name: "Apple"},
            {id: 2, name: "Banana"}
        ];
        const wrapper=mount(ItemList, {
            props: {items}
        });

        const firstItem = wrapper.find("li");
        await firstItem.trigger("click");

        expect(wrapper.emitted("item-selected")).toBeTruthy();
        expect(wrapper.emitted("item-selected")[0]).toEqual([items[0]]);


    })
})