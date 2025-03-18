import { mount } from "@vue/test-utils";
import PasswordInput from "../../components/PasswordInput.vue";
import { expect, describe, test } from "vitest";

describe("PasswordInput", ()=>{
    const wrapper=mount(PasswordInput);
    const inputType=wrapper.find(".password");

    test("Input fiel is password by default", ()=>{
        expect(inputType.attributes('type')).toBe("password");
    })

    test("Password type changes by checking the checkbox.", async ()=>{
        const showPasswordCheckbox=wrapper.find("input[type='checkbox']");
        expect(inputType.attributes('type')).toBe("password");
        await showPasswordCheckbox.trigger("click");
        expect(inputType.attributes('type')).toBe("text");
    })
})