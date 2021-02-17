import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import config from '@/store/modules/config';
import NavBar from '@/container/NavBar.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('NavBar.vue', () => {
  let store: Store<{}>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        config,
      },
    });
  });

  it('created', () => {
    const wrapper = shallowMount(NavBar, { store, localVue });

    expect(wrapper.classes()).toContain('nav-bar');
  });

  it('click menu', () => {
    const wrapper = mount(NavBar, {
      store,
      localVue,
      mocks: {
        $t: () => '',
      },
      stubs: ['router-link'],
    });

    wrapper
      .findComponent({
        name: 'ToggleMenuButton',
      })
      .vm.$emit('toggle');
    expect(wrapper.emitted('toggle')).toBeTruthy();
  });
});
