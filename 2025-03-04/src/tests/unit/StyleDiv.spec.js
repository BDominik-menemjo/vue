import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import StyleDiv from "../../components/StyleDiv.vue";

describe("StyleDiv", ()=>{
    test("StyleDiv ha correct color,",()=>{
        const wrapper = mount(StyleDiv);
        expect(wrapper.find(".btn").attributes("style")).toContain("color: red");
    })
})