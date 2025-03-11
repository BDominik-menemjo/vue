import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { defineEmits } from "vue";
import ToggleButton from "../../components/ToggleButton.vue";

describe("ToggleButton", ()=>{
    test("ToggleButton props is false, buttonText is OFF.", ()=>{
        const wrapper = mount(ToggleButton, {
            props:{
                checked: false
            }
        })
        const button = wrapper.find("button");
        expect(button.text()).toBe("OFF");
    });

    test("ToggleButton props is true, buttonText is ON.", ()=>{
        const wrapper = mount(ToggleButton, {
            props:{
                checked: true
            }
        })
        const button = wrapper.find("button");
        expect(button.text()).toBe("ON");
    });

    test("ToggleButton toggles the checked state.", async ()=>{
        const wrapper = mount(ToggleButton, {
            props:{
                checked: false
            }
        })
        const button = wrapper.find("button");
        await button.trigger("click");
        expect(wrapper.emitted("update")).toBeTruthy();
        expect(button.text()).toBe("ON");
        await button.trigger("click");
        expect(button.text()).toBe("OFF");
    });
});