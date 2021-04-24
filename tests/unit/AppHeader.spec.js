import { mount } from "@vue/test-utils";
import AppHeader from '@/components/AppHeader'

describe('AppHeader', () => {
  test('if a user is not logged in, do not show the logout button', () => {
    const wrapper = mount(AppHeader); // mounting the component
    expect(wrapper.find('button').isVisible()).toBe(false);
  });

  test('if a user is logged in, show the logout button', async() => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(true)
  });
});
