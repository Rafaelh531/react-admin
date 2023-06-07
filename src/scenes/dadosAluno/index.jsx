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

const DadosAluno = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [openRegistration, setOpenRegistration] = useState(false);
;

  const [dialogData, setDialogData] = useState(null);

  const handleOpenDialog = (rowData) => {
    setDialogData(rowData);
  };

  const handleCloseDialog = () => {
    setDialogData(null);
  };


  const handleOpenRegistration = () => {
    setOpenRegistration(true);
  };

  const handleCloseRegistration = () => {
    setOpenRegistration(false);
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
      field: 'actions',
      headerName: '',
      width: 120,
      headerAlign: 'right',
      align: 'right',
      renderCell: (params) => {
        const rowData = params.row;

        const handleOpen = () => {
          handleOpenDialog(rowData);
        };

        return (
          <Button
            onClick={handleOpen}
            variant="outlined"
            color="primary"
            style={{
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              minWidth: '36px',
              padding: 0,
            }}
          >
            <VisibilityIcon />
          </Button>
        );
      },
    },
  
  ];

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
          {dialogData && (
        <CustomizedDialogs
          open={true}
          onClose={handleCloseDialog}
          title={`Detalhes do ID ${dialogData.id}`}
        >
          
           {`Nome: ${dialogData.dadosDoAluno.nomeDoAluno}`}
        
        </CustomizedDialogs>
      )}
      </Box>
    </Box>
  );
};

export default DadosAluno;
