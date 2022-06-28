import { Input, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./css/custom.css";
import React from "react";
import { emailMess, minMess, requiredMMess } from "./functions/ErrorMessage";

const App = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(requiredMMess),
        surname: Yup.string().required(requiredMMess),
        password: Yup.string().min(6, minMess(6)).required(requiredMMess),
        email: Yup.string().email(emailMess).required(requiredMMess),
        age: Yup.number().required(requiredMMess),
    });
    const { handleChange, values, errors, handleSubmit, resetForm, touched } =
        useFormik({
            initialValues: {
                name: "",
                surname: "",
                password: "",
                email: "",
                age: "",
            },
            validationSchema,
            onSubmit: (values) => {
                console.log("Tebrikler Validasyon İşlemi Başarılı", values);
                resetForm();
            },
        });
    return (
        <Grid
            container
            gap={25}
            sx={{ display: "flex", justifyContent: "center" }}
        >
            <div>
                <h3>Formik - Yup Kullanımı</h3>
                <Grid item md={12} mb={3}>
                    <Input
                        type="text"
                        label="Name"
                        placeholder="Name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {touched.name ? errors.name : ""}
                </Grid>
                <Grid item md={12} mb={3}>
                    <Input
                        type="text"
                        label="Name"
                        placeholder="Surname"
                        name="surname"
                        value={values.surname}
                        onChange={handleChange}
                    />
                    {touched.surname ? errors.surname : ""}
                </Grid>
                <Grid item md={12} mb={3}>
                    <Input
                        type="text"
                        label="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {touched.email ? errors.email : ""}
                </Grid>
                <Grid item md={12} mb={3}>
                    <Input
                        type="text"
                        label="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {touched.password ? errors.password : ""}
                </Grid>
                <Grid item md={12} mb={3}>
                    <Input
                        type="number"
                        label="age"
                        placeholder="Age"
                        name="age"
                        value={values.age}
                        onChange={handleChange}
                    />
                    {touched.age ? errors.age : ""}
                </Grid>
                <Grid item md={12} mt={4}>
                    <Button variant="contained" onClick={handleSubmit}>
                        Contained
                    </Button>
                </Grid>
            </div>
        </Grid>
    );
};

export default App;
