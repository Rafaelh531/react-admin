import { Box, Button, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import CustomizedDialogs from "./dialog";
import RegistrationForm from "./formAddAluno";
import { alunos } from "../../data/alunos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material";

const DadosAluno = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);
  const [openAnotherDialog, setOpenAnotherDialog] = useState(false);

  const handleOpenRegistration = () => {
    setOpenRegistration(true);
  };

  const handleCloseRegistration = () => {
    setOpenRegistration(false);
  };

  const handleOpenAnotherDialog = () => {
    setOpenAnotherDialog(true);
  };

  const handleCloseAnotherDialog = () => {
    setOpenAnotherDialog(false);
  };

  const columns = [
    //{ field: "id", headerName: "id", flex: 0.5 },
    {
      field: "nomeDoAluno",
      headerName: "Nome do Aluno",
      flex: 0.5,
      valueGetter: (data) => data.row.dadosDoAluno.nomeDoAluno,
    },
    {
      field: "turma",
      headerName: "Turma",
      flex: 0.5,
      valueGetter: (data) => data.row.dadosDoAluno.turma,
    },
    {
      field: "periodo",
      headerName: "Período",
      flex: 0.5,
      valueGetter: (data) => data.row.dadosDoAluno.periodo,
    },
    {
      field: "mae",
      headerName: "Nome da Mãe",
      flex: 0.5,
      valueGetter: (data) => data.row.mae.nomeDaMae,
    },
    {
      field: "pai",
      headerName: "Nome do Pai",
      flex: 0.5,
      valueGetter: (data) => data.row.pai.nomeDoPai,
    },
    {
      field: "actions",
      headerName: "",
      width: 120,
      headerAlign: "right", // Alinha o cabeçalho à direita
      align: "right", // Alinha o conteúdo da célula à direita
      renderCell: (params) => {
        const handleOpen = () => {
          setOpen(true);
        };

        const handleClose = () => {
          setOpen(false);
        };
        return (
          <Box>
            <Button
              onClick={handleOpenAnotherDialog}
              variant="outlined"
              color="primary"
              style={{
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                minWidth: "36px",
                padding: 0,
              }}
            >
              <VisibilityIcon />
            </Button>
            <CustomizedDialogs
              open={openAnotherDialog}
              onClose={handleCloseAnotherDialog}
              title="103"
            >
              <RegistrationForm />
            </CustomizedDialogs>

            {/* <Button variant="outlined" color="primary"       style={{
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            minWidth: '36px',
            padding: 0,
          }}
          onClick={handleOpen}>
            
          </Button>
          

          

          <Button variant="outlined" color="primary"       style={{
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            minWidth: '36px',
            padding: 0,
          }}>
          <ModeEditIcon />
        </Button> */}
          </Box>
        );
      },
    },

    // { field: "registrarId", headerName: "Registar ID" },
    // {
    //   field: "name",
    //   headerName: "Name",
    //   flex: 1,
    //   cellClassName: "name-column--cell",
    // },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },
    // { field: "phone", headerName: "Phone Number", flex: 1 },
    // { field: "email", headerName: "Email", flex: 1 },
    // { field: "address", headerName: "Address", flex: 1 },
    // { field: "city", headerName: "City", flex: 1 },
    // { field: "zipCode", headerName: "ZipCode", flex: 1 },
    // { field: "zipCode2", headerName: "ZipCode2", flex: 1 },
  ];
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box m="20px">
      <Header title="INFORMAÇÕES ALUNOS" subtitle="Ficha de alunos ativos" />

      <Box display="flex" justifyContent="right">
        <Button
          onClick={handleOpenRegistration}
          variant="contained"
          style={{ backgroundColor: "pink", color: "white" }}
        >
          Adicionar Aluno
        </Button>

        <CustomizedDialogs
          open={openRegistration}
          onClose={handleCloseRegistration}
          title="ADICIONAR ALUNO"
        >
          <RegistrationForm />
        </CustomizedDialogs>
      </Box>
      <Box
        height="75hv"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.rosa[700],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.rosa[200],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.rosa[200],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={alunos}
          columns={columns}
          components={{ toolbar: GridToolbar }}
          getRowId={(row) => row.id}
        />
      </Box>
    </Box>
  );
};

export default DadosAluno;
