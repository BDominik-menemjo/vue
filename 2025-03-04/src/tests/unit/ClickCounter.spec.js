import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ClickCounter from "../../components/ClickCounter.vue";

describe("ClickCounter", ()=>{
    test("Clicking the button increments the count.", async ()=>{
        const wrapper = mount(ClickCounter);
        const button = wrapper.find("button");
        await button.trigger("click");
        expect(wrapper.find("p").text()).toContain("Count: 1");
    })

    test("Image src is correct.", ()=>{
        const wrapper = mount(ClickCounter);
        expect(wrapper.find("img").attributes("src")).toBe("/src/assets/vue.svg");
    })

    test("Image title is correct.", ()=>{
        const wrapper = mount(ClickCounter);
        expect(wrapper.find("img").attributes("title")).toBe("Vue Logó");
    })
})