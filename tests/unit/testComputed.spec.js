import { shallowMount } from "@vue/test-utils";
import testComputed from "@/views/testComputed";

describe("testComputed.test.js", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(testComputed);
  });

  describe("Properties", () => {
    it("returns the string in normal order if reversed property is not true", () => {
      //   wrapper.setData({ inputValue: "Yoo" });

      wrapper.vm.data.list.push({
        text: "23",
        color: "black"
      });

      expect(wrapper.vm.colors.length).toBe(4);
    });
  });
});
