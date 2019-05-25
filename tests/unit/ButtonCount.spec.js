import { shallowMount } from "@vue/test-utils";
import ButtonCount from "@/components/ButtonCount.vue";

describe("ButtonCount.vue", () => {
  const wrapper = shallowMount(ButtonCount);
  // checks ButtonCount is a component.
  it("Register is a component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
