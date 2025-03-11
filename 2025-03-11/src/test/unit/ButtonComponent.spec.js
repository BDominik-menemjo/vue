import ButtonComponent from "../../components/ButtonComponent.vue";
import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { defineEmits } from "vue";

describe("ButtonComponent", ()=>{
    test("ButtonComponent emits a click event.", async ()=>{
        const wrapper = mount(ButtonComponent);
        const button  = wrapper.find("button");

        await button.trigger("click");
        expect(wrapper.emitted("click")).toBeTruthy();
    })
})