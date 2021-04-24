import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";
import flushPromises from "flush-promises";

jest.mock("@/services/axios"); //  pretending we made the call by mocking that behavior, using Jest’s mock function.
beforeEach(()=>{
    jest.clearAllMocks()
})
describe("MessageDisplay", () => {
  it("Calls getMessage and displays message", async () => {
    // mock the API call
    const mockMessage = "Hello from the mock DB.";
    getMessage.mockResolvedValueOnce({ text: mockMessage }); // calling our mocked get request
    const wrapper = mount(MessageDisplay);

    await flushPromises(); // wait for promise to resolve
    expect(getMessage).toHaveBeenCalledTimes(1); // check that call happened once
    const msg = wrapper.find('[data-testid="message"]').text();
    expect(msg).toEqual(mockMessage); // check that component displays message
  });

  it("Displays an error when getMessage call fails", async () => {
    const mockError = "Error when fetching data";
    getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1); // check that call happened once
    const displayedError = wrapper.find('[data-testid="message-error"]').text();
    expect(displayedError).toEqual(mockError); // check that component displays message
  });
});
