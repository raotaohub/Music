import { shallowMount } from '@vue/test-utils';
import NavLink from '@/components/NavLink.vue';

describe('NavLink.vue', () => {
  it('created', () => {
    const wrapper = shallowMount(NavLink, {
      propsData: {
        info: {
          text: 'link',
        },
      },
      mocks: {
        $t: () => '',
      },
      stubs: ['router-link'],
    });

    expect(wrapper.classes()).toContain('nav-link');
  });
});
