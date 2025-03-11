import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { defineEmits } from "vue";
import ParentComponent from "../../components/ParentComponent.vue";
import ChildComponent from "../../components/ChildComponent.vue";

describe("ParentComponent", ()=>{
    const name="Anna";
    test("Set name to props correct from input field.", async ()=>{
        const wrapper=mount(ParentComponent);
        const input=wrapper.find("input");
        await input.setValue(name);

        const child=wrapper.findComponent(ChildComponent);
        expect(child.props("name")).toBe(name);
    });

    test("Emit message form child component.", async ()=>{
        const wrapper=mount(ParentComponent);
        const child=wrapper.findComponent(ChildComponent);

        /*await child.vm.$emit("greet","Hello "+name+" in VueWorld");
        await wrapper.vm.$nextTick();*/
        const button = child.find("button");
        const inputField=wrapper.find("input");

        await inputField.setValue(name);
        await button.trigger("click");

        expect(child.emitted("greet")).toBeTruthy();

        expect(wrapper.find("p").text()).toContain("Hello "+name+" in VueWorld")
    });
});