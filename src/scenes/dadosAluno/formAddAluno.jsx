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

  const [periodo, setPeriodo] = React.useState("");
  const handlePeriodoChange = (event) => {
    setPeriodo(event.target.value);
  };
  const [sexo, setSexo] = React.useState("");
  const handleSexoChange = (event) => {
    setSexo(event.target.value);
  };

  const [startDate, setStartDate] = React.useState(new Date());

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const phoneRegExp = /^[2-9]{2}[0-9]{8}/;
  const passwordRegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const initialValues = {
    nomeCrianca: "",
    turma: "",
    periodo: "",
    sexo: "",
  };
  const validationSchema = Yup.object().shape({
    nome: Yup.string().min(3, "Texto muito curto"),
    email: Yup.string().email("Enter valid email"),
    rg: Yup.number().typeError("Somente numeros"),
    // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
    phoneNumber: Yup.string().matches(phoneRegExp, "Enter valid Phone number"),
  });
  // const onSubmit = (values, props) => {
  //   console.log(JSON.stringify(initialValues), null, 2);
  //   //alert(JSON.stringify(values), null, 2);
  //   props.resetForm();
  // };

  const onSubmit = (event) => {
    console.log("Valores do formulário:", formValues);
  };

  const [formValues, setFormValues] = React.useState(initialValues);

  const handleChangeField = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
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
                {/* DADOS DA CRIANÇA */}
                <Typography sx={{ gridColumn: "span 12" }}>
                  DADOS DA CRIANÇA
                </Typography>
                <TextField
                  value={formValues.nomeCrianca}
                  onChange={handleChangeField}
                  name="nomeCrianca"
                  label="Nome Completo"
                  error={props.errors.nome && props.touched.nome}
                  helperText={<ErrorMessage name="nome" />}
                  required
                  sx={{ gridColumn: "span 12" }}
                />

                <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                  <InputLabel id="selectTurmaLabel">Turma</InputLabel>
                  <Select
                    id="selectTurma"
                    name="turma" // Defina o nome como "turma" para que o handleChangeTurma funcione corretamente
                    label="Turma"
                    value={formValues.turma} // Use o valor do estado para o Select
                    onChange={handleChangeField} // Atualiza o valor no estado quando o usuário escolhe uma opção
                  >
                    <MenuItem value={"INF1"}>INF1</MenuItem>
                    <MenuItem value={"INF2"}>INF2</MenuItem>
                    <MenuItem value={"BER"}>BER</MenuItem>
                    <MenuItem value={"undefined"}></MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                  <InputLabel id="selectPeriodoLabel">Período</InputLabel>
                  <Select
                    id="periodo"
                    label="Periodo"
                    name="periodo"
                    value={formValues.periodo} // Use o valor do estado para o Select
                    onChange={handleChangeField} // Atualiza o valor no estado quando o usuário escolhe uma opção
                  >
                    <MenuItem value={"VESPERTINO"}>VESPERTINO</MenuItem>
                    <MenuItem value={"MATUTINO"}>MATUTINO</MenuItem>
                    <MenuItem value={"INTEGRAL"}>INTEGRAL</MenuItem>
                    <MenuItem value={"undefined"}></MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                  <InputLabel id="selectSexoLabel">Sexo</InputLabel>
                  <Select
                    id="sexo"
                    label="Sexo"
                    name="sexo"
                    value={formValues.sexo} // Use o valor do estado para o Select
                    onChange={handleChangeField} // Atualiza o valor no estado quando o usuário escolhe uma opção
                  >
                    <MenuItem value={"MASCULINO"}>MASCULINO</MenuItem>
                    <MenuItem value={"FEMININO"}>FEMININO</MenuItem>
                    <MenuItem value={"undefined"}></MenuItem>
                  </Select>
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    id="dataNascimentoCrianca"
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
                <TextField
                  name="nomeMae"
                  label="Nome Completo"
                  error={props.errors.nome && props.touched.nome}
                  helperText={<ErrorMessage name="rg" />}
                  required
                  sx={{ gridColumn: "span 12" }}
                />

                <TextField
                  name="rgMae"
                  label="RG"
                  error={props.errors.rg && props.touched.rg}
                  helperText={<ErrorMessage name="rg" />}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  name="cpfMae"
                  label="CPF"
                  error={props.errors.rg && props.touched.rg}
                  helperText={<ErrorMessage name="rg" />}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  name="celularMae"
                  label="Celular"
                  error={props.errors.phoneNumber && props.touched.phoneNumber}
                  helperText={<ErrorMessage name="phoneNumber" />}
                  sx={{ gridColumn: "span 4" }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker"]}
                    name="dataNascimentoMae"
                    sx={{ gridColumn: "span 8" }}
                  >
                    <DatePicker label="Data de Nascimento" />
                  </DemoContainer>
                </LocalizationProvider>

                {/* DADOS DO PAI */}
                <Typography sx={{ gridColumn: "span 12" }}>
                  DADOS DO PAI
                </Typography>
                <TextField
                  name="nomePai"
                  label="Nome Completo"
                  error={props.errors.nome && props.touched.nome}
                  helperText={<ErrorMessage name="name" />}
                  sx={{ gridColumn: "span 12" }}
                />

                <TextField
                  name="rgPai"
                  label="RG"
                  error={props.errors.rg && props.touched.rg}
                  helperText={<ErrorMessage name="rg" />}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  name="cpfPai"
                  label="CPF"
                  error={props.errors.rg && props.touched.rg}
                  helperText={<ErrorMessage name="rg" />}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  name="celularPai"
                  label="Celular"
                  error={props.errors.phoneNumber && props.touched.phoneNumber}
                  helperText={<ErrorMessage name="phoneNumber" />}
                  sx={{ gridColumn: "span 4" }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    id="dataNascimentoPai"
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

                <TextField
                  name="rua"
                  label="Rua"
                  sx={{ gridColumn: "span 10" }}
                />
                <TextField
                  name="numeroCasa"
                  label="Numero"
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  name="complementoCasa"
                  label="Complemento"
                  sx={{ gridColumn: "span 6" }}
                />
                <TextField
                  name="bairro"
                  label="Bairro"
                  sx={{ gridColumn: "span 6" }}
                />
                <TextField
                  name="telResidencial"
                  label="Tel. Residencial"
                  sx={{ gridColumn: "span 6" }}
                />
                <TextField
                  name="telComercial"
                  label="Tel. Comercial"
                  sx={{ gridColumn: "span 6" }}
                />
                <TextField
                  name="telRecado"
                  label="Tel. Recado"
                  sx={{ gridColumn: "span 6" }}
                />
                <TextField
                  name="falarCom"
                  label="Falar com"
                  sx={{ gridColumn: "span 6" }}
                />
                <TextField
                  name="email"
                  label="Email"
                  sx={{ gridColumn: "span 12" }}
                />
              </Box>
              <Button type="submit" variant="contained" color="primary">
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
