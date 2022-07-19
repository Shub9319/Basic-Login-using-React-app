import {render,screen,cleanup,fireEvent} from "@testing-library/react";
import {LoginForm} from "../MyComponents/Login/LoginForm";

    const user=[{
    Firstname:"Shubham",
    Lastname:"Malpani",
    email:"test@gmail.com",
    password:"321"
    },
    {
        Firstname:"Deepak",
        Lastname:"Verma",
        email:"test23@gmail.com",
        password:"879"
    }]
    
    beforeEach(()=>{
        render(<LoginForm allusers={user}/>)
    })

    afterAll(()=>{
        cleanup();
    })

    test("check for Email field Empty using LabelText",()=>{
        // fireEvent.change()
        const element= screen.getByLabelText("Email");
        expect(element.textContent).toBe("");
    })

    test("check for Passoword field Empty using Placeholder",()=>{
        // fireEvent.change()
        const element= screen.getByPlaceholderText("Enter Password");
        expect(element.textContent).toBe("");
    })

    // test('check Submit button value',()=>{
    //     const element= screen.getByRole("button")
    //     expect(element).toHaveValue('LogIn');
    // })

    // test('check Submit button type',()=>{
    //     const element= screen.getByRole("button")
    //     expect(element).toHaveAttribute("type","submit")
    // })

    // test("check by labelText for Email input fields required or not",()=>{
    //     const element= screen.getByLabelText("Email");
    //     expect(element).toBeRequired();
    // })

    // test("check by PlaceHolder for Password input fields required or not",()=>{
    //     const element= screen.getByPlaceholderText("Enter Password");
    //     expect(element).toBeRequired();
    // })


    // test("check Heding for Login Page",()=>{
    //     const element=screen.getByRole('heading', { level: 2 });
    //     expect(element).toHaveTextContent("Deeps'Cafe Login");
    // })

    // test('check that form is inside login or not',()=>{
    //     const form= screen.getByRole("form");
    //     const logindiv= screen.getByTestId("login_DIV");
    //     expect(logindiv).toContainElement(form);
    // })

    test.skip('show the rendering of table in debug',()=>{
        r.debug();
        // r.logTestingPlaygroundURL();
    })