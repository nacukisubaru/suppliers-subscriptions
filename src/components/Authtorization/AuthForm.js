import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";

const paperStyle = {
    padding: 20,
    height: "35vh",
    width: 350,
    margin: "0 auto",
};

const btnstyle = { margin: "8px 0" };

export default function AuthForm(auth) {
    const authObj = auth.props.authObj;
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "150px",
            }}
        >
            <Grid>
                <Paper style={paperStyle}>
                    <Grid align="center" style={{ marginTop: "15px" }}>
                        <h2>Авторизация</h2>
                    </Grid>
                    <form onSubmit={authObj.submitHandler}>
                        <TextField
                            error={authObj.errLogin !== "" && true}
                            style={{ marginBottom: "10px" }}
                            label="Логин"
                            placeholder="Введите имя"
                            fullWidth
                            required
                            name="login"
                            onChange={(event) => {
                                authObj.inputHandler.setField(event);
                            }}
                            helperText={authObj.errLogin}
                        />
                        <TextField
                            error={authObj.errPassword !== "" && true}
                            label="Пароль"
                            placeholder="Введите пароль"
                            type="password"
                            fullWidth
                            required
                            name="password"
                            onChange={(event) => {
                                authObj.inputHandler.setField(event);
                            }}
                            helperText={authObj.errPassword}
                        />
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            style={btnstyle}
                            fullWidth
                        >
                            Войти
                        </Button>
                    </form>
                    <FormHelperText style={{ color: "red" }}>
                        {authObj.authManager.errorAuth}
                    </FormHelperText>
                </Paper>
            </Grid>
        </div>
    );
}
