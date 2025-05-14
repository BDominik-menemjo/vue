import { mount } from '@vue/test-utils';
import { describe, expect, test } from "vitest";
import szerepjatek from '../../components/szerepjatek.vue';

describe("szerepjatek", () => {
    const wrapper=mount(szerepjatek);
    test("Alapból nem jelenik meg semmi a bekezdésben", ()=>{
        const p=wrapper.find("p");
        expect(p.exists()).toBeFalsy();
    });
    test("Kiválasztás tesztelése", async ()=>{
        const options = wrapper.findAll('option');
        await options.at(1).setSelected();
        const p=wrapper.find("p strong");
        expect(p.text()).toBe("ember");
    })
})
