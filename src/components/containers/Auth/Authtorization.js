import React from "react";
import AuthForm from "../../Authtorization/AuthForm";
import { useAuthtorize } from "../../../api/hooks/authHooks";
import { useChangeInputHandler } from "../../../api/hooks/eventHooks";
import { useGetAuthManager } from "../../../api/hooks/authHooks";

export default function Authtorization() {
    const authtorization = useAuthtorize();
    const inputHandler = useChangeInputHandler("");
    const authManager = useGetAuthManager();
    const errPassword = authManager.errorPassword;
    const errLogin = authManager.errorLogin;

    const submitHandler = (event) => {
        event.preventDefault();
        authtorization.auth(
            inputHandler.state.login,
            inputHandler.state.password
        );
    };

    const authObj = {
        inputHandler,
        authManager,
        authtorization,
        errPassword,
        errLogin,
        submitHandler
    };

    return (
        authManager.token === '' &&
        <>
        <AuthForm props={{authObj}}></AuthForm>
        </>
    );
}
