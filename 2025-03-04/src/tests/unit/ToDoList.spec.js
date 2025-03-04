import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ToDoList from "../../components/ToDoList.vue";
import { datas } from '../data/list.js';

describe("ToDoList", ()=>{
    test("ToDoList size is correct.", ()=>{
        const wrapper = mount(ToDoList);
        const items = wrapper.findAll(".todo li");
        expect(items.length).toBe(3);
    });

    test("ToDoList item's text is correct.", ()=>{
        const wrapper=mount(ToDoList);
        const items=wrapper.findAll(".todo li");
        for(let i=0; i<datas.length; i++){
            expect(items[i].text()).toBe(datas[i].text);    
        }
    })
})