import { shallowMount } from '@vue/test-utils';
import NavLinks from '@/components/NavLinks.vue';

describe('NavLinks.vue', () => {
  it('created', () => {
    const wrapper = shallowMount(NavLinks, {
      propsData: {
        list: [],
      },
      mocks: {
        $t: () => '',
      },
    });

    expect(wrapper.classes()).toContain('nav-links');
  });
});
