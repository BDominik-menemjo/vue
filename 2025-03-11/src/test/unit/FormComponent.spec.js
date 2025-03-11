import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { defineEmits } from "vue";
import FormComponent from "../../components/FormComponent.vue";

describe("FormComponent", ()=>{
    const wrapper=mount(FormComponent);
    const inputField=wrapper.find("input");
    test("FormComponent emits reset event", async ()=>{
        const resetButton=wrapper.find("button[type='reset']");

        await inputField.setValue("Teszt");
        await resetButton.trigger("click");
        expect(wrapper.emitted("reset")).toBeTruthy();
        expect(inputField.element.value).toBe("");
    });
    test("FormComponent emits submit event", async ()=>{
        const submitButton=wrapper.find("button[type='submit']");
        await inputField.setValue("SubmitTeszt");
        await submitButton.trigger("click");
        expect(wrapper.emitted("submit")).toBeTruthy();
        expect(wrapper.emitted("submit")[0]).toEqual(["SubmitTeszt"])
        
    });
})