import LoginForm from '@/components/LoginForm'
import {mount} from '@vue/test-utils'

describe('LoginForm', ()=>{
    it('emits an event with a user data payload', ()=>{
        const wrapper = mount(LoginForm);
        const loginForm = wrapper.find('input[type="text"]');
        loginForm.setValue('Test Value');
        wrapper.trigger('submit'); // Simulate form submission

        // assert when the form is submitted
        const formSubmittedCalls = wrapper.emitted('formSubmitted');
        expect(formSubmittedCalls).toHaveLength(1)
        const expectedPayload = {name: 'Test Value'}
        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
    })
})
