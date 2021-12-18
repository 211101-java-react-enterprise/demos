import {mount, shallow} from "enzyme";
import LoginComponent from '../components/LoginComponent';

import {authenticate} from "../remote/auth-service";
jest.mock('../remote/auth-service');

// Jest's describe function creates a test suite for grouping any number of test cases (optional)
describe('LoginComponent Test Suite', () => {

    // Jest's beforeAll method is a function that runs once before all test cases in this suite have ran
    // Jest's afterAll method is a function that runs once after all test cases in this suite have ran
    // Jest's beforeEach method is a function that runs before each test cases in this suite runs
    // Jest's afterEach method is a function that runs after each test cases in this suite runs

    afterEach(() => {
        // TODO will come back
    });

    //Jest's it function (alternative: test function) takes a description string and a function that will be our test case
    it('LoginComponent should render successfully', () => {

        // Arrange (configure mocks/stubs)
        let stubbedUser = undefined;
        let mockSetUserFn = jest.fn();
        

        // Act (do the thing to be tested)
        
        // Use Enzyme's shallow function to render only the specified component (none of its children)
        const wrapper = shallow(<LoginComponent currentUser={stubbedUser} setCurrentUser={mockSetUserFn} />)

        // Assert (did it work?)

        // Jest's expect function is similar to the Assert class and its methods from JUnit.
        expect(wrapper).toBeTruthy();

    });


    it('Renders the login header', () => {

        let stubbedUser = undefined;
        let mockSetUserFn = jest.fn();

        const wrapper = shallow(<LoginComponent currentUser={stubbedUser} setCurrentUser={mockSetUserFn} />)

        const expectedHeader = <h4>Log in to your account!</h4>;

        expect(wrapper.contains(expectedHeader)).toEqual(true);

    });

    it('Username and password fields start empty', () => {

        let stubbedUser = undefined;
        let mockSetUserFn = jest.fn();

        const wrapper = shallow(<LoginComponent currentUser={stubbedUser} setCurrentUser={mockSetUserFn} />);
        const usernameInputWrapper = wrapper.find('#username');
        const passwordInputWrapper = wrapper.find('#password');
        
        expect(usernameInputWrapper.text()).toBe('');
        expect(passwordInputWrapper.text()).toBe('');

    });

    it('Clicking login button with valid form field values invokes the auth-service.authenticate method', () => {

        let stubbedUser = undefined;
        let mockSetUserFn = jest.fn();

        // We need to use Enzyme's mount function so that child components are rendered
        const wrapper = mount(<LoginComponent currentUser={stubbedUser} setCurrentUser={mockSetUserFn} />);
        const usernameInputWrapper = wrapper.find('input[name="username"]');
        const passwordInputWrapper = wrapper.find('input[name="password"]');
        const loginButtonWrapper = wrapper.find('#login-button');

        const stubbedUsernameChangeEvent = {target: {name: 'username', value: 'test-username'}};
        usernameInputWrapper.simulate('change', stubbedUsernameChangeEvent);

        const stubbedPasswordChangeEvent = {target: {name: 'password', value: 'test-password'}};
        passwordInputWrapper.simulate('change', stubbedPasswordChangeEvent);

        // For debugging purposes, its useful to see what the wrapper objects contain.
        // For this, we use ShallowWrapper's debug method
        // console.log(usernameInputWrapper.debug())

        loginButtonWrapper.simulate('click');

        expect(authenticate).toBeCalledTimes(1);

    });

    it('Clicking login button with missing form field values displays an error message', () => {

    });

});
