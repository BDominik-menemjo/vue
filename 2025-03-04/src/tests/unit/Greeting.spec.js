import Greeting from "../../components/Greeting.vue";
import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

describe("Greeting", ()=>{
    test("Greeting component contains 'Welcome to Vue!' text.", ()=>{
        const wrapper = mount(Greeting);
        expect(wrapper.find("div").text()).toContain("Welcome to Vue!");
    });

    test("Greeting user is logged in and name display is ok.", ()=>{
        const wrapper = mount(Greeting);
        expect(wrapper.find("h1").text()).toContain("Logged in: Kiss Anna");
    });
});