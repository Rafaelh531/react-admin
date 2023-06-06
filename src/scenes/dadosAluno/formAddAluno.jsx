import React from "react";
import {
  Grid,
  Paper,
  Button,
  Typography,
  useTheme,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from "@mui/material";
import { TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { tokens } from "../../theme";
import { FormControl } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import useMediaQuery from "@mui/material/useMediaQuery";

const RegistrationForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [startDate, setStartDate] = React.useState(new Date());

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const phoneRegExp = /^[2-9]{2}[0-9]{8}/;
  const passwordRegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Enter valid Phone number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Minimum characters should be 8")
      .matches(
        passwordRegExp,
        "Password must have one upper, lower case, number, special symbol"
      )
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matches")
      .required("Required"),
  });
  const onSubmit = (values, props) => {
    alert(JSON.stringify(values), null, 2);
    props.resetForm();
  };
  return (
    <Grid>
      <Paper elevation={0} padding="0px 0px 0px 0px" width="100px">
        <Grid align="center"></Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form noValidate>
              <Box
                display="grid"
                gap="10px"
                gridTemplateColumns="repeat(12, minmax(0, 1fr))"
                sx={{ gridColumn: "span 12" }}
              >
                {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> */}

                {/* DADOS DA CRIANÇA */}
                <Typography sx={{ gridColumn: "span 12" }}>
                  DADOS DA CRIANÇA
                </Typography>
                <Field
                  as={TextField}
                  name="name"
                  label="Nome Completo"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 12" }}
                />

                {/* <TextField label='Email' name='email' type='Email' fullWidth 
                    {...props.getFieldProps('email')}/> */}

                <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                  <InputLabel id="demo-simple-select-label">Turma</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>INF1</MenuItem>
                    <MenuItem value={20}>INF2</MenuItem>
                    <MenuItem value={30}>BER</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                  <InputLabel id="demo-simple-select-label">Período</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>VESPERTINO</MenuItem>
                    <MenuItem value={20}>MATUTINO</MenuItem>
                    <MenuItem value={30}>INTEGRAL</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                  <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>MASCULINO</MenuItem>
                    <MenuItem value={20}>FEMININO</MenuItem>
                  </Select>
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker"]}
                    sx={{ gridColumn: "span 5" }}
                  >
                    <DatePicker label="Data de Nascimento" />
                  </DemoContainer>
                </LocalizationProvider>

                {/* DADOS DA MAE */}
                <Typography sx={{ gridColumn: "span 12" }}>
                  DADOS DA MÃE
                </Typography>
                <Field
                  as={TextField}
                  name="name"
                  label="Nome Completo"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 12" }}
                />

                <Field
                  as={TextField}
                  name="name"
                  label="RG"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 4" }}
                />
                <Field
                  as={TextField}
                  name="name"
                  label="CPF"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 4" }}
                />
                <Field
                  as={TextField}
                  name="phoneNumber"
                  label="Celular"
                  fullWidth
                  error={props.errors.phoneNumber && props.touched.phoneNumber}
                  helperText={<ErrorMessage name="phoneNumber" />}
                  required
                  sx={{ gridColumn: "span 4" }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker"]}
                    sx={{ gridColumn: "span 8" }}
                  >
                    <DatePicker label="Data de Nascimento" />
                  </DemoContainer>
                </LocalizationProvider>

                {/* DADOS DO PAI */}
                <Typography sx={{ gridColumn: "span 12" }}>
                  DADOS DO PAI
                </Typography>
                <Field
                  as={TextField}
                  name="name"
                  label="Nome Completo"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 12" }}
                />

                <Field
                  as={TextField}
                  name="name"
                  label="RG"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 4" }}
                />
                <Field
                  as={TextField}
                  name="name"
                  label="CPF"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 4" }}
                />
                <Field
                  as={TextField}
                  name="phoneNumber"
                  label="Celular"
                  fullWidth
                  error={props.errors.phoneNumber && props.touched.phoneNumber}
                  helperText={<ErrorMessage name="phoneNumber" />}
                  required
                  sx={{ gridColumn: "span 4" }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker"]}
                    sx={{ gridColumn: "span 6" }}
                  >
                    <DatePicker label="Data de Nascimento" />
                  </DemoContainer>
                </LocalizationProvider>

                {/* ENDEREÇO */}
                <Typography sx={{ gridColumn: "span 12" }}>
                  ENDEREÇO/CONTATO
                </Typography>

                <Field
                  as={TextField}
                  name="name"
                  label="Rua"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 10" }}
                />
                <Field
                  as={TextField}
                  name="name"
                  label="Numero"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 2" }}
                />
                <Field
                  as={TextField}
                  name="name"
                  label="Complemento"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 6" }}
                />
                <Field
                  as={TextField}
                  name="name"
                  label="Bairro"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 6" }}
                />
                <Field
                  as={TextField}
                  name="phoneNumber"
                  label="Tel. Residencial"
                  fullWidth
                  error={props.errors.phoneNumber && props.touched.phoneNumber}
                  helperText={<ErrorMessage name="phoneNumber" />}
                  required
                  sx={{ gridColumn: "span 6" }}
                />
                <Field
                  as={TextField}
                  name="phoneNumber"
                  label="Tel. Comercial"
                  fullWidth
                  error={props.errors.phoneNumber && props.touched.phoneNumber}
                  helperText={<ErrorMessage name="phoneNumber" />}
                  required
                  sx={{ gridColumn: "span 6" }}
                />
                <Field
                  as={TextField}
                  name="phoneNumber"
                  label="Tel. Recado"
                  fullWidth
                  error={props.errors.phoneNumber && props.touched.phoneNumber}
                  helperText={<ErrorMessage name="phoneNumber" />}
                  required
                  sx={{ gridColumn: "span 6" }}
                />
                <Field
                  as={TextField}
                  name="name"
                  label="Falar com"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 6" }}
                />
                <Field
                  as={TextField}
                  name="name"
                  label="Email"
                  fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name="name" />}
                  required
                  sx={{ gridColumn: "span 12" }}
                />
              </Box>
              <Button
                type="submit"
                marginTop="10px"
                variant="contained"
                color="primary"
              >
                CADASTRAR
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
